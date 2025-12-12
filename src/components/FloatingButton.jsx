import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaArrowUp } from 'react-icons/fa';
import './FloatingButton.css';

/**
 * FloatingButton component
 * Displays a floating "Go to Top" button that appears when user scrolls down
 * Floats in the bottom-right corner of the viewport
 * @component
 */
const FloatingButton = () => {
  const [portalEl] = useState(() => {
    // create a container div for the portal
    if (typeof document !== 'undefined') {
      const el = document.createElement('div');
      el.className = 'floating-button-portal';
      return el;
    }
    return null;
  });

  // No scroll listener: button should always be visible and stuck to viewport corner.

  useEffect(() => {
    // append portal element to body so it isn't affected by parent transforms
    if (!portalEl) return;
    document.body.appendChild(portalEl);
    return () => {
      if (portalEl.parentNode) portalEl.parentNode.removeChild(portalEl);
    };
  }, [portalEl]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (typeof document === 'undefined' || !portalEl) return null;

  return createPortal(
    (
      <button
        className="floating-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Go to top"
      >
        <FaArrowUp className="arrow-icon" />
      </button>
    ),
    portalEl
  );
};

export default FloatingButton;
