import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment at GORGEOUS.");
    window.open(`https://wa.me/919850273404?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your appointment or inquire about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919850273404" className="text-muted-foreground hover:text-accent">
                      +91 98502 73404
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:kirtigarud0@gmail.com"
                      className="text-muted-foreground hover:text-accent"
                    >
                      kirtigarud0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      Sai Square Building, Shop No. 16
                      <br />
                      Maruti Mandir Chowk
                      <br />
                      Talegaon Dabhade
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
