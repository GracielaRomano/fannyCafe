// src/services/eventService.js

const API_BASE_URL = 'http://localhost:8000/backend/api';

export const eventService = {
  // Obtener todos los eventos
  async getAllEvents() {
    try {
      const response = await fetch(`${API_BASE_URL}/events/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.records || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Obtener evento por ID
  async getEventById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/events/show?id=${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  }
};
