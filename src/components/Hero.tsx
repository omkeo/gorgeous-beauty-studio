import { Button } from "./ui/button";
import heroImage from "@/assets/hero-makeup.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-luxury">
            Welcome to GORGEOUS
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-foreground">
            Salon • Makeup Studio • Academy
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Enhancing your natural beauty with art, care, and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
