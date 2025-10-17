import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide trial makeup sessions?",
      answer:
        "Yes, we offer trial makeup sessions for bridal and special occasion makeup. This helps you finalize your look before the big day. Please book in advance to schedule your trial.",
    },
    {
      question: "Are your academy courses certified?",
      answer:
        "Yes, all our courses are professionally certified. Upon successful completion, you'll receive recognized certification that helps you start your career in the beauty industry with confidence.",
    },
    {
      question: "Do you offer home service for makeup?",
      answer:
        "Yes, we provide home service for bridal makeup and special occasions within Talegaon Dabhade and nearby areas. Additional charges may apply based on location. Please contact us for availability and booking.",
    },
    {
      question: "Which brands and products do you use?",
      answer:
        "We use premium international and professional beauty brands including MAC, Huda Beauty, Kryolan, and other high-quality products to ensure the best results for our clients.",
    },
    {
      question: "Do you provide packages for brides or parties?",
      answer:
        "Yes, we offer customized packages for bridal makeup, pre-wedding events, and party makeup. Our packages can include makeup, hair styling, draping, and more. Contact us for detailed package information.",
    },
    {
      question: "What is the duration of your beauty courses?",
      answer:
        "Course duration varies from 3 to 6 months depending on the program. Basic Beauty Course is 3 months, while Advanced Cosmetology and specialized courses range from 4 to 6 months with comprehensive training.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI payments, bank transfers, and card payments. For academy courses, we also offer flexible installment options. Please inquire for more details.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling us at +91 98502 73404, sending a WhatsApp message, or emailing us at kirtigarud0@gmail.com. We recommend booking in advance, especially for bridal services.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "For makeup appointments, we require at least 48 hours notice for cancellation or rescheduling. For academy courses, please contact us to discuss the terms and conditions.",
    },
    {
      question: "Are your treatments safe and hygienic?",
      answer:
        "Absolutely! We maintain the highest standards of hygiene and safety. All our tools are properly sterilized, and we use disposable items wherever possible. Your safety is our top priority.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-luxury">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers to help you
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
