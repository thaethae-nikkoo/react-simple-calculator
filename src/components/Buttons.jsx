import React from "react";

export default function Buttons({ buttonHandler }) {
  return (
    <div className="bg-slate-50 w-full grid grid-cols-4">
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        AC
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        DEL
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        (
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        )
      </button>

      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        7
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        8
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        9
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        *
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        4
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        5
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        6
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        -
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        1
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        2
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        3
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        +
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        0
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        00
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        /
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        %
      </button>
      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-200  "
      >
        .
      </button>

      <button
        onClick={(e) => buttonHandler(e.target.innerText)}
        className=" p-4 m-1 rounded-lg font-bold transition shadow duration-300 hover:bg-gray-200 bg-slate-300 col-span-3  "
      >
        =
      </button>
      {/* <button className=" p-4 m-1 rounded-lg font-bold transition bg-white shadow duration-300 hover:bg-gray-400 ">
        1
      </button> */}
    </div>
  );
}
