import { PatientRegistrationForm } from "@/components/forms/patient-registration-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

export default function RegistrationPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <UserPlus className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">Patient Registration Form</CardTitle>
            <CardDescription>Please fill out the form below to register for OPD services.</CardDescription>
          </CardHeader>
          <CardContent>
            <PatientRegistrationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
