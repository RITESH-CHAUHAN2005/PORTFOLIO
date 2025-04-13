
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-black/20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,174,219,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-neon-purple">Get In Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-neon-purple/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-white">riteshchauhan43792@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-neon-purple/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="text-white">9818303762</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-neon-purple/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-white">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
