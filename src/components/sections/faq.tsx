'use client';

import { useState, useMemo, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Lightbulb } from 'lucide-react';
import { answerQuestion } from '@/ai/flows/intelligent-faq';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

type FaqItem = {
    question: string;
    answer: string;
};

export function Faq() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [faqList, setFaqList] = useState<FaqItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const websiteContent = useMemo(() => `
Mahatme Eye Hospital Information:
- Key Services: ${t('services.list.lasik.title')}, ${t('services.list.retina.title')}, ${t('services.list.pediatric.title')}, ${t('services.list.cosmetic.title')}, ${t('services.list.community.title')}.
- LASIK is for ${t('services.list.lasik.description')}
- Retina surgery treats conditions like diabetic retinopathy and macular degeneration.
- Pediatric care is for ${t('services.list.pediatric.description')}
- Cosmetic procedures enhance eye appearance.
- Community ophthalmology involves ${t('services.list.community.description')}
- Founder: ${t('about.doctorName')}, a renowned ophthalmologist.
- Location: Nagpur, India.
- Mission: ${t('about.p1')}
- Appointment Booking: To answer how to book an appointment, respond with: "You can book an appointment online by clicking the [BOOK_APPOINTMENT_LINK] on the hospital's website."
`, [t]);

  const predefinedQuestions = useMemo(() => [
      { id: 'q1', question: t('faq.predefinedQuestions.q1') },
      { id: 'q2', question: t('faq.predefinedQuestions.q2') },
      { id: 'q3', question: t('faq.predefinedQuestions.q3') },
  ], [t]);

    useEffect(() => {
        setFaqList([]);
    }, [language]);

  const handleQuestionSubmit = async (q: string) => {
    if (!q || loading) return;

    setLoading(true);
    setError(null);
    setQuestion(q); // Set the question to be processed

    try {
      const result = await answerQuestion({
        question: q,
        websiteContent: websiteContent,
      });
      if (result.answer) {
        setFaqList((prev) => [{ question: q, answer: result.answer }, ...prev]);
      } else {
        throw new Error('No answer was returned.');
      }
    } catch (e) {
      setError(t('faq.error'));
      console.error(e);
    } finally {
      setLoading(false);
      setQuestion(''); // Clear input after submission
    }
  };

  const renderAnswer = (answer: string) => {
    const parts = answer.split(/(\[BOOK_APPOINTMENT_LINK\])/);
    return parts.map((part, index) => {
      if (part === '[BOOK_APPOINTMENT_LINK]') {
        return (
          <Button key={index} variant="link" asChild className="p-0 h-auto font-semibold text-base">
            <Link href="/register">Book Appointment</Link>
          </Button>
        );
      }
      return part;
    });
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">{t('faq.title')}</h2>
        <p className="mt-2 mb-8 max-w-2xl mx-auto text-muted-foreground">
          {t('faq.subtitle')}
        </p>
      </div>

      <Card className="mb-8 p-4">
        <CardContent className="p-2">
            <form onSubmit={(e) => { e.preventDefault(); handleQuestionSubmit(question); }} className="flex flex-col sm:flex-row gap-2">
                <Input
                    type="text"
                    placeholder={t('faq.inputPlaceholder')}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={loading}
                    aria-label={t('faq.inputAriaLabel')}
                />
                <Button type="submit" disabled={loading || !question}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {t('faq.askButton')}
                </Button>
            </form>
            <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">{t('faq.predefinedHint')}</p>
                <div className="flex gap-2 justify-center mt-2 flex-wrap">
                    {predefinedQuestions.map(q => (
                        <Button key={q.id} variant="outline" size="sm" onClick={() => handleQuestionSubmit(q.question)} disabled={loading}>
                            {q.question}
                        </Button>
                    ))}
                </div>
            </div>
        </CardContent>
      </Card>
      
      {error && <p className="text-center text-destructive mb-4">{error}</p>}

      {faqList.length > 0 && (
        <Accordion type="single" collapsible className="w-full">
          {faqList.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>{renderAnswer(faq.answer)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {loading && faqList.length === 0 && (
          <div className="text-center p-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary"/>
              <p className="mt-4 text-muted-foreground">{t('faq.loading')}</p>
          </div>
      )}

      {!loading && faqList.length === 0 && (
        <Card className="bg-secondary border-dashed">
            <CardContent className="p-8 text-center">
                <Lightbulb className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">{t('faq.noQuestions')}</p>
            </CardContent>
        </Card>
      )}
    </section>
  );
}
