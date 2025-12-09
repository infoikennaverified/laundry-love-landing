import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Truck, Shield, Sparkles } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Clock, text: "24hr Turnaround" },
    { icon: Truck, text: "Free Pickup & Delivery" },
    { icon: Shield, text: "100% Satisfaction Guaranteed" },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Trust Badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent border border-accent-foreground/10 text-accent-foreground text-sm font-medium mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ happy customers</span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-5xl lg:text-display-sm xl:text-display font-bold text-foreground leading-tight mb-6 animate-fade-in text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Fresh Laundry,{" "}
              <span className="text-gradient">Delivered</span> to Your Door
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Professional laundry and dry cleaning services with free pickup and delivery. 
              Spend your time on what matters most.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" className="group">
                Schedule Pickup
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Pricing
              </Button>
            </div>

            {/* Features */}
            <div 
              className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="relative animate-fade-in-right lg:pl-8"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              {/* Main Image */}
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/10">
                <img
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop"
                  alt="Fresh folded laundry in basket"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card - Delivery */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card rounded-2xl p-4 shadow-card-hover animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-sm">
                    <Truck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">Same day service</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Stats */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 glass-card rounded-2xl p-4 shadow-card-hover animate-float-delayed">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient mb-0.5">98%</p>
                  <p className="text-xs text-muted-foreground font-medium">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 scale-125">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-br from-primary/8 via-primary/5 to-transparent blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;