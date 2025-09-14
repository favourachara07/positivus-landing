'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from './data/testimonials.';


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#191A23] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-6 left-6 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-green-300 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-6 right-6 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border border-green-300"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Testimonial Content */}
        <div className="min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Speech bubble design */}
              <div className="relative">
                <div className="bg-[#2A2B35] rounded-2xl p-8 mb-8 relative border border-[#B9FF66]">
                  <p className="text-lg mb-0 leading-relaxed">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>
                  {/* Speech bubble arrow */}
                  <div className="absolute -bottom-3 left-12 w-6 h-6 bg-[#2A2B35] border-r border-b border-[#B9FF66] transform rotate-45"></div>
                </div>

                {/* Author info */}
                <div className="flex items-center ml-6">
                  <div className="w-12 h-12 bg-[#B9FF66] rounded-full mr-4 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          {/* Previous button */}
          <motion.button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Star indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Star
                  className={`w-6 h-6 transition-colors ${
                    index === currentIndex
                      ? 'text-[#B9FF66] fill-[#B9FF66'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0"
                    initial={false}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className="w-6 h-6 text-[#B9FF66] fill-[#B9FF66]" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Next button */}
          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Auto-play functionality */}
      <motion.div
        key={`autoplay-${currentIndex}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-green-300 origin-left"
        onAnimationComplete={() => {
          setTimeout(nextTestimonial, 100);
        }}
      />
    </div>
  );
}