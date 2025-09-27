// utils/asset.ts  (place it in your existing root-level `utils/` folder)
export function asset(p: string): string {
    // Passthrough absolute URLs and data/blob URIs
    if (/^(?:https?:)?\/\//.test(p) || /^(?:data:|blob:)/.test(p)) return p;
  
    const base = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, ""); // e.g. "/" or "/NeuroPilot-AICC"
    const rel  = (p ?? "").replace(/^\/+/, "");                         // strip leading slashes
    return `${base}/${rel}`;
  }
  