import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const CallToActionSection = () => {
  const handleBookMeeting = () => {
    window.open("https://calendly.com/okiemuteovie40/30min", "_blank");
  };

  return (
    <section className="w-full py-20 md:py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-6 tracking-tight">
          Ready to Experience?
        </h2>

        {/* Subtext */}
        <p className="font-semibold text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's discuss
        </p>

        {/* CTA Button */}
        <InteractiveHoverButton
          text="Book a Call"
          onClick={handleBookMeeting}
          className="w-56 sm:w-64 h-14 sm:h-16 text-lg sm:text-xl"
        />
      </div>
    </section>
  );
};

export default CallToActionSection;