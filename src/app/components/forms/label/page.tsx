import Helper from "@/components/forms/helper";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Label size="xs">Extra Small</Label>

          <Label size="sm">Small</Label>

          <Label size="md">Medium</Label>

          <Label size="lg">Large</Label>
        </div>

        <div className="mb-4 space-y-6 space-x-6">
          <div>
            <Label size="xs">Extra Small</Label>
            <Input size="xs" placeholder="Extra Small" />
            <Helper size="xs">xs Helper</Helper>
          </div>

          <div>
            <Label size="sm">Small</Label>
            <Input size="sm" placeholder="Small" />
            <Helper size="sm">sm Helper</Helper>
          </div>

          <div>
            <Label size="md">Medium</Label>
            <Input size="md" placeholder="Medium" />
            <Helper size="md">md Helper</Helper>
          </div>

          <div>
            <Label size="lg">Large</Label>
            <Input size="lg" placeholder="Large" />
            <Helper size="lg">lg Helper</Helper>
          </div>
        </div>

        <div className="space-y-6 space-x-6">
          <div>
            <Label size="xs" required>
              Extra Small
            </Label>
            <Input size="xs" placeholder="Extra Small" />
          </div>

          <div>
            <Label size="sm" required>
              Small
            </Label>
            <Input size="sm" placeholder="Small" />
          </div>

          <div>
            <Label size="md" required>
              Medium
            </Label>
            <Input size="md" placeholder="Medium" />
          </div>

          <div>
            <Label size="lg" required>
              Large
            </Label>
            <Input size="lg" placeholder="Large" />
          </div>
        </div>
      </div>
    </div>
  );
}
