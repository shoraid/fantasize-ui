import BaseInput from "@/components/forms/base-input";
import Label from "@/components/forms/base-label";

export default function Input() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Label size="xs">Extra Small</Label>

          <Label size="sm">Small</Label>

          <Label size="md">Medium</Label>

          <Label size="lg">Large</Label>
        </div>

        <div className="space-y-6 space-x-6">
          <div>
            <Label size="xs">Extra Small</Label>
            <BaseInput size="xs" placeholder="Extra Small" />
          </div>

          <div>
            <Label size="sm">Small</Label>
            <BaseInput size="sm" placeholder="Small" />
          </div>

          <div>
            <Label size="md">Medium</Label>
            <BaseInput size="md" placeholder="Medium" />
          </div>

          <div>
            <Label size="lg">Large</Label>
            <BaseInput size="lg" placeholder="Large" />
          </div>
        </div>

        <div className="space-y-6 space-x-6">
          <div>
            <Label size="xs" required>
              Extra Small
            </Label>
            <BaseInput size="xs" placeholder="Extra Small" />
          </div>

          <div>
            <Label size="sm" required>
              Small
            </Label>
            <BaseInput size="sm" placeholder="Small" />
          </div>

          <div>
            <Label size="md" required>
              Medium
            </Label>
            <BaseInput size="md" placeholder="Medium" />
          </div>

          <div>
            <Label size="lg" required>
              Large
            </Label>
            <BaseInput size="lg" placeholder="Large" />
          </div>
        </div>
      </div>
    </div>
  );
}
