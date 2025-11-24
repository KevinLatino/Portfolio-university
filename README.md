# Portafolio de Estructuras de Datos y Algoritmos 2 - ULACIT

Portafolio web desarrollado para el curso de **Estructuras de Datos** de la Universidad Latinoamericana de Ciencia y Tecnología (ULACIT). Este proyecto documenta el aprendizaje y aplicación de conceptos fundamentales de estructuras de datos mediante ejemplos prácticos, explicaciones detalladas y reflexiones personales.

## 📚 Contenido del Repositorio

Este portafolio contiene **10 semanas** de contenido educativo sobre estructuras de datos y programación, incluyendo:

### Semanas de Contenido

1. **Semana 1 - Recursividad**: Técnica fundamental donde una función se llama a sí misma para resolver problemas complejos
2. **Semana 2 - Valores, Operadores y Expresiones**: Aborda distintos tipos de operadores y expresiones en programación
3. **Semana 3 - Estructuras de Control**: Componentes que permiten controlar el flujo de ejecución de un programa
4. **Semana 4 - Estructuras de Datos**: Organización y clasificaciones de estructuras de datos
5. **Semana 5 - Colas**: Estructura de datos tipo FIFO (First In, First Out)
6. **Semana 6 - Colas y Listas Enlazadas**: Exploración de la interconexión entre colas y listas enlazadas
7. **Semana 7 - Lista Simple**: Estudio de la forma más fundamental de estructura enlazada
8. **Semana 8 - Listas Simples y Aplicabilidad de Colas**: Consolidación de conceptos y aplicaciones prácticas
9. **Semana 9 - Lista Circular**: Variación de lista enlazada con circularidad
10. **Semana 10 - Lista Circular Doble**: Estructura avanzada con navegación bidireccional y circularidad

### Características del Contenido

Cada semana incluye:
- **Resumen**: Visión general del tema abordado
- **Desarrollo del Tema**: Explicaciones detalladas con secciones estructuradas
- **Ejemplos Prácticos**: Código en Java con syntax highlighting implementado
- **Diagramas**: Representaciones visuales de conceptos
- **Reflexión Personal**: Análisis y aprendizaje del estudiante

## 🛠️ Tecnologías Utilizadas

Este portafolio está construido con tecnologías modernas y estándares de la industria:

### Frontend
- **Next.js 16** - Framework React con App Router para renderizado del lado del servidor y generación estática
- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático para mayor robustez del código
- **Tailwind CSS 4** - Framework de CSS utility-first para diseño responsivo y moderno

### Librerías y Herramientas
- **Framer Motion** - Biblioteca de animaciones para React, utilizada en las tarjetas de temas
- **Lucide React** - Iconos SVG modernos y personalizables
- **React Syntax Highlighter** - Resaltado de sintaxis para ejemplos de código
- **Three.js** - Librería 3D para el efecto de fondo líquido interactivo


## 🚀 Hosting y Despliegue

El portafolio está desplegado en **Vercel**, una plataforma de hosting optimizada para aplicaciones Next.js y React.

### Características del Hosting
- **Despliegue Automático**: Integración continua con Git para despliegues automáticos
- **CDN Global**: Distribución de contenido a través de una red global para tiempos de carga óptimos
- **SSL Automático**: Certificados HTTPS incluidos automáticamente
- **Optimización Automática**: Next.js optimiza automáticamente las imágenes, fuentes y código
- **Serverless Functions**: API routes ejecutadas como funciones serverless

### URL del Proyecto
El portafolio está disponible en: [URL del proyecto en Vercel]

## 🏗️ Estructura del Código

Esta es la estructura del código fuente del portafolio, organizada siguiendo las mejores prácticas de Clean Code.

## Estructura de Directorios

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio (Hero)
│   ├── temas/             # Página de temas
│   └── semana/[id]/       # Páginas dinámicas de semanas
│
├── components/            # Componentes React
│   ├── CardComponent.tsx  # Componente de tarjeta
│   ├── hero/              # Componentes del hero
│   ├── ui/                # Componentes UI reutilizables
│   │   ├── CodeBlock.tsx
│   │   └── ScrollToTopButton.tsx
│   └── week/              # Componentes específicos de semanas
│       ├── WeekSection.tsx
│       ├── SummarySection.tsx
│       ├── DevelopmentSection.tsx
│       ├── ExamplesSection.tsx
│       ├── DiagramsSection.tsx
│       ├── ReflectionSection.tsx
│       ├── WeekHeader.tsx
│       └── DefaultWeekView.tsx
│
├── constants/             # Constantes de la aplicación
│   └── colors.ts          # Colores y paletas
│
├── data/                  # Datos estáticos
│   ├── weeks.ts           # Metadatos de semanas
│   └── weekContent.ts     # Contenido de semanas
│
├── lib/                   # Utilidades y funciones helper
│   ├── color-utils.ts     # Utilidades de colores
│   ├── text-formatter.tsx # Formateador de texto markdown
│   └── index.ts           # Exports centralizados
│
├── types/                 # Tipos TypeScript
│   └── card.ts            # Tipos de componentes de tarjetas
│
├── layout/                # Layouts personalizados
│   └── liquid-background.tsx
│
└── ui/                    # Componentes UI de terceros/configurados
    └── LiquidEther.tsx    # Componente de fondo líquido
```

## Principios de Clean Code Aplicados

### 1. Separación de Responsabilidades
- Cada componente tiene una única responsabilidad
- Utilidades separadas de componentes
- Constantes centralizadas

### 2. Modularidad
- Componentes pequeños y reutilizables
- Exports centralizados mediante `index.ts`
- Funciones puras en utilidades

### 3. Tipado Fuerte
- TypeScript en todos los archivos
- Interfaces bien definidas
- Tipos exportados desde archivos dedicados

### 4. Organización por Feature
- Componentes agrupados por dominio (week/, hero/, ui/)
- Datos separados de lógica de presentación
- Configuración centralizada

### 5. Reutilización
- Componentes base (WeekSection, ColoredSubsection)
- Utilidades genéricas (color-utils, text-formatter)
- Constantes compartidas

## Convenciones de Nomenclatura

- **Componentes**: PascalCase (ej: `CardComponent.tsx`)
- **Utilidades**: kebab-case (ej: `color-utils.ts`)
- **Constantes**: UPPER_SNAKE_CASE en archivos, camelCase para exports
- **Tipos/Interfaces**: PascalCase con sufijo descriptivo

## Imports

Usamos imports absolutos con el alias `@/` configurado en `tsconfig.json`:

```typescript
import { formatText } from '@/lib/text-formatter';
import { CodeBlock } from '@/components/ui';
import { SECTION_COLORS } from '@/constants/colors';
```

