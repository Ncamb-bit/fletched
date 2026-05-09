import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/Accordion';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqs = [
    {
      q: 'How accurate is the ballistics engine?',
      a: 'Fletched utilizes standard kinetic energy and momentum formulas refined for modern archery equipment. While environmental factors always play a role, our mathematical models provide 99.9% calculation accuracy based on your specific data inputs.'
    },
    {
      q: 'Can I import data from my bow shop?',
      a: 'Yes. You can manually input any specifications provided by your local bow shop, including chronographed speeds and measured component weights, to ensure your digital profile matches your physical setup.'
    },
    {
      q: 'What exactly is the "Flinch Rate"?',
      a: 'The Flinch Rate is our proprietary calculation that quantifies an animal\'s potential reaction to sound and movement. It calculates the likelihood of an impact shift based on your arrow\'s speed and the distance to the target.'
    },
    {
      q: 'Does the app work without cellular service?',
      a: 'Yes. Fletched is designed for the backcountry. All core ballistics calculations and your saved equipment profiles are processed locally on your device, requiring no internet connection for field use.'
    },
    {
      q: 'Is my data secure and private?',
      a: 'Absolutely. Your technical archery data is encrypted and stored according to our strict security protocols. We do not sell personal identifying information to third parties. You can read more in our Security Policy.'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Find answers to technical questions about the Fletched ballistics engine and field usage.
          </p>
        </AnimatedSection>

        {/* FAQ Accordion Section */}
        <AnimatedSection className="mb-24">
          <Accordion className="border-t border-slate-100 dark:border-slate-800">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 dark:border-slate-800">
                <AccordionTrigger 
                  isOpen={openItem === `item-${i}`}
                  onClick={() => setOpenItem(openItem === `item-${i}` ? null : `item-${i}`)}
                  className="py-6 text-left hover:text-primary transition-colors font-bold text-slate-900 dark:text-white md:text-lg"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent isOpen={openItem === `item-${i}`} className="pb-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Contact CTA Section */}
        <AnimatedSection className="text-center p-10 md:p-16 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Still have questions?</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 max-w-sm mx-auto">
            Our expert support team is ready to help with your specialized equipment configurations.
          </p>
          <Link 
            to="/support" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10"
          >
            <span>Contact Support</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default FAQ;
