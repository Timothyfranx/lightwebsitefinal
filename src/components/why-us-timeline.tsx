"use client"

import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const timelineItems = [
  {
    title: "High-Quality Replies",
    description: "We craft responses that mirror your voice and build genuine relationships with your community."
  },
  {
    title: "Consistent Engagement",
    description: "Your community stays active and engaged with strategic, timely interactions that matter."
  },
  {
    title: "Growth Focused",
    description: "Watch your profile visits and influence grow with every reply we craft for you."
  },
  {
    title: "Done For You",
    description: "We handle the work while you focus on what matters most."
  }
];

const MobileTimelineItem = ({ item, index, isVisible }: { item: typeof timelineItems[0], index: number, isVisible: boolean }) => {
  return (
    <div
      className={`
        flex gap-4
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Checkmark */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 flex items-center justify-center bg-background border-3 border-foreground rounded-full">
          <Check className="w-5 h-5 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index, isVisible }: { item: typeof timelineItems[0], index: number, isVisible: boolean }) => {
  return (
    <div
      className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Left side: Text */}
      <div className="flex-1">
        <div
          className={`
            bg-background border-2 border-foreground/20 rounded-lg p-6
            transition-all duration-700 ease-out hover:border-foreground/40 hover:shadow-lg
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
          `}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            {item.title}
          </h3>
          <p className="text-muted-foreground">
            {item.description}
          </p>
        </div>
      </div>

      {/* Center: Checkmark circle on timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`
            relative z-10
            w-12 h-12
            flex items-center justify-center
            bg-background border-4 border-foreground
            rounded-full
            transition-all duration-500 ease-out
            ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          `}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <Check className="w-6 h-6 text-foreground animate-pulse" />
        </div>
      </div>

      {/* Right side: Empty (for alternating layout) */}
      <div className="flex-1" />
    </div>
  );
};

export const WhyUsTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="why-us" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Why Us
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Here's what sets us apart
        </p>

        {/* Mobile: Single column */}
        <div className="md:hidden space-y-8 px-4">
          {timelineItems.map((item, index) => (
            <MobileTimelineItem key={index} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Desktop: Alternating timeline */}
        <div className="hidden md:block relative max-w-4xl mx-auto py-20 px-4">
          {/* Vertical line container */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-foreground/0 via-foreground/50 to-foreground/0 transform -translate-x-1/2"
            style={{
              transformOrigin: 'top',
              animation: 'drawLine 2s ease-out forwards',
              animationDelay: '0.3s'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};