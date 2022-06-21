import { Divider } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Main, Section } from "../components";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page 404 — SNLCB</title>
      </Head>
      <Section>
        <div className="min-h-[450px] flex flex-col col-span-12 justify-center items-center">
          <div className="flex items-center gap-6 mb-8">
            <h1 className="text-4xl md:text-5xl trancking-[-.75px] md:tracking-[-1.5px] font-semibold text-white">
              404
            </h1>
            <Divider orientation="vertical" className="horizontal-rule mb-0" />
            <p className="text-lg text-slate-500 max-w-[512px]">This page could not be found.</p>
          </div>

          <div>
            <Link href="/">
              <a className="btn btn-primary">Back to home</a>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
