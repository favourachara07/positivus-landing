import Image from "next/image";
import Button from "./Button";

interface CaseStudyCardProps {
  description: string;
  hasBorder: boolean;
}

export default function CaseStudyCard({
  description,
  hasBorder,
}: CaseStudyCardProps) {
  return (
    <div className={hasBorder ? "lg:border-l border-gray-600 lg:pl-8" : ""}>
      <p className="mb-4">{description}</p>
      <Button variant="ghost" className="p-5 flex items-center gap-2">
        Learn more
        <span>
          <Image src="/Up.svg" alt="Arrow Right" width={16} height={16} />
        </span>
      </Button>
      <hr className="border-t border-gray-300 mt-4" />
    </div>
  );
}
