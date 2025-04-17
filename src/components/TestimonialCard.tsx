
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  avatarSrc,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6",
        className
      )}
    >
      <QuoteIcon size={28} className="text-purple-500 mb-4" />
      <p className="text-white/90 mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img
            src={avatarSrc}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-white/70">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
