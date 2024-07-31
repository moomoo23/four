import React from "react";
import MaxWidthWrapper from "./components/ui/MaxWidthWrapper";
import Card from "./components/ui/card/Card";
import HeroSection from "./components/ui/HeroSection";
import FeatureCardsSection from "./components/ui/card/FeatureCards";
import FeatureShowcaseSection from "./components/ui/card/FeatureShowCase";

function Page() {
  return (
    <>
      {/*Navbar in layout file*/}
      {/*Main content */}
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <HeroSection></HeroSection>

        <Card
          title="Featured article"
          content="This is a sample article content. It can be quite long and will wrap as needed."
        />
        <FeatureCardsSection></FeatureCardsSection>
        <FeatureShowcaseSection></FeatureShowcaseSection>
      </MaxWidthWrapper>
    </>
  );
}
export default Page;
