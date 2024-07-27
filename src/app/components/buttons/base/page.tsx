import BaseButton from "@/components/buttons/base-button";

export default function Buttons() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
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
        </div>
      </div>
    </div>
  );
}
