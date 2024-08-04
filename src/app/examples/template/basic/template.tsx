"use client";

import AppNavbar from "@/components/layout/AppNavbar";
import AppSidebar from "@/components/layout/AppSidebar";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full justify-between">
      <AppSidebar />

      <div
        className={`flex min-h-screen w-full flex-col bg-slate-100 ${isOpen ? "w-[calc(100%-288px)]" : "w-full"}`}
      >
        <AppNavbar />
        <div className="w-full grow pt-4 px-4">
          <div className="rounded-lg bg-white p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
