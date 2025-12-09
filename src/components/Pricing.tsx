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
    <section id="pricing" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-5 tracking-wide">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your lifestyle. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-foreground text-background shadow-xl md:scale-[1.03] border-2 border-primary ring-4 ring-primary/10"
                  : "bg-card border border-border hover:border-primary/20 hover:shadow-card-hover"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-xs font-semibold shadow-glow uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-7 pt-2">
                <h3 className={`text-lg font-semibold mb-1.5 ${plan.popular ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl lg:text-5xl font-bold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                    /month
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-primary/20" : "bg-accent"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary" : "text-accent-foreground"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-background/90" : "text-muted-foreground"}`}>
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
        <p className="text-center text-muted-foreground text-sm mt-10">
          Need a one-time service? We also offer{" "}
          <a href="#" className="text-primary font-semibold hover:underline underline-offset-2">
            pay-per-use pricing
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;