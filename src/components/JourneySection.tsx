
import { useRef, useEffect } from "react";
import { BookOpen, School, Code, Database } from "lucide-react";

const journeyItems = [
  {
    title: "School Education",
    description: "Completed my schooling from Hansraj Smarak Senior Secondary School",
    icon: School,
    color: "bg-gradient-to-r from-neon-purple/20 to-neon-blue/20",
    year: "2023"
  },
  {
    title: "College Education",
    description: "Currently pursuing B.Tech at Bhagwan Parshuram Institute of Technology",
    icon: BookOpen,
    color: "bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20",
    year: "2023-2027"
  },
  {
    title: "Frontend Development",
    description: "Learned HTML, CSS, JavaScript, Bootstrap, React and Figma to create responsive web applications",
    icon: Code,
    color: "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
    year: "2023-2025"
  },
  {
    title: "Backend Development",
    description: "Currently expanding my skillset to include backend technologies for full-stack development",
    icon: Database,
    color: "bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20",
    year: "2025-Present"
  }
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const journeyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            journeyRefs.current.forEach((item, index) => {
              if (item) {
                setTimeout(() => {
                  item.classList.add("animate-fade-in");
                  item.style.opacity = "1";
                }, index * 150);
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
      id="journey"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,174,219,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-neon-purple">My Journey</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple/50 via-neon-blue/50 to-neon-cyan/50 rounded-full hidden md:block"></div>
          
          <div className="space-y-16">
            {journeyItems.map((item, index) => (
              <div
                key={item.title}
                ref={el => (journeyRefs.current[index] = el)}
                className={`relative opacity-0 transition-all duration-700 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"
                } md:w-1/2`}
              >
                <div className={`glass-card rounded-xl p-6 ${item.color} border border-white/20`}>
                  <div className="absolute top-1/2 -mt-4 hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-black p-3 rounded-full border-2 border-white/20">
                      <item.icon className="w-6 h-6 text-neon-purple" />
                    </div>
                  </div>
                  
                  <div className="flex md:block items-center mb-4">
                    <div className="flex items-center justify-center p-3 rounded-full bg-black border border-white/20 md:hidden mr-4">
                      <item.icon className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <span className="text-sm text-white/50">{item.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
