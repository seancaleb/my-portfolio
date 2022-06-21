import { GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { transition } from "../data/framer";

const Header = () => {
  return (
    <header className="font-body h-24 absolute z-10 top-0 left-0 w-full">
      <motion.div
        {...animation}
        className="h-full max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6"
      >
        <Link href="/">
          <a className="text-lg font-medium text-white">SNCLB</a>
        </Link>

        <Link href="https://github.com/seancaleb/my-portfolio">
          <a target="_blank" className="flex items-center gap-4">
            <GithubOutlined className="text-white text-2xl" />
          </a>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

const animation = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition,
};
