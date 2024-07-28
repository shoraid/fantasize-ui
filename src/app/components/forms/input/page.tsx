import BaseInput from "@/components/forms/base-input";

export default function Input() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <BaseInput size="xs" placeholder="Extra Small" />

          <BaseInput size="sm" placeholder="Small" />

          <BaseInput size="md" placeholder="Medium" />

          <BaseInput size="lg" placeholder="Large" />
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="flex w-[40%] flex-col gap-y-6">
          <BaseInput placeholder="disabled" disabled />

          <BaseInput color="primary" placeholder="disabled primary" disabled />

          <BaseInput color="base" placeholder="base" />

          <BaseInput color="primary" placeholder="primary" />

          <BaseInput color="secondary" placeholder="secondary" />

          <BaseInput color="tertiary" placeholder="tertiary" />

          <BaseInput color="info" placeholder="info" />

          <BaseInput color="success" placeholder="success" />

          <BaseInput color="warning" placeholder="warning" />

          <BaseInput color="error" placeholder="error" />

          <BaseInput color="light" placeholder="light" />

          <BaseInput color="dark" placeholder="dark" />
        </div>
      </div>
    </div>
  );
}
