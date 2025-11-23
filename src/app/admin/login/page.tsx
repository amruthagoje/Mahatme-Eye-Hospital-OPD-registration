
'use client';

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
import { LogIn } from 'lucide-react';

export default function AdminLoginPage() {
  const { t } = useLanguage();

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
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('adminLoginPage.emailLabel')}</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('adminLoginPage.passwordLabel')}</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              {t('adminLoginPage.loginButton')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
