# Documentación Backend PHP/MySQL - Cafetería Fanny

## Índice de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. Vamos a usar servidor interno de php
3. [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
4. [Estructura del Backend PHP](#estructura-del-backend-php)
5. [Implementación de Archivos PHP](#implementación-de-archivos-php)
6. [Testing de Endpoints](#testing-de-endpoints)
7. [Integración con React](#integración-con-react)
8. [Troubleshooting](#troubleshooting)
9.  [FAQ](#faq)

---

## Requisitos Previos

### Software Necesario
- 
- **PHP** 7.4 o superior
- **MySQL** 5.7 o superior

- **Navegador web** (Chrome, Firefox, Edge)

### Conocimientos Recomendados
- Conceptos básicos de bases de datos relacionales
- Conocimiento básico de PHP
- Familiaridad con APIs REST
- Conceptos básicos de React

---

La base de datos ya existe con sus tablas, vamos a omitir este paso

## Configuración de la Base de Datos

### Paso 1: Crear la Base de Datos
1. Abre phpMyAdmin (`http://localhost/phpmyadmin`)
2. Haz clic en la pestaña **"SQL"**
3. Copia y pega el contenido del archivo `SQL_COMPLETO.sql`
4. Haz clic en **"Continuar"** o **"Go"**

### Paso 2: Verificar la Creación
Después de ejecutar el script, deberías ver:
- Base de datos: `cafeteria_fanny`
- Tablas: `events`, `event_services`, `event_gallery`, `event_testimonials`
- Datos: 8 eventos completos con todos sus datos relacionados

### Estructura de la Base de Datos

#### Tabla `events`
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- title (VARCHAR(255))
- subtitle (VARCHAR(255))
- description (TEXT)
- full_description (TEXT)
- event_date (VARCHAR(100))
- location (VARCHAR(255))
- attendees (VARCHAR(100))
- image (VARCHAR(255))
- banner_image (VARCHAR(255))
- is_active (TINYINT(1))
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### Tabla `event_services`
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- event_id (INT, FOREIGN KEY)
- service_name (VARCHAR(255))
- display_order (INT)
- created_at (TIMESTAMP)
```

#### Tabla `event_gallery`
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- event_id (INT, FOREIGN KEY)
- image_url (VARCHAR(255))
- display_order (INT)
- created_at (TIMESTAMP)
```

#### Tabla `event_testimonials`
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- event_id (INT, FOREIGN KEY)
- testimonial_text (TEXT)
- author_name (VARCHAR(255))
- author_position (VARCHAR(255))
- created_at (TIMESTAMP)
```

---

## Estructura del Backend PHP

### Organización de Carpetas
```
backend/
├── config/
│   └── database.php
├── models/
│   └── Event.php
├── api/
│   └── events/
│       ├── index.php
│       └── show.php
├── .htaccess
└── README.md
```

### Ubicación Recomendada
Coloca el backend en: `C:\Users\Lenovo\Downloads\cafeteriaFanny\backend`

Vamos usar el servidor interno de php para lanzar wl servicio en el puerto 8000

php -S localhost:8000
---

## Implementación de Archivos PHP

### 1. Archivo `config/database.php`

```php
<?php
/**
 * Configuración de la base de datos
 * Archivo: config/database.php
 */

class Database {
    private $host = 'localhost';
    private $db_name = 'cafeteria_fanny';
    private $username = 'root';
    private $password = '';
    private $conn;

    /**
     * Obtener conexión a la base de datos
     */
    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
```

### 2. Archivo `models/Event.php`

```php
<?php
/**
 * Modelo Event
 * Archivo: models/Event.php
 */

class Event {
    private $conn;
    private $table_name = "events";

    public $id;
    public $title;
    public $subtitle;
    public $description;
    public $full_description;
    public $event_date;
    public $location;
    public $attendees;
    public $image;
    public $banner_image;
    public $is_active;
    public $created_at;
    public $updated_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    /**
     * Obtener todos los eventos
     */
    function getAllEvents() {
        $query = "SELECT 
                    id, title, subtitle, description, event_date, 
                    location, attendees, image, banner_image, 
                    is_active, created_at, updated_at
                  FROM " . $this->table_name . " 
                  WHERE is_active = 1 
                  ORDER BY created_at DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    /**
     * Obtener un evento por ID
     */
    function getEventById($id) {
        $query = "SELECT 
                    id, title, subtitle, description, full_description, 
                    event_date, location, attendees, image, banner_image, 
                    is_active, created_at, updated_at
                  FROM " . $this->table_name . " 
                  WHERE id = ? AND is_active = 1 
                  LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->id = $row['id'];
            $this->title = $row['title'];
            $this->subtitle = $row['subtitle'];
            $this->description = $row['description'];
            $this->full_description = $row['full_description'];
            $this->event_date = $row['event_date'];
            $this->location = $row['location'];
            $this->attendees = $row['attendees'];
            $this->image = $row['image'];
            $this->banner_image = $row['banner_image'];
            $this->is_active = $row['is_active'];
            $this->created_at = $row['created_at'];
            $this->updated_at = $row['updated_at'];
            return true;
        }
        return false;
    }

    /**
     * Obtener servicios de un evento
     */
    function getEventServices($event_id) {
        $query = "SELECT service_name, display_order 
                  FROM event_services 
                  WHERE event_id = ? 
                  ORDER BY display_order ASC";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $event_id);
        $stmt->execute();

        return $stmt;
    }

    /**
     * Obtener galería de un evento
     */
    function getEventGallery($event_id) {
        $query = "SELECT image_url, display_order 
                  FROM event_gallery 
                  WHERE event_id = ? 
                  ORDER BY display_order ASC";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $event_id);
        $stmt->execute();

        return $stmt;
    }

    /**
     * Obtener testimonio de un evento
     */
    function getEventTestimonial($event_id) {
        $query = "SELECT testimonial_text, author_name, author_position 
                  FROM event_testimonials 
                  WHERE event_id = ? 
                  LIMIT 1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $event_id);
        $stmt->execute();

        return $stmt;
    }
}
?>
```

### 3. Archivo `api/events/index.php`

```php
<?php
/**
 * API Endpoint: Obtener todos los eventos
 * Archivo: api/events/index.php
 * Método: GET
 * URL: http://localhost/cafeteria_backend/api/events/
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/Event.php';

$database = new Database();
$db = $database->getConnection();

$event = new Event($db);
$stmt = $event->getAllEvents();
$num = $stmt->rowCount();

if($num > 0) {
    $events_arr = array();
    $events_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $event_item = array(
            "id" => $id,
            "title" => $title,
            "subtitle" => $subtitle,
            "description" => $description,
            "event_date" => $event_date,
            "location" => $location,
            "attendees" => $attendees,
            "image" => $image,
            "banner_image" => $banner_image,
            "is_active" => $is_active,
            "created_at" => $created_at,
            "updated_at" => $updated_at
        );

        array_push($events_arr["records"], $event_item);
    }

    http_response_code(200);
    echo json_encode($events_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No se encontraron eventos."));
}
?>
```

### 4. Archivo `api/events/show.php`

```php
<?php
/**
 * API Endpoint: Obtener evento por ID
 * Archivo: api/events/show.php
 * Método: GET
 * URL: http://localhost/cafeteria_backend/api/events/show.php?id=1
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/Event.php';

$database = new Database();
$db = $database->getConnection();

$event = new Event($db);

$id = isset($_GET['id']) ? $_GET['id'] : die();

if($event->getEventById($id)) {
    // Obtener servicios
    $services_stmt = $event->getEventServices($event->id);
    $services = array();
    while ($service = $services_stmt->fetch(PDO::FETCH_ASSOC)) {
        $services[] = $service['service_name'];
    }

    // Obtener galería
    $gallery_stmt = $event->getEventGallery($event->id);
    $gallery = array();
    while ($img = $gallery_stmt->fetch(PDO::FETCH_ASSOC)) {
        $gallery[] = $img['image_url'];
    }

    // Obtener testimonio
    $testimonial_stmt = $event->getEventTestimonial($event->id);
    $testimonial = null;
    if($testimonial_stmt->rowCount() > 0) {
        $testimonial_row = $testimonial_stmt->fetch(PDO::FETCH_ASSOC);
        $testimonial = array(
            "text" => $testimonial_row['testimonial_text'],
            "author" => $testimonial_row['author_name'],
            "position" => $testimonial_row['author_position']
        );
    }

    $event_arr = array(
        "id" => $event->id,
        "title" => $event->title,
        "subtitle" => $event->subtitle,
        "description" => $event->description,
        "full_description" => $event->full_description,
        "event_date" => $event->event_date,
        "location" => $event->location,
        "attendees" => $event->attendees,
        "image" => $event->image,
        "banner_image" => $event->banner_image,
        "is_active" => $event->is_active,
        "created_at" => $event->created_at,
        "updated_at" => $event->updated_at,
        "services" => $services,
        "gallery" => $gallery,
        "testimonial" => $testimonial
    );

    http_response_code(200);
    echo json_encode($event_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Evento no encontrado."));
}
?>
```

### 5. Archivo `.htaccess`

```apache
RewriteEngine On

# Redirigir todas las peticiones a index.php si el archivo no existe
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^api/events/?$ api/events/index.php [L]
RewriteRule ^api/events/([0-9]+)/?$ api/events/show.php?id=$1 [L]

# Headers CORS
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization, X-Requested-With"

# Manejar preflight requests
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L]
```

---

## Configuración de Apache

### Paso 1: Habilitar mod_rewrite
1. Abre el archivo `C:\xampp\apache\conf\httpd.conf`
2. Busca la línea: `#LoadModule rewrite_module modules/mod_rewrite.so`
3. Descomenta la línea (quita el #)
4. Guarda el archivo

### Paso 2: Configurar Virtual Host (Opcional)
1. Abre el archivo `C:\xampp\apache\conf\extra\httpd-vhosts.conf`
2. Agrega la siguiente configuración:

```apache
<VirtualHost *:80>
    DocumentRoot "C:/xampp/htdocs/cafeteria_backend"
    ServerName cafeteria-api.local
    <Directory "C:/xampp/htdocs/cafeteria_backend">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### Paso 3: Reiniciar Apache
1. En el Panel de Control de XAMPP, detén Apache
2. Inicia Apache nuevamente

---

## Testing de Endpoints

### 1. Obtener Todos los Eventos
**URL:** `http://localhost/backend/api/events/`
**Método:** GET

**Respuesta esperada:**
```json
{
  "records": [
    {
      "id": 1,
      "title": "Evento La Rural",
      "subtitle": "Congreso Argentino de Cardiología (SAC)",
      "description": "Servicio de café premium...",
      "event_date": "15 al 17 de Octubre, 2025",
      "location": "La Rural - Predio Ferial, Buenos Aires",
      "attendees": "500+ profesionales",
      "image": "/assets/images/laRural/caratula.jpg",
      "banner_image": "/assets/images/laRural/caratula.jpg",
      "is_active": 1,
      "created_at": "2024-01-01 00:00:00",
      "updated_at": "2024-01-01 00:00:00"
    }
  ]
}
```

### 2. Obtener Evento por ID
**URL:** `http://localhost/backend/api/events/show.php?id=1`
**Método:** GET

**Respuesta esperada:**
```json
{
  "id": 1,
  "title": "Evento La Rural",
  "subtitle": "Congreso Argentino de Cardiología (SAC)",
  "description": "Servicio de café premium...",
  "full_description": "El Congreso Argentino de Cardiología...",
  "event_date": "15 al 17 de Octubre, 2025",
  "location": "La Rural - Predio Ferial, Buenos Aires",
  "attendees": "500+ profesionales",
  "image": "/assets/images/laRural/caratula.jpg",
  "banner_image": "/assets/images/laRural/caratula.jpg",
  "is_active": 1,
  "created_at": "2024-01-01 00:00:00",
  "updated_at": "2024-01-01 00:00:00",
  "services": [
    "Máquinas de café profesionales",
    "Baristas especializados",
    "Variedad de cápsulas premium"
  ],
  "gallery": [
    "/assets/images/laRural/caratula.jpg",
    "/assets/images/laRural/caratula.jpg"
  ],
  "testimonial": {
    "text": "El servicio de café fue excepcional...",
    "author": "Dr. Carlos Mendoza",
    "position": "Director del Congreso SAC"
  }
}
```

### 3. Usar Postman o cURL
```bash
# Obtener todos los eventos
curl -X GET http://localhost/backend/api/events/

# Obtener evento específico
curl -X GET http://localhost/backend/api/events/show.php?id=1
```

---

## Integración con React

### 1. Modificar `eventService.js`

```javascript
// src/services/eventService.js

const API_BASE_URL = 'http://localhost/backend/api';

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
      const response = await fetch(`${API_BASE_URL}/events/show.php?id=${id}`);
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

### 2. Actualizar `Events.jsx`

```javascript
// src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventService } from '../services/eventService';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await eventService.getAllEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ... resto del componente
};
```

### 3. Actualizar `EventDetail.jsx`

```javascript
// src/pages/EventDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventService } from '../services/eventService';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await eventService.getEventById(id);
        setEvent(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading event:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  // ... resto del componente
};
```

---

## Troubleshooting

### Problema: Error de Conexión a la Base de Datos
**Síntomas:** Error "Connection failed" en el navegador
**Solución:**
1. Verificar que MySQL esté ejecutándose en XAMPP
2. Verificar las credenciales en `config/database.php`
3. Verificar que la base de datos `cafeteria_fanny` existe

### Problema: Error 404 en las URLs de la API
**Síntomas:** "Not Found" al acceder a los endpoints
**Solución:**
1. Verificar que mod_rewrite esté habilitado
2. Verificar que el archivo `.htaccess` esté en la raíz del proyecto
3. Verificar la configuración de Apache

### Problema: Error CORS en React
**Síntomas:** "CORS policy" error en la consola del navegador
**Solución:**
1. Verificar que los headers CORS estén configurados en PHP
2. Verificar que el archivo `.htaccess` incluya las reglas CORS
3. En desarrollo, usar `http://localhost` en lugar de `http://127.0.0.1`

### Problema: Imágenes no se muestran
**Síntomas:** Las imágenes de los eventos no cargan
**Solución:**
1. Verificar que las rutas de las imágenes sean correctas
2. Verificar que los archivos de imagen existan en la carpeta `public`
3. Ajustar las rutas en la base de datos si es necesario

---

## FAQ

### P: ¿Puedo usar otro servidor web además de Apache?
R: Sí, puedes usar Nginx, pero necesitarás configurar las reglas de reescritura de URL de manera diferente.

### P: ¿Cómo cambio el puerto de Apache?
R: Edita el archivo `httpd.conf` y cambia `Listen 80` por `Listen 8080` (o el puerto que prefieras).

### P: ¿Puedo usar una base de datos diferente a MySQL?
R: Sí, pero necesitarás modificar la clase `Database` y las consultas SQL para que sean compatibles con tu SGBD.

### P: ¿Cómo agrego más endpoints?
R: Crea nuevos archivos PHP en la carpeta `api/` y agrega las reglas correspondientes en `.htaccess`.

### P: ¿Cómo hago backup de la base de datos?
R: Usa phpMyAdmin > Exportar, o ejecuta `mysqldump -u root -p cafeteria_fanny > backup.sql` en la terminal.

---

## Conclusión

Esta documentación te proporciona todo lo necesario para implementar un backend PHP/MySQL funcional para la gestión de eventos de la Cafetería Fanny. El sistema incluye:

- ✅ Base de datos completa con 8 eventos de ejemplo
- ✅ API REST con endpoints para listar y obtener eventos
- ✅ Código PHP bien estructurado y documentado
- ✅ Configuración de Apache y mod_rewrite
- ✅ Integración completa con React
- ✅ Guía de troubleshooting y FAQ

Para cualquier duda o problema, consulta la sección de troubleshooting o revisa los logs de Apache y PHP en XAMPP.
