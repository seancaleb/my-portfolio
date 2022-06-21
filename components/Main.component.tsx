type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="min-h-screen bg-[#111827] pt-24 pb-32 relative overflow-hidden">
      {children}
    </main>
  );
};

export default Main;
