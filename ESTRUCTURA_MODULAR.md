# Estructura Modular del Proyecto - Gabinete Pedagógico

## 📁 Organización del Proyecto

```
src/
├── js/
│   ├── main.js              # Navegación principal y scroll
│   ├── form.js              # Manejo de formularios
│   ├── directivas.js        # Módulo Directivas
│   ├── eventos.js           # Módulo Eventos
│   ├── monitoreo.js         # Módulo Monitoreo
│   ├── faltas.js            # Módulo Faltas y Tardanzas
│   ├── reportes.js          # Módulo Reportes
│   └── recursos.js          # Módulo Recursos
├── pages/
│   ├── directivas.html      # Página completa de Directivas
│   ├── evento-*.html        # Páginas de eventos específicos
│   ├── monitoreo.html       # Página de Monitoreo
│   ├── faltas.html          # Página de Faltas
│   ├── reporte-*.html       # Páginas de reportes específicos
│   └── ...
├── css/
├── js/
└── ...
```

## 🔗 Links de Páginas Disponibles

### Directivas y Lineamientos
- **Página:** `/src/pages/directivas.html`
- **Link en línea:** `src/pages/directivas.html`
- **Funcionalidad:** Cuando haces clic en la tarjeta de Directivas en el inicio, se redirige a esta página que muestra imagen + texto completo con link a documentación oficial

## 📝 Descripción de Cada Módulo

### main.js
- Manejo de navegación principal
- Control de scroll suave
- Actualización del sidebar activo
- Funciones globales de scroll

### directivas.js
- Detecta clics en la sección de Directivas
- Redirige a `/src/pages/directivas.html`
- Añade cursor pointer para mejor UX

### eventos.js
- Manejo de eventos académicos
- Redirige a páginas específicas de eventos
- Usa atributos `data-event-id`

### monitoreo.js
- Gestión de la sección Monitoreo
- Redirige a `/src/pages/monitoreo.html`

### faltas.js
- Módulo para Faltas y Tardanzas
- Redirige a `/src/pages/faltas.html`

### reportes.js
- Manejo de diferentes tipos de reportes
- Redirige a páginas específicas según el tipo
- Usa atributos `data-report-type`

### recursos.js
- Gestión de recursos educativos
- Redirige a links especificados en `data-recurso-link`

### form.js
- Manejo del formulario de contacto
- Prevención de envío por defecto
- Confirmación al usuario

## 🚀 Cómo Agregar Nuevas Páginas

1. **Crear el archivo HTML** en `/src/pages/`
2. **Importar estilos:** `<link rel="stylesheet" href="../../src/output.css">`
3. **Crear el módulo JS** en `/src/js/` si es necesario
4. **Agregarlo a index.html:** `<script src="src/js/nuevo-modulo.js"></script>`
5. **Actualizar el HTML principal** con los atributos data necesarios

## 🎨 Colores Principales

- **Brand Color:** `#007AFF` (Azul oficial)
- **Fondo:** Blanco (`#FFFFFF`)
- **Texto Principal:** Gris oscuro (`#111827`)
- **Bordes:** Azul brand (`#007AFF`)

## 📱 Funcionalidades Implementadas

✅ Navegación modular por secciones
✅ Página dedicada para Directivas con imagen y texto
✅ Links internos y externos
✅ Formulario de contacto funcional
✅ Sidebar activo según scroll
✅ Diseño responsivo
✅ Color brand unificado

## 🔄 Próximas Funcionalidades

- [ ] Crear páginas para eventos específicos
- [ ] Página completa de Monitoreo
- [ ] Página de Faltas con tabla detallada
- [ ] Generador de Reportes
- [ ] Recursos descargables
- [ ] Sistema de autenticación (opcional)
