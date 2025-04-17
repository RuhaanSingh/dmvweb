
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  children: ReactNode;
  className?: string;
}

const Button = ({ 
  variant = "primary", 
  size = "default", 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-purple-500 hover:bg-purple-600 text-white shadow-sm",
    secondary: "bg-white hover:bg-gray-100 text-navy-800 border border-gray-200",
    outline: "border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
  };
  
  const sizes = {
    sm: "py-2 px-4 text-xs",
    default: "py-3 px-6 text-sm",
    lg: "py-4 px-8 text-base",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
