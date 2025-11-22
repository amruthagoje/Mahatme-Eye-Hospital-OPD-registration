
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
                    <CardTitle>Patient Registrations</CardTitle>
                    <CardDescription>A list of all submitted patient registrations.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
          {isLoading && <PatientTableSkeleton />}
          {error && (
            <Alert variant="destructive">
              <FileWarning className="h-4 w-4" />
              <AlertTitle>Error Loading Patients</AlertTitle>
              <AlertDescription>
                There was a problem fetching the patient data. It might be a network issue or a permission error.
              </AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && (
            patients && patients.length > 0 ? (
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Contact Number</TableHead>
                            <TableHead>Registration Date</TableHead>
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
                    <h3 className="mt-4 text-lg font-semibold">No Patients Found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        No patient registrations have been submitted yet.
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
