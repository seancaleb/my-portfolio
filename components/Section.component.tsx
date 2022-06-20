type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`px-4 md:px-6 max-w-5xl mx-auto grid grid-cols-12 gap-x-6 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
