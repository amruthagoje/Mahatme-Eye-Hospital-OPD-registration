"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submitRegistration,
} from "@/app/register/actions";
import { type RegistrationSchema, registrationSchema } from "@/app/register/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/language-context";

export function PatientRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const { t } = useLanguage();

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      age: "" as any,
      gender: "" as any,
      contactNumber: "",
      address: "",
      email: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
    },
  });

  async function onSubmit(data: RegistrationSchema) {
    setIsSubmitting(true);
    const result = await submitRegistration(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: t('registrationForm.toastSuccessTitle'),
        description: t('registrationForm.toastSuccessMessage', { name: data.fullName }),
      });
      form.reset();
      router.push('/'); // Redirect to home page on success
    } else {
      toast({
        variant: "destructive",
        title: t('registrationForm.toastErrorTitle'),
        description: result.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <fieldset className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <legend className="sr-only">{t('registrationForm.patientDetails')}</legend>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('registrationForm.fullName')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('registrationForm.fullNamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t('registrationForm.age')}</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="30" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t('registrationForm.gender')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={t('registrationForm.genderPlaceholder')} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Male">{t('registrationForm.genders.male')}</SelectItem>
                        <SelectItem value="Female">{t('registrationForm.genders.female')}</SelectItem>
                        <SelectItem value="Other">{t('registrationForm.genders.other')}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
        </fieldset>

        <fieldset className="space-y-6">
            <legend className="sr-only">{t('registrationForm.contactInfo')}</legend>
            <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>{t('registrationForm.contactNumber')}</FormLabel>
                    <FormControl>
                    <Input placeholder="+91 12345 67890" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('registrationForm.emailOptional')}</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>{t('registrationForm.fullAddress')}</FormLabel>
                    <FormControl>
                    <Textarea placeholder={t('registrationForm.addressPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </fieldset>

        <fieldset className="space-y-6 rounded-lg border p-4">
            <legend className="text-sm font-medium px-1 -translate-y-4 bg-background w-fit">{t('registrationForm.emergencyContact')}</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="emergencyContactName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t('registrationForm.emergencyContactName')}</FormLabel>
                        <FormControl>
                        <Input placeholder={t('registrationForm.emergencyContactNamePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="emergencyContactNumber"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t('registrationForm.emergencyContactNumber')}</FormLabel>
                        <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
        </fieldset>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('registrationForm.submitButton')}
        </Button>
      </form>
    </Form>
  );
}
