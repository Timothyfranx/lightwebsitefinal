import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import logoImage from "@/assets/logo.jpg";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const navLinks = [
    { name: "Why us", href: "#why-us" },
    { name: "Packages", href: "#plans" },
    { name: "POW", href: "#proof-of-work" },

  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background/90 md:bg-transparent ${
        !isMobile && !isScrolled ? 'md:-translate-y-full' : ''
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left: Empty for balance */}
          <div className="hidden md:flex flex-shrink-0 w-14"></div>

          {/* Center: Logo + All Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 bg-background/80 backdrop-blur-md border rounded-full px-6 py-2">
            <a
              href="#home"
              className="hover:scale-105 transition-transform"
            >
              <img
                src={logoImage}
                alt="Light Army Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button>Let's Start</Button>
          </div>

          {/* Right: Theme Toggle only */}
          <div className="hidden md:flex flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Left: Logo and text on mobile */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#home"
              className="hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-2">
                <img
                  src={logoImage}
                  alt="Light Army Logo"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
            </a>
            <span className="text-lg font-black font-display">Light Army</span>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full w-9 h-9"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="bg-white dark:bg-black border rounded-md p-4 mt-2">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-body text-sm font-medium hover:text-muted-foreground transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
