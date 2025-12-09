import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Truck, Shield } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Clock, text: "24hr Turnaround" },
    { icon: Truck, text: "Free Pickup & Delivery" },
    { icon: Shield, text: "Satisfaction Guaranteed" },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/15 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-primary/25 animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-5 h-5 rounded-full bg-primary/10 animate-float" />
        <div className="absolute bottom-1/4 right-1/5 w-4 h-4 rounded-full bg-primary/20 animate-float-delayed" />
        <div className="absolute top-2/3 left-1/5 w-8 h-8 rounded-full bg-primary/10 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 10,000+ customers
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Fresh Laundry,{" "}
              <span className="text-gradient">Delivered</span> to Your Door
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Professional laundry and dry cleaning services with free pickup and delivery. 
              More time for what matters, less time doing laundry.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl">
                Schedule Pickup
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Pricing
              </Button>
            </div>

            <div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="relative animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop"
                  alt="Fresh folded laundry in basket"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card-hover border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Free Delivery</p>
                    <p className="text-sm text-muted-foreground">Same day service</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card-hover border border-border animate-float-delayed">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
