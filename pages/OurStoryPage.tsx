// src/pages/OurStoryPage.tsx
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../App";
import { Language } from "../types";
import { OUR_STORY_CONTENT } from "../constants/Ourstory";

// --- Normalize language (enum or string) ---
const normalizeLang = (l: unknown): Language =>
  l === Language.VN || l === "vi" || l === "VN" ? Language.VN : Language.EN;

/** Map placeholder keys -> image/video filenames living in:
 *  - public/Images/OurStory/<file>
 *  - public/Videos/OurStory/<file>
 *
 *  Rename these to match your real assets.
 */
const MEDIA_IMAGE_MAP: Record<string, string> = {
  TEAM_PHOTO: "team_photo.jpg",
  BRAINSTORM: "brainstorm.jpg",
  TEAM_CALL: "team_call.jpg",
  BOOTCAMP: "bootcamp.jpg",
  MEETING_THUY: "meeting_thuy.jpg",
  IDEA_REFINEMENT: "idea_refinement.jpg",
  TEAM_LAUGH: "team_laugh.jpg",
  SANDY_WORKSHOP: "sandy_workshop.jpg",
  DRAFT: "draft.jpg",
  TRUNG_MEETING: "trung_meeting.jpg",
  SURVEY: "survey.jpg",
  FEEDBACK: "feedback.jpg",
  PROPOSAL: "proposal.jpg",
  KRISTEN: "kristen.jpg",
  BUG: "bug.jpg",
  CODING: "coding.jpg",
  SIMONA: "simona.png",
  TROY: "troy.jpg",
  FINAL_SPRINT: "final_sprint.jpg",
  REFLECTION: "reflection.jpg",
  GALLERY: "gallery_bootcamp.jpg", // default image for gallery tiles
};

const MEDIA_VIDEO_MAP: Record<string, string> = {
  TEAM_PHOTO: "team_photo.mp4",
  BRAINSTORM: "brainstorm.mp4",
  TEAM_CALL: "team_call.mp4",
  BOOTCAMP: "bootcamp.mov",
  MEETING_THUY: "meeting_thuy.mp4",
  IDEA_REFINEMENT: "idea_refinement.mp4",
  TEAM_LAUGH: "team_laugh.mp4",
  SANDY_WORKSHOP: "sandy_workshop.mp4",
  DRAFT: "draft.mp4",
  TRUNG_MEETING: "trung_meeting.mp4",
  SURVEY: "survey.mp4",
  FEEDBACK: "feedback.mp4",
  PROPOSAL: "proposal.mp4",
  KRISTEN: "kristen.mp4",
  BUG: "bug.mp4",
  CODING: "coding.mp4",
  SIMONA: "simona.mp4",
  TROY: "troy.mp4",
  FINAL_SPRINT: "final_sprint.mp4",
  REFLECTION: "reflection.mp4",
  GALLERY: "gallery_bootcamp.mp4", // default video for gallery tiles
};

// Build public URL (Vite-safe). For CRA you could use process.env.PUBLIC_URL instead.
const publicImage = (file: string) => `${import.meta.env.BASE_URL}assets/Images/OurStory/${file}`;
const publicVideo = (file: string) => `${import.meta.env.BASE_URL}assets/Videos/OurStory/${file}`;

// --- Fallback placeholder (if no image & no video available) ---
const PlaceholderMedia: React.FC<{ label: string }> = ({ label }) => (
  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-dashed border-border bg-gradient-to-br from-slate-50 to-slate-100">
    <div className="absolute inset-0 grid place-items-center">
      <div className="rounded-lg bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
        {label}
      </div>
    </div>
  </div>
);

/** Media block that tries image first; if the <img> fails to load (404), it falls back to <video>.
 *  If neither is present in the maps, it renders the placeholder label.
 */
const MediaBlock: React.FC<{
  placeholderKey: string;
  alt: string;
  placeholderLabel: string; // localized label from UI.placeholders
}> = ({ placeholderKey, alt, placeholderLabel }) => {
  const [useVideo, setUseVideo] = useState(false);

  const imgFile = MEDIA_IMAGE_MAP[placeholderKey];
  const vidFile = MEDIA_VIDEO_MAP[placeholderKey];
  const hasImg = Boolean(imgFile);
  const hasVid = Boolean(vidFile);

  // If we have neither file configured, render placeholder immediately
  if (!hasImg && !hasVid) {
    return <PlaceholderMedia label={placeholderLabel} />;
  }

  // If image is configured and we haven't switched to video yet, try image
  if (hasImg && !useVideo) {
    return (
      <img
        src={publicImage(imgFile)}
        alt={alt}
        className="w-full h-auto rounded-xl object-cover"
        onError={() => {
          // Only fall back to video if there is one configured
          if (hasVid) setUseVideo(true);
        }}
      />
    );
  }

  // Otherwise, try video (autoplay muted inline looks nice on hero; here keep controls)
  if (hasVid) {
    return (
      <video
        className="w-full h-auto rounded-xl"
        controls
        playsInline
        // poster could be provided too if you have a matching image
        src={publicVideo(vidFile)}
      >
        {/* As a super-hard fallback (if video fails), show label */}
        <track kind="captions" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  }

  // Last resort
  return <PlaceholderMedia label={placeholderLabel} />;
};

const OurStoryPage: React.FC = () => {
  const { language } = useContext(AppContext);
  const lang = normalizeLang(language);

  const UI = OUR_STORY_CONTENT.ui;
  const P = UI.placeholders;

  return (
    <Layout>
      {/* HERO */}
      <section className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 p-10">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="sparkles" aria-hidden="true" />
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {UI.heroTitle[lang]}
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr,420px]">
          <p className="whitespace-pre-line text-lg text-slate-800">
            {OUR_STORY_CONTENT.intro[lang]}
          </p>
          <div className="rounded-2xl border border-border bg-white p-4 shadow-md">
            <MediaBlock
              placeholderKey="TEAM_PHOTO"
              alt="Team"
              placeholderLabel={P.TEAM_PHOTO[lang]}
            />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mb-12">
        <h2 className="font-display text-3xl font-bold text-slate-900">
          {UI.diary[lang]}
        </h2>
        <div className="mt-6 space-y-8">
          {OUR_STORY_CONTENT.entries.map((e, idx) => (
            <article
              key={idx}
              className={`grid items-start gap-6 md:grid-cols-2 ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-sm font-semibold text-primary">{e.date[lang]}</p>
                {e.title?.[lang] && (
                  <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                    {e.title[lang]}
                  </h3>
                )}
                <p className="mt-3 whitespace-pre-line text-slate-800">{e.body[lang]}</p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4 shadow-md">
                <MediaBlock
                  placeholderKey={e.placeholderKey}
                  alt={e.title?.[lang] || e.date[lang]}
                  placeholderLabel={P[e.placeholderKey][lang]}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REFLECTIONS */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-[1fr,420px]">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-amber-50 to-rose-50 p-8 shadow-sm">
            <h2 className="font-display text-3xl font-bold text-slate-900">
              {UI.reflections[lang]}
            </h2>
            <p className="mt-4 whitespace-pre-line text-slate-800">
              {OUR_STORY_CONTENT.reflections[lang]}
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-4 shadow-md">
            <MediaBlock
              placeholderKey="REFLECTION"
              alt="Reflection"
              placeholderLabel={P.REFLECTION[lang]}
            />
          </div>
        </div>
      </section>

      {/* APPRECIATION */}
      <section className="mb-12 rounded-3xl border border-border bg-card p-8 shadow-sm">
        <h2 className="font-display text-3xl font-bold text-slate-900">
          {UI.appreciation[lang]}
        </h2>
        <ul className="mt-4 space-y-3">
          {OUR_STORY_CONTENT.appreciation[lang].map((line, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
              <p className="text-slate-800">{line}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* MEDIA GALLERY */}
      <section className="mb-4">
        <h2 className="font-display text-3xl font-bold text-slate-900">
          {UI.media[lang]}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OUR_STORY_CONTENT.gallery[lang].map((g, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-white p-4 shadow-sm"
            >
              <MediaBlock
                placeholderKey="GALLERY" // default gallery asset (image/video)
                alt={g}
                placeholderLabel={P.GALLERY[lang]}
              />
              <p className="mt-2 text-center text-sm font-medium text-slate-700">{g}</p>
            </div>
          ))}
        </div>
      </section>

      {/* inline wow-effects */}
      <style>{`
        .sparkles {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(2px 2px at 20% 30%, rgba(59,130,246,.6) 50%, transparent 51%) repeat,
            radial-gradient(2px 2px at 70% 60%, rgba(168,85,247,.55) 50%, transparent 51%) repeat,
            radial-gradient(2px 2px at 40% 80%, rgba(236,72,153,.5) 50%, transparent 51%) repeat;
          background-size: 180px 180px, 220px 220px, 200px 200px;
          animation: sparkleMove 18s linear infinite;
          opacity: .45;
          pointer-events: none;
        }
        @keyframes sparkleMove {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 180px 180px, -220px 220px, 200px -200px; }
        }
      `}</style>
    </Layout>
  );
};

export default OurStoryPage;
