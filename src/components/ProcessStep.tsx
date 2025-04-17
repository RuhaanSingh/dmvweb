
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
  className?: string;
}

const ProcessStep = ({
  number,
  title,
  description,
  icon,
  isLast = false,
  className,
}: ProcessStepProps) => {
  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col items-center mr-6">
        <div className="h-12 w-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
          {number}
        </div>
        {!isLast && <div className="flex-grow w-0.5 bg-purple-500/30 my-2"></div>}
      </div>
      <div className={cn("pb-10", isLast && "pb-0")}>
        <div className="h-12 w-12 rounded-full bg-navy-700 flex items-center justify-center mb-4 text-purple-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
