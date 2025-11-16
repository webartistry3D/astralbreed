# Design Guidelines: 3D Personal Portfolio Landing Page

## Design Approach
**Reference-Based**: Drawing inspiration from modern 3D web experiences (Awwwards-style portfolios, Bruno Simon, Apple product pages) with glassmorphic UI trends and immersive Three.js integration.

## Typography System
**Primary Font**: Montserrat (Google Fonts)
- Headings: Montserrat Bold (700) - Hero title: text-5xl md:text-7xl, Section titles: text-3xl md:text-5xl
- Subheadings: Montserrat SemiBold (600) - text-xl md:text-2xl
- Body: Montserrat Regular (400) - text-base md:text-lg
- Small text: Montserrat Medium (500) - text-sm

## Layout System
**Spacing Primitives**: Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-6 md:gap-8
- Container max-width: max-w-7xl with px-6 md:px-8

## Theme System (Dark/Light Mode)

**Dark Mode (Default)**
- Background: Deep gradient (slate-950 to slate-900)
- Surface: slate-800/50 with backdrop-blur
- Text: slate-100 (primary), slate-400 (secondary)
- Accents: Blue gradient (blue-500 to cyan-400)

**Light Mode**
- Background: Clean gradient (slate-50 to white)
- Surface: white/80 with backdrop-blur
- Text: slate-900 (primary), slate-600 (secondary)
- Accents: Blue gradient (blue-600 to cyan-500)

## Glassmorphic Navigation
- Position: Fixed top with backdrop-blur-xl
- Background: bg-slate-900/70 (dark) or bg-white/70 (light)
- Border: border-b border-slate-700/50 (dark) or border-slate-200/50 (light)
- Hamburger menu (mobile): Slides from right, full-height overlay with blur
- Links: Smooth color transitions, active state with accent color underline
- Theme toggle: Sun/moon icon button positioned top-right
- Height: h-16 md:h-20

## 3D Elements Strategy

**Hero Section** (Primary 3D Focus)
- Floating 3D geometric object (sphere/torus/abstract shape) using Three.js
- Subtle rotation animation on mouse movement
- Particle system background with subtle drift
- Position: Right side on desktop, centered on mobile
- Color-shifting based on theme (blue/cyan palette)

**Secondary 3D Accents**
- Services section: Floating 3D icons above each card on hover
- Skills section: 3D badge depth effect
- Footer: Subtle 3D grid background

## Component Library

**Hero Section**
- Full viewport height (min-h-screen) with centered content
- Two-column layout (desktop): Text left, 3D canvas right
- CTAs: Primary (solid gradient button) + Secondary (ghost button with border)
- Background: Animated gradient mesh with subtle movement

**Section Cards** (Services, Projects)
- Glassmorphic cards: backdrop-blur-lg with border
- Padding: p-8
- Rounded corners: rounded-2xl
- Hover: Lift effect (scale-105) with glow shadow
- Icon size: w-12 h-12 with gradient background

**Skills Badges**
- Pill-shaped: rounded-full px-6 py-3
- Grid layout: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Subtle shadow and border
- Hover: Slight scale and color shift

**CTA Section**
- Centered layout with gradient background
- Large heading with accent gradient text
- Single prominent button with blur background (as specified)

**Social Media Icons**
- Icon-only (no text labels)
- Size: w-10 h-10
- Circular backgrounds with hover scale
- Positioned in footer, evenly spaced
- Icons: LinkedIn, GitHub, Twitter, Email (using Lucide icons)

## Animations & Interactions

**Smooth Scroll**
- Offset for fixed header: scroll-mt-20
- Easing: smooth behavior with custom duration
- Menu clicks trigger scroll-into-view with offset

**Framer Motion**
- Section fade-in: Stagger children on scroll into view
- Cards: Hover scale (1.05) with spring animation
- 3D elements: Continuous rotation with mouse parallax
- Page transitions: Minimal, focus on scroll-triggered reveals

**Hover States**
- Buttons: Scale + gradient shift + shadow enhancement
- Cards: Lift + border glow
- Links: Color transition + underline slide-in
- 3D objects: Rotation speed increase

## Mobile Optimization
- Hamburger menu at < 768px
- Stack all grid layouts to single column
- 3D canvas: Reduced complexity/particles on mobile
- Touch-friendly hit areas: minimum 44px
- Simplified animations for performance
- Hero: Text-first, 3D element reduced or hidden

## Images
**Hero Section**: No background image - replaced by Three.js animated 3D scene and gradient
**Project Cards**: Include project thumbnails/screenshots (3 images total) with rounded corners and subtle shadow
**About Section**: Optional profile photo - circular, medium size (w-32 h-32), positioned alongside text

## Visual Hierarchy
- Hero dominates with large typography and 3D focus
- Services cards create visual rhythm with consistent sizing
- Skills badges provide texture without overwhelming
- Projects showcase with equal prominence
- CTA section acts as visual anchor before footer