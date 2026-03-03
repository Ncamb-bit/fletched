import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '../components/ui/Button';
// import { Badge } from '../components/ui/Badge';
import { AppStoreButton } from '../components/ui/AppStoreButton';
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/support' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const hasHeroImage = isHomePage || isAboutPage;

  const headerBg = scrolled 
    ? "bg-[#0a0f0a]/80 backdrop-blur-md border-b border-white/5 shadow-sm" 
    : hasHeroImage 
      ? "bg-transparent border-transparent" 
      : "bg-[#0a0f0a] border-b border-white/5";

  const textColor = scrolled || !hasHeroImage 
    ? "text-slate-300" 
    : "text-white";

  const logoColor = "text-white";

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 selection:bg-primary/20 selection:text-primary transition-colors">
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'} ${headerBg}`}>
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-3 group ${logoColor} transition-colors`}>
            <img 
              src="/Fletched-logo.png" 
              alt="Fletched Logo" 
              className="size-10 object-contain group-hover:rotate-6 transition-transform" 
            />
            <span className="text-2xl font-black tracking-tighter uppercase">FLETCHED</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-4 py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all hover:bg-primary/10 ${isActive(link.path) ? (scrolled || !hasHeroImage ? 'text-primary' : 'text-primary-light font-bold') : textColor}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <AppStoreButton variant="navbar" className="hidden md:flex" />
            <button
              onClick={toggleMenu}
              className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${scrolled || !hasHeroImage ? 'text-slate-600 dark:text-slate-400' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-2xl flex flex-col p-8 overflow-y-auto"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3 text-primary">
                <img src="/Fletched-logo.png" alt="Fletched Logo" className="size-10 object-contain" />
                <span className="text-2xl font-black tracking-tighter uppercase">FLETCHED</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="size-12 rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`group flex items-end justify-between py-2 border-b-2 transition-all ${isActive(link.path) ? 'border-primary' : 'border-primary/5'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex flex-col">
                      <span className={`text-4xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-primary' : 'text-slate-900 dark:text-slate-100'}`}>
                        {link.name}
                      </span>
                    </div>
                    {isActive(link.path) && (
                       <span className="material-symbols-outlined text-primary text-3xl font-bold mb-2">
                         target
                       </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="mt-12 pt-8 border-t border-primary/10">
               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">SYSTEM_VERSION: v1.0.8_STABLE</span>
                 </div>
                 <AppStoreButton className="w-full" variant="slate" />
               </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5 pointer-events-none">
               <img src="/Fletched-logo.png" alt="" className="w-[20rem] h-auto object-contain grayscale" />
            </div>
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-background-light dark:bg-background-dark border-t border-primary/5 w-full py-16 px-6 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Subtle Logo Signature */}
          <div className="flex items-center gap-2 text-primary/40 mb-12 group hover:text-primary transition-colors duration-500">
            <img src="/Fletched-logo.png" alt="Fletched Logo" className="size-6 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            <span className="text-lg font-black tracking-[0.3em] uppercase">Fletched</span>
          </div>

          {/* Minimal Navigation */}
          <div className="flex justify-center gap-x-10 gap-y-6 w-full flex-wrap mb-12">
            {[...navLinks, { name: 'Privacy', path: '/privacy' }, { name: 'Security', path: '/security' }, { name: 'Terms', path: '/terms' }].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Surgical Social Icons */}
          <div className="flex items-center gap-8 mb-16">
            {[
              { icon: <CgFacebook />, label: 'Facebook' },
              { icon: <BsTwitter />, label: 'Twitter' },
              { icon: <BsInstagram />, label: 'Instagram' },
              { icon: <BsLinkedin />, label: 'LinkedIn' }
            ].map((social, i) => (
              <a 
                key={i}
                href="#"
                className="text-lg text-slate-300 dark:text-slate-700 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Technical Signature */}
          <div className="w-full pt-12 border-t border-primary/5 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
               <div className="size-1.5 rounded-full bg-primary/20 animate-pulse"></div>
               <p className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">
                 © {new Date().getFullYear()} FLETCHED ARCHERY INC.
               </p>
            </div>
          </div>

          {/* Architectural Annotation */}
          <div className="absolute bottom-4 right-4 text-[7px] font-mono text-primary/10 uppercase tracking-[0.5em] hidden md:block select-none">
             REF_0xFOOTER
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
