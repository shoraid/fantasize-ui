import Input from "@/components/forms/input";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Input size="xs" placeholder="Extra Small" />

          <Input size="sm" placeholder="Small" />

          <Input size="md" placeholder="Medium" />

          <Input size="lg" placeholder="Large" />
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="flex w-[40%] flex-col gap-y-6">
          <Input placeholder="disabled" disabled />

          <Input color="primary" placeholder="disabled primary" disabled />

          <Input color="base" placeholder="base" />

          <Input color="primary" placeholder="primary" />

          <Input color="secondary" placeholder="secondary" />

          <Input color="tertiary" placeholder="tertiary" />

          <Input color="success" placeholder="success" />

          <Input color="warning" placeholder="warning" />

          <Input color="error" placeholder="error" />
        </div>
      </div>
    </div>
  );
}
