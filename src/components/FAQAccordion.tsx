
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

const FAQAccordion = ({ faqs, className }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "glass-card rounded-xl overflow-hidden transition-all duration-300",
            openIndex === index ? "border-purple-500" : ""
          )}
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium text-white">{faq.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-purple-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-purple-400" />
            )}
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-60" : "max-h-0"
            )}
          >
            <div className="p-5 pt-0 text-white/80">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
