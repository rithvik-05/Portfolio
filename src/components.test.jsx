import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Mock IntersectionObserver for Skills component
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

describe('Header Component', () => {
  test('renders site owner name in h1', () => {
    render(<Header />);
    const h1 = screen.getByRole('heading', { level: 1, name: /Rithvik Reddy/i });
    expect(h1).toBeTruthy();
  });

  test('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText(/About/i)).toBeTruthy();
    expect(screen.getByText(/Skills/i)).toBeTruthy();
    expect(screen.getByText(/Projects/i)).toBeTruthy();
    expect(screen.getByText(/Experience/i)).toBeTruthy();
    expect(screen.getByText(/Contact/i)).toBeTruthy();
  });
});

describe('Skills Component', () => {
  test('renders skills section with title', () => {
    render(<Skills />);
    const heading = screen.getByRole('heading', { level: 2, name: /My Skills/i });
    expect(heading).toBeTruthy();
  });

  test('renders multiple skill cards', () => {
    render(<Skills />);
    const skillCards = screen.getAllByText(/(HTML|CSS|JavaScript|React|Node)/i);
    expect(skillCards.length).toBeGreaterThan(0);
  });
});

describe('Footer Component', () => {
  test('renders footer with Get In Touch heading', () => {
    render(<Footer />);
    const heading = screen.getByRole('heading', { level: 2, name: /Get In Touch/i });
    expect(heading).toBeTruthy();
  });

  test('renders contact email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /rithvikreddy410@gmail.com/i });
    expect(emailLink).toBeTruthy();
    expect(emailLink.href).toContain('mailto:');
  });
});
