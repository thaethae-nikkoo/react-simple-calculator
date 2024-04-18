import React from "react";

export default function Output({ output }) {
  return (
    <div className="w-full bg-white flex justify-between items-center px-3 py-4">
      <div>{output}</div>
      <div>Output</div>
    </div>
  );
}
