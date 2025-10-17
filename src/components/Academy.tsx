import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import academyImage from "@/assets/academy-training.jpg";

const Academy = () => {
  const courses = [
    {
      title: "Basic Beauty Course",
      duration: "3 Months",
      description: "Foundation course covering essential beauty techniques",
    },
    {
      title: "Advanced Cosmetology",
      duration: "6 Months",
      description: "Comprehensive training in advanced beauty technology",
    },
    {
      title: "Trichology & Hair Dresser",
      duration: "4 Months",
      description: "Specialized hair science and styling certification",
    },
    {
      title: "Makeup Specialization",
      duration: "3-6 Months",
      description: "Basic, Advanced, HD, 3D & Air Brush Makeup techniques",
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Certified Programs",
      description: "Industry-recognized certifications",
    },
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from experienced professionals",
    },
    {
      icon: BookOpen,
      title: "Hands-On Training",
      description: "Practical experience with real clients",
    },
  ];

  return (
    <section id="academy" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            GORGEOUS Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional beauty education to launch your career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <highlight.icon className="text-accent" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
                <CardDescription>{highlight.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-in">
            <img
              src={academyImage}
              alt="GORGEOUS Academy Training"
              className="rounded-lg luxury-shadow hover-lift"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-semibold mb-6">Our Courses</h3>
            {courses.map((course, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <span className="text-sm text-accent font-semibold">{course.duration}</span>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
