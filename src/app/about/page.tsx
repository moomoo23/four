import { cn } from "@/lib/utils";
import Card from "../components/ui/card/Card";
import MaxWidthWrapper from "../components/ui/MaxWidthWrapper";
import AccordionStack from "../components/ui/accordioncomp";
import { Button, buttonVariants } from "../components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <>
      <p className=" overflow-hidden text-7xl md:text-9xl font-bold z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 relative mt-20 flex items-center justify-center">
        ABOUT US
      </p>
      <div>
        <div className="mt-30 flex items-center justify-center ">
          <p className="text-center mt-20 mx-auto max-w-lg text-zinc-700 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            aliquid quod veritatis quasi culpa hic. Unde eum, aliquid quia
            voluptatem rerum non. Ex, iste aliquam vero quisquam possimus quis
            ratione!
          </p>
        </div>
      </div>
      <Card
        title="Featured article"
        content="This is a sample article content. It can be quite long and will wrap as needed."
        className="mx-auto mt-20"
        imageUrl="/400x300.jpg"
        width={400}
        height={300}
      ></Card>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center mt-10">
          <Link
            href="/"
            className={buttonVariants({ size: "sm", variant: "secondary" })}
          >
            Start learning like a pro with FOURPOINTCLUB!
          </Link>
          <h1 className="text-center font-bold text-xl mt-20 ">FAQs</h1>
          <div className="mb-40">
            <AccordionStack title="Hello" desc="hello again"></AccordionStack>
            <AccordionStack title="Hello" desc="hello again"></AccordionStack>
            <AccordionStack title="Hello" desc="hello again"></AccordionStack>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
export default Page;
