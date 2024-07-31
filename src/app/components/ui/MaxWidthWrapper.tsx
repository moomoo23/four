import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Basically makes sure that everything is in the center. Wrap everything inside this component.
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
