import { ReactNode, ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "opacity-0",
        inView && "animate-fade-up",
        className,
      )}
    >
      {children}
    </Tag>
  );
}