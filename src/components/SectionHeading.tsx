
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  gradient?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  gradient = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className={cn(
        "section-title",
        gradient && "text-gradient",
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "section-subtitle",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
