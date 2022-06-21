import Section from "../Section.component";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section className="relative">
      <div className="min-h-[450px] flex flex-col col-span-12 justify-center">
        <h1 className="text-4xl md:text-5xl trancking-[-.75px] md:tracking-[-1.5px] font-semibold text-white mb-8">
          A self taught front end web developer
        </h1>

        <hr className="horizontal-rule" />
        <p className="text-lg text-slate-500 max-w-[512px]">
          A developer with strong passion in developing responsive web apps and creating reusable
          user interfaces.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
