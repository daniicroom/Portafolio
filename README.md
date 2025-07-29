# 📄 Dynamic Portfolio & PDF CV Generator

Generador de portafolio profesional y currículum dinámico utilizando React, Next.js y @react-pdf/renderer. Convierte un objeto JSON (resume-data.tsx) en una interfaz web moderna y un CV descargable en PDF.

## ✨ Características

- Diseño responsivo con Tailwind CSS.
- Sección "Sobre mí", educación, experiencia, habilidades, certificaciones, premios y voluntariado.
- Visualización en línea del PDF (usando `PDFViewer`).
- Descarga del CV en un solo clic (`generatePDF()`).
- Fuente personalizada IBM Plex Serif y Open Sans.
- Datos completamente dinámicos a partir de JSON (`resume-data.tsx`).
- Soporte para despliegue en Vercel.

# 🚀 Deploy 
Despliega instantáneamente tu CV usando Vercel. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/daniicroom/Portafolio)


# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, TailwindCss, @react-pdf/renderer, AOS, Framer Motion
- Auto generated Layout
- Responsive for different devices

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/daniicroom/Portafolio.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

# Run with Docker

Build the container

```
docker compose build
```

Run the container

```
docker compose up -d
```

Stop the Container

```
docker compose down 
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
