# Guía de Tailwind CSS

Este proyecto ahora utiliza **Tailwind CSS** para gestionar todos los estilos.

## Comandos Disponibles

### Desarrollo (Watch Mode)
```bash
npm run dev
```
Este comando compila el CSS de Tailwind en modo observación. Cada vez que hagas cambios en los archivos HTML o CSS, los cambios se recompilan automáticamente.

### Producción (Build)
```bash
npm run build
```
Este comando genera el CSS minificado para producción en `src/output.css`.

## Estructura de Archivos

- **src/input.css**: Archivo fuente donde se definen las directivas de Tailwind y componentes personalizados
- **src/output.css**: CSS compilado y minificado (generado automáticamente)
- **tailwind.config.js**: Configuración de Tailwind CSS con colores personalizados
- **postcss.config.js**: Configuración de PostCSS

## Colores Personalizados

Se han definido colores personalizados en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    dark: "#0d2c54",
    main: "#1e5a96",
    light: "#e0e7ff",
  },
}
```

Úsalos en el HTML:
```html
<div class="bg-primary-main text-primary-dark">...</div>
```

## Componentes Personalizados

Los siguientes componentes están definidos en `src/input.css`:

- `.hero-gradient` - Gradiente para el header
- `.card-hover` - Efecto de hover en tarjetas
- `.section-title` - Estilos para títulos de sección
- `.sidebar-btn` - Botones de la barra lateral
- `.section-image` - Imágenes de sección
- `.formal-line` - Línea divisoria formal

## Instalación Inicial

Si necesitas reinstalar las dependencias:

```bash
npm install
```

## Documentación

- [Tailwind CSS](https://tailwindcss.com/docs)
- [Tailwind Config](https://tailwindcss.com/docs/configuration)
