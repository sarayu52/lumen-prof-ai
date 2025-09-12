import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Calendar, 
  UserPlus, 
  Building2, 
  BarChart3, 
  Home,
  Zap
} from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/events", label: "Events", icon: Calendar },
    { path: "/registration", label: "Register", icon: UserPlus },
    { path: "/sponsors", label: "Sponsors", icon: Building2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg gradient-text">EventHub</div>
                <div className="text-xs text-muted-foreground">Interactive Events Platform</div>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-primary/10 ${
                      isActive
                        ? "bg-primary/20 text-primary shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="sm" 
                className="glow-primary"
                asChild
              >
                <NavLink to="/events">
                  <Calendar className="h-4 w-4 mr-2" />
                  Join Event
                </NavLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-primary/20 text-primary shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="hero" 
                    className="w-full glow-primary"
                    asChild
                    onClick={closeMenu}
                  >
                    <NavLink to="/events">
                      <Calendar className="h-4 w-4 mr-2" />
                      Join Event
                    </NavLink>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
}