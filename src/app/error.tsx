"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page">
      <div className="error-card">
        <span className="error-emoji" aria-hidden="true">:(</span>
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred. Please try again.</p>
        <button type="button" onClick={reset} className="primary-button">
          Try again
        </button>
      </div>
    </main>
  );
}
