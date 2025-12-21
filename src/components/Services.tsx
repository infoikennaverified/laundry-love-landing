import { Shirt, Sparkles, Wind, SprayCan, Timer, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Fresh, clean clothes washed and folded with care. Perfect for everyday laundry needs.",
      price: "From NGN5000 with delivery/15items",
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics, suits, dresses, and formal wear.",
      price: "From NGN2000 without delivery/item",
    },
    {
      icon: Wind,
      title: "Press & Iron",
      description: "Crisp, wrinkle-free garments ready to wear. Perfect for professional attire.",
      price: "From NGN3000 without delivery/item",
    },
    {
      icon: SprayCan,
      title: "Stain Removal",
      description: "Expert stain treatment for tough stains. We tackle the impossible.",
      price: "From From NGN2000 without delivery/item",
    },
    {
      icon: Timer,
      title: "Express Service",
      description: "Need it fast? Same-day turnaround for urgent laundry needs.",
      price: "+50% rush fee",
    },
    {
      icon: Leaf,
      title: "Eco Wash",
      description: "Environmentally friendly cleaning with biodegradable detergents.",
      price: "From NGN3000 without delivery/item",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-5 tracking-wide">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Premium Care for Your <span className="text-gradient">Clothes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            From everyday laundry to specialty cleaning, we handle it all with professional expertise.
          </p>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price & Link */}
              <div className="flex items-center justify-between">
                <p className="text-primary font-semibold text-sm">
                  {service.price}
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;