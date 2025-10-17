"use client"

import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    title: "Clarity Call",
    subtext: "We start with your vision",
    description: "What do you want, and where do you want to go?"
  },
  {
    title: "Account Analysis",
    subtext: "We dive into your account",
    description: "Spot strengths, gaps, and growth opportunities."
  },
  {
    title: "Trial Phase",
    subtext: "You see our best in action",
    description: "Pick what feels most like you."
  },
  {
    title: "Implementation & Growth",
    subtext: "We bring the plan to life",
    description: "Fine tune every detail, and help you grow."
  }
];

const ProcessCard = ({
  step,
  index,
  isVisible
}: {
  step: typeof processSteps[0],
  index: number,
  isVisible: boolean
}) => {
  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'}
      `}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      {/* Number badge */}
      <div className="
        w-16 h-16
        flex items-center justify-center
        bg-background border-3 border-foreground
        rounded-full
        font-bold text-xl
        mb-4
      ">
        {index + 1}
      </div>

      {/* Card content */}
      <div className="
        bg-background border-2 border-foreground/30
        rounded-xl p-6
        text-center
        hover:border-foreground
        transition-all duration-300
      ">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {step.title}
        </h3>
        <p className="text-sm font-semibold text-muted-foreground mb-3">
          {step.subtext}
        </p>
        <p className="text-sm text-muted-foreground">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Mobile: Vertical stack */}
      <div className="md:hidden space-y-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            How We Work
          </h2>
          <p className="text-base text-muted-foreground">
            Here's how we turn your goals into real results.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`
                flex gap-4
                transition-all duration-700
                opacity-100 translate-x-0
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="
                  w-12 h-12 flex items-center justify-center
                  bg-background border-3 border-foreground
                  rounded-full font-bold text-foreground
                ">
                  {index + 1}
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-1">
                  {step.subtext}
                </p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Vertical connector line (except last step) */}
              {index < 3 && (
                <div className="absolute left-6 top-full h-6 border-l-2 border-foreground/30" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal flow */}
      <div className="hidden md:block px-4">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's how we turn your goals into real results.
            </p>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line - simple version */}
            <div className={`
              absolute top-8 left-0 right-0 h-1 bg-foreground/10
              transition-all duration-1000 ease-out
              ${isVisible ? 'bg-foreground/50' : 'bg-foreground/10'}
            `} />

            {/* Steps grid */}
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ProcessCard
                  key={index}
                  step={step}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;