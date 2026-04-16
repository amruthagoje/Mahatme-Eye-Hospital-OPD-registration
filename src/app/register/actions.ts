"use server";

import { type RegistrationSchema } from "./schema";

/**
 * This is a server action that can be used for additional server-side processing
 * in the future, like sending a confirmation email. For now, it simply returns
 * a success message. The database operation is handled on the client.
 */
export async function submitRegistration(data: RegistrationSchema) {
    // Server-side logic (e.g., sending emails) could go here.
    // The Firestore write is now handled on the client to avoid calling client functions on the server.
    return {
      success: true,
      message: `Thank you, ${data.fullName}. Your registration has been submitted successfully.`,
    };
}
