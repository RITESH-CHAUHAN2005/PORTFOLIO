
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-xl font-bold text-neon-purple">
              RC
            </a>
            <p className="text-white/60 mt-2">
              Building the future, one pixel at a time
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/RITESH-CHAUHAN2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5 text-neon-purple" />
              </a>
              <a
                href="https://www.linkedin.com/in/ritesh-chauhan-739775324/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-neon-purple" />
              </a>
              <a
                href="https://x.com/RiteshC66916041"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-neon-purple" />
              </a>
              <a
                href="https://www.instagram.com/x_ritesh_x290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-neon-purple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
