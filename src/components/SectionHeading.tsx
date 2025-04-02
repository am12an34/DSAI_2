
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-16", alignmentClasses[align], className)}>
      {subtitle && (
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-dsai-green/10 text-dsai-green">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      {description && <p className="text-gray-400 text-lg">{description}</p>}
    </div>
  );
};

export default SectionHeading;
