import Image from "next/image";
import { team } from "./array";
import Button from "./Button";

export default function TeamCards() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-3xl p-8 hover:shadow-lg transition-shadow relative"
          >
            {/* Profile section with image and LinkedIn */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {/* Profile image with green background */}
                  <div className="w-20 h-20  flex items-center justify-center overflow-hidden">
                    <Image
                      src="/Picture.svg"
                      alt={member.name}
                      height={64}
                      width={64}
                      className="w-16 h-16  object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-left mb-1">
                    {member.name}
                  </h3>
                  <p className="text-black text-left font-medium text-sm">
                    {member.position}
                  </p>
                </div>
              </div>

              {/* LinkedIn icon */}
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-[#B9FF66] text-xs font-bold">in</span>
              </div>
            </div>

            {/* Divider line */}
            <div className="border-t border-black mb-6"></div>

            {/* Experience description */}
            <p className="text-black text-left text-sm leading-relaxed">
              {member.experience}
            </p>
          </div>
        ))}
      </div>

      <div className="text-right mt-12">
        <Button variant="primary" size="lg">
          See all team
        </Button>
      </div>
    </div>
  );
}
