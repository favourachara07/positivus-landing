import Image from "next/image";

export default function SectionContainer({
  heading,
  subHeading,
  children,
  hero,
}: {
  children?: React.ReactNode;
  heading?: string;
  subHeading?: string;
  hero?: boolean;
}) {
  return (
    <div>
      {hero ? (
        <section className="px-6 py-12 lg:px-20 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Navigating the digital landscape for success
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800 transition-colors">
                Book a consultation
              </button>
            </div>
            <div className=" rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <Image
                src="/Illustration.svg"
                alt="Hero Image"
                // layout="fill"
                // objectFit="cover"
                height={400}
                width={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 py-12 lg:px-20">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold bg-[#B9FF66] px-2 py-1 rounded">
              {heading}
            </h2>
            <p className="ml-4 text-lg text-gray-600 max-w-lg">{subHeading}</p>
          </div>
          {children}
        </section>
      )}
    </div>
  );
}
