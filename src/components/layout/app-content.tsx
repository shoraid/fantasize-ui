interface AppContentProps {
  children: React.ReactNode;
}

const AppContent = ({ children }: AppContentProps) => {
  return <div className="rounded-lg bg-white p-4">{children}</div>;
};

export default AppContent;
