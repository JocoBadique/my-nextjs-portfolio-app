import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="xl:py-8 xl:px-24 lg:flex-row lg:py-8 lg:px-12 md:px-24 px-4 flex flex-col">
      <div className="lg:items-start flex flex-col pt-12 items-center justify-center">
        <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mb-3">
          hey, i'm joco badique
        </code>
        <h1 className="text-primary leading-tight scroll-m-20 text-4xl font-bold tracking-wide xl:text-7xl lg:text-5xl lg:text-left text-center line mb-10">
          I'm a full-stack software engineer based on PH
        </h1>
        <Button className="lg:w-72 font-bold w-1/2" size="lg">
          About me
        </Button>
      </div>
      <div className="flex pt-12 items-center justify-end">
        <Image
          className="z-10 animate-[slow-bounce_6s_ease-in-out_infinite]"
          height={1100}
          width={1100}
          alt="Hero"
          src="/hero.svg"
        />
        <Image
          className="absolute"
          height={550}
          width={550}
          alt="Hero"
          src="/herobg.svg"
        />
      </div>
    </section>
  );
};
export default Hero;
