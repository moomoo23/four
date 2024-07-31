import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/app/components/ui/text-reveal-card";
import Head from "next/head";
import MaxWidthWrapper from "../components/ui/MaxWidthWrapper";

function Page() {
  return (
    <>
      <div className=" flex items-center justify-center h-[20rem] rounded-2xl w-full">
        <TextRevealCard
          text="You know the topics"
          revealText=" And we know how to learn "
        >
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Get it? It's a Breaking Bad reference
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
      <MaxWidthWrapper>
        <div className="min-h-screen">
          <div className="absolute top-0 left-0 w-4 h-4 bg-pink-400 rounded-full"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-400 rounded-full"></div>

          <p className="text-green-600 mb-20 mx-auto text-center mt-20 ">
            Video essays
          </p>

          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-800"></div>
              <div className="p-6">
                <span className="text-green-600">Marketing</span>
                <h2 className="text-2xl font-bold mt-2 mb-4">
                  Your company might be in need of a social media audit.
                </h2>
                <p className="text-gray-600">By Author Name</p>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md ">
                <div className="h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    How can businesses utilize email marketing to nurture their
                    leads.
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-32 bg-gradient-to-r from-blue-300 to-blue-500"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Auto-reply: How to use automated responses for your email
                    lists.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <p className="text-green-600 mb-20 mx-auto text-center mt-20 ">
            Articles
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-800"></div>
            <div className="p-6">
              <span className="text-green-600">Marketing</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                Your company might be in need of a social media audit.
              </h2>
              <p className="text-gray-600">By Author Name</p>
            </div>
          </div>

          <div className="grid gap-8 ">
            <div className="bg-white rounded-lg overflow-hidden shadow-md ">
              <div className="h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  How can businesses utilize email marketing to nurture their
                  leads.
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-32 bg-gradient-to-r from-blue-300 to-blue-500"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Auto-reply: How to use automated responses for your email
                  lists.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-60">FOOTER</p>
      </MaxWidthWrapper>
    </>
  );
}
export default Page;
