import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Makeup",
      rating: 5,
      text: "The bridal makeup was absolutely stunning! Kirtiga understood exactly what I wanted and made me feel like a princess on my special day.",
    },
    {
      name: "Anjali Patel",
      service: "Hydra Facial",
      rating: 5,
      text: "The facial treatments are amazing! My skin has never looked better. The team is professional and the ambiance is so relaxing.",
    },
    {
      name: "Neha Desai",
      service: "Beauty Course",
      rating: 5,
      text: "Completed my advanced makeup course here. The training was comprehensive and hands-on. Now I'm confident to start my own career!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            Happy Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our clients say about their GORGEOUS experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
