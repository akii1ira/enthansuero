"use client";

export default function ButtonComponent({ text }: { text: string }) {
  return (
    <button onClick={() => {alert("Button clicked!");}} className="mt-4 text-gray-900">
      {text}
    </button>
  );
}