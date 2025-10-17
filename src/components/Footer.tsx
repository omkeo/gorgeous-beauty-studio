import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gradient-luxury mb-4">GORGEOUS</h3>
            <p className="text-sm text-muted-foreground">
              Salon • Academy • Makeup Studio
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-accent transition-colors">
                  Academy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+91 98502 73404</li>
              <li>kirtigarud0@gmail.com</li>
              <li>Sai Square Building, Shop No. 16</li>
              <li>Talegaon Dabhade</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919850273404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 GORGEOUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
