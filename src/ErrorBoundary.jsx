import React from "react";

/**
 * ErrorBoundary component for error handling
 * Catches errors in child components during rendering and lifecycle methods
 * Prevents the entire app from crashing if a child component fails
 * 
 * @class ErrorBoundary
 * @extends {React.Component}
 * 
 * @example
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Update state so the next render will show the fallback UI
   * @static
   * @returns {Object} State update object
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * Log error details for debugging and monitoring
   * Can be integrated with external error tracking services like Sentry
   * @param {Error} error - The error that was thrown
   * @param {Object} info - Object with componentStack key containing the stack trace
   */
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
    // TODO: Send to error tracking service (e.g., Sentry, LogRocket)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          <h2>Something went wrong loading this section.</h2>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
