# Personal Portfolio Landing Page

## Overview

This is a modern, interactive personal portfolio landing page showcasing a JavaScript Developer, Python Automation Engineer, and 3D/Web App Builder. The application features a single-page layout with smooth scrolling sections, glassmorphic UI design, and theme switching capabilities. Built with React, TypeScript, and Tailwind CSS, it emphasizes performance, visual appeal, and responsive design across all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing (replacing heavier alternatives like React Router)

**UI Component System**
- **Shadcn UI**: Comprehensive component library based on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Class Variance Authority (CVA)**: For managing component variants systematically
- Components follow the "New York" style variant from Shadcn

**Design System**
- **Typography**: Montserrat font family (Google Fonts) with predefined weight scales
- **Theme System**: Dual-mode (dark/light) with CSS variables for seamless switching
- **Spacing**: Consistent Tailwind spacing primitives (4, 6, 8, 12, 16, 20, 24)
- **Glassmorphic Design**: Backdrop blur effects with semi-transparent backgrounds
- **Color Palette**: Blue-to-cyan gradient accents with neutral slate base colors

**Layout Structure**
- Single-page application with scroll-to-section navigation
- Fixed glassmorphic header with responsive hamburger menu
- Sections: Hero, About, Services, Skills, Projects, CTA, Footer
- Mobile-first responsive design with breakpoints at 768px (md) and 1024px (lg)

**State Management**
- **React Query (@tanstack/react-query)**: For server state management (configured but minimal usage in current implementation)
- **React Context API**: ThemeProvider for global theme state
- **Local State**: Component-level state with useState for UI interactions (menu toggles, modal states, card flips)

**Animation Strategy**
- CSS transitions and transforms for interactive elements
- Custom keyframe animations for 3D floating effects in hero section
- Smooth scroll behavior implemented via CSS and JavaScript utilities
- Parallax effects in Services section based on scroll position

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal REST API server setup
- **TypeScript**: Full type safety across server code
- Currently configured as a static file server with placeholder API routes
- Custom middleware for request logging and JSON response capture

**Development Environment**
- **Vite Development Server**: HMR (Hot Module Replacement) in middleware mode
- **Replit Integration**: Custom plugins for error overlay, cartographer, and dev banner
- Environment-aware configuration (development vs production)

**Build Process**
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Platform target: Node.js with ESM module format

### Data Storage

**Database Configuration**
- **Drizzle ORM**: Type-safe ORM configured for PostgreSQL
- **Neon Serverless**: PostgreSQL adapter (@neondatabase/serverless)
- **Schema Definition**: Centralized in `shared/schema.ts` with Zod validation
- **Migrations**: Managed via Drizzle Kit, output to `./migrations` directory

**Current Schema**
- Users table with username/password fields
- UUID primary keys with auto-generation
- Zod schemas for runtime validation of insert operations

**Storage Interface**
- Abstract `IStorage` interface for CRUD operations
- `MemStorage` implementation for development (in-memory storage)
- Designed to swap with Drizzle-backed implementation for production

**Session Management**
- `connect-pg-simple` configured for PostgreSQL session store
- Session middleware setup prepared but not actively implemented

### Path Aliases & Module Resolution

**TypeScript Path Mapping**
- `@/*`: Maps to `client/src/*` for frontend code
- `@shared/*`: Maps to `shared/*` for code shared between client and server
- `@assets/*`: Maps to `attached_assets/*` for static assets
- Configured consistently across tsconfig.json and vite.config.ts

### Design Philosophy

**Reference-Based Approach**
- Inspired by modern 3D web experiences (Awwwards-style portfolios, Bruno Simon, Apple product pages)
- Glassmorphic UI trends with backdrop blur and semi-transparent surfaces
- Immersive visual design with subtle 3D elements (prepared for Three.js integration)

**Component Architecture**
- Atomic design principles with reusable UI components
- Section-based components (Hero, About, Services, Skills, Projects, CTA, Footer)
- Example components for isolated development and testing
- Consistent prop interfaces and TypeScript typing

**Performance Considerations**
- Lazy loading and code splitting via Vite
- Optimized font loading with preconnect hints
- CSS-based animations to reduce JavaScript overhead
- Efficient re-rendering with React best practices

## External Dependencies

### Core Frontend Libraries
- **React 18**: UI framework
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and dev server
- **Wouter**: Lightweight routing

### UI Component Libraries
- **@radix-ui/***: Headless UI primitives (30+ components including dialogs, dropdowns, tooltips, etc.)
- **Shadcn UI**: Pre-built accessible components based on Radix
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (Simple Icons for brand logos)

### State & Data Management
- **@tanstack/react-query**: Server state management
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **Zod**: Schema validation

### Backend & Database
- **Express.js**: Web server framework
- **Drizzle ORM**: TypeScript ORM
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store
- **drizzle-zod**: Integration between Drizzle and Zod

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production server build
- **@replit/vite-plugin-***: Replit-specific development plugins
- **PostCSS**: CSS processing with autoprefixer

### Utility Libraries
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management
- **nanoid**: Unique ID generation

### Specialized Components
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Vaul**: Drawer component
- **React Day Picker**: Calendar/date picker
- **Recharts**: Charting library (configured, minimal usage)
- **Input OTP**: One-time password input

### Font Integration
- **Google Fonts**: Montserrat font family loaded via CDN with weights 400, 500, 600, 700