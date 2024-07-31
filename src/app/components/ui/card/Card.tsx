import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

function Card({
  className,
  title,
  content,
  imageUrl,
  height,
  width,
}: {
  className?: string;
  title: string;
  content: string;
  imageUrl: string;
  height?: number;
  width?: number;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4",
        className
      )}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:h-full md:w-48 rounded-xl"
            src={imageUrl}
            alt="Card image"
            width={width}
            height={height}
          />
        </div>
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
            {title}
          </div>
          <p className="mt-2 text-slate-500">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
