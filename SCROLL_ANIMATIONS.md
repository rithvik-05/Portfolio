# Scroll Animations Documentation

## Overview
Your portfolio includes comprehensive scroll-triggered animations that create engaging visual effects as users scroll through the page. These animations improve user engagement and provide visual feedback.

## Built-in CSS Animations

### 1. **Automatic Section Animations**
The following sections automatically animate when they come into view:
- `.about` - Fades up
- `.skills` - Fades up with staggered children
- `.projects` - Fades up with staggered children
- `.experience` - Fades up
- `.footer` - Fades up

### 2. **Available Animation Classes**

#### Basic Animations
```html
<!-- Fade from bottom to top -->
<div class="fade-in-on-scroll">Content</div>

<!-- Slide from left -->
<div class="slide-left-on-scroll">Content</div>

<!-- Slide from right -->
<div class="slide-right-on-scroll">Content</div>

<!-- Zoom in -->
<div class="zoom-in-on-scroll">Content</div>

<!-- Bounce in -->
<div class="bounce-in-on-scroll">Content</div>
```

#### Staggered Animations
For lists or multiple items, use staggered animations:
```html
<div class="skills-container">
  <div class="stagger-child">Item 1</div> <!-- Appears at 0.1s -->
  <div class="stagger-child">Item 2</div> <!-- Appears at 0.2s -->
  <div class="stagger-child">Item 3</div> <!-- Appears at 0.3s -->
  <!-- Pattern continues with 0.1s delays -->
</div>
```

### 3. **Available Keyframe Animations**

```css
@keyframes fadeUp          /* Fade in while moving up */
@keyframes slideInLeft     /* Slide from left */
@keyframes slideInRight    /* Slide from right */
@keyframes scaleIn         /* Zoom in */
@keyframes zoomIn          /* Zoom with fade */
@keyframes rotateIn        /* Rotate while fading */
@keyframes slideUpStagger  /* Slide up for staggered items */
@keyframes bounceIn        /* Bounce effect */
@keyframes subtleFloat     /* Gentle floating motion */
@keyframes glow            /* Glowing box shadow */
@keyframes float           /* Floating animation */
@keyframes pulse           /* Scale pulse */
```

## Custom Hooks for Advanced Usage

### `useScrollAnimation()`
Triggers animations when elements scroll into view.

```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function MyComponent() {
  const ref = useScrollAnimation();
  
  return (
    <div ref={ref} className="fade-in-on-scroll">
      This will animate when scrolled into view
    </div>
  );
}
```

### `useScrollAnimationGroup()`
Triggers staggered animations for multiple child elements.

```jsx
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

function MyList() {
  const ref = useScrollAnimationGroup();
  
  return (
    <div ref={ref}>
      <div class="stagger-child">Item 1</div>
      <div class="stagger-child">Item 2</div>
      <div class="stagger-child">Item 3</div>
    </div>
  );
}
```

### `useParallaxScroll(speed)`
Creates parallax scroll effects for immersive visuals.

```jsx
import { useParallaxScroll } from '../hooks/useScrollAnimation';

function ParallaxSection() {
  const parallaxRef = useParallaxScroll(0.5); // 0.5 = half the scroll speed
  
  return (
    <div ref={parallaxRef} className="parallax-element">
      Parallax content moves at 50% of scroll speed
    </div>
  );
}
```

## Current Implementation

### Skills Component
- Each skill card uses `.stagger-child` for sequential animation
- Cards appear with 0.1s delays between each
- Animations trigger when component scrolls into view

### Projects Component
- Project cards use `.stagger-child` for sequential reveals
- Creates a cascading animation effect
- Responsive to viewport changes

### Smooth Scroll Behavior
All page navigation uses smooth scrolling:
```css
html {
  scroll-behavior: smooth;
}
```

## Customization

### Adjust Animation Speed
Modify the animation duration in CSS:
```css
.fade-in-on-scroll {
  transition: opacity 0.8s ease-in-out;  /* Change 0.8s to desired duration */
}
```

### Change Stagger Delay
Customize the stagger timing:
```css
.stagger-child:nth-child(1) { animation-delay: 0.05s; }  /* Smaller delay = faster */
.stagger-child:nth-child(2) { animation-delay: 0.1s; }
/* ... */
```

### Create Custom Animations
Add new keyframes to `src/index.css`:
```css
@keyframes customAnimation {
  from {
    opacity: 0;
    transform: rotate(-5deg) translateY(20px);
  }
  to {
    opacity: 1;
    transform: rotate(0) translateY(0);
  }
}

.custom-animation {
  animation: customAnimation 0.6s ease forwards;
}
```

## Browser Support
All animations use standard CSS and are supported in:
- Chrome/Edge 91+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips
1. Animations are GPU-accelerated using `transform` and `opacity`
2. IntersectionObserver is used for efficient scroll detection
3. Animations are only applied when elements enter viewport
4. No layout shifts occur (animations use `transform` only)

## Troubleshooting

### Animations not triggering
- Check that elements have the correct class names
- Verify IntersectionObserver is supported in your browser
- Check browser console for any JavaScript errors

### Animations are jittery
- Reduce animation duration
- Check system performance
- Consider disabling animations on older devices

### Parallax effect not working
- Ensure `useParallaxScroll` hook is properly imported
- Check that scroll event listeners are attached
- Test on desktop (parallax works best with mouse scroll)

## Examples

### Fade in section
```html
<section class="fade-in-on-scroll">
  <h2>About Me</h2>
  <p>Description here...</p>
</section>
```

### Slide in from sides
```html
<div class="slide-left-on-scroll">
  Left content
</div>
<div class="slide-right-on-scroll">
  Right content
</div>
```

### Staggered list items
```html
<ul>
  <li class="stagger-child">Item 1</li>
  <li class="stagger-child">Item 2</li>
  <li class="stagger-child">Item 3</li>
</ul>
```

For more information about CSS animations and scroll events, see:
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
