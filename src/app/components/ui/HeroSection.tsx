import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

function HeroSection() {
  return (
    <div className="  flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto mb-16">
        <div className=""></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          UNLOCK BETTER GRADES WITH
          <br /> <span className="text-yellow-400">FOURPOINTCLUB!</span>
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          LearnHub is an intelligent platform for capturing, organizing, and
          mastering your educational content
        </p>
        <Link href="/signup" className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </div>
  );
}
export default HeroSection;
