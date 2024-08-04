"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdDashboard,
  MdPeopleAlt,
  MdPayments,
  MdKeyboardArrowRight,
  MdOutlineCircle,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface AppSidebarProps {
  isOpen?: boolean;
  toggleSidebar: () => void;
}

const AppSidebar = ({ isOpen, toggleSidebar }: AppSidebarProps) => {
  return (
    <div className="relative h-screen lg:block">
      {/* Button to toggle sidebar */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <MdClose className="size-6" />
        ) : (
          <MdMenu className="size-6" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={twMerge(
          "fixed top-0 left-0 z-40 h-auto min-h-screen w-72 transform bg-white transition-transform duration-300 ease-in-out lg:block",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="mb-6 flex h-16 items-center justify-center">
          <h3>Logo</h3>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <Link href="/examples/template/basic/dashboard">
            <div className="bg-indigo-100 py-2 px-4 font-medium text-indigo-700 select-none hover:bg-indigo-100">
              <div className="flex items-center space-x-2">
                <MdDashboard className="size-6" />
                <span className="text-base"> Dashboard </span>
              </div>
            </div>
          </Link>

          <Link href="/examples/template/basic/users">
            <div className="py-2 px-4 text-slate-800 select-none hover:bg-indigo-100">
              <div className="flex items-center space-x-2">
                <MdPeopleAlt className="size-6" />
                <span className="text-base"> Users </span>
              </div>
            </div>
          </Link>

          <details className="group" open>
            <summary className="flex cursor-pointer list-none items-center justify-between fill-slate-800 py-2 px-4 text-slate-800 group-open:fill-indigo-600 group-open:text-indigo-600 hover:bg-indigo-100">
              <div className="flex items-center space-x-2 select-none">
                <MdPayments className="size-6" />
                <span className="text-base">Purchases</span>
              </div>
              <MdKeyboardArrowRight className="size-5 transform transition-transform duration-200 group-open:rotate-90" />
            </summary>

            <div className="bg-slate-100">
              <Link href="/purchases/orders">
                <div className="fill-slate-800 py-2 px-4 text-slate-800 select-none hover:bg-indigo-100">
                  <div className="flex items-center space-x-2">
                    <MdOutlineCircle className="size-6" />
                    <span className="text-base"> Purchase Orders </span>
                  </div>
                </div>
              </Link>

              <Link href="/purchases/invoices">
                <div className="fill-slate-800 py-2 px-4 text-slate-800 select-none hover:bg-indigo-100">
                  <div className="flex items-center space-x-2">
                    <MdOutlineCircle className="size-6" />
                    <span className="text-base"> Purchase Invoices </span>
                  </div>
                </div>
              </Link>
            </div>
          </details>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default React.memo(AppSidebar);
