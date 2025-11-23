'use client';

import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc } from 'firebase/firestore';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { User, FileWarning, ArrowLeft, Loader2, Phone, Mail, Home, ShieldAlert, ClipboardList } from 'lucide-react';
import { type RegistrationSchema } from '@/app/register/schema';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Patient = RegistrationSchema & {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};

function formatTimestamp(timestamp: { seconds: number, nanoseconds: number }) {
  if (!timestamp || typeof timestamp.seconds !== 'number') {
    return 'N/A';
  }
  const date = new Date(timestamp.seconds * 1000);
  return `${date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })} at ${date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}`;
}

export default function PatientDetailPage() {
  const firestore = useFirestore();
  const router = useRouter();
  const params = useParams();
  const { t } = useLanguage();
  const patientId = params.patientId as string;

  const patientDocRef = useMemoFirebase(() => {
    if (!firestore || !patientId) return null;
    return doc(firestore, 'patients', patientId);
  }, [firestore, patientId]);

  const { data: patient, isLoading, error } = useDoc<Patient>(patientDocRef);

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="mr-2" />
            {t('patientDetailPage.backButton')}
        </Button>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{t('patientDetailPage.title')}</CardTitle>
                <CardDescription>{t('patientDetailPage.description')}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading && <PatientDetailSkeleton />}
            {error && (
              <Alert variant="destructive">
                <FileWarning className="h-4 w-4" />
                <AlertTitle>{t('patientDetailPage.error.title')}</AlertTitle>
                <AlertDescription>{t('patientDetailPage.error.description')}</AlertDescription>
              </Alert>
            )}
            {!isLoading && !error && patient ? (
              <div className="space-y-6">
                {/* Patient Info */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{t('patientDetailPage.patientInfo.title')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border p-4 rounded-md">
                        <InfoItem label={t('patientDetailPage.patientInfo.fullName')} value={patient.fullName} />
                        <InfoItem label={t('patientDetailPage.patientInfo.age')} value={patient.age.toString()} />
                        <InfoItem label={t('patientDetailPage.patientInfo.gender')} value={patient.gender} />
                        <InfoItem label={t('patientDetailPage.patientInfo.reasonForVisit')} value={patient.reason} icon={ClipboardList} />
                        <InfoItem label={t('patientDetailPage.patientInfo.registrationDate')} value={formatTimestamp(patient.createdAt)} className="col-span-1 sm:col-span-2"/>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{t('patientDetailPage.contactInfo.title')}</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border p-4 rounded-md">
                        <InfoItem label={t('patientDetailPage.contactInfo.contactNumber')} value={patient.contactNumber} icon={Phone} />
                        <InfoItem label={t('patientDetailPage.contactInfo.email')} value={patient.email || 'N/A'} icon={Mail} />
                        <InfoItem label={t('patientDetailPage.contactInfo.address')} value={patient.address} icon={Home} className="col-span-1 sm:col-span-2" />
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{t('patientDetailPage.emergencyContact.title')}</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border p-4 rounded-md bg-destructive/5 border-destructive/20">
                        <InfoItem label={t('patientDetailPage.emergencyContact.name')} value={patient.emergencyContactName} icon={ShieldAlert} />
                        <InfoItem label={t('patientDetailPage.emergencyContact.number')} value={patient.emergencyContactNumber} icon={Phone} />
                    </div>
                </div>
              </div>
            ) : (
                !isLoading && (
                    <div className="text-center py-16">
                        <User className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold">{t('patientDetailPage.notFound.title')}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{t('patientDetailPage.notFound.description')}</p>
                    </div>
                )
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ label, value, icon: Icon, className }: { label: string, value: string, icon?: React.ElementType, className?: string }) {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">{label}</p>
            <div className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                <p className="text-foreground">{value}</p>
            </div>
        </div>
    )
}

function PatientDetailSkeleton() {
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
       <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full col-span-1 sm:col-span-2" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}
