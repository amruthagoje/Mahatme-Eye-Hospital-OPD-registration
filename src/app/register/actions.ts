"use server";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeFirebase } from "@/firebase";
import { type RegistrationSchema } from "./schema";

export async function submitRegistration(data: RegistrationSchema) {
  try {
    const { firestore } = initializeFirebase();
    const registrationsCollection = collection(firestore, "patients");

    await addDoc(registrationsCollection, {
      ...data,
      createdAt: serverTimestamp(),
    });

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
