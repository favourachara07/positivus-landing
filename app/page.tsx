import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import ContactForm from "@/components/Form/ContactForm";
import ContactIllustration from "@/components/Form/ContactIllustration";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Button from "@/components/Button";
import { services } from "@/components/data/services";
import { caseStudies } from "@/components/data/caseStudies";
import Header from "@/components/Header";
import Image from "next/image";
import TestimonialsSection from "@/components/Testimonials";
import WorkingProcessAccordion from "@/components/WorkinProcess";
import TeamCards from "@/components/TeamCard";
import { AnimatedLogoSliderWithPause } from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <SectionContainer hero={true} />

      <AnimatedLogoSliderWithPause />
      {/* Services Section */}
      <SectionContainer
        heading="Services"
        subHeading="At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              bgColor={service.bgColor}
              titleBgColor={service.titleBgColor}
              iconBgColor={service.iconBgColor}
              textColor={service.textColor}
              hoverColor={service.hoverColor}
              img={service.img}
            />
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="px-6 py-12 lg:px-20">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row bg-gray-100 rounded-3xl p-8 lg:p-12 ">
          <div className="lg:max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Let&apos;s make things happen
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button variant="cta" size="lg">
              Get your free proposal
            </Button>
          </div>
          <div className="hidden lg:block">
            <Image src="/happen.svg" alt="CTA Image" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <SectionContainer
        heading="Case Studies"
        subHeading="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      >
        <div className="bg-[#191A23] text-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                description={caseStudy.description}
                hasBorder={caseStudy.hasBorder}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Working Process Section */}
      <SectionContainer
        heading="Working Process"
        subHeading="Step-by-Step Guide to Achieving Your Business Goals"
      >
        <WorkingProcessAccordion />
      </SectionContainer>

      {/* Team Section */}
      <SectionContainer
        heading="Team"
        subHeading="Meet the Skilled and Experienced Team Behind Our Successful Digital Marketing Strategies"
      >
        <TeamCards />
      </SectionContainer>

      <SectionContainer
        heading="Testimonials"
        subHeading="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      >
        <TestimonialsSection />
      </SectionContainer>

      <SectionContainer
        heading="Contact Us"
        subHeading="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      >
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12 relative overflow-x-hidden">
          <div className="flex flex-col lg:flex-row space-x-9">
            <div className="flex-grow">
              <ContactForm />
            </div>
            <div className="lg:flex hidden justify-between lg:relative lg:left-70 lg:top-1/2 ">
              <ContactIllustration />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}