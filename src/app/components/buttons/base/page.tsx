import BaseButton from "@/components/buttons/base-button";
import Link from "next/link";

export default function Buttons() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Link href="/login">
            <BaseButton size="md">Login</BaseButton>
          </Link>

          <BaseButton size="xs">Button</BaseButton>

          <BaseButton size="sm">Button</BaseButton>

          <BaseButton size="md">Button</BaseButton>

          <BaseButton size="lg">Button</BaseButton>

          <BaseButton size="xl">Button</BaseButton>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <BaseButton color="primary">Primary</BaseButton>

          <BaseButton color="secondary">Secondary</BaseButton>

          <BaseButton color="tertiary">Tertiary</BaseButton>

          <BaseButton color="info">Info</BaseButton>

          <BaseButton color="success">Success</BaseButton>

          <BaseButton color="warning">Warning</BaseButton>

          <BaseButton color="error">Error</BaseButton>

          <BaseButton color="light">Light</BaseButton>

          <BaseButton color="dark">Dark</BaseButton>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <BaseButton color="success" label="Label" />

          <BaseButton color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            Primary
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
