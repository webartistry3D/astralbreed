# CSS & Styling Guidelines for Cinematic Scroll System

## Global CSS Overrides (Applied Automatically)

The `FullPageEnhanced.tsx` component applies these CSS rules automatically:

```css
html, body {
  overflow: hidden !important;
  height: 100%;
  width: 100%;
}

* {
  -webkit-overflow-scrolling: auto;
}

@layer base {
  html {
    scroll-behavior: auto !important;
  }
}
```

**Why these rules:**
- `overflow: hidden` → Prevents momentum scrolling jank
- `height: 100%` → Prevents layout shift
- `-webkit-overflow-scrolling: auto` → Fixes mobile momentum jank
- `scroll-behavior: auto` → Overrides smooth-scroll polyfills

## Tailwind CSS Compatibility

✔ **Fully compatible** - No conflicts with Tailwind layers

### Safe Tailwind Classes for Sections

```tsx
// ✔ These work perfectly with cinematic scroll
<Section className="bg-gradient-to-b from-blue-500 to-purple-500">
  <div className="space-y-8 px-8">
    <h1 className="text-6xl font-bold text-white">Title</h1>
    <p className="text-lg text-white/80">Description</p>
  </div>
</Section>
```

### Classes to Avoid

```tsx
// ❌ Don't use these - they interfere with scroll
<Section className="overflow-y-auto">  {/* Breaks scroll lock */}
<Section className="scroll-smooth">     {/* Conflicts with Lenis */}
<Section className="overflow-visible">  {/* Causes bleed-through */}
<div className="scrollbar-hide">        {/* Hides scroll indicator */}

// ❌ Position fixed at wrong stacking context
<Section className="fixed inset-0">     {/* Use absolute instead */}

// ❌ Transform during scroll
<Section className="scale-125">         {/* Can jank section snap */}
```

## Foundation Styles

### Recommended Section Structure

```tsx
<Section id="about" className="relative bg-gradient-to-r from-slate-900 to-slate-800">
  {/* Background effect */}
  <div className="absolute inset-0 -z-20 bg-grid-pattern opacity-5" />
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-8">
    <h2 className="text-5xl font-bold text-white mb-8">Section Title</h2>
    <p className="text-xl text-white/70 leading-relaxed">Section content</p>
  </div>
</Section>
```

### Safe Z-Index Hierarchy

```css
/* ✔ Recommended z-index structure */

/* Background layers */
-z-20: Background images, gradients, videos
-z-10: Animated primitives, particle effects

/* Content layers */
z-0: Default (section content)
z-10: Cards, modals inside sections
z-20: Tooltips, popovers
z-30: Dropdowns, select menus

/* Fixed UI */
z-40: Progress bar (bottom indicator)
z-50: Section counter (bottom right)
z-[999]: Emergency modal/dialog
```

### Example Safe Implementation

```tsx
export default function Services() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background: -z-20 */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-30" />
      </div>

      {/* Animated particles: -z-10 */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <RainingPrimitives />
      </div>

      {/* Content: z-0 (default) */}
      <div className="relative flex items-center justify-center h-full">
        {/* Main content here */}
      </div>
    </section>
  );
}
```

## Animation Compatibility

### ✔ Safe Animation Properties

```tsx
// These don't cause jank
<div className="transition-all duration-700 ease-out">
  <div className="transform translate-y-0">Content</div>
</div>

// ✔ Transform properties
transform: translateX() ✔
transform: translateY() ✔
transform: scale() ✔ (small values only)
transform: rotate() ✔
opacity ✔

// ✔ With Tailwind
className="transition-transform duration-700"
style={{ transform: `translateX(-${index * 100}vw)` }}
```

### ❌ Avoid These Properties

```tsx
// ❌ Layout-affecting animations
height changes          ❌ (causes reflow)
width changes           ❌ (causes reflow)
padding changes         ❌ (causes reflow)
margin changes          ❌ (causes reflow)
border changes          ❌ (causes reflow)

// ❌ Paint-expensive animations
box-shadow transitions  ⚠️ (use opacity instead)
blur filters            ⚠️ (expensive on scroll)
complex gradients       ⚠️ (pre-render as images)
```

### Recommended Animation Framework

Use Framer Motion for section-specific animations:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h2>Section Title</h2>
</motion.div>
```

## Responsive Design

### Mobile Considerations

```tsx
// ✔ Responsive sections work fine
<Section className="px-4 md:px-8 lg:px-16">
  <div className="max-w-4xl">
    <h1 className="text-3xl md:text-5xl lg:text-6xl">Title</h1>
  </div>
</Section>

// ✔ Adjust Services slides for mobile
<Services className="scale-75 md:scale-100" />

// ✔ Touch-friendly spacing
<div className="space-y-4 md:space-y-8">
```

### Prevent Mobile Scroll Jank

```tsx
// Add to your index.css or FullPageEnhanced
@supports (scroll-behavior: smooth) {
  html {
    scroll-behavior: auto !important; /* Force auto */
  }
}

/* Prevent rubber band scrolling on iOS */
body {
  overscroll-behavior: none;
}

/* Optimize touch performance */
html,
body,
.fullpage-container {
  touch-action: auto;
}
```

## Background & Visual Effects

### Safe Background Patterns

```tsx
// ✔ Static gradient (fastest)
<div className="bg-gradient-to-b from-blue-500 to-purple-500" />

// ✔ CSS-only animated gradient
<div 
  className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-gradient-xy"
  style={{
    backgroundSize: '200% 200%',
  }}
/>

// ✔ Static noise texture overlay
<div 
  className="absolute inset-0 opacity-5 pointer-events-none"
  style={{
    backgroundImage: 'url(/noise.png)',
  }}
/>
```

### Avoid These Background Effects

```tsx
// ❌ Animated backgrounds during scroll
background-position animation          ❌ (jank)
background-size morphing               ❌ (expensive)
Filter effects on scroll               ❌ (GPU intensive)
Multiple blur layers                   ❌ (stacks badly)
```

### Recommended: 3D Particles

```tsx
// ✔ Use Three.js for complex effects
// ✔ Render off-screen, composite with sections
// ✔ Keep canvas at fixed size

<div className="absolute inset-0 -z-10">
  <Canvas>
    <RainingPrimitives />
  </Canvas>
</div>
```

## Typography & Text

### Safe Text Scaling

```tsx
// ✔ Use Tailwind's responsive scaling
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
  Large Heading
</h1>

// ✔ Maintain line-height for readability
<p className="text-lg leading-relaxed text-white/80">
  Body text with comfortable spacing
</p>

// ✔ Proper contrast on all backgrounds
<div className="bg-gradient-to-b from-slate-900 to-slate-950">
  <h2 className="text-5xl font-bold text-white">White on dark ✔</h2>
</div>
```

### Font Optimization

```tsx
/* Add to your CSS */
/* Preload fonts for critical sections */
@font-face {
  font-family: 'Montserrat';
  font-display: swap; /* Show fallback immediately */
  src: url('/fonts/montserrat.woff2') format('woff2');
}

/* System font fallback */
body {
  font-family: Montserrat, system-ui, -apple-system, sans-serif;
}
```

## Checkbox & Form Compatibility

### Safe Form Elements in Sections

```tsx
// ✔ Forms work perfectly in sections
<Section id="contact">
  <form className="space-y-6">
    <input 
      type="text" 
      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
      placeholder="Your name"
    />
    <textarea 
      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
      placeholder="Message"
    />
    <button 
      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded font-semibold"
    >
      Submit
    </button>
  </form>
</Section>
```

### Avoid Focus States That Change Layout

```tsx
// ❌ Don't do this
<input className="border-0 focus:border-2" />  /* Border width change = reflow */

// ✔ Do this instead
<input className="border border-transparent focus:border-white" />

// ✔ Or use outline
<input className="outline-none focus:ring-2 focus:ring-purple-500" />
```

## Dark Mode Support

### Current Setup (Already Dark)

Your site uses dark mode by default. The `index.css` includes:

```css
.dark {
  --background: 0 0% 8%;
  --foreground: 0 0% 95%;
  --card: 0 0% 10%;
  /* ... more variables ... */
}
```

### Maintain Dark Mode in Sections

```tsx
// ✔ Always use dark-friendly colors
<Section className="bg-slate-900">
  <h2 className="text-white">Always use white text on dark</h2>
  <p className="text-white/70">Reduced opacity for secondary text</p>
</Section>

// ✔ Use semantic color variables
<Section className="bg-background">
  <h2 className="text-foreground">Title</h2>
  <p className="text-foreground/70">Description</p>
</Section>
```

## Debug & Inspect

### Enable Visual Debugging

```css
/* Add to index.css temporarily */
section[data-fullpage-section] {
  outline: 2px solid lime;
}

.transition-transform {
  /* Show which elements are being transformed */
  outline: 1px solid cyan;
}
```

### Performance Monitoring

```tsx
// In your component
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) {
        console.warn(`⚠️ Jank detected: ${entry.name} (${entry.duration.toFixed(0)}ms)`);
      }
    });
  });

  observer.observe({ entryTypes: ['measure'] });
  return () => observer.disconnect();
}, []);
```

## Checklist Before Deploy

- [ ] All sections have `data-fullpage-section` attribute
- [ ] No `overflow-y-auto` or `overflow-visible` in sections
- [ ] No `scroll-smooth` or smooth-scroll overrides
- [ ] Background animations use CSS only (no JS loops)
- [ ] Text contrast passes WCAG AA (4.5:1 for body text)
- [ ] Mobile responsive (`max-width: 100vw`)
- [ ] Forms don't break on focus (no border width changes)
- [ ] Transform animations only (no layout-affecting CSS)
- [ ] Z-index layers follow recommended structure
- [ ] Fonts loaded with `font-display: swap`
- [ ] No layout shift on lazy-loaded images
- [ ] Services slider works on mobile
- [ ] Scroll jank test passes (60 FPS throughout)

---

**Last Updated:** December 2024  
**Status:** Production Ready ✔
