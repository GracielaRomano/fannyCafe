# Documentación Frontend React - Cafetería Fanny

## Descripción

Aplicación web moderna desarrollada con React para la cafetería Fanny, una empresa especializada en servicio de catering de café premium para eventos corporativos, bodas, congresos y celebraciones.

## Tecnologías Utilizadas

- **React** 19.1.1
- **Vite** 7.1.7
- **React Router DOM** 7.9.2
- **Bootstrap** 5.3.8
- **React Bootstrap** 2.10.10
- **Popper.js** 2.11.8

## Requisitos Previos

### Software Necesario
- **Node.js** 18.0 o superior
- **npm** 9.0 o superior (incluido con Node.js)
- **Backend PHP** corriendo en `http://localhost:8000`

### Conocimientos Recomendados
- Conceptos básicos de React y Hooks
- Familiaridad con JavaScript ES6+
- Conceptos básicos de HTML y CSS
- Conocimiento básico de Bootstrap

## Instalación

### Paso 1: Instalar Dependencias

Abre una terminal en la carpeta `cafeteriafanny` y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

### Paso 2: Configurar el Backend

Asegúrate de que el backend PHP esté corriendo en `http://localhost:8000`. Puedes verificar la configuración en:

```12:24:cafeteriafanny/src/services/eventService.js
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
```

### Paso 3: Iniciar el Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts Disponibles

### `npm run dev`
Inicia el servidor de desarrollo con Vite. La aplicación se recargará automáticamente cuando modifiques archivos.

**URL:** `http://localhost:5173`

### `npm run build`
Genera una versión optimizada para producción en la carpeta `dist/`.

### `npm run preview`
Preview local del build de producción para verificar que todo funcione correctamente antes del deploy.

### `npm run lint`
Ejecuta ESLint para verificar la calidad del código y detectar posibles errores.

## Estructura del Proyecto

```
cafeteriafanny/
├── public/                    # Archivos estáticos
│   └── assets/
│       └── images/            # Imágenes de la aplicación
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Article/
│   │   ├── Client/
│   │   ├── FAQ/
│   │   ├── Footer/
│   │   ├── FormContact/
│   │   ├── Gallery/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ListService/
│   │   ├── Metrics/
│   │   ├── Navbar/
│   │   ├── Opinion/
│   │   ├── Plans/
│   │   ├── Recent/
│   │   ├── Team/
│   │   └── Video/
│   ├── pages/                 # Páginas principales
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── News.jsx
│   │   └── Service.jsx
│   ├── routes/                # Configuración de rutas
│   │   └── index.jsx
│   ├── services/              # Servicios de API
│   │   └── eventService.js
│   ├── utils/                 # Utilidades
│   │   └── imageUtils.js
│   ├── assets/                # Assets de la aplicación
│   │   ├── images/
│   │   ├── videos/
│   │   └── styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Componentes Principales

### Navbar
Barra de navegación superior con menú responsivo y enlaces a todas las secciones del sitio.

### Header
Encabezado con logo y elementos de branding.

### Hero
Sección principal de la página de inicio con llamada a la acción y video/introducción.

### Gallery
Componente para mostrar galerías de imágenes de manera elegante.

### Footer
Pie de página con información de contacto, redes sociales y enlaces adicionales.

### FormContact
Formulario de contacto funcional para que los usuarios se comuniquen con la empresa.

### Article
Componente para mostrar artículos y contenido de blog.

### Client
Sección para mostrar logos de clientes o casos de éxito.

### FAQ
Preguntas frecuentes con acordeón interactivo.

### Metrics
Sección para mostrar estadísticas o métricas importantes.

### Opinion
Componente para mostrar testimonios de clientes.

### Plans
Sección para mostrar planes o servicios ofrecidos.

### Recent
Componente para mostrar contenido reciente.

### Team
Sección para mostrar información del equipo.

### Video
Componente para mostrar videos de manera integrada.

### ListService
Lista de servicios ofrecidos por la empresa.

## Páginas

### Home
Página principal que presenta la cafetería Fanny, servicios principales y llamadas a la acción.

### About 
Información sobre la empresa, historia, misión y valores.

### Events
Lista de todos los eventos realizados por la cafetería. Incluye filtros y búsqueda.

### EventDetail 
Página de detalle de un evento específico con:
- Información completa del evento
- Galería de imágenes
- Servicios ofrecidos
- Testimonios de clientes

### Contact 
Formulario de contacto y información de ubicación.

### News 
Sección de noticias y novedades de la empresa.

### Service 
Detalles completos de los servicios ofrecidos.

## Integración con el Backend

### eventService.js

El servicio `eventService` se encarga de comunicarse con la API del backend PHP:

```3:35:cafeteriafanny/src/services/eventService.js
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
```

### imageUtils.js

Utilidad para manejar las rutas de imágenes correctamente:

```8:24:cafeteriafanny/src/utils/imageUtils.js
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
```

## Desarrollo

### Iniciar el Proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre tu navegador en `http://localhost:5173`

### Hot Reload

Vite incluye hot reload automático, por lo que cualquier cambio en los archivos se reflejará inmediatamente en el navegador sin necesidad de recargar manualmente.

### Estructura de Desarrollo

- Los componentes se encuentran en `src/components/`
- Las páginas en `src/pages/`
- Los servicios de API en `src/services/`
- Los estilos globales en `src/App.css`

## Build y Deploy

### Generar Build de Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados para producción.

### Preview del Build

Antes de hacer el deploy, puedes previsualizar el build localmente:

```bash
npm run build
npm run preview
```

### Deploy en Hostinger

La aplicación está configurada para deploy en Hostinger. Después del build:

1. Copia el contenido de la carpeta `dist/` al servidor de Hostinger
2. Asegúrate de que el backend PHP también esté correctamente configurado
3. Verifica que las rutas de las imágenes sean correctas en producción

## Estilos

### Bootstrap 5.3.8

El proyecto utiliza Bootstrap para el sistema de grid y componentes base. Se carga a través de:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Estilos Personalizados

Cada componente tiene su propio archivo CSS para mantener el código organizado:

- `Navbar.css` - Estilos de la barra de navegación
- `Hero.css` - Estilos de la sección hero
- `Footer.css` - Estilos del pie de página
- etc.

### App.css Global

El archivo `src/App.css` contiene estilos globales y variables CSS personalizadas:

```css
:root {
  --beige-color: #F6BE9B;
  --dark-color: #333;
  --light-beige-color: #fef5f0;
}
```

## Características Principales

### Sistema de Navegación Responsive

Navegación adaptativa que se convierte en menú hamburguesa en dispositivos móviles.

### Galería de Eventos Dinámica

Sistema de eventos que consume datos del backend en tiempo real, mostrando:
- Lista de eventos con filtros
- Página de detalle con información completa
- Galería de imágenes por evento

### Integración con Backend PHP/MySQL

Comunicación completa con la API del backend para:
- Obtener lista de eventos
- Obtener detalles de eventos específicos
- Manejar servicios, galería y testimonios

### Formulario de Contacto

Formulario funcional para que los clientes se pongan en contacto.

### Diseño Moderno y Profesional

UI/UX diseñado para ser atractivo y profesional, con:
- Animaciones suaves
- Efectos hover
- Transiciones elegantes
- Diseño responsive

## Troubleshooting

### Problema: Error de Conexión con el Backend

**Síntomas:** Los eventos no cargan, error 404 en la consola  
**Solución:**
1. Verifica que el backend PHP esté corriendo en `http://localhost:8000`
2. Verifica las URLs en `src/services/eventService.js`
3. Verifica que CORS esté correctamente configurado en el backend

### Problema: Imágenes No Cargan

**Síntomas:** Las imágenes aparecen rotas  
**Solución:**
1. Verifica que las imágenes existan en `src/assets/images/`
2. Verifica las rutas en la función `getImagePath` en `src/utils/imageUtils.js`
3. En desarrollo, las imágenes deben estar en `src/assets/images/`
4. En producción, las imágenes deben estar en `public/assets/images/`

### Problema: Error CORS

**Síntomas:** Error en consola sobre política CORS  
**Solución:**
1. Verifica que el backend tenga configurados los headers CORS
2. Verifica el archivo `backend/index.php` que incluya los headers correctos
3. En desarrollo local, usa `http://localhost:8000` en lugar de `http://127.0.0.1:8000`

### Problema: Puerto Ya en Uso

**Síntomas:** Error "Port 5173 is already in use"  
**Solución:**
1. Cierra otras instancias de Vite
2. Cambia el puerto editando `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 5174
     }
   })
   ```

## FAQ

### P: ¿Cómo cambio la URL del backend?

R: Edita el archivo `src/services/eventService.js` y modifica la constante `API_BASE_URL`:

```javascript
const API_BASE_URL = 'http://tu-servidor.com/backend/api';
```

### P: ¿Cómo agrego una nueva página?

R: 
1. Crea el componente de la página en `src/pages/NuevaPagina.jsx`
2. Importa el componente en `src/routes/index.jsx`
3. Agrega la ruta en el router:

```javascript
{
  path: '/nueva-ruta',
  element: <NuevaPagina />,
}
```

4. Agrega el enlace en `src/components/Navbar/Navbar.jsx`

### P: ¿Cómo modifico los estilos globales?

R: Edita el archivo `src/App.css`. Este archivo contiene las variables CSS y estilos globales.

### P: ¿Cómo agrego un nuevo componente?

R:
1. Crea una nueva carpeta en `src/components/`
2. Crea dos archivos: `NombreComponente.jsx` y `NombreComponente.css`
3. Exporta el componente y úsalo en las páginas necesarias

### P: ¿Cómo veo los eventos en desarrollo?

R: Asegúrate de que:
1. El backend PHP esté corriendo en `http://localhost:8000`
2. La base de datos esté configurada con datos de prueba
3. La aplicación React esté corriendo en `http://localhost:5173`

### P: ¿El formulario de contacto está funcional?

R: El formulario está preparado para integrarse con un backend. Actualmente captura los datos y debe conectarse con un servicio de email o API de backend.

### P: ¿Cómo hago deploy a producción?

R:
1. Ejecuta `npm run build`
2. Copia el contenido de `dist/` a tu servidor de Hostinger
3. Asegúrate de configurar las rutas correctas en producción
4. Verifica que el backend PHP esté también desplegado

---

