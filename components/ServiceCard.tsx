import Image from "next/image";
import Button from "./Button";

interface ServiceCardProps {
  title: string[];
  icon: string;
  bgColor: string;
  titleBgColor: string;
  iconBgColor: string;
  textColor: string;
  hoverColor: string;
  img?: string;
}

export default function ServiceCard({
  title,
  bgColor,
  titleBgColor,
  textColor,
  hoverColor,
  img,
}: ServiceCardProps) {
  return (
    <div
      className={`${bgColor} border border-black rounded-[45px] p-8 relative overflow-hidden h-72 flex flex-col justify-between shadow-[0_5px_0px_0px_#191A23] hover:shadow-[0_8px_0px_0px_#191A23] transition-all duration-200 hover:-translate-y-1`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <h3
            className={`text-2xl font-bold  ${titleBgColor} inline-block px-2 py-1 rounded`}
          >
            {title[0]}
          </h3>
          <br />
          <h3
            className={`text-2xl font-bold ${titleBgColor} inline-block px-2 py-1 rounded`}
          >
            {title[1]}
          </h3>
        </div>
        <Image src={img ?? "/Find.svg"} alt="Find" width={200} height={200} />
        {/* <div className={`${iconBgColor} p-3 rounded-full`}>
          <span className="text-2xl">{icon}</span>
        </div> */}
      </div>
      <Button
        variant="ghost"
        className={`flex items-center ${textColor} ${hoverColor} p-0 space-x-2`}
      >
        <Image src="/arrow.svg" alt="Arrow right" width={30} height={30} />
        <span className="mr-2 text-2xl text-[#191A23]">Learn more</span>
      </Button>
    </div>
  );
}
