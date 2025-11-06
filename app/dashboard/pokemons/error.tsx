'use client';

import { useEffect } from "react";

export default function Error ({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  });

  return (
    <div>
      <h2>Ha ocurrido un error</h2>
      <button
        onClick={() => reset()}
        className="mt-2"
      >
        Reintentar
      </button>
    </div>
  )
}