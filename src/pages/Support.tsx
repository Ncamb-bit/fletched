import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Support: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('sent');
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Have questions about your ballistics setup or need help with the app? Our team of experts is here to assist you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Info Sidebar */}
          <AnimatedSection className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Get in touch</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Email Support</p>
                    <a href="mailto:support@fletched.archery" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                      fletchedbrand@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">forum</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Response Time</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We typically respond to all technical support inquiries within 24 hours during standard business days.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 shadow-sm transition-colors">
              {formStatus === 'sent' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="size-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. A support representative will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 px-6 py-2 text-sm font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-slate-400" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-slate-400" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                    <textarea 
                      required
                      placeholder="How can we help you?" 
                      rows={6} 
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-slate-400 resize-none" 
                    />
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-fit px-8 h-14 bg-primary text-white rounded-xl font-bold hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Support;
