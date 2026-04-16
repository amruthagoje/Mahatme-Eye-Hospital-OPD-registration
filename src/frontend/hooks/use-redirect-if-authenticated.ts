
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/backend/firebase';

/**
 * A custom hook that redirects the user to a specified path if they are already authenticated.
 * This is useful for preventing logged-in users from accessing pages like login or register.
 *
 * @param redirectPath The path to redirect to if the user is authenticated.
 */
export function useRedirectIfAuthenticated(redirectPath: string) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Only perform redirection if the user state has been determined and a user exists.
    if (!isUserLoading && user) {
      router.replace(redirectPath);
    }
  }, [user, isUserLoading, router, redirectPath]);
}
