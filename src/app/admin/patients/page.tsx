
'use client';

import { collection } from 'firebase/firestore';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
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
import { FileWarning, Users } from 'lucide-react';
import { type RegistrationSchema } from '@/app/register/schema';
import { useLanguage } from '@/context/language-context';

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
  return new Date(timestamp.seconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PatientListPage() {
  const firestore = useFirestore();
  const { t } = useLanguage();

  const patientsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'patients');
  }, [firestore]);

  const { data: patients, isLoading, error } = useCollection<Patient>(patientsQuery);

  return (
    <div className="container py-12 md:py-24">
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <CardTitle>{t('patientDataPage.title')}</CardTitle>
                    <CardDescription>{t('patientDataPage.description')}</CardDescription>
                </div>
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
                            <TableHead>{t('patientDataPage.table.fullName')}</TableHead>
                            <TableHead>{t('patientDataPage.table.age')}</TableHead>
                            <TableHead>{t('patientDataPage.table.gender')}</TableHead>
                            <TableHead>{t('patientDataPage.table.contactNumber')}</TableHead>
                            <TableHead>{t('patientDataPage.table.registrationDate')}</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {patients.map((patient) => (
                            <TableRow key={patient.id}>
                            <TableCell className="font-medium">{patient.fullName}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.contactNumber}</TableCell>
                            <TableCell>{formatTimestamp(patient.createdAt)}</TableCell>
                            </TableRow>
                        ))}
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
        <div className="grid grid-cols-5 gap-4 px-4">
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
