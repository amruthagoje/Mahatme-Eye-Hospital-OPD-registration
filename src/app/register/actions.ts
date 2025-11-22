"use server";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeFirebase } from "@/firebase";
import { type RegistrationSchema } from "./schema";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { getFirestore } from "firebase/firestore";

export async function submitRegistration(data: RegistrationSchema) {
    const { firestore } = initializeFirebase();
    const registrationsCollection = collection(firestore, "patients");

    addDocumentNonBlocking(registrationsCollection, {
      ...data,
      createdAt: serverTimestamp(),
    });

    return {
      success: true,
      message: `Thank you, ${data.fullName}. Your registration has been submitted successfully.`,
    };
}
