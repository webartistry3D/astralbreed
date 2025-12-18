# Common Customizations & Recipes

## Quick Recipes for Your Cinematic Scroll System

### 1. Add Section Progress Indicator

**In your home page:**
```tsx
const [currentSection, setCurrentSection] = useState(0);

return (
  <FullPage onSectionChange={setCurrentSection}>
    {/* sections */}
  </FullPage>
);
```

**Add this UI:**
```tsx
<div className="fixed bottom-8 right-8 z-50 text-white">
  <div className="text-sm font-semibold">{currentSection + 1} / 7</div>
</div>
```

### 2. Speed Up Scroll Transitions

```tsx
// Default: 1200ms
<FullPage lockDuration={1000}>  {/* Faster */}

// Or very fast:
<FullPage lockDuration={800}>   {/* Snappy */}
```

### 3. Slow Down Scroll Transitions

```tsx
// More cinematic:
<FullPage lockDuration={1500}>  {/* Slower */}

// Very dramatic:
<FullPage lockDuration={2000}>  {/* Very slow */}
```

### 4. Track Section Views in Analytics

```tsx
<FullPage onSectionChange={(index) => {
  const sections = ['hero', 'about', 'services', 'skills', 'projects', 'cta', 'footer'];
  
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'section_view', {
      section: sections[index],
      timestamp: new Date().toISOString(),
    });
  }
  
  // Or custom tracking
  fetch('/api/analytics/section', {
    method: 'POST',
    body: JSON.stringify({ section: sections[index] }),
  });
}}>
```

### 5. Animate Content on Section Entry

```tsx
import { motion } from "framer-motion";

<Section id="about">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2>Your Title</h2>
    <p>Your content</p>
  </motion.div>
</Section>
```

### 6. Add Parallax to Background

```tsx
<Section id="about" className="relative overflow-hidden">
  {/* Fixed background */}
  <div className="absolute inset-0 -z-20">
    <video
      autoPlay
      muted
      loop
      className="w-full h-full object-cover scale-110"
    >
      <source src="/background-video.mp4" type="video/mp4" />
    </video>
  </div>
  
  {/* Content on top */}
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</Section>
```

### 7. Add Keyboard Navigation

```tsx
useEffect(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
      // Next section
      window.scrollBy(0, window.innerHeight);
    } else if (e.key === 'ArrowUp') {
      // Previous section
      window.scrollBy(0, -window.innerHeight);
    }
  };
  
  window.addEventListener('keydown', handleKeydown);
  return () => window.removeEventListener('keydown', handleKeydown);
}, []);
```

### 8. Customize Lenis Easing

Edit `FullPageEnhanced.tsx`:

```tsx
// Linear easing (constant speed)
easing: (t: number) => t

// Ease-in-out (slow start, fast middle, slow end)
easing: (t: number) => t < 0.5 
  ? 2 * t * t 
  : -1 + (4 - 2 * t) * t

// Custom bounce
easing: (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return c3 * t * t * t - c1 * t * t;
}
```

### 9. Adjust Services Slider Speed

In `ServicesScrollerEnhanced.tsx` line 63:

```tsx
setTimeout(() => (isAnimatingRef.current = false), 750); // Adjust 750ms
```

Or in `Services.tsx` line 94:

```tsx
className="flex w-full h-full transition-transform duration-700 ease-out"
{/* duration-700 = 700ms, change to duration-1000 for slower */}
```

### 10. Add Custom Color Scheme

```tsx
<Section id="hero" className="bg-gradient-to-b from-slate-900 to-slate-950">
  <div className="absolute inset-0 -z-20">
    <div className="w-full h-full bg-[url('/pattern.svg')] opacity-10" />
  </div>
  
  <div className="relative z-10">
    {/* Your content */}
  </div>
</Section>
```

### 11. Add Scroll Progress Bar

```tsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    setProgress(scrolled);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
  <>
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 z-40"
         style={{ width: `${progress}%` }} />
    <FullPage>
      {/* sections */}
    </FullPage>
  </>
);
```

### 12. Lazy Load Sections

```tsx
import { Suspense, lazy } from 'react';

const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));

<FullPage>
  <Section id="hero">
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
  </Section>
  
  <Section id="about">
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  </Section>
</FullPage>
```

### 13. Add Page Transition on Section Change

```tsx
const [isTransitioning, setIsTransitioning] = useState(false);

<FullPage onSectionChange={(index) => {
  setIsTransitioning(true);
  setTimeout(() => setIsTransitioning(false), 600);
}}>

{isTransitioning && (
  <div className="fixed inset-0 bg-black/10 z-40 pointer-events-none
                  transition-opacity duration-600" />
)}
```

### 14. Disable Scroll Lock on Mobile

```tsx
const isMobile = window.matchMedia('(max-width: 768px)').matches;

return (
  <FullPage lockDuration={isMobile ? 0 : 1200}>
    {/* Sections - no lock on mobile */}
  </FullPage>
);
```

### 15. Add Scroll Counter

```tsx
const [scrollCount, setScrollCount] = useState(0);

useEffect(() => {
  const handleWheel = () => setScrollCount(prev => prev + 1);
  window.addEventListener('wheel', handleWheel);
  return () => window.removeEventListener('wheel', handleWheel);
}, []);

<div className="fixed top-8 left-8 text-white text-xs opacity-50">
  Scrolls: {scrollCount}
</div>
```

### 16. Custom Services Slider Styling

In `Services.tsx`, customize the slide container:

```tsx
<div
  className={`w-screen h-screen flex flex-col items-center justify-center p-12 
    text-center transition-all duration-700
    ${active ? 'opacity-100 scale-100 blur-none' : 'opacity-30 scale-90 blur-sm'}`}
>
```

### 17. Add Scroll Direction Indicator

```tsx
const [direction, setDirection] = useState<'up' | 'down' | null>(null);
const prevScrollRef = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const current = window.scrollY;
    if (current > prevScrollRef.current) {
      setDirection('down');
    } else {
      setDirection('up');
    }
    prevScrollRef.current = current;
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<div className="fixed bottom-8 left-8 text-white">
  Direction: {direction}
</div>
```

### 18. Lock First Section (Hero)

```tsx
<Section id="hero" className="sticky top-0 h-screen">
  {/* This section stays visible longer */}
</Section>
```

### 19. Add Haptic Feedback (Mobile)

```tsx
<FullPage onSectionChange={(index) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(50); // Vibrate on section change
  }
}}>
```

### 20. Custom Scroll Sound (Fun!)

```tsx
<FullPage onSectionChange={(index) => {
  const audio = new Audio('/snap-sound.mp3');
  audio.play().catch(() => {}); // Catch errors gracefully
}}>
```

## Performance Optimization Recipes

### Recipe: Optimize for Large Images

```tsx
<img
  src="/image.jpg"
  alt="Description"
  loading="lazy"           // Lazy load
  decoding="async"         // Non-blocking decode
  className="w-full h-full object-cover"
  srcSet="/image-small.jpg 480w, /image.jpg 1024w"  // Responsive
/>
```

### Recipe: Optimize 3D Rendering

```tsx
<Canvas
  dpr={[1, 1.5]}           // Limit DPI on low-end devices
  gl={{ antialias: true, powerPreference: 'high-performance' }}
>
  {/* 3D content */}
</Canvas>
```

### Recipe: Optimize Animations

```tsx
// Use transform instead of positional changes
className="transition-transform duration-700"  // ✔ Fast
className="transition-position duration-700"   // ❌ Slow

// Use opacity instead of visibility
className="transition-opacity duration-700"    // ✔ Fast
className="transition-height duration-700"     // ❌ Slow
```

## Debugging Recipes

### Recipe: Enable Visual Debugging

```css
/* Add to index.css temporarily */
section[data-fullpage-section] {
  outline: 2px dashed lime;
  outline-offset: -2px;
}

.transition-transform {
  outline: 1px solid cyan;
}
```

### Recipe: Performance Monitor

```tsx
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) {
        console.warn(`⚠️ Jank detected: ${entry.name} (${entry.duration.toFixed(0)}ms)`);
      }
    });
  });
  
  observer.observe({ entryTypes: ['measure', 'longtask'] });
  return () => observer.disconnect();
}, []);
```

---

**Pro Tip:** Combine multiple recipes for amazing results! Mix section animations with progress bars and analytics tracking for a fully-featured cinematic experience.

For more advanced customization, refer to:
- `CINEMATIC_SCROLL_GUIDE.md` - Hook API reference
- `CSS_GUIDELINES.md` - Styling best practices
- `ARCHITECTURE.md` - System internals
