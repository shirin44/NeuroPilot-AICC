import React from 'react';
import Layout from '../components/Layout';
import NarratorCard from '../components/NarratorCard';
import { NARRATORS, LOCALIZED_CONTENT } from '../constants';
import { NarratorRole } from '../types';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const { language } = React.useContext(AppContext);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-background to-muted/50">
            <div className="w-full max-w-5xl px-4 animate-fadeInUp">
                <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground">
                    Welcome to <span className="text-primary">NeuroPilot AICC</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    {LOCALIZED_CONTENT.tagline[language]}
                </p>

                <div 
                  className="mt-12 w-full max-w-4xl mx-auto aspect-video bg-card/50 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-border flex items-center justify-center relative group cursor-pointer overflow-hidden"
                  onClick={() => alert("Video player coming soon!")}
                  role="button"
                  aria-label="Play Concept Video"
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                    <div className="relative z-20 w-20 h-20 bg-background/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-foreground ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                    </div>
                    <p className="absolute bottom-4 right-4 z-20 text-white/80 text-sm font-semibold backdrop-blur-sm p-1 rounded">Concept Video</p>
                </div>
            </div>
            
            <a 
              href="#narrators" 
              aria-label="Scroll to next section" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('narrators')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
            >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-4 ring-primary/10 hover:bg-primary/30 transition-colors">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </a>
        </div>
    );
};

const NarratorSelection: React.FC = () => (
    <section id="narrators" className="py-16">
        <h2 className="text-center font-display text-3xl font-bold mb-10">Choose Your Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <NarratorCard narrator={NARRATORS[NarratorRole.Jobseeker]} />
            <NarratorCard narrator={NARRATORS[NarratorRole.Employer]} />
            <NarratorCard narrator={NARRATORS[NarratorRole.Parent]} />
            <NarratorCard narrator={NARRATORS[NarratorRole.Volunteer]} />
        </div>
    </section>
);

const QuickFacts: React.FC = () => (
    <section className="py-20 bg-card rounded-2xl shadow-lg">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="font-display text-3xl font-bold text-brand-blue-900">1M+</h3>
                    <p className="mt-2 text-muted-foreground font-medium">Autistic individuals in Vietnam face employment barriers.</p>
                </div>
                <div>
                    <h3 className="font-display text-3xl font-bold text-brand-red-900">Trust Gaps</h3>
                    <p className="mt-2 text-muted-foreground font-medium">Misunderstanding and stigma block meaningful employment opportunities.</p>
                </div>
                <div>
                    <h3 className="font-display text-3xl font-bold text-brand-purple-900">Awareness & Confidence</h3>
                    <p className="mt-2 text-muted-foreground font-medium">NeuroPilot builds skills and bridges understanding for all stakeholders.</p>
                </div>
            </div>
        </div>
    </section>
);

const Sponsors: React.FC = () => (
    <section className="py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-muted-foreground mb-8">Our Sponsors & Partners</h2>
        <div className="flex justify-center items-center space-x-8 md:space-x-12 text-muted-foreground">
            <span className="font-bold text-lg">ADC 2025</span>
            <span className="font-bold text-lg">SPONSOR_LOGO</span>
            <span className="font-bold text-lg">PARTNER_LOGO</span>
            <span className="font-bold text-lg">UNIVERSITY_LOGO</span>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  const { setNarratorDialogue, setNarratorRole } = React.useContext(AppContext);

  React.useEffect(() => {
    setNarratorDialogue('');
    setNarratorRole(null); // Clear role when returning to home
  }, [setNarratorDialogue, setNarratorRole]);

  return (
    <Layout>
      <div>
        <HeroSection />
        <div className="py-20">
          <div className="space-y-20">
            <NarratorSelection />
            <QuickFacts />
            <Sponsors />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;