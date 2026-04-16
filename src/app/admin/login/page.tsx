
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/frontend/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/frontend/components/ui/card';
import { Input } from '@/frontend/components/ui/input';
import { Label } from '@/frontend/components/ui/label';
import { useLanguage } from '@/frontend/context/language-context';
import { LogIn, UserPlus, Loader2 } from 'lucide-react';
import { useAuth } from '@/backend/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/frontend/hooks/use-toast';
import { useRedirectIfAuthenticated } from '@/frontend/hooks/use-redirect-if-authenticated';

type AuthMode = 'login' | 'signup';

export default function AdminLoginPage() {
  useRedirectIfAuthenticated('/admin/patients');
  const { t } = useLanguage();
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<AuthMode>('login');

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
        toast({
          title: t('adminLoginPage.loginSuccessTitle'),
          description: t('adminLoginPage.redirectingMessage'),
        });
        router.push('/admin/patients');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: t('adminLoginPage.signupSuccessTitle'),
          description: t('adminLoginPage.loginPrompt'),
        });
        setMode('login');
        setPassword(''); // Clear password for security
      }
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: "destructive",
        title: mode === 'login' ? t('adminLoginPage.loginFailedTitle') : t('adminLoginPage.signupFailedTitle'),
        description: err.message || t('adminLoginPage.checkCredentialsMessage'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError(null);
  };

  const isLoginMode = mode === 'login';

  return (
    <div className="container flex items-center justify-center py-12 md:py-24">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-lg w-fit">
            {isLoginMode ? <LogIn className="h-8 w-8 text-primary" /> : <UserPlus className="h-8 w-8 text-primary" />}
          </div>
          <CardTitle>{isLoginMode ? t('adminLoginPage.title') : t('adminLoginPage.signupTitle')}</CardTitle>
          <CardDescription>
            {isLoginMode ? t('adminLoginPage.description') : t('adminLoginPage.signupDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuthAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('adminLoginPage.emailLabel')}</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('adminLoginPage.passwordLabel')}</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoginMode ? t('adminLoginPage.loginButton') : t('adminLoginPage.signupButton')}
            </Button>
            {error && <p className="text-sm font-medium text-destructive text-center">{error}</p>}
          </form>
          <div className="mt-4 text-center text-sm">
            <Button variant="link" onClick={toggleMode}>
              {isLoginMode ? t('adminLoginPage.toggleToSignup') : t('adminLoginPage.toggleToLogin')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
