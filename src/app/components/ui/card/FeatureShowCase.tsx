import React from "react";
import Link from "next/link";
import { Square, ChevronRight } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
  href: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  href,
}) => (
  <Link href={href} className="block group">
    <div className="bg-gray-100 rounded-lg p-6 flex flex-col h-full transition-all duration-300 ease-in-out group-hover:bg-gray-200 group-hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
          {title}
        </h3>
        <Square className="text-yellow-400 w-8 h-8 transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </div>
      <p className="text-gray-600 flex-grow group-hover:text-gray-700">
        {description}
      </p>
      <div className="mt-4 flex items-center text-yellow-500 font-medium">
        <span className="mr-2">Learn more</span>
        <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

const FeatureShowcaseSection: React.FC = () => {
  const features = [
    {
      title: "YouTube summarizer",
      description:
        "Quickly extract key points from any YouTube video, saving you time and enhancing comprehension.",
      href: "/features/youtube-summarizer",
    },
    {
      title: "Article summarizer",
      description:
        "Condense lengthy articles into concise summaries, helping you grasp main ideas effortlessly.",
      href: "/features/article-summarizer",
    },
    {
      title: "AI Search",
      description:
        "Leverage advanced AI to find precisely what you're looking for across your saved content.",
      href: "/features/ai-search",
    },
    {
      title: "Web highlight",
      description:
        "Mark and save important information from any webpage for easy future reference.",
      href: "/features/web-highlight",
    },
    {
      title: "Website note",
      description:
        "Attach personal notes to websites, enhancing your browsing experience with custom insights.",
      href: "/features/website-note",
    },
    {
      title: "Bookmark manager",
      description:
        "Organize and categorize your bookmarks efficiently, making information retrieval a breeze.",
      href: "/features/bookmark-manager",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-yellow-400 rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            WITH LEARNHUB, YOU CAN
          </h2>
          <p className="text-xl text-gray-600">
            Explore our features and unlock a whole new level of productivity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcaseSection;
