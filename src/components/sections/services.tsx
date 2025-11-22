"use client";

import { Eye, Rocket, Baby, Sparkles, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const servicesIcons = {
  lasik: Rocket,
  retina: Eye,
  pediatric: Baby,
  cosmetic: Sparkles,
  community: Users,
};

export function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: servicesIcons.lasik,
      title: t('services.list.lasik.title'),
      description: t('services.list.lasik.description'),
    },
    {
      icon: servicesIcons.retina,
      title: t('services.list.retina.title'),
      description: t('services.list.retina.description'),
    },
    {
      icon: servicesIcons.pediatric,
      title: t('services.list.pediatric.title'),
      description: t('services.list.pediatric.description'),
    },
    {
      icon: servicesIcons.cosmetic,
      title: t('services.list.cosmetic.title'),
      description: t('services.list.cosmetic.description'),
    },
    {
      icon: servicesIcons.community,
      title: t('services.list.community.title'),
      description: t('services.list.community.description'),
    },
  ];

  return (
    <section id="services" className="w-full text-center">
      <h2 className="text-3xl font-bold font-headline">{t('services.title')}</h2>
      <p className="mt-2 mb-12 max-w-2xl mx-auto text-muted-foreground">
        {t('services.subtitle')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <Card key={index} className="text-left hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mb-4 bg-primary/10 p-3 rounded-lg w-fit">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="text-left hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1 bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle>{t('services.andMore.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('services.andMore.description')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
