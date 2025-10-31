# D-TECH Single-Page Website Design Guidelines

## Design Approach

**Selected Approach**: Hybrid - Modern Tech Product Design (inspired by Vercel, Linear, and Stripe) with futuristic glassmorphism elements

**Core Design Principles**:
- Futuristic sophistication balanced with usability
- Glassmorphism UI patterns with depth and layering
- Purposeful animations that enhance rather than distract
- Single-page narrative flow with clear visual hierarchy

## Typography

**Font System** (Google Fonts):
- Primary: 'Inter' - All UI elements, body text, navigation
- Accent: 'Space Grotesk' - Hero headlines, section titles

**Type Scale**:
- Hero Headline: 56px/64px (mobile: 36px/44px), Space Grotesk, font-weight 700
- Section Headers: 40px/48px (mobile: 28px/36px), Space Grotesk, font-weight 600
- Card Titles: 24px/32px, Inter, font-weight 600
- Body Text: 16px/24px, Inter, font-weight 400
- Small Text/Captions: 14px/20px, Inter, font-weight 400
- CTA Buttons: 16px/24px, Inter, font-weight 600

## Layout System

**Spacing Primitives** (Tailwind units):
- Core spacing: 4, 8, 12, 16, 24, 32 (p-4, m-8, gap-12, py-16, etc.)
- Section vertical spacing: py-24 (desktop), py-16 (mobile)
- Component internal spacing: p-8 (cards), p-6 (smaller elements)
- Grid gaps: gap-8 (desktop), gap-6 (mobile)

**Container System**:
- Max-width: 1280px for all content sections
- Horizontal padding: px-8 (desktop), px-4 (mobile)

**Grid Patterns**:
- Services: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Tech Stack: 4-6 items centered horizontally
- Portfolio: 3-column masonry-style grid (desktop), 2-column (tablet), 1-column (mobile)
- Testimonials: 3-column (desktop), scrollable carousel (mobile)

## Visual Design Elements

**Glassmorphism Treatment**:
- Card backgrounds: Semi-transparent white (rgba(255, 255, 255, 0.1))
- Backdrop blur: 12px-16px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Box shadow: 0 8px 32px rgba(0, 0, 0, 0.1)

**Gradient System**:
- Primary gradient: Deep navy (#0f172a) → Purple (#7c3aed) at 135-degree angle
- Accent glow: Purple (#a855f7) → Pink (#ec4899) for highlights
- Background: Subtle animated gradient orbs positioned strategically

**Neon Glow Effects**:
- Card hover state: 0 0 20px rgba(124, 58, 237, 0.4)
- Button glow: 0 0 30px rgba(124, 58, 237, 0.6)
- Active elements: 0 0 15px rgba(168, 85, 247, 0.5)

## Component Library

### Navigation Bar
- Sticky positioning with glassmorphism background
- Logo (animated D-TECH mark) on left
- Horizontal menu center-aligned: Home, Services, Tech Stack, Portfolio, About, Testimonials, Contact
- CTA button "Get Started" on right with gradient fill
- Mobile: Hamburger menu (top-right), full-screen overlay navigation
- Hover effect: Subtle glow underline on menu items

### Hero Section (100vh)
- Centered layout with animated D-TECH logo (scale + glow pulse animation)
- Large headline with gradient text effect
- Tagline below in lighter weight
- Three CTA buttons in row: Primary "Get Started" (gradient fill), Secondary "Portfolio" (outlined), Tertiary "Contact" (text link)
- Animated gradient background with floating orbs
- Scroll indicator at bottom (animated chevron)

### Service Cards
- 4 cards in grid layout
- Each card: Icon (top), Title, Description (2-3 lines), "Learn More" link
- Icons: Use Heroicons for Web Dev (code), Game Dev (puzzle), SEO (chart), AI (sparkles)
- Hover: Lift effect (translateY -8px) + stronger glow

### Tech Stack Display
- Horizontal centered row of 6-8 technology logos
- Each logo in subtle glassmorphic container (120px × 120px)
- Logos: Unity, Unreal, HTML5, CSS3, JavaScript, Python, TensorFlow (use placeholder images or Font Awesome brands)
- Subtle float animation on hover

### Portfolio Section
- Filter buttons above grid: "All" | "Web" | "Games" | "SEO" | "AI"
- Active filter: Gradient background + white text
- Inactive filters: Glassmorphic style, outlined
- 3-column grid of project cards
- Each card: Featured image, Category tag, Project title, Brief description (1 line), "View Details" button
- Click opens modal (NOT new page)

### Portfolio Modal
- Full-screen overlay with dark backdrop (rgba(0, 0, 0, 0.8))
- Centered glassmorphic content box (max-width 900px)
- Close button (top-right, X icon)
- Content: Project hero image, Title, Category tags, Full description, Tech stack used, Live link + GitHub link buttons
- Smooth fade-in animation

### About Us Section
- Two-column layout: Left (Mission/Vision text), Right (Team grid)
- Team: 2×2 grid of placeholder cards (circular avatar, name, role)
- Mission/Vision: Headline + 2-3 paragraphs with adequate line-height

### Testimonials
- 3-column card grid
- Each card: Quote text, Author name, Company, Star rating
- Subtle rotation effect on scroll reveal
- Mobile: Horizontal scrollable carousel

### Contact Section
- Two-column layout: Left (Form), Right (Contact info + map placeholder)
- Form fields: Name, Email, Phone, Message (all with glassmorphic inputs)
- Submit button: Gradient fill, full-width
- Success/error messages: Toast notification style (top-right)
- Right column: WhatsApp button (icon + number), Address, Phone, Email
- Social icons row: GitHub, LinkedIn, Facebook, WhatsApp (all with subtle hover glow)

### Footer
- Three-column layout: Logo + tagline (left), Quick links (center), Social + copyright (right)
- Dark background with subtle gradient
- Compact height (80px)

## Animations & Interactions

**Scroll Animations** (entrance effects):
- Fade in + slide up (30px) for all sections
- Stagger delay: 100ms per card in grids
- Trigger: Element enters viewport at 80% position

**Micro-interactions**:
- Button hover: Scale 1.05 + stronger glow (200ms ease)
- Card hover: Lift (translateY -8px) + shadow increase (300ms ease)
- Input focus: Border glow pulse + slight scale (1.02)
- Logo: Continuous subtle pulse (2s infinite)

**Smooth Scroll**:
- Navigation clicks: Smooth scroll to section (800ms easing)
- Scroll offset: -80px to account for sticky navbar

**Background Animation**:
- 3-4 large gradient orbs slowly moving (20-30s animation loop)
- Blur: 80px-100px for soft effect

## Images

**Hero Section**:
- Animated SVG or Lottie logo animation (D-TECH branded)
- Abstract tech-themed background pattern (circuit board, dots, or geometric)

**Portfolio Cards**:
- Each project: 16:9 aspect ratio featured image (placeholder: tech screenshots, UI mockups)
- Hover: Slight zoom effect (scale 1.05)

**About Section**:
- Team avatars: Circular, 120px diameter (placeholder: gradient avatars with initials)

**Tech Stack**:
- Technology logos: 80px × 80px, centered in containers

## Accessibility & UX

- All interactive elements: Minimum 44×44px touch targets
- Focus states: Visible outline (2px gradient border)
- Form validation: Inline error messages below fields
- Modal: Keyboard accessible (Esc to close, Tab navigation)
- Color contrast: Minimum 4.5:1 for text
- Skip to content link for keyboard users

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

---

**Design Philosophy**: Create a cohesive futuristic experience that feels premium yet approachable. Every element should reinforce D-TECH's positioning as an innovative, AI-forward technology company while maintaining exceptional usability.