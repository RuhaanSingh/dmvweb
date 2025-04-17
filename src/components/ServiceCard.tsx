
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  gradient?: boolean;
}

const ServiceCard = ({ title, description, icon, className, gradient = false }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 h-full flex flex-col",
        gradient ? "bg-gradient-to-br from-navy-700/70 to-navy-900/90" : "",
        className
      )}
    >
      <div className="h-14 w-14 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
        <div className="text-purple-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default ServiceCard;
