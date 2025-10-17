import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Proof of work images from Telegram messages
const proofImages = [
  "/proofofwork/1.jpg",
  "/proofofwork/2.png",
  "/proofofwork/3.png",
  "/proofofwork/4.png",
  "/proofofwork/5.png",
  "/proofofwork/6.png",
];

const ProofOfWorkSection = () => {
  return (
    <section id="proof-of-work" className="py-20 w-full px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12">
        {/* Title Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 break-words">
            Proof of Work
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed break-words">
            Real results from satisfied clients. See the strategies in action.
          </p>
        </div>

        {/* Slider Section */}
        <div className="w-full">
          <InfiniteSlider>
            {proofImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[250px] sm:w-[300px] rounded-xl shadow-lg border border-muted/30 overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Proof of work ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default ProofOfWorkSection;