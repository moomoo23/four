import React from "react";
import { CircleDollarSign, BrainCircuit, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCardsSection: React.FC = () => {
  const features = [
    {
      icon: <CircleDollarSign className="text-white" size={24} />,
      title: "Craft brilliant experiences",
      description:
        "Create authentic brand experiences at scale and tailor content, recommendations, and customer journeys that resonate for every user.",
    },
    {
      icon: <BrainCircuit className="text-white" size={24} />,
      title: "Work smarter",
      description:
        "Save time and costs on routine or repetitive tasks and spend more time driving the strategies that are most important to your brand.",
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: "Achieve better results",
      description:
        "Optimize, automate, and personalize powerful experiences for every one of your customers that drive better outcomes for your brand.",
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsSection;
