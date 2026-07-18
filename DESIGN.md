---
name: Lux Mundi
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4d4635'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#476083'
  on-secondary: '#ffffff'
  secondary-container: '#bdd6ff'
  on-secondary-container: '#445d80'
  tertiary: '#655d54'
  on-tertiary: '#ffffff'
  tertiary-container: '#bbb1a6'
  on-tertiary-container: '#4a443b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#afc8f0'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#2f486a'
  tertiary-fixed: '#ece1d5'
  tertiary-fixed-dim: '#cfc5b9'
  on-tertiary-fixed: '#201b13'
  on-tertiary-fixed-variant: '#4c463d'
  background: '#faf4e9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is anchored in a philosophy of "Luminous Sophistication." It targets a discerning audience seeking tranquility and luxury for their living spaces. The visual identity avoids the coldness of modern minimalism, instead opting for a **Premium Boutique** aesthetic that feels warm, artisanal, and timeless.

The style leverages a **Modern-Classical** hybrid: it utilizes generous white space and clean structural lines (Modern) while employing high-contrast serif typography and metallic accents (Classical). The emotional response should be one of immediate serenity—as if the user has just stepped into a high-end, quiet atelier. Visuals prioritize high-quality lifestyle photography where light and shadow play a central role, mirroring the product's nature.

## Colors
The palette is designed to evoke a sense of heritage and calm.
- **Primary (Gold):** Used sparingly for interactive elements, call-to-actions, and hairline dividers. It represents the flame and the "Lux" (Light).
- **Secondary (Navy):** Provides the "Mundi" (World) grounding. Used for core branding, deep text contrast, and structural footers to create a sense of stability.
- **Background (Cream):** The canvas. Unlike pure white, this off-white shade prevents eye strain and adds a layer of physical warmth, resembling high-quality paper or unbleached wax.
- **Support (Champagne/Grey):** Used for subtle UI backgrounds, disabled states, and secondary borders to maintain a soft transition between elements.

## Typography
Typography is the cornerstone of this design system's elegance. 
- **Titles:** Playfair Display is used for all major headings. Its high stroke contrast conveys a sense of fashion and editorial authority.
- **Body:** Montserrat provides a clean, geometric counterpoint. Use `body-lg` for product descriptions to ensure a premium reading experience.
- **Labels:** Small labels and navigational items should use `label-caps` to create a rhythmic, structured feel that mimics luxury packaging labels.
- **Alignment:** Central alignment is preferred for headlines in hero sections and product detail intros to enhance the "boutique" feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to ensure content remains framed like a piece of art. 
- **Rhythm:** Use a 12-column grid with generous 24px gutters. 
- **White Space:** Space is treated as a luxury. Large vertical gaps (`section-gap`) are used between different product collections to allow the eye to rest.
- **Mobile:** On mobile devices, margins shrink to 20px, but vertical padding remains high to maintain the airy feeling of the brand. Elements should never feel crowded; if in doubt, increase the padding.

## Elevation & Depth
This design system avoids heavy shadows, opting instead for **Tonal Layers** and **Low-contrast Outlines**.
- **Surfaces:** Depth is created by placing Cream elements on top of Champagne backgrounds.
- **Shadows:** When necessary (e.g., for hovering over product cards), use an "Ambient Shadow": very large blur (30px+), very low opacity (5-8%), and a slight Navy tint to prevent a "dirty" look.
- **Dividers:** Use 1px solid lines in Primary Gold or light Champagne to separate sections without adding visual weight.

## Shapes
The shape language is primarily **Soft (Level 1)**. 
While the brand is elegant, perfectly sharp corners can feel aggressive. A subtle 4px (0.25rem) radius on buttons and 8px on product cards softens the digital experience, making it feel more "welcoming" and "organic," echoing the softness of wax and scent clouds. Circular shapes are reserved strictly for decorative elements or specific icons to mimic the top-down view of a candle.

## Components
- **Buttons:** Primary buttons use a solid Navy background with Gold or White text. Secondary buttons are "Ghost" style: Navy or Gold 1px border with `label-caps` typography. 
- **Input Fields:** Use a minimalist approach—bottom-border only (Navy), which animates to Gold on focus. Label text remains small and sits above the line.
- **Cards:** Product cards should have no visible border and a subtle Cream-on-Cream tonal difference. The focus is entirely on the product imagery.
- **Lists:** Use custom icons for list bullets, such as a small Gold "spark" or dot, to maintain the sophisticated theme.
- **Navigation:** The header should be transparent on hero images, transitioning to a solid Cream background with a subtle Navy bottom-border upon scroll.
- **Additional Component - The "Scent Profile" Chip:** Small, pill-shaped tags with a light Champagne background and Navy text to categorize fragrance notes (e.g., "Woody," "Floral").