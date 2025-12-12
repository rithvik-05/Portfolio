import React, { Suspense } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Main App component with code-splitting and lazy-loading
 * Implements performance optimization through route-level code splitting
 * @component
 */

// Lazy-load heavier / non-critical sections to improve initial bundle size
// These components are code-split and loaded on-demand when the section comes into view
const Projects = React.lazy(() => import("./components/Projects"));
const Achievements = React.lazy(() => import("./components/Achievements"));
const Timeline = React.lazy(() => import("./components/Timeline"));
const Experience = React.lazy(() => import("./components/Experience"));

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Resume />

      <ErrorBoundary>
        <Suspense 
          fallback={
            <div 
              style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: '#666',
                fontStyle: 'italic',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              role="status"
              aria-live="polite"
              aria-label="Loading content"
            >
              ⏳ Loading content…
            </div>
          }
        >
          <Projects />
          <Achievements />
          <Timeline />
          <Experience />
        </Suspense>
      </ErrorBoundary>

      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;

