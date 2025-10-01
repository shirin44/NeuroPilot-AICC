// src/pages/AboutPage.tsx
import React from "react";
import Layout from "../components/Layout";
import { AppContext } from "../App";
import { Sparkles, Globe2, Link as LinkIcon } from "lucide-react";
import { Linkedin, Facebook } from "lucide-react";
import { Language } from "../types";
import { ABOUT_PAGE_CONTENT } from "@/constants/AboutPage";

/* ---------- helper: resolve image strings to real URLs ---------- */
const IMAGE_URLS = import.meta.glob("/src/assets/images/**/*", {
  eager: true,
  as: "url",
}) as Record<string, string>;

function resolveImageUrl(input?: string): string | undefined {
  if (!input) return undefined;
  let s = input.replace(/\\/g, "/").trim();

  if (!s.startsWith("/")) s = "/" + s;
  s = s.replace(/^\/@?src\//, "/src/");

  if (IMAGE_URLS[s]) return IMAGE_URLS[s];

  const file = s.split("/").pop();
  if (file) {
    const found = Object.entries(IMAGE_URLS).find(([k]) => k.endsWith("/" + file));
    if (found) return found[1];
  }

  return undefined;
}

const normalizeLang = (l: unknown): Language =>
  l === Language.VN || l === "vi" || l === "VN" ? Language.VN : Language.EN;

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

type TeamMemberProps = {
  name: string;
  title: string;
  bio: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  avatarSrc?: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  portfolioUrl,
  linkedinUrl,
  resumeUrl,
  avatarSrc,
}) => {
  const { language } = React.useContext(AppContext);
  const lang = normalizeLang(language);

  // ✅ Force Shirin's avatar to use the hardcoded link
  const resolved =
    name.toLowerCase().includes("shirin")
      ? "https://gdorleon.github.io/Shirin.jpeg"
      : resolveImageUrl(avatarSrc);

  const src = resolved || "https://via.placeholder.com/128/E3EEF6/375071?text=Photo";
  const [expanded, setExpanded] = React.useState(false);

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
        <h3 className="font-display text-xl font-bold text-card-foreground">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{title}</p>

        <div className="mt-4 relative">
          <p
            className={[
              "text-muted-foreground whitespace-pre-line transition-all duration-300",
              expanded ? "max-h-none" : "max-h-20 overflow-hidden",
            ].join(" ")}
          >
            {bio}
          </p>
          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent" />
          )}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 text-primary font-semibold text-sm hover:underline"
        >
          {expanded
            ? ABOUT_PAGE_CONTENT.sections.buttons.showLess[lang]
            : ABOUT_PAGE_CONTENT.sections.buttons.showMore[lang]}
        </button>

        <div className="flex flex-wrap items-center gap-3">
          {portfolioUrl && (
            <a
              href={portfolioUrl.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm hover:bg-primary/20 transition-colors"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              {ABOUT_PAGE_CONTENT.sections.buttons.viewPortfolio[lang]}
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 hover:bg-muted transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              {ABOUT_PAGE_CONTENT.sections.buttons.linkedIn[lang]}
            </a>
          )}
          {resumeUrl && (
            <a
              href={resumeUrl.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-3 py-1.5 rounded-full border border-border text-sm text-foreground/80 hover:bg-muted transition-colors"
            >
              {ABOUT_PAGE_CONTENT.sections.buttons.resume[lang]}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ The rest of your file remains unchanged (MentorCard, AboutPage, etc.)
