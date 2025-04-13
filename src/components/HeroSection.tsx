
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [animatedText, setAnimatedText] = useState("");
  const fullName = "Ritesh Chauhan";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimatedText(fullName.substring(0, index + 1));
      index++;
      if (index === fullName.length) {
        clearInterval(intervalId);
      }
    }, 150);
    
    return () => clearInterval(intervalId);
  }, []);

  const scrollToNextSection = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,174,219,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center animate-fade-in">
        <span className="text-neon-purple mb-4 font-mono">Hello, I'm</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          {animatedText}<span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <div className="flex gap-4 mb-16">
          <Button
            className="bg-neon-purple hover:bg-neon-purple/80 text-white neon-glow"
            size="lg"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-purple text-neon-purple bg-white hover:bg-white/90"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </div>
        
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-12 animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-10 h-10 text-neon-purple hover:text-white transition-colors" />
        </button>
      </div>
    </section>
  );
}
