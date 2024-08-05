import Button from "@/components/buttons/button";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";

export default function Buttons() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Link href="/login">
            <Button size="md">Login</Button>
          </Link>

          <Button size="xs">Button</Button>

          <Button size="sm">Button</Button>

          <Button size="md">Button</Button>

          <Button size="lg">Button</Button>

          <Button size="xl">Button</Button>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Button color="primary">Primary</Button>

          <Button color="secondary">Secondary</Button>

          <Button color="tertiary">Tertiary</Button>

          <Button color="success">Success</Button>

          <Button color="warning">Warning</Button>

          <Button color="error">Error</Button>

          <Button color="light">Light</Button>

          <Button color="dark">Dark</Button>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <Button color="success" label="Label" />

          <Button color="primary">
            <MdOutlineAdd className="size-5" />
            Primary
          </Button>
        </div>
      </div>
    </div>
  );
}
