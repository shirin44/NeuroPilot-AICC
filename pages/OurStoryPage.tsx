// src/pages/OurStoryPage.tsx
import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../App";
import { Language /*, PlaceholderKey */ } from "../types";
import { OUR_STORY_CONTENT } from "../constants/Ourstory";

// --- Normalize language (enum or string) ---
const normalizeLang = (l: unknown): Language =>
  l === Language.VN || l === "vi" || l === "VN" ? Language.VN : Language.EN;

const MEDIA_IMAGE_MAP: Record<string, string> = {
  TEAM_PHOTO: "us.png",
  BRAINSTORM:  "team_photo.jpg",
  TEAM_CALL: "team_call.jpg",
  BOOTCAMP: "bootcamp.jpg",
  MEETING_THUY: "meeting_thuy.png",
  IDEA_REFİNEMENT: "idea_refinement.jpg", // keep your exact filename; left here for safety if renamed
  IDEA_REFINEMENT: "idea_refinement.jpg",
  TEAM_LAUGH: "team_laugh.jpg",
  SANDY_WORKSHOP: "sandy_workshop.jpg",
  DRAFT: "draft.jpg",
  TRUNG_MEETING: "trung.jpg",
  SURVEY: "survey.jpg",
  FEEDBACK: "feedback.jpg",
  PROPOSAL: "proposal.jpg",
  KRISTEN: "kristen.png",
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
  IDEA_REFINEMENT: "debate.mov",
  TEAM_LAUGH: "team_laugh.mov",
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
const publicImage = (file: string) =>
  `${import.meta.env.BASE_URL}assets/Images/OurStory/${file}`;
const publicVideo = (file: string) =>
  `${import.meta.env.BASE_URL}assets/Videos/OurStory/${file}`;

/* -----------------------------------------------------------
   PLACEHOLDER (supports fixed aspect ratio via aspectClass)
----------------------------------------------------------- */
const PlaceholderMedia: React.FC<{
  label: string;
  aspectClass?: string;
}> = ({ label, aspectClass }) => {
  const aspect = aspectClass || "aspect-[16/9]";
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl border-2 border-dashed border-border bg-gradient-to-br from-slate-50 to-slate-100`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-lg bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
          {label}
        </div>
      </div>
    </div>
  );
};

/* -----------------------------------------------------------
   MEDIABLOCK
   - Tries image; falls back to video if img 404.
   - NEW: frameAspectClass enforces identical visible size.
   - NEW: fit = "cover" (crop to fill) | "contain" (letterbox)
----------------------------------------------------------- */
const MediaBlock: React.FC<{
  placeholderKey: string;
  alt: string;
  placeholderLabel: string;
  frameAspectClass?: string; // e.g. "aspect-[4/3]", "aspect-video", "aspect-square"
  fit?: "cover" | "contain"; // default cover
}> = ({ placeholderKey, alt, placeholderLabel, frameAspectClass, fit = "cover" }) => {
  const [useVideo, setUseVideo] = useState(false);

  const imgFile = MEDIA_IMAGE_MAP[placeholderKey];
  const vidFile = MEDIA_VIDEO_MAP[placeholderKey];
  const hasImg = Boolean(imgFile);
  const hasVid = Boolean(vidFile);

  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  const renderInFrame = (node: React.ReactNode) => (
    <div
      className={`relative w-full ${
        frameAspectClass || "aspect-[16/9]"
      } overflow-hidden rounded-xl bg-slate-100`}
    >
      <div className="absolute inset-0">{node}</div>
    </div>
  );

  // Neither configured -> placeholder
  if (!hasImg && !hasVid) {
    return <PlaceholderMedia label={placeholderLabel} aspectClass={frameAspectClass} />;
  }

  // Try image first
  if (hasImg && !useVideo) {
    const imgEl = (
      <img
        src={publicImage(imgFile)}
        alt={alt}
        className={`h-full w-full ${fitClass} object-center rounded-xl`}
        onError={() => {
          if (hasVid) setUseVideo(true);
        }}
        loading="lazy"
      />
    );
    return frameAspectClass ? (
      renderInFrame(imgEl)
    ) : (
      <img
        src={publicImage(imgFile)}
        alt={alt}
        className="w-full h-auto rounded-xl object-cover"
        onError={() => {
          if (hasVid) setUseVideo(true);
        }}
        loading="lazy"
      />
    );
  }

  // Fallback: video
  if (hasVid) {
    const videoEl = (
      <video
        className={`h-full w-full ${fitClass} object-center rounded-xl`}
        controls
        playsInline
        preload="metadata"
        src={publicVideo(vidFile)}
      >
        <track kind="captions" />
      </video>
    );
    return frameAspectClass ? (
      renderInFrame(videoEl)
    ) : (
      <video
        className="w-full h-auto rounded-xl"
        controls
        playsInline
        preload="metadata"
        src={publicVideo(vidFile)}
      >
        <track kind="captions" />
      </video>
    );
  }

  // Last resort
  return <PlaceholderMedia label={placeholderLabel} aspectClass={frameAspectClass} />;
};

/* -----------------------------------------------------------
   GALLERYMEDIA (for per-item galleryItems)
   - Always uses a uniform frame.
----------------------------------------------------------- */
type GalleryItem = {
  type: "image" | "video";
  file: string; // filename in assets or full URL
  poster?: string; // optional poster for videos
  caption: Record<Language, string>;
};

const isHttp = (p?: string) => !!p && /^https?:\/\//i.test(p);
const resolveSrc = (type: GalleryItem["type"], file: string) =>
  isHttp(file) ? file : type === "image" ? publicImage(file) : publicVideo(file);
const resolvePoster = (poster?: string) =>
  poster ? (isHttp(poster) ? poster : publicImage(poster)) : undefined;

const GalleryMedia: React.FC<{ item: GalleryItem; alt: string; aspect?: string; fit?: "cover" | "contain" }> = ({
  item,
  alt,
  aspect = "aspect-[4/3]",
  fit = "cover",
}) => {
  const src = resolveSrc(item.type, item.file);
  const poster = resolvePoster(item.poster);
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className={`relative w-full ${aspect} overflow-hidden rounded-xl bg-slate-100`}>
      {item.type === "image" ? (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${fitClass} object-center`}
          loading="lazy"
        />
      ) : (
        <video
          className={`absolute inset-0 h-full w-full ${fitClass} object-center`}
          controls
          playsInline
          preload="metadata"
          poster={poster}
          src={src}
        >
          <track kind="captions" />
        </video>
      )}
    </div>
  );
};

/* ===========================================================
   PAGE
=========================================================== */
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
              // HERO: keep natural media size (no fixed aspect here)
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

              {/* DIARY MEDIA: enforce SAME visible size across all entries */}
              <div className="rounded-2xl border border-border bg-white p-4 shadow-md">
                <MediaBlock
                  placeholderKey={e.placeholderKey}
                  alt={e.title?.[lang] || e.date[lang]}
                  placeholderLabel={P[e.placeholderKey][lang]}
                  frameAspectClass="aspect-[4/3]" // 👈 pick one aspect & keep consistent
                  fit="cover"                      // 👈 or "contain" to avoid cropping
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
              // Keep natural sizing here unless you want a fixed frame too:
              // frameAspectClass="aspect-[4/3]"
              // fit="cover"
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

        {/* Prefer the new per-item gallery if available; otherwise fall back to legacy list */}
        {Array.isArray((OUR_STORY_CONTENT as any).galleryItems) &&
        (OUR_STORY_CONTENT as any).galleryItems.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(OUR_STORY_CONTENT as any).galleryItems.map((item: GalleryItem, i: number) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <GalleryMedia
                  item={item}
                  alt={item.caption[lang]}
                  aspect="aspect-[4/3]" // 👈 uniform frame for gallery tiles
                  fit="cover"
                />
                <p className="mt-2 text-center text-sm font-medium text-slate-700">
                  {item.caption[lang]}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OUR_STORY_CONTENT.gallery?.[lang]?.map((g, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <MediaBlock
                  placeholderKey="GALLERY" // default gallery asset (image/video)
                  alt={g}
                  placeholderLabel={UI.placeholders.GALLERY[lang]}
                  frameAspectClass="aspect-[4/3]" // 👈 uniform frame for legacy tiles too
                  fit="cover"
                />
                <p className="mt-2 text-center text-sm font-medium text-slate-700">{g}</p>
              </div>
            )) || null}
          </div>
        )}
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
