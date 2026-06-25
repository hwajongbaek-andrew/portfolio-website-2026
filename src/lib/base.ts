// Prefix a root-absolute path with Astro's configured base so internal links
// and public assets resolve correctly when the site is served from a subpath
// (e.g. GitHub Pages project site at /portfolio-website-2026/).
//
// External URLs, in-page anchors, and mailto/tel links are returned untouched.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
	if (!path) return path;
	if (!path.startsWith("/") || path.startsWith("//")) return path;
	return BASE + path;
}
