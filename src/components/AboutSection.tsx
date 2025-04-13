
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              imageRef.current.classList.add("animate-fade-in");
              imageRef.current.style.opacity = "1";
            }
            if (contentRef.current) {
              contentRef.current.classList.add("animate-fade-in");
              contentRef.current.style.opacity = "1";
            }
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,174,219,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-neon-purple">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div 
            ref={imageRef} 
            className="opacity-0 transition-all duration-1000 delay-300"
          >
            <div className="glass-card rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <img
                src="/Myphoto.jpg"
                alt="My Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div 
            ref={contentRef}
            className="opacity-0 transition-all duration-1000 delay-500"
          >
            <p className="text-lg mb-6 text-white/80">
              Hi! I'm Ritesh Chauhan, a passionate 2nd-year B.Tech student at Bhagwan Parshuram Institute of Technology. I'm deeply interested in frontend development and currently expanding my skills toward becoming a full-stack developer.
            </p>
            <p className="text-lg mb-6 text-white/80">
              I love building interactive and visually appealing web experiences using HTML, CSS, Bootstrap, JavaScript, React and Figma. I'm also learning C++ DSA to strengthen my problem-solving abilities.
            </p>
            <p className="text-lg mb-6 text-white/80">
              Currently, I'm working on real-world projects like a social media marketing website and a food wishlist app, aiming to build a strong portfolio that reflects both creativity and functionality.
            </p>
            <p className="text-lg text-white/80">
              I'm excited about opportunities where I can grow, collaborate, and make an impact through code!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
