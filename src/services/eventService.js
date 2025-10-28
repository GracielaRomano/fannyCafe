
// if (window.location.hostname === 'localhost' || 
//   window.location.hostname === '127.0.0.1' || 
//   window.location.port === '5173') {
    
//   const API_BASE_URL = 'http://localhost:8000/backend/api';

// } else {
//   const API_BASE_URL = window.location.hostname + '/backend/api';
// }



// export const eventService = {
//   // Obtener todos los eventos
//   async getAllEvents() {
//     try {
//       const response = await fetch(`${API_BASE_URL}/events/`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data.records || [];
//     } catch (error) {
//       console.error('Error fetching events:', error);
//       throw error;
//     }
//   },

  // Obtener evento por ID
//   async getEventById(id) {
//     try {
//       const response = await fetch(`${API_BASE_URL}/events/show?id=${id}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching event:', error);
//       throw error;
//     }
//   }
// };
// src/services/eventService.js

// Detectar entorno
const isDev =
  !import.meta.env.PROD ||
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.port === '5173';

// Permite override por .env en producción (o pruebas):
// Ejemplo: VITE_API_BASE_URL="https://tu-sitio-prueba.com/backend/api"
const ENV_API = import.meta.env.VITE_API_BASE_URL;

// URLs por defecto
const DEV_API = 'http://localhost:8000/backend/api';
const PROD_API = ENV_API || `${window.location.origin}/backend/api`;

// URL final
const API_BASE_URL = isDev ? DEV_API : PROD_API;

export const eventService = {
  // Obtener todos los eventos
  async getAllEvents() {
    const response = await fetch(`${API_BASE_URL}/events/`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.records || [];
  },

  // Obtener evento por ID
  async getEventById(id) {
    const response = await fetch(`${API_BASE_URL}/events/show?id=${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
};