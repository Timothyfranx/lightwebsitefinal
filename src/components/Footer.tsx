import { Twitter } from "lucide-react";
import logoImage from "@/assets/logo.jpg";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Footer = () => {
  const handleServicesClick = () => {
    document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhyUsClick = () => {
    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePricingClick = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    document.getElementById("proof-of-work")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/lightarmyy", "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 md:py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center gap-8">
        {/* Top Section - Logo and Tagline */}
        <div className="flex flex-col items-center gap-3">
          {/* Logo */}
          <img
            src={logoImage}
            alt="Light Army logo"
            className="h-14 md:h-16 w-auto"
          />

          {/* Brand Name */}
          <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white">
            Light Army
          </h3>

          {/* Tagline */}
          <p className="font-semibold text-sm md:text-base text-gray-600 dark:text-gray-400 tracking-wide">
            Reply Guys Always Win
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
          <button
            onClick={handleWhyUsClick}
            className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
          >
            Why Us
          </button>
          <span className="text-gray-400 hidden md:inline">|</span>
          <button
            onClick={handlePricingClick}
            className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
          >
            Packages
          </button>
          <span className="text-gray-400 hidden md:inline">|</span>
          <button
            onClick={handleContactClick}
            className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
          >
            POW
          </button>
          <span className="text-gray-400 hidden md:inline">|</span>
          <button
            onClick={handleContactClick}
            className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200 cursor-pointer focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
          >
            Contact
          </button>
        </div>

        {/* Social Media Section */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={handleTwitterClick}
            className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-gray-500 focus:outline-none rounded"
            aria-label="Follow us on Twitter"
          >
            <Twitter className="w-full h-full" />
          </button>
        </div>


        {/* Bottom Section - Copyright */}
        <div className="mt-8 w-full text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Light Army. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;