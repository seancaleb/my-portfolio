import { motion } from "framer-motion";
import { transition } from "../data/framer";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <motion.section
      {...animation}
      className={`px-4 md:px-6 max-w-5xl mx-auto grid grid-cols-12 gap-x-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;

const animation = {
  initial: {
    y: 30,
    opacity: 0,
  },
  whileInView: { y: 0, opacity: 1 },
  transition,
  viewport: {
    once: true,
    amount: 0.15,
    margin: "100px 100px 100px 100px",
  },
};
