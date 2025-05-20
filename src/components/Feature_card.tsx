import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(185,93,241,0.4),0_6px_20px_rgba(225,68,145,0.35)] transition duration-300 ease-in-out max-w-sm w-full flex flex-col items-center text-center">
      
      {/* Icon Container */}
      <div className="w-24 h-24 rounded-full bg-[#5BCFF2] flex items-center justify-center mb-6">
        <img src={image} alt={title} className="w-12 h-12" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#1B1F38] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
