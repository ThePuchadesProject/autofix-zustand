# AutoFix Workshop Management

[English](#english) | [Español](#español)

---

## English

### Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Roadmap](#roadmap)
- [Local Installation](#local-installation)

---

### About the Project

AutoFix Workshop Management is a web application designed for auto repair shops. It helps manage vehicle and customer intake, track repair orders, update status, and handle repair records directly in the browser with local storage persistence.

### Live Demo

- [autofix.thepuchadesproject.com](https://autofix.thepuchadesproject.com)

### Tech Stack

- **React 19** - UI component library
- **TypeScript** - Type safety and maintainability
- **TailwindCSS (v4)** - Utility-first styling
- **Vite** - Build tool and development server
- **Zustand** - Global state management with Redux DevTools support
- **React Hook Form** - Form state and validation
- **React-Toastify** - User feedback notifications

### Key Features

- Register vehicles with owner and repair details.
- Validate input fields with clear error messages.
- Manage repair status with full CRUD operations (create, read, edit, delete).
- Visual toast alerts for user actions.
- Local storage persistence to keep data across sessions.

### Roadmap

- [x] Initial project setup (Vite, React 19, TypeScript, TailwindCSS v4).
- [x] Base layout and TailwindCSS UI components.
- [x] Form integration and typing with React Hook Form.
- [x] Error alert component for form validation.
- [ ] Zustand store creation with TypeScript and Redux DevTools.
- [ ] Vehicle repair list and detailed order cards.
- [ ] Edit mode synchronization with form fields.
- [ ] Delete action with confirmation.
- [ ] Toast notifications with React-Toastify.
- [ ] LocalStorage synchronization for Zustand store.

### Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThePuchadesProject/autofix-zustand.git
   cd autofix-zustand
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Español

### Índice

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Demo en Vivo](#demo-en-vivo)
- [Stack Tecnológico](#stack-tecnológico)
- [Funcionalidades Principales](#funcionalidades-principales)
- [Hoja de Ruta](#hoja-de-ruta)
- [Instalación Local](#instalación-local)

---

### Acerca del Proyecto

AutoFix Workshop Management es una aplicación web pensada para talleres mecánicos. Permite gestionar la recepción de vehículos y clientes, realizar el seguimiento de las órdenes de trabajo, actualizar su estado y administrar registros de reparación directamente en el navegador con persistencia local.

### Demo en Vivo

- [autofix.thepuchadesproject.com](https://autofix.thepuchadesproject.com)

### Stack Tecnológico

- **React 19** - Librería para la interfaz de usuario
- **TypeScript** - Tipado estático y robustez
- **TailwindCSS (v4)** - Estilos con clases utilitarias
- **Vite** - Servidor de desarrollo y empaquetador
- **Zustand** - Gestión de estado global ligera con soporte para Redux DevTools
- **React Hook Form** - Manejo y validación de formularios
- **React-Toastify** - Alertas visuales y notificaciones

### Funcionalidades Principales

- Registro de vehículos con datos del cliente y detalles de avería/reparación.
- Validación de campos con mensajes de error claros.
- Gestión completa de órdenes de reparación (crear, listar, editar y eliminar).
- Notificaciones visuales en pantalla para acciones clave.
- Persistencia de datos en localStorage para conservar los registros.

### Hoja de Ruta

- [x] Configuración inicial del proyecto (Vite, React 19, TypeScript, TailwindCSS v4).
- [x] Maquetación base y componentes de interfaz con TailwindCSS.
- [x] Integración y tipado de formularios con React Hook Form.
- [x] Componente para mensajes de error en validaciones.
- [ ] Creación y tipado del Store con Zustand y conexión con Redux DevTools.
- [ ] Listado de reparaciones y tarjetas de información de órdenes.
- [ ] Sincronización del formulario en modo edición.
- [ ] Eliminación de registros con confirmación.
- [ ] Alertas y notificaciones visuales con React-Toastify.
- [ ] Persistencia de datos del store en localStorage.

### Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ThePuchadesProject/autofix-zustand.git
   cd autofix-zustand
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
