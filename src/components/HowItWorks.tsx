import { Calendar, Package, Truck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Schedule Pickup",
      description: "Book online in seconds. Choose a time that works for you, any day of the week.",
    },
    {
      icon: Package,
      number: "02",
      title: "We Collect",
      description: "Our driver arrives at your door. Just hand over your laundry bag and we handle the rest.",
    },
    {
      icon: Truck,
      number: "03",
      title: "Clean & Deliver",
      description: "We professionally clean your clothes and deliver them fresh to your doorstep.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple as <span className="text-gradient">1-2-3</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting your laundry done has never been easier. Just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-card-hover">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg className="w-4 h-4 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Result Badge */}
        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-card">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="font-medium text-foreground">Fresh clothes delivered in 24 hours!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
