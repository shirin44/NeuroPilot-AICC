import React from 'react';
import Layout from '../components/Layout';
import { AppContext } from '../App';

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.665l3-3z" />
        <path d="M8.603 14.53a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.665l-3 3z" />
    </svg>
);


const TeamMemberCard: React.FC<{ name: string; title: string; bio: string; portfolioUrl?: string; }> = ({ name, title, bio, portfolioUrl }) => {
    const avatarUrl = `https://via.placeholder.com/128/E3EEF6/375071?text=Photo`;

    return (
        <div className="bg-card p-6 rounded-xl shadow-md border border-border transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0">
                <img className="h-24 w-24 rounded-full object-cover ring-4 ring-card shadow-sm bg-muted" src={avatarUrl} alt={`Placeholder for ${name}`} />
            </div>
            <div className="flex-grow">
                <h3 className="font-display text-xl font-bold text-card-foreground">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{title}</p>
                <p className="mt-4 text-muted-foreground">{bio}</p>
                {portfolioUrl && (
                    <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                        <LinkIcon className="w-4 h-4 mr-2" />
                        View Portfolio
                    </a>
                )}
            </div>
        </div>
    );
};

const MissionVisionCard: React.FC<{ icon: string; title: string; children: React.ReactNode; }> = ({icon, title, children}) => (
    <div className="bg-gradient-to-br from-primary/10 to-card p-6 rounded-xl shadow-md border border-primary/20">
        <h3 className="flex items-center font-display text-2xl font-bold text-foreground">
            <span className="text-3xl mr-3">{icon}</span>
            {title}
        </h3>
        <p className="mt-2 text-muted-foreground text-lg">{children}</p>
    </div>
);


const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`mb-16 ${className}`}>
    <h2 className="font-display text-3xl font-bold text-foreground mb-8 pb-4 border-b-4 border-primary">{title}</h2>
    <div className="text-foreground/90 text-lg space-y-5 leading-relaxed">
      {children}
    </div>
  </section>
);

const AboutPage: React.FC = () => {
  const { setNarratorDialogue } = React.useContext(AppContext);

  React.useEffect(() => {
    setNarratorDialogue('');
  }, [setNarratorDialogue]);

  return (
    <Layout>
      <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="text-center mb-16 py-8 bg-muted/50 rounded-xl border border-border">
            <p className="font-display text-xl md:text-3xl font-bold text-muted-foreground italic tracking-tight">
              <del>“Autistic adults can’t go to work”</del>
            </p>

            <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Breaking the Barrier of Trust <br className="hidden md:block" /> for Autistic Employment in Vietnam
            </h1>
        </div>
        
        <div className="max-w-5xl mx-auto">
            <Section title="Our Story – Why We Started">
                <p>Vietnam has about 6.2 million people with disabilities, with nearly one million autistic individuals. Yet career accessibility for autistic people is far behind global progress.</p>
                <p>According to the founder of the Vietnam Autism Project, after 10 years of work with autistic communities, accessibility remains stuck at the awareness stage. The shared barrier? Trust.</p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                    <li>Communities pity them instead of supporting.</li>
                    <li>Firms reject them instead of hiring.</li>
                    <li>Parents protectively isolate them instead of empowering.</li>
                    <li>Autistic individuals lose hope in themselves.</li>
                </ul>
                <p>We realized that while Vietnam must raise awareness first, autistic jobseekers cannot wait. Inspired by this gap, our team created NeuroPilot AICC - a bridge between awareness and career accessibility, starting at the interview stage.</p>
            </Section>

            <Section title="Who We Are – The Founding Team">
                <p>We are the Powerpuff Girls Team, a group of young innovators from Vietnam, competing in ADC 2025 with a mission to design impactful, inclusive technology. Our diverse backgrounds in media, software engineer, and design make us the right team to tackle this problem at this critical time.</p>
                <div className="mt-8 grid grid-cols-1 gap-8">
                    <TeamMemberCard 
                        name="Shirin Shujaa"
                        title="Software Engineering student at RMIT Vietnam (AI/ML minor, Intel Capstone Engineer)"
                        bio="Passionate about AI for good, I build smart tools and elegant interfaces — blending AI, automation, and clean design into real-world solutions. I’ve developed automation tools at Intel, built scalable platforms for startups, and crafted AI-powered applications — always with a focus on user-centered design and accessibility."
                        portfolioUrl =" https://shirin44.github.io/shirin-portfolio/ "
                    />
                     <TeamMemberCard 
                        name="Nghi Trinh"
                        title="Digital Communication and Multimedia Design student at UEH (Ogilvy Intern, OUCRU Collaborator)"
                        bio="With a great passion for psychology and UX/UI design, I want to use that passion to support people who need it most. By combining my own experience with what the world has to offer, I hope to build bridges that open new opportunities for autistic adults. For me, a growing Vietnam means making sure no community is left behind."
                        portfolioUrl =" https://drive.google.com/file/d/1ycbTzHmodeJGU4ryWYq-8wgGgkXB9WY8/view?usp=sharing"
                    />
                     <TeamMemberCard 
                        name="Thao Trinh"
                        title="3rd-year Software Engineering Student at RMIT University Viet Nam"
                        bio="Specializing in mobile and full-stack development with a keen interest in research. Dedicated to applying technical skills to create meaningful and accessible solutions."
                    />
                </div>
            </Section>

            <Section title="Our Evolution – Where We Are Today">
                <p>At first, we struggled with the contradiction: how to promote employment when Vietnam’s reality still demands awareness first. Our solution was to combine both:</p>
                <ul className="list-disc list-inside space-y-3 pl-4 font-semibold">
                    <li><span className="text-brand-purple-700">For Employers (Inclusion Coach):</span> Learn inclusion through autistic employee narrators and the Question Cleaner tool.</li>
                    <li><span className="text-brand-blue-700">For Autistic Jobseekers (Friendly Buddy):</span> Practice STAR interviews with supportive nudges and safe-space guides.</li>
                    <li><span className="text-brand-red-700">For Parents (Reassuring Counselor):</span> Access FAQs, evidence-based support, and reassurance.</li>
                    <li><span className="text-brand-green-700">For Volunteers (Helpful Peer):</span> Train with real autistic communication styles and unlock live support opportunities.</li>
                </ul>
                <p>Through weeks of testing and iterations, we built a system that addresses psychological barriers for all stakeholders.</p>
            </Section>

            <Section title="Our Mission & Vision – Where We’re Going">
                <div className="space-y-6">
                    <MissionVisionCard icon="✨" title="Mission">
                        To empower autistic individuals to take their first step into meaningful careers by breaking the trust barrier.
                    </MissionVisionCard>
                    <MissionVisionCard icon="🌏" title="Vision">
                       To create a world where autistic jobseekers are trusted, included, and given equal opportunities — starting in Vietnam, then expanding across Southeast Asia and beyond.
                    </MissionVisionCard>
                </div>
            </Section>

            <Section title="Research & Q&A">
                <p>We ground our work in local research, interviews with autistic individuals and parents, and global best practices. You can read our Research & Insights section and explore our Q&A hub, where parents, employers, and autistic individuals share their most pressing questions.</p>
            </Section>

            <Section title="Developers & Contacts">
                <ul className="list-none space-y-3 p-6 bg-muted/50 rounded-lg border border-border">
                    <li><strong>Development Team:</strong> Powerpuff Girls (ADC 2025)</li>
                    <li><strong>Advisors:</strong> Mentors from RMIT University Vietnam & Industry Experts</li>
                    <li><strong>Contact:</strong> <a href="#/contact" className="text-primary font-semibold hover:underline">neuropilotaicc@gmail.com</a></li>
                    <li><strong>Location:</strong> Ho Chi Minh City, Vietnam</li>
                </ul>
            </Section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;