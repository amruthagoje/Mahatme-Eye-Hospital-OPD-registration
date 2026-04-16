import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  age: z.coerce.number().int().positive({ message: "Please enter a valid age." }).min(1, { message: "Age must be at least 1."}),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Please select a gender." }),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  reason: z.enum(["General enquiry", "Medicine Help", "Consultation"], { required_error: "Please select a reason for your visit."}),
  emergencyContactName: z.string().min(2, { message: "Contact name must be at least 2 characters." }),
  emergencyContactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
