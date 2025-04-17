
import { ReactNode } from "react";

interface HelmetProps {
  children: ReactNode;
}

const Helmet = ({ children }: HelmetProps) => {
  return <>{children}</>;
};

export { Helmet };
