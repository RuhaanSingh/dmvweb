
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
  buttonText?: string;
}

const PricingCard = ({
  tier,
  price,
  description,
  features,
  popular = false,
  className,
  buttonText = "Get Started",
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-8 flex flex-col",
        popular ? "border-purple-500" : "border-white/20",
        className
      )}
    >
      {popular && (
        <div className="py-1 px-4 bg-purple-500 text-white rounded-full text-sm font-medium inline-block self-start mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">${price}</span>
        {price !== "Custom" && (
          <span className="text-white/70 ml-1">/project</span>
        )}
      </div>
      <p className="text-white/80 mb-6">{description}</p>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button
        variant={popular ? "primary" : "outline"}
        className="w-full justify-center mt-auto"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
