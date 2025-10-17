import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Hero = () => {
  const handleBookMeeting = () => {
    window.open("https://calendly.com/okiemuteovie40/30min", "_blank");
  };

  const handleWhyUsClick = () => {
    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black"
    >
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <BlurFade delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-none">
              Light Army
            </h1>
          </BlurFade>

          {/* Subheading */}
          <BlurFade delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold tracking-wide">
              Reply Guys Always Win.
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.6}>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              {/* Why Us Button - Plain */}
              <button
                onClick={handleWhyUsClick}
                className="w-48 sm:w-56 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-full border bg-background hover:scale-105 transition-transform duration-300"
              >
                Why Us
              </button>

              {/* Book a Call Button with Interactive Hover */}
              <InteractiveHoverButton
                text="Book a Call"
                onClick={handleBookMeeting}
                className="w-56 sm:w-64 h-14 sm:h-16 text-lg sm:text-xl"
              />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
