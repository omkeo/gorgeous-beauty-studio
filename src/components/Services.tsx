import { Sparkles, Heart, Scissors } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import facialImage from "@/assets/facial-treatment.jpg";
import bridalImage from "@/assets/bridal-makeup.jpg";
import hairImage from "@/assets/hair-styling.jpg";

const Services = () => {
  const services = [
    {
      title: "Facials & Skin Treatments",
      icon: Sparkles,
      image: facialImage,
      description: "Professional skincare treatments for glowing, healthy skin",
      treatments: [
        "Hydra Facial",
        "Korean Glass Treatment",
        "BB Glow Facial",
        "Chemical Peel Treatment",
        "Hair Treatments",
      ],
    },
    {
      title: "Makeup Services",
      icon: Heart,
      image: bridalImage,
      description: "Expert makeup artistry for every occasion",
      treatments: [
        "Bridal HD Makeup",
        "Sider Makeup",
        "Party Makeup",
        "Professional Makeup",
        "Baby Shower Makeup",
      ],
    },
    {
      title: "Semi-Permanent Treatments",
      icon: Scissors,
      image: hairImage,
      description: "Long-lasting beauty enhancement procedures",
      treatments: [
        "Powder & Ombre Brows",
        "Microblading Brows",
        "Lip Neutralisation",
        "Lip Blush",
        "Cheek Blush",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium beauty services tailored to enhance your natural elegance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift overflow-hidden border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="text-accent" size={24} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
