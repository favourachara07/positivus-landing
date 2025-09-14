'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { workingProcess } from './data/work';

export default function WorkingProcessAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-6">
      {workingProcess.map((step, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div
            key={index}
            className={`rounded-3xl border-2 border-black transition-all duration-300 ${
              isOpen 
                ? 'bg-[#B9FF66]' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            layout
          >
            <div
              className="p-8 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-6">
                <span className={`text-4xl font-bold transition-colors duration-300 ${
                  isOpen ? 'text-black' : 'text-black'
                }`}>
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    isOpen ? 'text-black' : 'text-black'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <motion.button
                  className={`w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white hover:bg-gray-100' 
                      : 'bg-transparent hover:bg-white'
                  }`}
                  animate={{ rotate: isOpen ? 0 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-black" />
                  )}
                </motion.button>
              </div>
            </div>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="pl-16"> {/* Align with title */}
                      <motion.p
                        variants={{
                          open: { opacity: 1, y: 0 },
                          collapsed: { opacity: 0, y: -10 }
                        }}
                        transition={{ delay: 0.1 }}
                        className="text-black leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}