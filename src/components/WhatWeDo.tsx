import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0, margin: "0px 0px -20% 0px" });

  const sentences = [
    "We live in the attention economy",
    "People, brands and projects want a community that listens, reacts and grows with them.",
    "At Light Army, we help YOU stand out by creating content and convos that move people and keep them coming back.",
    "We believe attention is earned and we build it with creativity, purpose and the kind of energy that makes people remember.",
  ];

  const getAnimationProps = (index: number) => ({
    initial: { opacity: 0, x: 100 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
    transition: {
      duration: 1.2,
      delay: index * 0.3,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      ref={ref}
      id="what-we-do"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6 text-center">
          {sentences.map((sentence, index) => (
            <motion.p
              key={index}
              {...getAnimationProps(index)}
              className="text-base md:text-lg lg:text-2xl font-display font-semibold tracking-wide"
            >
              {sentence}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
