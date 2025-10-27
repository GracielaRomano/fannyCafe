// src/utils/imageUtils.js

/**
 * Función para obtener la ruta correcta de las imágenes según el entorno
 * @param {string} imagePath - Ruta de la imagen desde la base de datos
 * @returns {string} - Ruta completa de la imagen
 */
export const getImagePath = (imagePath) => {
  // Si no hay imagen, retornar una imagen placeholder
  if (!imagePath || imagePath === '') {
    return '/src/assets/images/placeholder.jpg';
  }

  // Si estamos en desarrollo (localhost) o usando Vite dev server
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' || 
      window.location.port === '5173') {
    // En desarrollo, usar las imágenes desde src/assets
    return imagePath.replace('/assets/images/', '/src/assets/images/');
  } else {
    // En producción, usar las imágenes desde la carpeta public/assets
    return imagePath.replace('/assets/images/', '/assets/images/');
  }
};

/**
 * Función para obtener la ruta de imagen por defecto si no existe
 * @param {string} imagePath - Ruta de la imagen
 * @param {string} fallbackPath - Ruta de imagen por defecto
 * @returns {string} - Ruta de la imagen o fallback
 */
export const getImageWithFallback = (imagePath, fallbackPath = '/src/assets/images/placeholder.jpg') => {
  const processedPath = getImagePath(imagePath);
  
  // Si no hay imagen, usar fallback
  if (!imagePath || imagePath === '') {
    return getImagePath(fallbackPath);
  }
  
  return processedPath;
};

/**
 * Función para manejar errores de carga de imágenes
 * @param {Event} event - Evento de error de la imagen
 * @param {string} fallbackPath - Ruta de imagen por defecto
 */
export const handleImageError = (event, fallbackPath = '/src/assets/images/placeholder.jpg') => {
  event.target.src = getImagePath(fallbackPath);
  event.target.onerror = null; // Evitar bucle infinito
};
