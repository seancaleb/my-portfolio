import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { transition } from "../data/framer";

const Footer = () => {
  return (
    <footer className="font-body h-32 absolute z-10 bottom-0 left-0 w-full">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
          className="border-slate-700"
        />
      </div>
      <motion.div
        {...animation}
        className="h-full max-w-5xl mx-auto flex flex-col justify-center gap-2 sm:flex-row items-center sm:justify-between px-4 md:px-6"
      >
        <p className="text-slate-600 text-base">Copyright 2022 — Sean Caleb</p>

        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="https://github.com/seancaleb">
                <a target="_blank">
                  <GithubFilled className="icon" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://www.linkedin.com/in/sean-caleb-ubias-b31018168/">
                <a target="_blank">
                  <LinkedinFilled className="icon" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://twitter.com/snclbb">
                <a target="_blank">
                  <TwitterCircleFilled className="icon" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://www.instagram.com/seanclbb/">
                <a target="_blank">
                  <InstagramFilled className="icon" />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </footer>
  );
};

export default Footer;

const animation = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition,
};
