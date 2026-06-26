import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Card, CardContent } from '../components/ui/Card';
import { TypographyH1, TypographyH2, TypographyLead, TypographyP, TypographyBlockquote } from '../components/ui/Typography';
import { StoreButtons } from '../components/ui/StoreButton';

const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-32 pb-20 overflow-hidden relative min-h-screen transition-colors blueprint-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compact Header */}
        <AnimatedSection className="mb-16 text-center">
           <TypographyH1 className="mb-6 text-slate-800 dark:text-white lg:text-6xl">
             Friends Don’t Let Friends <br />
             <span className="text-primary italic text-4xl lg:text-5xl">Shoot Bad Arrows.</span>
           </TypographyH1>
           <TypographyLead className="max-w-2xl mx-auto text-lg md:text-xl">
             The foundation of every hunt is an ethical shot. We provide the technical data needed for a clean, lethal harvest.
           </TypographyLead>
        </AnimatedSection>

        {/* Content Grid - Minimal Scrolling */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
           <AnimatedSection delay={0.1}>
              <Card className="h-full border-2 border-primary/5 hover:border-primary/20 transition-all duration-500">
                 <CardContent className="p-8">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                       <span className="material-symbols-outlined font-bold">analytics</span>
                    </div>
                    <TypographyH2 className="text-2xl mb-4 uppercase">The Mission</TypographyH2>
                    <TypographyP className="text-sm leading-relaxed mt-0">
                       At Fletched, we believe respect for the animal starts long before you head into the woods. Our proprietary algorithms calculate Kinetic Energy, Momentum, and factor in animal body composition.
                    </TypographyP>
                 </CardContent>
              </Card>
           </AnimatedSection>

           <AnimatedSection delay={0.2}>
              <Card className="h-full border-2 border-primary/5 hover:border-primary/20 transition-all duration-500">
                 <CardContent className="p-8">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                       <span className="material-symbols-outlined font-bold">bolt</span>
                    </div>
                    <TypographyH2 className="text-2xl mb-4 uppercase">The Flinch Rate</TypographyH2>
                    <TypographyP className="text-sm leading-relaxed mt-0">
                       The first app to quantify "string jump." We calculate the likelihood of an animal ducking or shifting before impact, integrating it into your Arrow Ballistic Score (ABS).
                    </TypographyP>
                 </CardContent>
              </Card>
           </AnimatedSection>

           <AnimatedSection delay={0.3}>
              <Card className="h-full border-2 border-primary/5 hover:border-primary/20 transition-all duration-500">
                 <CardContent className="p-8">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                       <span className="material-symbols-outlined font-bold">school</span>
                    </div>
                    <TypographyH2 className="text-2xl mb-4 uppercase">For Beginners</TypographyH2>
                    <TypographyP className="text-sm leading-relaxed mt-0">
                       Serves as an educator, helping you understand how your equipment actually functions in the field. Eliminate the learning curve with data-backed insights.
                    </TypographyP>
                 </CardContent>
              </Card>
           </AnimatedSection>

           <AnimatedSection delay={0.4}>
              <Card className="h-full border-2 border-primary/5 hover:border-primary/20 transition-all duration-500">
                 <CardContent className="p-8">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                       <span className="material-symbols-outlined font-bold">precision_manufacturing</span>
                    </div>
                    <TypographyH2 className="text-2xl mb-4 uppercase">For the Pro</TypographyH2>
                    <TypographyP className="text-sm leading-relaxed mt-0">
                       A high-level optimizer, allowing you to fine-tune every grain and FPS to squeeze the maximum performance out of your specific bow setup.
                    </TypographyP>
                 </CardContent>
              </Card>
           </AnimatedSection>
        </div>

        {/* The Creed - Focused */}
        <AnimatedSection className="mb-16">
           <Card className="bg-slate-900 dark:bg-slate-800 text-white border-none rounded-[2rem] p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <img src="/Fletched-logo.png" alt="" className="w-[15rem] h-auto object-contain grayscale invert" />
              </div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                 <TypographyBlockquote className="border-none pl-0 italic text-2xl md:text-3xl text-white mb-6 leading-tight">
                    "We believe that total confidence in your gear is the foundation of an ethical hunt."
                 </TypographyBlockquote>
                 <div className="h-px w-20 bg-primary/40 mx-auto mb-6"></div>
                 <TypographyP className="text-slate-400 font-black uppercase tracking-widest text-[10px] mt-0">
                    THE FLETCHED CREED
                 </TypographyP>
              </div>
           </Card>
        </AnimatedSection>

        {/* Compact CTA */}
        <AnimatedSection className="text-center">
           <StoreButtons variant="navbar" orientation="row" className="justify-center" />
           <TypographyP className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 mt-6">
              Version 1.0.8 // Built for the Backcountry
           </TypographyP>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;
