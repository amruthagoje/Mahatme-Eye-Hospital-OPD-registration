
'use client';

import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection, useFirestore, useMemoFirebase, useUser, useAuth } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileWarning, Users, LogOut, UserCircle, UserPlus } from 'lucide-react';
import { type RegistrationSchema } from '@/app/register/schema';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Patient = RegistrationSchema & {
    id: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
};


function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
  if (!timestamp || typeof timestamp.seconds !== 'number') {
    return 'N/A';
  }
  return new Date(timestamp.seconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatTime(timestamp: { seconds: number, nanoseconds: number }) {
    if (!timestamp || typeof timestamp.seconds !== 'number') {
      return 'N/A';
    }
    return new Date(timestamp.seconds * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

export default function PatientListPage() {
  const firestore = useFirestore();
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useLanguage();

  const patientsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    const patientsCollection = collection(firestore, 'patients');
    return query(patientsCollection, orderBy('createdAt', 'desc'));
  }, [firestore]);

  const { data: patients, isLoading, error } = useCollection<Patient>(patientsQuery);

  const { patientRegistrationMap, patientVisitCountMap, patientStatusMap } = useMemo(() => {
    if (!patients) return { patientRegistrationMap: new Map(), patientVisitCountMap: new Map(), patientStatusMap: new Map() };
    
    const registrationMap = new Map<string, string>();
    const visitCountMap = new Map<string, number>();
    const statusMap = new Map<string, 'New' | 'Old'>();
    const seenNames = new Set<string>();

    // Iterate backwards from oldest to newest to assign registration numbers
    // and determine the first visit for the "New" status.
    [...patients].reverse().forEach(patient => {
        if (!seenNames.has(patient.fullName)) {
            seenNames.add(patient.fullName);
            // Assign a registration number the first time we see a patient
            registrationMap.set(patient.fullName, `MEH${seenNames.size}`);
            // This specific visit is the 'New' one
            statusMap.set(patient.id, 'New');
        } else {
             // Subsequent visits are 'Old'
            statusMap.set(patient.id, 'Old');
        }
    });

    // Iterate forward (newest to oldest) to count total visits for each patient name
    patients.forEach(patient => {
        visitCountMap.set(patient.fullName, (visitCountMap.get(patient.fullName) || 0) + 1);
    });

    return { patientRegistrationMap: registrationMap, patientVisitCountMap: visitCountMap, patientStatusMap: statusMap };
  }, [patients]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: t('patientDataPage.logout.successTitle'),
        description: t('patientDataPage.logout.successMessage'),
      });
      router.push('/admin/login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('patientDataPage.logout.errorTitle'),
        description: t('patientDataPage.logout.errorMessage'),
      });
    }
  };

  const handleRowClick = (patient: Patient) => {
    const registrationNumber = patientRegistrationMap.get(patient.fullName);
    const visitCount = patientVisitCountMap.get(patient.fullName);
    if (!registrationNumber) return;
    router.push(`/admin/patients/${patient.id}?regNo=${registrationNumber}&visits=${visitCount || 1}`);
  };

  return (
    <div className="container py-12 md:py-24">
      <Card>
        <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <CardTitle>{t('patientDataPage.title')}</CardTitle>
                        <CardDescription>{t('patientDataPage.description')}</CardDescription>
                    </div>
                </div>
                {user && (
                    <div className="flex flex-col items-start sm:items-end gap-2">
                         <div className="flex items-center gap-2 text-sm text-muted-foreground border p-2 rounded-md">
                            <UserCircle className="h-4 w-4" />
                            <span>{t('patientDataPage.loggedInAs', { email: user.email || 'Admin' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/register">
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    {t('patientDataPage.registerPatientButton')}
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                {t('patientDataPage.logout.button')}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </CardHeader>
        <CardContent>
          {isLoading && <PatientTableSkeleton />}
          {error && (
            <Alert variant="destructive">
              <FileWarning className="h-4 w-4" />
              <AlertTitle>{t('patientDataPage.error.title')}</AlertTitle>
              <AlertDescription>
                {t('patientDataPage.error.description')}
              </AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && (
            patients && patients.length > 0 ? (
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>{t('patientDataPage.table.tokenNumber')}</TableHead>
                            <TableHead>{t('patientDataPage.table.registrationNumber')}</TableHead>
                            <TableHead>{t('patientDataPage.table.fullName')}</TableHead>
                            <TableHead>{t('patientDataPage.table.visitType')}</TableHead>
                            <TableHead>{t('patientDataPage.table.age')}</TableHead>
                            <TableHead>{t('patientDataPage.table.gender')}</TableHead>
                            <TableHead>{t('patientDataPage.table.contactNumber')}</TableHead>
                            <TableHead>{t('patientDataPage.table.registrationDate')}</TableHead>
                            <TableHead>{t('patientDataPage.table.registrationTime')}</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {patients.map((patient, index) => {
                            const visitType = patientStatusMap.get(patient.id) || 'Old';
                            return (
                                <TableRow 
                                    key={patient.id} 
                                    onClick={() => handleRowClick(patient)}
                                    className="cursor-pointer"
                                >
                                <TableCell className="font-medium">{patients.length - index}</TableCell>
                                <TableCell className="font-medium">{patientRegistrationMap.get(patient.fullName)}</TableCell>
                                <TableCell className="font-medium">{patient.fullName}</TableCell>
                                <TableCell>
                                    <Badge variant={visitType === 'New' ? 'default' : 'secondary'} className={cn(visitType === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800')}>
                                      {visitType === 'New' ? t('patientDataPage.table.visitTypeNew') : t('patientDataPage.table.visitTypeOld')}
                                    </Badge>
                                </TableCell>
                                <TableCell>{patient.age}</TableCell>
                                <TableCell>{patient.gender}</TableCell>
                                <TableCell>{patient.contactNumber}</TableCell>
                                <TableCell>{formatDate(patient.createdAt)}</TableCell>
                                <TableCell>{formatTime(patient.createdAt)}</TableCell>
                                </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <div className="text-center py-16">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">{t('patientDataPage.noPatients.title')}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {t('patientDataPage.noPatients.description')}
                    </p>
                </div>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}


function PatientTableSkeleton() {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-9 gap-4 px-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
        </div>
        <div className="space-y-2 px-4">
            {Array.from({ length: 5 }).map((_, i) => (
                 <Skeleton key={i} className="h-10 w-full" />
            ))}
        </div>
      </div>
    );
  }

    

    
