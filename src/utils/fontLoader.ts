/**
 * Font loader utility to optimize font loading using font-display: swap
 * This helps prevent FOIT (Flash of Invisible Text) and improves FCP (First Contentful Paint)
 */

export default function loadFonts() {
  // Check if document is available (not in SSR)
  if (typeof document !== 'undefined') {
    // Create a new link element for the Inter font
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.setAttribute('media', 'print');
    fontLink.setAttribute('onload', "this.media='all'");

    // Add a noscript fallback
    const noscript = document.createElement('noscript');
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    noscript.appendChild(fallbackLink);

    // Append to head
    document.head.appendChild(fontLink);
    document.head.appendChild(noscript);

    // Preload the font files with high priority
    const preloadFonts = [
      'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2', // Regular
      'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7.woff2', // Medium
      'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7.woff2', // Bold
    ];

    // Use for...of loop instead of forEach for better performance
    for (const fontUrl of preloadFonts) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = fontUrl;
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }
  }
}
