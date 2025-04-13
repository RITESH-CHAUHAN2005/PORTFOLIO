
import { useRef, useEffect } from "react";
import { 
  Code, Globe, PenTool, Layers, Database, 
  LineChart, ArrowRightLeft, Shield
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "Building responsive web interfaces with modern frameworks",
    color: "bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Web Design",
    icon: PenTool,
    description: "Creating beautiful and functional user interfaces",
    color: "bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Web Performance",
    icon: LineChart,
    description: "Optimizing websites for speed and efficiency",
    color: "bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Building server-side applications and APIs",
    color: "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Responsive Design",
    icon: Layers,
    description: "Crafting experiences for all devices and screens",
    color: "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "API Integration",
    icon: ArrowRightLeft,
    description: "Connecting services and data sources seamlessly",
    color: "bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Web Security",
    icon: Shield,
    description: "Implementing secure authentication and data protection",
    color: "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 backdrop-blur-lg",
    borderColor: "border-white"
  },
  {
    name: "Web Accessibility",
    icon: Globe,
    description: "Building inclusive websites for all users",
    color: "bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 backdrop-blur-lg",
    borderColor: "border-white"
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsRefs.current.forEach((skill, index) => {
              if (skill) {
                setTimeout(() => {
                  skill.classList.add("animate-fade-in");
                  skill.style.opacity = "1";
                }, index * 100); // Stagger the animation
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 relative bg-black/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-neon-purple">My Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillsRefs.current[index] = el)}
              className={`glass-card rounded-xl p-6 opacity-0 transition-all duration-700 hover:translate-y-[-5px] ${skill.color} border ${skill.borderColor}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-white/10 animate-spin-slow">
                  <skill.icon className="w-8 h-8 text-neon-purple" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-center">{skill.name}</h3>
              <p className="text-white/70 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
