# Mood Tracker - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from wellness and personal tracking leaders (Daylio, Headspace, Apple Health) with emphasis on emotional resonance and visual warmth.

### Core Design Principles
- **Emotional First**: Design should evoke calm, safety, and positivity
- **Clarity & Simplicity**: Clean, uncluttered interfaces that reduce cognitive load
- **Visual Feedback**: Immediate, delightful responses to user actions
- **Data as Story**: Transform metrics into meaningful visual narratives

## Color Palette

### Light Mode
- **Primary**: 210 70% 50% (Calming blue)
- **Background**: 210 20% 98% (Soft off-white)
- **Surface**: 0 0% 100% (Pure white cards)
- **Text Primary**: 220 15% 20%
- **Text Secondary**: 220 10% 45%
- **Success/Positive**: 145 60% 45% (Gentle green)
- **Warning/Neutral**: 35 85% 55% (Warm amber)
- **Alert/Negative**: 355 70% 55% (Soft red)

### Dark Mode
- **Primary**: 210 80% 60%
- **Background**: 220 15% 10%
- **Surface**: 220 15% 15%
- **Text Primary**: 210 20% 98%
- **Text Secondary**: 210 15% 70%

### Mood-Specific Colors
- **Happy**: 140 60% 50%
- **Neutral**: 45 75% 60%
- **Sad**: 210 50% 55%
- **Anxious**: 280 50% 60%
- **Calm**: 180 45% 55%

## Typography
- **Primary Font**: 'Inter' (Google Fonts) - clean, readable, modern
- **Accent Font**: 'Caveat' (Google Fonts) - for personal notes, handwritten feel
- **Headings**: font-semibold, tracking-tight
- **Body**: font-normal, leading-relaxed
- **Notes**: Caveat font-normal text-lg

## Layout System
**Spacing Units**: Consistently use Tailwind spacing of **4, 6, 8, 12, 16** (p-4, gap-6, mb-8, etc.)

### Container Structure
- Max-width: max-w-4xl for main content
- Mobile padding: px-4
- Desktop padding: px-6
- Section spacing: space-y-8

## Component Library

### Onboarding/Welcome Screen
- Full-height centered layout with gradient background (from-primary/10 to transparent)
- Large emoji illustration (128px+) at top
- Welcome headline (text-4xl font-bold)
- Descriptive subtitle (text-lg text-secondary)
- Prominent "Get Started" button (w-full max-w-xs)

### Mood Picker Interface
- **Emoji Grid**: 5-column grid on desktop, 3-column on mobile
- Large touchable emoji buttons (min 60px touch target)
- Selected state: ring-4 ring-primary scale-110 transform
- Hover state: scale-105 transition-transform
- Emoji size: text-5xl for visibility

### Mood Entry Form
- **Textarea**: Rounded-xl border with focus:ring-2 ring-primary
- Placeholder text: "How are you feeling? What happened today?" in text-secondary
- Character counter (optional): text-sm text-secondary
- Auto-resize textarea based on content

### Weekly Graph Visualization
- **Container**: bg-surface rounded-2xl p-6 shadow-sm
- **Graph Type**: Bar chart or line chart with smooth curves
- **Color Coding**: Use mood-specific colors for each day
- **Axis Labels**: text-xs text-secondary
- **Today Indicator**: Subtle highlight or badge

### Notes List/History
- **Card Layout**: space-y-4 with individual note cards
- Each card: bg-surface rounded-xl p-4 border-l-4 border-[mood-color]
- Emoji badge in top-left corner
- Date stamp: text-sm text-secondary
- Note text: Caveat font, text-gray-700 dark:text-gray-300
- Truncate long notes with "Read more" expansion

### Navigation/Tabs
- **Tab Bar**: Fixed at top with backdrop-blur-lg bg-background/80
- Active tab: font-semibold text-primary border-b-2 border-primary
- Inactive tabs: text-secondary hover:text-primary

### Toast Notifications
- Position: top-right fixed
- Success: bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500
- Error: bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500
- Auto-dismiss after 3 seconds with slide-out animation

### Buttons
- **Primary CTA**: bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary/90
- **Secondary**: variant="outline" with backdrop-blur-sm when on images
- **Icon Buttons**: rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800

## Images
- **Welcome Screen Hero**: Abstract calming illustration or gradient mesh background (pastel colors), 400-600px height
- **Empty State**: Gentle illustration when no moods logged yet (centered, max-w-xs)
- **Achievement Badges**: Small celebratory icons for streaks/milestones

## Interactions & Micro-animations
- **Mood Selection**: Gentle scale + bounce animation (transition-all duration-200)
- **Success Toast**: Slide-in from right with fade
- **Graph Loading**: Skeleton screens with pulse animation
- **Emoji Reactions**: Subtle rotation on tap (rotate-6)
- **Keep animations minimal and purposeful**

## Accessibility & Dark Mode
- Maintain WCAG AA contrast ratios throughout
- Consistent dark mode implementation across all inputs and surfaces
- Focus indicators: ring-2 ring-offset-2 ring-primary
- All emoji buttons have aria-labels with emotion names

## Key UX Patterns
- **One-tap mood logging**: Minimize friction in core flow
- **Inline validation**: Real-time feedback on required fields
- **Optimistic UI**: Show updates immediately, sync in background
- **Progressive disclosure**: Hide complexity until needed (detailed stats, filters)
- **Error recovery**: Clear messaging with actionable next steps