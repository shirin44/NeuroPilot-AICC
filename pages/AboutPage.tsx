// src/pages/AboutPage.tsx
import React from "react";
import Layout from "../components/Layout";
import { AppContext } from "../App";
import { Sparkles, Globe2, Link as LinkIcon } from "lucide-react";
import { Linkedin, Facebook } from "lucide-react";
import { ABOUT_PAGE_CONTENT } from "../constants/About";
import { Language } from "../types";

/* ---------- Language Helper ---------- */
const normalizeLang = (l: unknown): Language =>
  l === Language.VN || l === "vi" || l === "VN" ? Language.VN : Language.EN;

/* ---------- Reusable Section ---------- */
const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => (
  <section className={`mb-16 ${className}`}>
    <h2 className="font-display text-3xl font-bold text-foreground mb-8 pb-4 border-b-4 border-primary">
      {title}
    </h2>
    <div className="text-foreground/90 text-lg space-y-5 leading-relaxed">
      {children}
    </div>
  </section>
);

/* ---------- Team Member Card ---------- */
type TeamMemberProps = {
  name: string;
  title: string;
  bio: string;
  portfolioUrl?: string;
  avatarSrc?: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  portfolioUrl,
  avatarSrc,
}) => {
  const fallback = `https://via.placeholder.com/128/E3EEF6/375071?text=Photo`;
  const src = avatarSrc || fallback;

  return (
    <div className="bg-card p-6 rounded-xl shadow-md border border-border transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <div className="flex-shrink-0">
        <img
          className="h-24 w-24 rounded-full object-cover ring-4 ring-card shadow-sm bg-muted"
          src={src}
          alt={`${name} portrait`}
          loading="lazy"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-display text-xl font-bold text-card-foreground">
          {name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-primary">{title}</p>
        <p className="mt-4 text-muted-foreground">{bio}</p>
        {portfolioUrl && (
          <a
            href={portfolioUrl.trim()}
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

/* ---------- Mentor Card ---------- */
type MentorCardProps = {
  name: string;
  role: string;
  avatarSrc?: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    website?: string;
  };
  testimony?: Record<Language, string>; // NEW: language-aware testimony
};

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  avatarSrc,
  socials,
  testimony,
}) => {
  const { language } = React.useContext(AppContext);
  const lang = normalizeLang(language);

  const fallback = `https://via.placeholder.com/160/E3EEF6/375071?text=Mentor`;
  const src = avatarSrc || fallback;

  return (
    <div className="min-w-[280px] max-w-xs flex-shrink-0 bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
      <div className="flex items-center space-x-4">
        <img
          src={src}
          alt={`${name} portrait`}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-card"
          loading="lazy"
        />
        <div>
          <h3 className="font-display text-base font-bold text-card-foreground">
            {name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground leading-snug">
            {role}
          </p>
          {socials && (
            <div className="flex space-x-3 mt-2">
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s LinkedIn`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s Facebook`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {socials.website && (
                <a
                  href={socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}'s Website`}
                  className="text-primary hover:text-primary/80 transition-colors font-semibold text-xs"
                >
                  Website
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {testimony?.[lang] && (
        <blockquote className="mt-3 text-xs italic text-muted-foreground border-l-4 border-primary/40 pl-3">
          “{testimony[lang]}”
        </blockquote>
      )}
    </div>
  );
};

/* ---------- Mentors Data (with testimonies) ---------- */
const MENTORS: MentorCardProps[] = [
  {
    name: "Sandy Sinn",
    role: "Founder of CPPWB, Suicide Prevention Educator",
    avatarSrc: "/Images/Sandy.jpg",
    testimony: {
      [Language.EN]:
        "This team listens first, then builds with empathy. NeuroPilot is a rare mix of heart and rigor.",
      [Language.VN]:
        "Nhóm luôn lắng nghe trước khi xây dựng với sự thấu cảm. NeuroPilot là sự kết hợp hiếm có giữa trái tim và tính kỷ luật.",
    },
  },
  {
    name: "Troy Yeo",
    role: "Founder & COO driving AI-powered automation for SMB and Enterprises",
    avatarSrc: "/Images/Troy.jpg",
    testimony: {
      [Language.EN]:
        "They iterate fast and validate with users. The shift from awareness to measurable outcomes is exactly right.",
      [Language.VN]:
        "Các bạn lặp nhanh và xác thực với người dùng. Chuyển từ nâng cao nhận thức sang kết quả đo lường được là hoàn toàn đúng.",
    },
  },
  {
    name: "Hieu Phung",
    role: "Mentor / Advisor",
    avatarSrc: "/Images/HieuPhung.jpg",
    testimony: {
      [Language.EN]:
        "Practical solutions, clear roadmaps, and consistent follow-through—this is how change happens.",
      [Language.VN]:
        "Giải pháp thực tế, lộ trình rõ ràng và theo sát bền bỉ—đó là cách tạo ra thay đổi.",
    },
  },
  {
    name: "Ngọc Quách",
    role: "Assistant to Ms. Simona; works with autistic teenagers",
    avatarSrc: "/Images/NgocQuach.jpg",
    testimony: {
      [Language.EN]:
        "The tools respect young people’s dignity and reduce anxiety in real interview settings.",
      [Language.VN]:
        "Các công cụ tôn trọng phẩm giá của các em và giảm lo âu trong bối cảnh phỏng vấn thực tế.",
    },
  },
  {
    name: "Kristen Lewis",
    role:
      "Accessibility Mentor, Employment Inclusion Specialist at Imago Work (Hanoi); 6 years in vocational training for young adults with intellectual disabilities",
    avatarSrc: "/Images/KristenLewis.jpg",
    testimony: {
      [Language.EN]:
        "Employer guidance is actionable and sensitive to local context—exactly what’s been missing.",
      [Language.VN]:
        "Hướng dẫn cho nhà tuyển dụng mang tính hành động và phù hợp bối cảnh địa phương—chính là mảnh ghép còn thiếu.",
    },
  },
  {
    name: "Thanh Thuý",
    role: "Mentor / Community Partner",
    avatarSrc: "/Images/ThanhThuy.jpg",
    testimony: {
      [Language.EN]:
        "They collaborate openly with families and schools to unlock real opportunities.",
      [Language.VN]:
        "Các bạn hợp tác cởi mở với gia đình và nhà trường để mở ra cơ hội thật sự.",
    },
  },
  {
    name: "Trung VAP",
    role: "Mentor / Industry Partner",
    avatarSrc: "/Images/TrungVAP.jpg",
    testimony: {
      [Language.EN]:
        "Strong engineering practice with a sharp focus on usability—impressive.",
      [Language.VN]:
        "Thực hành kỹ thuật vững và tập trung mạnh vào khả năng sử dụng—rất ấn tượng.",
    },
  },
  {
    name: "Simona Bossoni",
    role:
      "Head of the Child Development Department (HCMC hospital); Lecturer at National College of Education; Consultant for special schools and kindergartens",
    avatarSrc: "/Images/SimonaBossoni.jpg",
    testimony: {
      [Language.EN]:
        "Their approach is developmentally appropriate and grounded in evidence from the field.",
      [Language.VN]:
        "Cách tiếp cận phù hợp theo phát triển và dựa trên bằng chứng từ thực tế.",
    },
  },
];

/* ---------- Page ---------- */
const AboutPage: React.FC = () => {
  const { setNarratorDialogue, language } = React.useContext(AppContext);

  React.useEffect(() => {
    setNarratorDialogue("");
  }, [setNarratorDialogue]);

  const lang = normalizeLang(language);
  const C = ABOUT_PAGE_CONTENT;

  return (
    <Layout>
      <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
        {/* Hero */}
        <div className="text-center mb-16 py-8 bg-muted/50 rounded-xl border border-border">
          <h1 className="mt-0 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            {C.heroTitle[lang]}
          </h1>
          <p className="mt-4 font-display text-lg md:text-xl text-muted-foreground">
            {C.heroSubtitle[lang]}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Our Story */}
          <Section title={C.sections.ourStory.title[lang]}>
            <p>{C.sections.ourStory.p1[lang]}</p>
            <p>{C.sections.ourStory.p2[lang]}</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
              {C.sections.ourStory.list[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{C.sections.ourStory.p3[lang]}</p>
          </Section>

          {/* Founding Team */}
          <Section title={C.sections.foundingTeam.title[lang]}>
            <p>{C.sections.foundingTeam.intro[lang]}</p>
            <div className="mt-8 grid grid-cols-1 gap-8">
              {/* Keep team member cards static since names/titles/bios are already bilingual */}
              <TeamMemberCard
                name="Shirin Shujaa"
                title="Software Engineering student at RMIT Vietnam (AI/ML minor, Intel Capstone Engineer)"
                bio="Passionate about AI for good, I build smart tools..."
                portfolioUrl="https://shirin44.github.io/shirin-portfolio/"
                avatarSrc="/Images/shirin.JPG"
              />
              <TeamMemberCard
                name="Nghi Trinh"
                title="Digital Communication and Multimedia Design student at UEH"
                bio="With a great passion for psychology and UX/UI design..."
                portfolioUrl="https://drive.google.com/file/d/1ycbTzHmodeJGU4ryWYq-8wgGgkXB9WY8/view"
                avatarSrc="/Images/steph.png"
              />
              <TeamMemberCard
                name="Thao Trinh"
                title="3rd-year Software Engineering Student at RMIT"
                bio="Specializing in mobile and full-stack development..."
                avatarSrc="/Images/Thao.png"
              />
            </div>
          </Section>

          {/* Evolution */}
          <Section title={C.sections.evolution.title[lang]}>
            <p>{C.sections.evolution.intro[lang]}</p>
            <ul className="list-disc list-inside space-y-3 pl-4 font-semibold">
              {C.sections.evolution.points[lang].map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p>{C.sections.evolution.outro[lang]}</p>
          </Section>

          {/* Mission & Vision */}
          <Section title={C.sections.missionVision.title[lang]}>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-card p-6 rounded-xl shadow-md border border-primary/20">
                <h3 className="flex items-center font-display text-2xl font-bold text-foreground">
                  <Sparkles className="w-6 h-6 mr-3 text-primary" />
                  {C.sections.mission[lang]}
                </h3>
                <p className="mt-2 text-muted-foreground text-lg">
                  {C.sections.missionText[lang]}
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-card p-6 rounded-xl shadow-md border border-primary/20">
                <h3 className="flex items-center font-display text-2xl font-bold text-foreground">
                  <Globe2 className="w-6 h-6 mr-3 text-primary" />
                  {C.sections.vision[lang]}
                </h3>
                <p className="mt-2 text-muted-foreground text-lg">
                  {C.sections.visionText[lang]}
                </p>
              </div>
            </div>
          </Section>

          {/* Acknowledgements */}
          <Section title={C.sections.acknowledgements.title[lang]}>
            <p>{C.sections.acknowledgements.text[lang]}</p>

            <div className="mt-6 overflow-x-auto pb-2 -mx-2">
              <div className="px-2 flex space-x-4">
                {MENTORS.map((m) => (
                  <MentorCard
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    avatarSrc={m.avatarSrc}
                    socials={m.socials}
                    testimony={m.testimony} // NEW
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* Research */}
          <Section title={C.sections.research.title[lang]}>
            <p>{C.sections.research.text[lang]}</p>
          </Section>

          {/* Developers */}
          <Section title={C.sections.developers.title[lang]}>
            <ul className="list-none space-y-3 p-6 bg-muted/50 rounded-lg border border-border">
              {C.sections.developers.lines[lang].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
