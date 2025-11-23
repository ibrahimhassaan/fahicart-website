# Fahicart Website - AI Agent Instructions

## Project Overview
Next.js 16 marketing website for Fahicart software development firm. Single-page application with section-based navigation (Hero, Services, About, Contact). Built with Next.js App Router, TypeScript, shadcn/ui components, and Tailwind CSS v4 with OKLCH color system.

## Architecture & Structure

### Component Organization
- **App Router**: `app/page.tsx` composes section components in order
- **Section Components**: Top-level components in `components/` (hero.tsx, services.tsx, about.tsx, contact.tsx, header.tsx, footer.tsx)
- **UI Components**: shadcn/ui primitives in `components/ui/` (button.tsx, card.tsx, etc.) - DO NOT modify without strong justification
- **Utilities**: `lib/utils.ts` contains `cn()` helper for className merging

### Import Patterns
- Always use `@/` path alias for imports (configured in tsconfig.json and components.json)
- Example: `import { Button } from "@/components/ui/button"`
- Client components must include `"use client"` directive (see header.tsx)

## Styling System

### Tailwind CSS v4 Setup
- Uses **new Tailwind v4 syntax** with `@import "tailwindcss"` in globals.css
- NO `tailwind.config.js` - configuration via CSS variables and `components.json`
- PostCSS plugin: `@tailwindcss/postcss` (see postcss.config.mjs)

### Color System (OKLCH)
- Uses OKLCH color space for better perceptual uniformity
- CSS variables defined in `app/globals.css` with light/dark modes
- Primary accent color: `oklch(0.65 0.18 215)` (blue)
- Access via Tailwind utilities: `bg-accent`, `text-accent-foreground`, `border-border`, etc.
- **DO NOT** use arbitrary color values - extend CSS variables if new colors needed

### Typography & Fonts
- **Sans**: Inter (default)
- **Mono**: JetBrains Mono (used for logo, stats)
- Loaded via next/font/google in `app/layout.tsx`
- Apply with `font-sans` or `font-mono` classes

## Component Patterns

### shadcn/ui Usage
- Components generated via `pnpm dlx shadcn@latest add <component>`
- Configuration in `components.json` (style: "new-york", using lucide-react icons)
- Button variants: default, destructive, outline, secondary, ghost, link
- Use `asChild` prop with Next.js Link for navigation buttons

### Common Patterns from Codebase
```tsx
// Button with Link (hero.tsx)
<Button asChild size="lg">
  <Link href="#contact">
    Start Your Project
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>

// Card with Icon Header (services.tsx)
<Card className="border-border hover:border-accent/50 transition-colors">
  <CardHeader>
    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-accent" />
    </div>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>{description}</CardDescription>
  </CardContent>
</Card>

// Client Component State (header.tsx)
"use client"
const [isScrolled, setIsScrolled] = useState(false)
useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 10)
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])
```

## Development Workflow

### Commands (pnpm)
- **Dev**: `pnpm dev` (starts Next.js dev server)
- **Build**: `pnpm build` (TypeScript errors ignored per next.config.mjs)
- **Lint**: `pnpm lint`
- **Start**: `pnpm start` (production)

### Configuration Notes
- TypeScript: `ignoreBuildErrors: true` in next.config.mjs (fix before production!)
- Images: `unoptimized: true` for static export compatibility
- Dark mode: Forced via `className="dark"` in html tag (layout.tsx)
- Analytics: Vercel Analytics included

### Adding New Sections
1. Create section component in `components/` (e.g., `testimonials.tsx`)
2. Import and add to `app/page.tsx` in desired order
3. Update `navItems` in `components/header.tsx` if navigation needed
4. Use semantic HTML: `<section id="section-name">` with proper spacing classes

### Adding shadcn/ui Components
```bash
pnpm dlx shadcn@latest add <component-name>
```
Components auto-install to `components/ui/` with proper styling.

## Critical Conventions

1. **Responsive Design**: Mobile-first with sm/md/lg/xl breakpoints
2. **Section Spacing**: Use `py-20 sm:py-24 lg:py-32` pattern (see services.tsx)
3. **Container**: `container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`
4. **Text Hierarchy**: `text-3xl sm:text-4xl lg:text-5xl` for headings
5. **State Management**: Client state only - no global state library
6. **Icons**: lucide-react library (e.g., `ArrowRight`, `Code2`, `Menu`)

## Known Issues & Gotchas

- `.gitignore` minimal (only node_modules) - add .next, .env* before production
- Build errors ignored - fix TypeScript issues properly
- No testing setup - recommend Vitest + React Testing Library
- No environment variables configured
- Dark mode hardcoded - consider removing forced dark class if theme switching needed

## Quick Reference

**Add new service:**
Edit `components/services.tsx` → add object to `services` array with icon, title, description.

**Change accent color:**
Modify `--accent` and `--accent-foreground` in `app/globals.css` (both :root and .dark).

**Add page route:**
Create `app/[route]/page.tsx` (but consider if section on homepage suffices first).
