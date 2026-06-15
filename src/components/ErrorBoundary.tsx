"use client";

import React from "react";

/**
 * Catches render errors from its children (e.g. a WebGL/3D failure) so a single
 * component crashing never takes down the whole page. Falls back to `fallback`.
 */
export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Keep the rest of the site alive; log for debugging.
    console.error("Component failed to render:", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
