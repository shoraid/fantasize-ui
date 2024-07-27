import IconButton from "@/components/buttons/icon-button";

export default function Buttons() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-12 pt-[7%] pb-10">
      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <IconButton size="xs">{Icon()}</IconButton>

          <IconButton size="sm">{Icon()}</IconButton>

          <IconButton size="md">{Icon()}</IconButton>

          <IconButton size="lg">{Icon()}</IconButton>

          <IconButton size="xl">{Icon()}</IconButton>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <IconButton color="primary">{Icon()}</IconButton>

          <IconButton color="secondary">{Icon()}</IconButton>

          <IconButton color="tertiary">{Icon()}</IconButton>

          <IconButton color="info">{Icon()}</IconButton>

          <IconButton color="success">{Icon()}</IconButton>

          <IconButton color="warning">{Icon()}</IconButton>

          <IconButton color="error">{Icon()}</IconButton>

          <IconButton color="light">{Icon()}</IconButton>

          <IconButton color="dark">{Icon()}</IconButton>
        </div>
      </div>

      <div className="container w-[85%]">
        <div className="space-y-6 space-x-6">
          <IconButton color="success" label={Icon()} />
        </div>
      </div>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};
