import React from "react";

export default function Input({ input }) {
  return (
    <div className="w-full bg-white  flex justify-between items-center px-3 py-4">
      <div className="overflow-x-scroll">{input}</div>
      <div className="ml-5">Input</div>
    </div>
  );
}
