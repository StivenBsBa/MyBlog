import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
}

export function RevealSection({ children, className = "", ...props }: RevealSectionProps) {
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={`section reveal ${isVisible ? "reveal--visible" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
