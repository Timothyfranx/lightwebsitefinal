import { useState, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';

const pricingTiers = [
  {
    id: 0,
    name: "Lieutenant",
    subtitle: "Lieutenant Package",
    replies: "100–150",
    description: "high-quality replies that:",
    features: [
      "Mirror your voice",
      "Build relationships",
      "Capture attention",
      "Improve engagement"
    ],
    perks: ["Strategic call"],
    cta: "Let's Start",
    link: "https://calendly.com/okiemuteovie40/30min",
    featured: false
  },
  {
    id: 1,
    name: "Major",
    subtitle: "Major Package",
    replies: "200–250",
    description: "high-quality replies that:",
    features: [
      "Mirror your voice",
      "Build relationships",
      "Improve profile visits",
      "Increase engagement"
    ],
    perks: [
      "Targeted lists",
      "2 strategic calls every month"
    ],
    cta: "Let's Start",
    link: "https://calendly.com/okiemuteovie40/30min",
    featured: true
  },
  {
    id: 2,
    name: "Major General",
    subtitle: "Major General Package",
    replies: "300–350",
    description: "Bandit-style replies that:",
    features: [
      "Mirror your voice",
      "Build relationships",
      "Improve profile visits",
      "Increase engagement",
      "Target custom audiences",
      "Puts you everywhere"
    ],
    perks: [
      "Custom targeted lists",
      "3 strategic calls per month"
    ],
    cta: "Let's Start",
    link: "https://calendly.com/okiemuteovie40/30min",
    featured: false
  },
  {
    id: 3,
    name: "Chad",
    subtitle: "Chad Package",
    specialMessage: "You will love this one. Click the button to start the ultimate growth experience.",
    cta: "Let's Start",
    link: "https://calendly.com/okiemuteovie40/30min",
    featured: false,
    isSpecial: true
  }
];

const PricingCard = ({ tier, isMobile = false, isExpanded, onCardClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const glowPulse = {
    glow: {
      scale: [1, 1.01, 1],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  const buttonPulse = {
    scale: [1, 1.01, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (isMobile) {
      onCardClick(tier.id);
    }
  };

  return (
    <motion.div
      className={`pricing-card bg-background border-4 rounded-2xl p-8 shadow-2xl relative overflow-hidden cursor-pointer will-change-transform ${
        isMobile
          ? isExpanded
            ? 'border-foreground shadow-lg'
            : 'border-foreground/30'
          : 'border-foreground'
      }`}
      initial={{ scale: 0.95, filter: "grayscale(0.3)", opacity: 0.8 }}
      whileHover={!isMobile ? {
        scale: 1.05,
        filter: "grayscale(0)",
        opacity: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      whileTap={!isMobile ? {
        scale: 1.05,
        filter: "grayscale(0)",
        opacity: 1,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 255, 255, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      } : { scale: 0.98 }}
      variants={glowPulse}
      animate={!isMobile ? "glow" : undefined}
      onHoverStart={!isMobile ? () => setIsHovered(true) : undefined}
      onHoverEnd={!isMobile ? () => setIsHovered(false) : undefined}
      onClick={handleCardClick}
      style={{
        willChange: 'transform, filter, opacity',
        perspective: '2000px',
        perspectiveOrigin: 'center center'
      }}
    >
      {/* Badge */}
      {tier.badge && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-bold z-10"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {tier.badge}
        </motion.div>
      )}

      {/* Title */}
      <motion.h3
        className="text-3xl font-bold mb-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {tier.name}
      </motion.h3>
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
        {isMobile && (
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        )}
      </motion.div>

      {/* Reply count or special message */}
      {tier.isSpecial ? (
        <motion.p
          className="text-base leading-relaxed mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {tier.specialMessage}
        </motion.p>
      ) : (
        <>
          <motion.div
            className="text-4xl font-black mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {tier.replies}
          </motion.div>
          <motion.p
            className="text-sm text-muted-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {tier.description}
          </motion.p>

          {/* Features - Desktop: Show on hover, Mobile: Show when expanded */}
          {isMobile ? (
            isExpanded && (
              <motion.ul
                className="space-y-2 mb-4 animate-in fade-in slide-in-from-top-2 duration-300"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {tier.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-2 text-sm"
                    variants={itemVariants}
                  >
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )
          ) : (
            <motion.ul
              className="space-y-2 mb-4"
              variants={containerVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            >
              {tier.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex gap-2 text-sm"
                  variants={itemVariants}
                >
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    variants={itemVariants}
                    style={{ display: 'inline-block' }}
                  >
                    {feature.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0 }}
                        variants={itemVariants}
                        transition={{ delay: charIndex * 0.02 }}
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Perks - Desktop: Always show, Mobile: Show when expanded */}
          {tier.perks && (
            isMobile ? (
              isExpanded && (
                <motion.div
                  className="bg-muted/30 rounded-lg p-3 mb-4 animate-in fade-in slide-in-from-top-2 duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-semibold text-sm mb-1">Perks:</p>
                  <ul className="space-y-1 text-sm">
                    {tier.perks.map((perk, i) => (
                      <li key={i}>• {perk}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            ) : (
              <motion.div
                className="bg-muted/30 rounded-lg p-3 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-semibold text-sm mb-1">Perks:</p>
                <ul className="space-y-1 text-sm">
                  {tier.perks.map((perk, i) => (
                    <li key={i}>• {perk}</li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </>
      )}

      {/* CTA */}
      <motion.a
        href={tier.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-foreground text-background py-3 rounded-lg font-bold transition-colors"
        animate={{
          scale: [1, 1.01, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: 'transform' }}
      >
        {tier.cta}
      </motion.a>
    </motion.div>
  );
};

export const PricingStack = () => {
  const isMobile = useIsMobile();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (tierId: number) => {
    setExpandedCard(expandedCard === tierId ? null : tierId);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && !(e.target as Element).closest('.pricing-card')) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile]);

  return (
    <section id="plans" className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Choose Your Package
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Select the plan that fits your growth goals
        </motion.p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <PricingCard
                tier={tier}
                isMobile={isMobile}
                isExpanded={expandedCard === tier.id}
                onCardClick={handleCardClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};