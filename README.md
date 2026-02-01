# Mithila Royal Studio - Cinematic Wedding Portfolio

A premium, media-first wedding photography portfolio website featuring cinematic design, orchestrated motion, and Instagram-inspired content grids.

## 🎨 Design Features

### Visual Identity
- **Dark-to-Light Gradient Aesthetic**: Deep charcoal (#1a1a1d) transitioning to warm cream (#f4f1ea)
- **Accent Gold**: Muted gold (#d4af37) for CTAs and highlights
- **Typography**:
  - Display: Fraunces (900 weight) for dramatic headers
  - Body: Newsreader (300 weight) for elegant readability
  - Accent: Space Grotesk (500 weight) for labels

### Key Sections

1. **Hero Section**
   - Full-viewport immersive experience with animated background
   - Large-scale studio name with fade-in animation
   - Scroll indicator for user guidance

2. **Services Section**
   - Three core offerings: Wedding Photography, Videography, Drone Coverage
   - Hover-triggered animations and video preview effects
   - Floating cards with depth and shadow effects

3. **Media Grid**
   - Instagram-style masonry layout with mixed aspect ratios
   - Interactive lightbox gallery with swipe navigation
   - Hover effects with scale and border animations

4. **Cinematic Reels Section**
   - Vertical carousel for desktop, horizontal swipe for mobile
   - Auto-play functionality with muted audio toggle
   - Snap-to-center behavior on mobile

5. **Testimonials Section**
   - Parallax scrolling effects on background images
   - Floating quote cards with frosted glass aesthetic
   - Client testimonials with elegant typography

6. **Footer**
   - Mesh gradient background (purple-black to warm sepia)
   - Owner information and contact CTAs
   - Social media links with hover animations

### Motion Language
- **Entrance Animations**: 0.8s ease-out curves with staggered delays
- **Hover States**: Lift effect with shadow expansion and scale transforms
- **Scroll Parallax**: Background at 0.5x speed for layered depth
- **Smooth Transitions**: 400ms cubic-bezier easing throughout

## 🚀 Technologies Used

- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations and parallax effects
- **Lucide React** for icons
- **ShadCN UI** component library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Component Structure

```
src/
├── components/
│   ├── home.tsx                          # Main landing page
│   └── landing/
│       ├── Navigation.tsx                # Sticky nav with mobile menu
│       ├── HeroSection.tsx               # Immersive hero with animations
│       ├── ServicesSection.tsx           # Service cards with hover effects
│       ├── MediaGrid.tsx                 # Portfolio grid with lightbox
│       ├── ReelsSection.tsx              # Video carousel component
│       ├── TestimonialsSection.tsx       # Parallax testimonials
│       └── Footer.tsx                    # Contact CTA and social links
```

## 🎨 Customization

### Colors
Update the color palette in `src/index.css`:
- Charcoal base: `#1a1a1d`
- Slate: `#2d2d30`
- Cream: `#f4f1ea`
- Gold accent: `#d4af37`

### Typography
Google Fonts are imported in `src/index.css`:
- Fraunces (display)
- Newsreader (body)
- Space Grotesk (accent)

### Media
Replace placeholder images in components:
- `MediaGrid.tsx`: Update `mediaItems` array
- `ReelsSection.tsx`: Update `reels` array
- `TestimonialsSection.tsx`: Update `testimonials` array

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions, horizontal carousels
- **Tablet**: Adapted grid layouts and spacing
- **Desktop**: Full parallax effects and hover states

## ⚡ Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Code splitting with Vite
- Production build size: ~307 KB (99 KB gzipped)

## 📄 License

© 2024 Mithila Royal Studio. All rights reserved.

---

**Owner**: Vishnu Bihari  
**Design Archetype**: Cinematic Editorial Luxury
