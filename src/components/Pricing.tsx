import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      description: "Perfect for individuals",
      features: [
        "Up to 15 lbs per week",
        "Free pickup & delivery",
        "48-hour turnaround",
        "Standard cleaning",
        "Online tracking",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "59",
      description: "Best for families",
      features: [
        "Up to 35 lbs per week",
        "Free pickup & delivery",
        "24-hour turnaround",
        "Premium detergents",
        "Stain treatment included",
        "Folding preferences",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "149",
      description: "For offices & businesses",
      features: [
        "Unlimited laundry",
        "Free pickup & delivery",
        "Same-day available",
        "Dedicated account manager",
        "Bulk discounts",
        "Invoice billing",
        "Custom preferences",
        "24/7 support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your lifestyle. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-foreground text-background shadow-card-hover scale-105 border-2 border-primary"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-sm font-medium shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl md:text-5xl font-bold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? "text-background/70" : "text-muted-foreground"}>
                    /month
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span className={plan.popular ? "text-background/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Pay Per Use Notice */}
        <p className="text-center text-muted-foreground mt-12">
          Need a one-time service? We also offer{" "}
          <a href="#" className="text-primary font-medium hover:underline">
            pay-per-use pricing
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
