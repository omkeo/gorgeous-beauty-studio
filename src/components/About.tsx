import salonImage from "@/assets/salon-interior.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
              About GORGEOUS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where Elegance Meets Perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <img
                src={salonImage}
                alt="GORGEOUS Salon Interior"
                className="rounded-lg luxury-shadow hover-lift"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">Our Mission</h3>
                <p className="text-muted-foreground">
                  To redefine beauty through professional artistry and education, empowering individuals to look and feel their absolute best.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">Our Vision</h3>
                <p className="text-muted-foreground">
                  To empower individuals through self-care and certified learning, creating a community of confident, skilled beauty professionals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-accent">Our Story</h3>
                <p className="text-muted-foreground">
                  Founded by Kirtiga Garud, a passionate makeup artist and beauty educator, GORGEOUS has become a trusted name in beauty excellence. We combine cutting-edge techniques with timeless elegance to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
