
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/language-context';
import { LogIn, Loader2 } from 'lucide-react';
import { useAuth, useUser } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRedirectIfAuthenticated } from '@/hooks/use-redirect-if-authenticated';

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


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "Redirecting to patient data...",
      });
      router.push('/admin/patients');
    } catch (err: any) {
      setError(err.message);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your email and password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center py-12 md:py-24">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <LogIn className="h-8 w-8 text-primary" />
            </div>
          <CardTitle>{t('adminLoginPage.title')}</CardTitle>
          <CardDescription>
            {t('adminLoginPage.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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
              {t('adminLoginPage.loginButton')}
            </Button>
            {error && <p className="text-sm font-medium text-destructive text-center">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
