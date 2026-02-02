# Design System Documentation

## Overview
This design system ensures consistency across the Client Management Application with a professional, clean aesthetic suitable for enterprise software.

## Color Palette

### Primary Colors
- **Primary 600 (Deep Blue)**: `#1e40af` - Main brand color for buttons, links, and key UI elements
- **Primary 700**: `#1e3a8a` - Hover states for primary elements
- **Primary 500**: `#3b82f6` - Focus rings and accents
- **Primary 100**: `#dbeafe` - Light backgrounds for badges and highlights
- **Primary 50**: `#eff6ff` - Very light backgrounds

### Neutral Colors
- **Gray 50**: `#f9fafb` - Page background (light gray)
- **Gray 100**: `#f3f4f6` - Card backgrounds (alternative)
- **Gray 200**: `#e5e7eb` - Borders
- **Gray 600**: `#4b5563` - Secondary text
- **Gray 700**: `#374151` - Body text
- **Gray 800**: `#1f2937` - Headings

### Semantic Colors
- **Red 600**: `#dc2626` - Error states, danger actions
- **Green 600**: `#16a34a` - Success states
- **Yellow 500**: `#eab308` - Warning states
- **Blue 100**: `#dbeafe` - Info backgrounds

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Sizes
- **Headings (H1)**: `text-3xl` (30px) - Page titles
- **Headings (H2)**: `text-2xl` (24px) - Section titles
- **Headings (H3)**: `text-xl` (20px) - Card titles
- **Body**: `text-base` (16px) - Default text
- **Small**: `text-sm` (14px) - Secondary text, labels
- **Extra Small**: `text-xs` (12px) - Captions, badges

### Font Weights
- **Bold**: `font-bold` (700) - Headings, important text
- **Semibold**: `font-semibold` (600) - Subheadings, card titles
- **Medium**: `font-medium` (500) - Buttons, labels
- **Regular**: `font-normal` (400) - Body text

## Spacing

### Standard Spacing Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)

### Custom Spacing
- **Card Padding**: `p-card` (24px) - Internal padding for cards
- **Section Spacing**: `section` (48px) - Space between major sections

### Component Spacing
- **Gap between cards**: `gap-6` (24px)
- **Margin between sections**: `mb-12` (48px)
- **Padding inside cards**: `p-card` (24px)

## Border Radius

### Standard Radius
- **Card**: `rounded-card` (12px) - Cards, modals, large containers
- **Button**: `rounded-button` (8px) - Buttons, inputs, small elements
- **Input**: `rounded-input` (8px) - Form inputs
- **Full**: `rounded-full` - Circular elements (avatars, badges)

## Shadows

### Card Shadows
- **Default**: `shadow-card` - Subtle shadow for cards at rest
- **Hover**: `shadow-card-hover` - Enhanced shadow on hover
- **Large**: `shadow-card-lg` - Prominent shadow for modals, elevated cards

### Shadow Values
```css
shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
shadow-card-hover: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
shadow-card-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
```

## Components

### Buttons
- **Primary**: Deep blue background, white text, shadow
- **Secondary**: White background, gray text, border
- **Sizes**: Small (sm), Medium (md), Large (lg)
- **States**: Default, Hover, Focus, Disabled

### Cards
- **Background**: White (`bg-white`)
- **Border**: Light gray (`border-gray-200`)
- **Padding**: `p-card` (24px)
- **Radius**: `rounded-card` (12px)
- **Shadow**: `shadow-card`

### Inputs
- **Background**: White
- **Border**: Gray 300
- **Padding**: `px-4 py-3`
- **Radius**: `rounded-input` (8px)
- **Focus**: Primary 500 ring

### Navigation
- **Background**: White
- **Border**: Bottom border gray 200
- **Height**: 64px (h-16)
- **Shadow**: `shadow-card`
- **Sticky**: Top positioned

## Layout

### Container
- **Max Width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Centered**: `mx-auto`

### Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns (`md:grid-cols-2`)
- **Desktop**: 3 columns (`lg:grid-cols-3`)
- **Gap**: `gap-6` (24px)

## Transitions

### Standard Duration
- **Fast**: `duration-150` (150ms) - Micro-interactions
- **Normal**: `duration-200` (200ms) - Default transitions
- **Slow**: `duration-300` (300ms) - Complex animations

### Transition Properties
```css
transition-all duration-200
transition-colors duration-200
transition-transform duration-200
```

## Visual Hierarchy

### Page Structure
1. **Navigation Bar** - Sticky, white background, shadow
2. **Page Header** - Title + subtitle, large spacing below
3. **Primary Content** - Feature cards, main content area
4. **Secondary Content** - Stats, meetings, additional info
5. **Footer** - Muted text, centered

### Text Hierarchy
1. **Page Title**: `text-3xl font-bold text-gray-800`
2. **Section Title**: `text-2xl font-bold text-gray-800`
3. **Card Title**: `text-lg font-semibold text-gray-800`
4. **Body Text**: `text-base text-gray-700`
5. **Secondary Text**: `text-sm text-gray-600`
6. **Muted Text**: `text-sm text-gray-500`

## Accessibility

### Focus States
- All interactive elements have visible focus rings
- Focus ring color: Primary 500
- Focus ring width: 2px
- Focus ring offset: 2px

### Color Contrast
- All text meets WCAG AA standards
- Primary text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states
- Keyboard navigation support

## Best Practices

### Do's
✓ Use consistent spacing from the spacing scale
✓ Apply shadows to cards for depth
✓ Use primary color for main actions
✓ Maintain clear visual hierarchy
✓ Ensure responsive design on all screens

### Don'ts
✗ Mix different border radius values
✗ Use colors outside the defined palette
✗ Create custom shadows
✗ Ignore spacing guidelines
✗ Forget hover and focus states

## Usage Examples

### Creating a Card
```jsx
<div className="bg-white p-card rounded-card shadow-card border border-gray-200">
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Card Title</h3>
  <p className="text-sm text-gray-600">Card content goes here</p>
</div>
```

### Creating a Button
```jsx
<button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-button shadow-sm">
  Click Me
</button>
```

### Creating a Section
```jsx
<section className="mb-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Section Title</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Content */}
  </div>
</section>
```
