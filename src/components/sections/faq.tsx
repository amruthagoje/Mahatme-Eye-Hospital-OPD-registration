'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Lightbulb } from 'lucide-react';
import { answerQuestion } from '@/ai/flows/intelligent-faq';

// This is the context that will be fed to the AI.
const websiteContent = `
Clarity Vision Hospital Information:
- Key Services: LASIK & Refractive Surgery, Retina & Vitreous Surgery, Pediatric Ophthalmology, Cosmetic Ophthalmology, Community Ophthalmology.
- LASIK is for vision correction to reduce dependence on glasses.
- Retina surgery treats conditions like diabetic retinopathy and macular degeneration.
- Pediatric care is for children's eye problems.
- Cosmetic procedures enhance eye appearance.
- Community ophthalmology involves free eye camps and affordable care.
- Founder: Dr. Vikas Mahatme, a renowned ophthalmologist.
- Location: Nagpur, India.
- Mission: To provide world-class, accessible, and affordable eye care.
- Appointment Booking: Patients can book appointments online through the registration form on the website.
`;

const predefinedQuestions = [
    { id: 'q1', question: 'What services do you offer?' },
    { id: 'q2', question: 'How can I book an appointment?' },
    { id: 'q3', question: 'Who is the founder of the hospital?' },
];

type FaqItem = {
    question: string;
    answer: string;
};

export function Faq() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [faqList, setFaqList] = useState<FaqItem[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      setError('Sorry, I could not find an answer. Please try rephrasing your question.');
      console.error(e);
    } finally {
      setLoading(false);
      setQuestion(''); // Clear input after submission
    }
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Intelligent FAQ</h2>
        <p className="mt-2 mb-8 max-w-2xl mx-auto text-muted-foreground">
          Have a question? Ask our AI assistant or browse common queries.
        </p>
      </div>

      <Card className="mb-8 p-4">
        <CardContent className="p-2">
            <form onSubmit={(e) => { e.preventDefault(); handleQuestionSubmit(question); }} className="flex flex-col sm:flex-row gap-2">
                <Input
                    type="text"
                    placeholder="Ask about our services, appointments, etc."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={loading}
                    aria-label="Ask a question"
                />
                <Button type="submit" disabled={loading || !question}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Ask AI
                </Button>
            </form>
            <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">Or try one of these:</p>
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
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {loading && faqList.length === 0 && (
          <div className="text-center p-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary"/>
              <p className="mt-4 text-muted-foreground">Finding an answer...</p>
          </div>
      )}

      {!loading && faqList.length === 0 && (
        <Card className="bg-secondary border-dashed">
            <CardContent className="p-8 text-center">
                <Lightbulb className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your answered questions will appear here.</p>
            </CardContent>
        </Card>
      )}
    </section>
  );
}
