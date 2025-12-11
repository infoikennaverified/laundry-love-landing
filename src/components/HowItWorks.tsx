import { Calendar, Package, Truck, CheckCircle, ArrowDown } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Schedule Pickup",
      description: "Book online in seconds. Choose a time that works for you, any day of the week. And payment is easy and secure.",
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
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-5 tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Simple as <span className="text-gradient">1-2-3</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Getting your laundry done has never been easier. Just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-[5.5rem] h-[5.5rem] rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <ArrowDown className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Result Badge */}
        <div className="flex justify-center mt-14 md:mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-card border border-border shadow-card">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Fresh clothes delivered in 24 hours!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;