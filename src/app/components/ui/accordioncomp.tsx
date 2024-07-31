import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export default function AccordionStack({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{desc}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
