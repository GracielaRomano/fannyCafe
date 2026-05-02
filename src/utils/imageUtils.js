// src/utils/imageUtils.js
// Rutas de media: DB suele guardar /assets/images/... (producción) y en dev Vite sirve desde /src/assets/...

/** Placeholder servido desde `public/assets/` — misma URL en dev y build */
export const PLACEHOLDER_IMAGE_URL = '/assets/images/placeholder.svg';

const ABSOLUTE_URL = /^https?:\/\//i;

function isAbsoluteOrSpecial(path) {
  const p = String(path).trim();
  return (
    ABSOLUTE_URL.test(p) ||
    p.startsWith('data:') ||
    p.startsWith('blob:')
  );
}

function rewriteAssetPathForEnv(path) {
  let out = String(path).trim();
  if (import.meta.env.DEV) {
    out = out
      .replace(/^\/assets\/images\//, '/src/assets/images/')
      .replace(/^\/assets\/videos\//, '/src/assets/videos/');
  }
  return out;
}

/**
 * Resuelve la URL final para imágenes/videos referenciados por la API o estáticos.
 * URLs http(s), data: y blob: se devuelven sin cambios.
 */
export const getImagePath = (imagePath) => {
  if (imagePath === undefined || imagePath === null || String(imagePath).trim() === '') {
    return PLACEHOLDER_IMAGE_URL;
  }

  const raw = String(imagePath).trim();
  if (isAbsoluteOrSpecial(raw)) {
    return raw;
  }

  if (raw.startsWith('/src/assets/')) {
    return raw;
  }

  return rewriteAssetPathForEnv(raw);
};

/**
 * Igual que getImagePath pero permite fallback explícito cuando no hay imagen en DB.
 */
export const getImageWithFallback = (imagePath, fallbackPath = PLACEHOLDER_IMAGE_URL) => {
  if (imagePath === undefined || imagePath === null || String(imagePath).trim() === '') {
    return getImagePath(fallbackPath);
  }
  return getImagePath(imagePath);
};

/**
 * Error en <img>: evita bucle infinito y usa placeholder público.
 */
export const handleImageError = (event, fallbackPath = PLACEHOLDER_IMAGE_URL) => {
  const target = event?.target;
  if (!target || target.tagName !== 'IMG') return;
  target.onerror = null;
  target.src = getImagePath(fallbackPath);
};

/**
 * Error en <video> (elemento): poster de respuesta y marca para estilos opcionales.
 */
export const handleDirectVideoError = (event) => {
  const video = event?.target;
  if (!video || video.tagName !== 'VIDEO') return;
  video.onerror = null;
  video.classList.add('media-load-error');
  video.poster = PLACEHOLDER_IMAGE_URL;
  video.removeAttribute('controls');
};
