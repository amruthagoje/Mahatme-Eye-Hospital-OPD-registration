"use server";

import { collection } from "firebase/firestore";
import { addDocumentNonBlocking, getSdks } from "@/firebase";
import { initializeFirebase } from "@/firebase";

import { type RegistrationSchema } from "./schema";

export async function submitRegistration(data: RegistrationSchema) {
  try {
    const { firestore } = initializeFirebase();
    // Assuming a top-level 'registrations' collection
    // For a real app, you'd likely nest this under a hospital or patient for better organization.
    const registrationsCollection = collection(firestore, "patients");

    // Using the non-blocking function to add the document.
    // The server action can return immediately while the write happens in the background.
    addDocumentNonBlocking(registrationsCollection, {
      ...data,
      createdAt: new Date(), // Add a timestamp
    });

    return {
      success: true,
      message: `Thank you, ${data.fullName}. Your registration has been submitted successfully.`,
    };
  } catch (error) {
    console.error("Registration failed:", error);
    // In a real app, you might want to inspect the error to provide a more specific message.
    // The non-blocking function will handle permission errors via the global emitter.
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
