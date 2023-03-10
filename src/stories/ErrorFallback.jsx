import React, { useEffect } from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  useEffect(() => {
    resetErrorBoundary();
  });

  return (
    <>
      <h2>Loading...</h2>
      <p>
        Sometimes Storybook messes up the loading, so we are force-updating to
        bypass this.
      </p>
      <pre>{error.message}</pre>
    </>
  );
}
