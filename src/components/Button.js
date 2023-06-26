import React from "react";

export default function Button({ children, type = "primary" }) {
  if (type == "primary")
    return (
      <button type="button" className="mr-3 rounded-lg bg-orange-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 md:mr-0">
        {children}
      </button>
    );
  if (type == "secondary")
    return (
      <button type="button" className="rounded border border-slate-800 px-9 py-2 bg-glass-200">
        {children}
      </button>
    );
  if (type == "tertiary")
    return (
      <button type="button" className="underline">
        {children}
      </button>
    );
}
