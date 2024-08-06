"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  MdDashboard,
  MdPeopleAlt,
  MdPayments,
  MdKeyboardArrowRight,
  MdOutlineCircle,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface AppSidebarProps {
  isOpen?: boolean;
}

const AppSidebar = ({ isOpen }: AppSidebarProps) => {
  return (
    <div
      className={twMerge(
        "hidden h-auto min-h-screen w-72 bg-white lg:block",
        isOpen ? "" : "",
      )}
    >
      <div className="mb-6 flex h-16 items-center justify-center">
        <h3>Logo</h3>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <Link href="#">
          <div
            className={
              "bg-indigo-100 py-2 px-4 font-medium text-indigo-700 select-none hover:bg-indigo-100"
            }
          >
            <div className="flex items-center space-x-2">
              <MdDashboard className="size-6" />
              <span className="text-base"> Dashboard </span>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div
            className={
              "py-2 px-4 text-slate-800 select-none hover:bg-indigo-100"
            }
          >
            <div className="flex items-center space-x-2">
              <MdPeopleAlt className="size-6" />
              <span className="text-base"> Users </span>
            </div>
          </div>
        </Link>

        <details className="group" open>
          <summary className="flex cursor-pointer list-none items-center justify-between fill-slate-800 py-2 px-4 text-slate-800 hover:bg-indigo-100">
            <div className="flex items-center space-x-2 select-none">
              <MdPayments className="size-6" />
              <span className="text-base">Level 1</span>
            </div>
            <MdKeyboardArrowRight className="size-5 transform transition-transform duration-200 group-open:rotate-90" />
          </summary>

          <div className="bg-slate-100">
            <Link href="#">
              <div
                className={
                  "fill-slate-800 py-2 px-4 text-slate-800 select-none hover:bg-indigo-100"
                }
              >
                <div className="flex items-center space-x-2">
                  <MdOutlineCircle className="size-6" />
                  <span className="text-base"> Level 2 </span>
                </div>
              </div>
            </Link>
          </div>
        </details>
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
