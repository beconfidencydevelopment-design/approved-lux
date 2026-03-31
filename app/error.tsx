"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-12 text-center">
      <h1>Something went wrong!</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}
