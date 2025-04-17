
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const PortfolioCard = ({
  title,
  category,
  description,
  imageSrc,
  link,
  className,
}: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300">
          <div className="flex flex-col">
            <span className="text-purple-400 text-sm mb-1">{category}</span>
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className={`text-white/80 mb-4 transition-all duration-300 ${
              isHovered ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden"
            }`}>
              {description}
            </p>
            <Link
              to={link.startsWith('/') ? link : '#'}
              className={`flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
