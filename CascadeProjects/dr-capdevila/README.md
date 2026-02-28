# Dr. Nicolás Capdevilla - Website Profesional

Sitio web profesional, moderno y accesible para el Dr. Nicolás Capdevilla — especialista en medicina integrativa y manejo del dolor.

## 🎨 Características del Diseño

- **Paleta de colores**: Azul #0A76FF (principal), naranja #FF6A00 (CTA), blanco y grises
- **Tipografía**: Inter (sans-serif elegante y moderna)
- **Diseño responsive**: Mobile-first, adaptable a tablet y desktop
- **Accesibilidad**: WCAG AA, navegación por teclado, contraste adecuado
- **Microinteracciones**: Hover effects, transiciones suaves, animaciones on-scroll
- **SEO optimizado**: Meta tags, JSON-LD Schema, estructura semántica

## 📁 Estructura del Proyecto

```
dr-capdevila/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos completos
├── js/
│   └── main.js             # JavaScript funcional
├── assets/
│   ├── favicon.svg         # Favicon del sitio
│   └── images/             # Imágenes optimizadas (placeholder)
└── README.md               # Este archivo
```

## 🚀 Despliegue

### Opción 1: GitHub Pages (Recomendado)

1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu sitio estará disponible en `https://[username].github.io/dr-capdevila`

### Opción 2: Netlify

1. Arrastra la carpeta del proyecto a [Netlify](https://app.netlify.com/drop)
2. Obtén una URL instantánea: `https://[random-name].netlify.app`

### Opción 3: Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel` en la carpeta del proyecto
3. Sigue las instrucciones

### Opción 4: Hosting tradicional

1. Sube todos los archivos a tu servidor vía FTP
2. Asegúrate que `index.html` esté en la raíz
3. Configura el dominio para apuntar a la carpeta

## 📸 Imágenes (Requeridas)

Debes agregar las siguientes imágenes en la carpeta `assets/images/`:

### Imágenes del Doctor
- `doctor-hero.jpg` - Foto profesional para sección hero (800x600px)
- `doctor-about.jpg` - Foto para sección sobre mí (400x500px)
- `doctor-profile.jpg` - Foto para meta tags y schema (400x400px)

### Imágenes de Pacientes (Testimonios)
- `patient-1.jpg` - María González (150x150px)
- `patient-2.jpg` - Carlos Rodríguez (150x150px)
- `patient-3.jpg` - Ana Martínez (150x150px)
- `patient-4.jpg` - Roberto Silva (150x150px)

### Imágenes del Blog
- `blog-1.jpg` - Manejo del dolor crónico (400x250px)
- `blog-2.jpg` - Medicina integrativa (400x250px)
- `blog-3.jpg` - Mindfulness (400x250px)

### Formatos recomendados:
- **Formato**: WebP (con fallback JPG)
- **Compresión**: 80-90% calidad
- **Tamaño máximo**: 500KB por imagen
- **Responsive**: Usar `srcset` para diferentes tamaños

## 🔧 Personalización

### Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
  --color-primary: #0A76FF;      /* Azul principal */
  --color-secondary: #FF6A00;    /* Naranja CTA */
  /* ... otras variables */
}
```

### Tipografía
Para cambiar la fuente:

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Selecciona tu fuente preferida
3. Reemplaza el link en `index.html`
4. Actualiza `--font-family` en `css/styles.css`

### Contenido
Edita directamente en `index.html`:
- Textos y títulos
- Información de contacto
- Testimonios
- Artículos del blog

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accesibilidad

El sitio cumple con:
- **WCAG 2.1 AA**
- Navegación por teclado completa
- Contraste de color mínimo 4.5:1
- Etiquetas ARIA apropiadas
- Estructura semántica HTML5

## 🔍 SEO Implementado

### Meta Tags (Home)
```html
<title>Dr. Nicolás Capdevilla — Medicina integrativa y manejo del dolor</title>
<meta name="description" content="Atención integral para el dolor crónico. Evaluación personalizada, tratamientos basados en evidencia y seguimiento continuo.">
```

### Schema.org JSON-LD
- LocalBusiness
- Physician
- Article (para blog)

### Open Graph
- Títulos y descripciones para redes sociales
- Imágenes optimizadas para sharing

## 📊 Rendimiento

### Optimizaciones implementadas:
- Lazy loading de imágenes
- CSS y JS minificados (producción)
- Fuentes preconectadas
- Imágenes optimizadas WebP
- Critical CSS inline (opcional)

### Métricas objetivo:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🛠️ Desarrollo

### Tecnologías usadas:
- **HTML5**: Semántico y accesible
- **CSS3**: Variables CSS, Grid, Flexbox
- **JavaScript ES6+**: Vanilla JS moderno
- **No frameworks**: Ligero y rápido

### Extensiones recomendadas (VS Code):
- Live Server
- Prettier
- ESLint
- Web Accessibility Checker

## 📞 Integraciones

### Formularios
Los formularios están listos para integrar con:
- **EmailJS**: Para envío directo
- **Formspree**: Backendless forms
- **Backend personalizado**: API REST

### Calendario
Reemplaza el placeholder del calendario con:
- **Calendly**: `<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>`
- **Acuity Scheduling**
- **Google Calendar**

### Analytics
Añade tu código de seguimiento:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔒 Seguridad

### HTTPS
Asegúrate de:
- Usar certificado SSL
- Redirigir HTTP a HTTPS
- Actualizar todos los enlaces a HTTPS

### Headers de seguridad (servidor)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📈 Mantenimiento

### Tareas mensuales:
- [ ] Revisar enlaces rotos
- [ ] Actualizar contenido del blog
- [ ] Optimizar imágenes nuevas
- [ ] Monitorear rendimiento
- [ ] Revisar accesibilidad

### Actualizaciones recomendadas:
- [ ] Agregar nuevas secciones según necesidad
- [ ] Actualizar testimonios
- [ ] Añadir nuevos tratamientos
- [ ] Optimizar para Core Web Vitals

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Pull Request

## 📄 Licencia

Este proyecto es propiedad del Dr. Nicolás Capdevilla. Todos los derechos reservados.

## 📞 Soporte

Para consultas sobre el sitio web:
- **Email**: info@drnicolascapdevilla.com
- **Teléfono**: +54 9 11 2345-6789

---

**Desarrollado con ❤️ para el Dr. Nicolás Capdevilla**
