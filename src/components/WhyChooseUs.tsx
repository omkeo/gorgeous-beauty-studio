import { CheckCircle, Shield, Sparkles, Heart, Award, Smile } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Experienced and certified beauty experts",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "Top-quality beauty brands and tools",
    },
    {
      icon: Shield,
      title: "Hygienic Environment",
      description: "Strict safety and cleanliness standards",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized treatments for every client",
    },
    {
      icon: CheckCircle,
      title: "Latest Techniques",
      description: "Modern beauty innovations and methods",
    },
    {
      icon: Smile,
      title: "Client Satisfaction",
      description: "100% commitment to your happiness",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            Why Choose GORGEOUS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                <reason.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
