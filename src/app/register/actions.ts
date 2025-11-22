"use server";

import { registrationSchema, type RegistrationSchema } from "./schema";

export async function submitRegistration(data: RegistrationSchema) {
  try {
    // Here you would typically save the data to a database
    // For this prototype, we'll just log it to the console.
    console.log("New Patient Registration Submitted:", data);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

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
