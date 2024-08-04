"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end">
      {/* <div
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-gray-800 text-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0`}
      > */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 -translate-x-full transform bg-gray-800 text-white transition-transform md:translate-x-0`}
      >
        <div className="p-4 text-lg font-semibold">Menu</div>
        <ul className="mt-4">
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Item 1</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Item 2</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Item 3</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Item 4</a>
          </li>
        </ul>
      </div>

      {/* <div className={`p-8 ${isOpen ? "w-[calc(100%-256px)]" : "w-full"}`}> */}
      <div className={`w-[calc(100%-256px)] p-8`}>
        {/* <button
          className="p-4 focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
}
