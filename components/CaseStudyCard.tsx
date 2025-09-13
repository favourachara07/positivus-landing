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
    <div className={hasBorder ? "border-l border-gray-600 pl-8" : ""}>
      <p className="mb-4">{description}</p>
      <Button variant="ghost" className="p-5">
        Learn more
        <span>
            <Image src="/Up.svg" alt="Arrow Right" width={16} height={16} />
        </span>
      </Button>
    </div>
  );
}
