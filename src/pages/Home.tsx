import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Iphone } from '../components/ui/Iphone';
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '../components/ui/Typography';
import { StoreButtons } from '../components/ui/StoreButton';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hubs = [
    { name: 'About', path: '/about', icon: 'info', desc: 'Our creed and commitment to ethical hunting.' },
    { name: 'FAQ', path: '/faq', icon: 'help_center', desc: 'Frequently asked questions and technical guidance.' },
    { name: 'Support', path: '/support', icon: 'support_agent', desc: 'Direct field support and specialized inquiries.' },
  ];

  return (
    <div className="flex flex-col overflow-hidden relative blueprint-grid min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/athletic-female-aiming-with-bow-arrow-towards-trees.jpg" 
            alt="Archer aiming in the woods" 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]"></div>
          {/* Smooth transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark"></div>
          <div className="absolute inset-0 blueprint-grid opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <AnimatedSection className="space-y-8 relative z-10">
            <TypographyH1 className="text-white">
              Archery <br />
              <span className="text-primary-light italic">Ballistics.</span>
            </TypographyH1>
            <TypographyP className="text-xl text-slate-200 max-w-xl leading-relaxed font-medium mt-0">
              Bridge the gap between raw kinetic data and field execution with architectural precision. Simple. Static. Precise.
            </TypographyP>
            <div className="pt-4">
              <StoreButtons variant="black" orientation="row" />
            </div>
          </AnimatedSection>

          {/* Device Mockup */}
          <AnimatedSection delay={0.2} className="relative flex justify-center lg:justify-end lg:-translate-x-16">
            <Iphone className="w-[280px] md:w-[320px] shadow-2xl transition-transform hover:rotate-2 duration-500">
              <div className="relative h-full flex flex-col p-6 items-center justify-center text-center bg-white dark:bg-slate-950">
                <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                <div className="size-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-spin-slow mb-8">
                  <img src="/Fletched-logo.png" alt="Fletched Logo" className="size-16 object-contain" />
                </div>
                <h4 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">Fletched</h4>
                <Badge variant="outline" className="mt-4 border-primary/40 text-primary">TARGET_ACQUIRED</Badge>
              </div>
            </Iphone>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation Hub */}
      <section className="py-24 px-4 bg-white/50 dark:bg-slate-900/10 relative z-10 border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <TypographyH2 className="text-slate-800 dark:text-white">Central <span className="text-primary italic">Command.</span></TypographyH2>
            </div>
            <TypographyP className="max-w-md mt-0 text-slate-500 font-mono text-xs uppercase tracking-widest italic">
              Access core modules for technical field analysis and setup optimization.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {hubs.map((hub, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to={hub.path}>
                  <Card className="h-full group hover:-translate-y-2 duration-500 relative overflow-hidden border-2 border-primary/5 hover:border-primary/40">
                    {/* Decorative Corner Markers */}
                    <div className="absolute top-0 left-0 size-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500"></div>
                    
                    <CardContent className="p-8 pt-10">
                      <div className="flex justify-between items-start mb-10">
                        <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                          <span className="material-symbols-outlined text-4xl font-bold">{hub.icon}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600 font-black tracking-widest uppercase">
                          MOD_0{i + 1}
                        </span>
                      </div>
                      
                      <TypographyH3 className="text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {hub.name}
                      </TypographyH3>
                      
                      <TypographyP className="text-sm leading-relaxed mt-0 text-slate-500 dark:text-slate-400">
                        {hub.desc}
                      </TypographyP>

                      <div className="mt-10 pt-6 border-t border-primary/5 flex items-center justify-between">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-500">
                          ACCESS_LINK
                        </span>
                        <span className="material-symbols-outlined text-primary text-xl group-hover:translate-x-1 transition-transform duration-300">
                          arrow_forward
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Footer CTA */}
      <section className="py-32 px-4 text-center border-t border-primary/5 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
         <AnimatedSection className="max-w-3xl mx-auto flex flex-col items-center">
            <Badge variant="default" className="mb-10">UPCOMING_RELEASE</Badge>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-10 leading-tight">Ready to recalibrate <br /> your hunt?</h2>
            <StoreButtons variant="slate" orientation="row" className="justify-center" />
         </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
