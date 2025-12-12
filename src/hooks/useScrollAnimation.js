/**
 * useScrollAnimation Hook
 * Triggers animations when elements scroll into view
 * 
 * Usage:
 * const ref = useScrollAnimation();
 * <div ref={ref} className="fade-up">Content</div>
 */

import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animation
            entry.target.classList.add('visible');
            // Optional: unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Start animation 50px before fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

/**
 * useScrollAnimationGroup Hook
 * Triggers staggered animations for multiple elements
 * Applies stagger-child class to children for automatic staggering
 * 
 * Usage:
 * const ref = useScrollAnimationGroup();
 * <div ref={ref}>
 *   <div className="stagger-child">Item 1</div>
 *   <div className="stagger-child">Item 2</div>
 * </div>
 */

export const useScrollAnimationGroup = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animate class to all stagger-child elements
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child) => {
              child.classList.add('animate');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

/**
 * useParallaxScroll Hook
 * Creates parallax scroll effect for elements
 * 
 * Usage:
 * const parallaxRef = useParallaxScroll(0.5); // 0 = no movement, 1 = full movement
 * <div ref={parallaxRef} className="parallax-element">Content</div>
 */

export const useParallaxScroll = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = ref.current.offsetTop;
      const distance = scrollY - elementTop;

      // Apply parallax transform
      ref.current.style.transform = `translateY(${distance * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

export default useScrollAnimation;
