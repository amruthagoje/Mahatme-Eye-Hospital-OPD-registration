"use server";

import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  age: z.coerce.number().int().positive({ message: "Please enter a valid age." }).min(1, { message: "Age must be at least 1."}),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Please select a gender." }),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  emergencyContactName: z.string().min(2, { message: "Contact name must be at least 2 characters." }),
  emergencyContactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number." }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export async function submitRegistration(data: RegistrationSchema) {
  try {
    // Here you would typically save the data to a database (e.g., PostgreSQL)
    // and integrate with a backend API (Flask/Django).
    // For this prototype, we'll just log it to the console.
    console.log("New Patient Registration Submitted:", data);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate a potential error
    // if (Math.random() > 0.8) {
    //   throw new Error("Failed to connect to the registration service.");
    // }

    return {
      success: true,
      message: `Thank you, ${data.fullName}. Your registration has been submitted successfully.`,
    };
  } catch (error) {
    console.error("Registration failed:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
