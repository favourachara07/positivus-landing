"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
  { name: "Amazon", src: "/amazon.png", alt: "Amazon" },
  { name: "Dribbble", src: "/dribbble.png", alt: "Dribbble" },
  { name: "HubSpot", src: "/hubspot.png", alt: "HubSpot" },
  { name: "Notion", src: "/notion.png", alt: "Notion" },
  { name: "Netflix", src: "/netflix.png", alt: "Netflix" },
  { name: "Zoom", src: "/zoom.png", alt: "Zoom" },
];

export default function AnimatedLogoSlider() {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="relative">
        {/* Main sliding container */}
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{
            width: "200%",
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: `${100 / logos.length}%` }}
            >
              <div className="relative w-32 h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain max-w-full max-h-full filter brightness-0"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              style={{ width: `${100 / logos.length}%` }}
            >
              <div className="relative w-32 h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain max-w-full max-h-full filter brightness-0"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges for smooth appearance */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}

// Alternative version with pause on hover
export function AnimatedLogoSliderWithPause() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center gap-16"
          animate={
            !isHovered
              ? {
                  x: [0, -50 + "%"],
                }
              : {}
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{
            width: "200%",
          }}
        >
          {/* First set */}
          {logos.map((logo, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              style={{ width: `${100 / logos.length}%` }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-32 h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain max-w-full max-h-full filter brightness-0"
                  priority={index < 3}
                />
              </div>
            </motion.div>
          ))}

          {/* Duplicate set */}
          {logos.map((logo, index) => (
            <motion.div
              key={`second-${index}`}
              className=" flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              style={{ width: `${100 / logos.length}%` }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-32 h-12 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain max-w-full max-h-full filter brightness-0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
