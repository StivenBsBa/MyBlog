import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error("Error no controlado", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="status-page" id="main-content">
          <p className="eyebrow">Algo salió mal</p>
          <h1>No pudimos mostrar esta página.</h1>
          <p>Recarga el sitio para intentarlo de nuevo.</p>
          <button className="button button--primary" onClick={() => window.location.reload()}>
            Recargar página
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
