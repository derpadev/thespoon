/**
 * @param {string} permalink Public Instagram post or reel URL
 * @returns {string | null} iframe src, or null if URL is not a /p/ or /reel/ link
 */
export function instagramEmbedSrc(permalink) {
  try {
    const u = new URL(permalink.trim());
    const path = u.pathname.replace(/\/$/, "");
    if (!/\/(p|reel)\/[^/]+$/i.test(path)) return null;
    return `https://www.instagram.com${path}/embed`;
  } catch {
    return null;
  }
}
