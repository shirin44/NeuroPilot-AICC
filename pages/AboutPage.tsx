/* ---------- Team Member Card ---------- */
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
  const resolved = resolveImageUrl(avatarSrc);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-card p-6 rounded-xl shadow-md border border-border transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Portrait */}
      <div className="flex-shrink-0">
        <img
          className="h-24 w-24 rounded-full object-cover ring-4 ring-card shadow-sm bg-muted"
          src={
            name.toLowerCase().includes("shirin")
              ? "https://gdorleon.github.io/Shirin.jpeg" // ✅ Always show Shirin’s hosted portrait
              : resolved || "https://via.placeholder.com/128/E3EEF6/375071?text=Photo"
          }
          alt={`${name} portrait`}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-grow">
        <h3 className="font-display text-xl font-bold text-card-foreground">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{title}</p>

        {/* Collapsible bio */}
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

        {/* Links */}
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
