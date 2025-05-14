
import { useRef, useEffect } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Code Reviewer",
    description:
      "Integrated an AI-powered code reviewer to analyze code quality, suggest improvements, and catch potential bugs.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/aicodereviewer.jpg",
    repoUrl: "https://github.com/RITESH-CHAUHAN2005/AI-Code-Reviewer.git",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Developed an eCommerce website for Vidyapeeth to showcase and sell educational materials, courses, and merchandise.",
    tags: ["TypeScript", "Bootstrap", "Tailwind CSS", "Wordpress"],
    image: "/vidypeeth.jpg",
    repoUrl: "https://vidyapeeth.org.in/",
  },
  {
    title: "MDM Consulting",
    description:
      "MDM Consulting is a professional consultancy website offering expert business solutions tailored to client needs.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX"],
    image: "/mdmconsulting.jpg",
    repoUrl: "https://github.com/RITESH-CHAUHAN2005/MDM-Consulting.git",
  },
  {
    title: "Dukaan",
    description:
      "Dukaan is a sustainable e-commerce platform focused on eco-friendly products, empowering users to shop consciously while understanding their environmental impact.",
    tags: ["JavaScript", "React", "Eco-Friendly", "Design", "Sustainable Shopping", "Responsive Design", "UI/UX"],
    image: "/Dukan.jpg",
    repoUrl: "https://github.com/RITESH-CHAUHAN2005/Dukaan.git",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectRefs.current.forEach((project, index) => {
              if (project) {
                setTimeout(() => {
                  project.classList.add("animate-fade-in");
                  project.style.opacity = "1";
                }, index * 200);
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
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-neon-purple">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="glass-card rounded-xl overflow-hidden opacity-0 transition-all duration-700 animate-float hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neon-purple text-neon-purple bg-white/5 hover:bg-white/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
