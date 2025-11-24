# Source Code Structure

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

