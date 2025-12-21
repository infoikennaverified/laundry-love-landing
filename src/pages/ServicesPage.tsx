import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shirt, Sparkles, Wind, SprayCan, Timer, Leaf, CheckCircle2, ArrowRight, Clock, Shield, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Fresh, clean clothes washed and folded with care. Perfect for everyday laundry needs.",
      price: "From NGN5,000",
      priceNote: "with delivery / 15 items",
      features: [
        "Sorted by color and fabric type",
        "Premium detergents used",
        "Neatly folded and packaged",
        "Same-day or next-day delivery",
        "Eco-friendly options available"
      ],
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics, suits, dresses, and formal wear.",
      price: "From NGN2,000",
      priceNote: "per item",
      features: [
        "Gentle on delicate fabrics",
        "Expert stain pre-treatment",
        "Professional pressing included",
        "Protective garment covers",
        "Special care for embellishments"
      ],
      popular: false,
    },
    {
      icon: Wind,
      title: "Press & Iron",
      description: "Crisp, wrinkle-free garments ready to wear. Perfect for professional attire.",
      price: "From NGN3,000",
      priceNote: "per item",
      features: [
        "Professional steam pressing",
        "Crisp collar and cuff finishing",
        "Crease-free guarantee",
        "Ready-to-wear packaging",
        "Express service available"
      ],
      popular: false,
    },
    {
      icon: SprayCan,
      title: "Stain Removal",
      description: "Expert stain treatment for tough stains. We tackle the impossible.",
      price: "From NGN2,000",
      priceNote: "per item",
      features: [
        "Advanced stain analysis",
        "Specialized treatment solutions",
        "Safe for all fabric types",
        "Multiple treatment cycles",
        "Satisfaction guarantee"
      ],
      popular: false,
    },
    {
      icon: Timer,
      title: "Express Service",
      description: "Need it fast? Same-day turnaround for urgent laundry needs.",
      price: "+50%",
      priceNote: "rush fee",
      features: [
        "Same-day turnaround",
        "Priority processing",
        "Dedicated express team",
        "Real-time tracking",
        "Guaranteed delivery time"
      ],
      popular: false,
    },
    {
      icon: Leaf,
      title: "Eco Wash",
      description: "Environmentally friendly cleaning with biodegradable detergents.",
      price: "From NGN3,000",
      priceNote: "per item",
      features: [
        "100% biodegradable detergents",
        "Cold water washing",
        "Reduced carbon footprint",
        "Hypoallergenic options",
        "Eco-friendly packaging"
      ],
      popular: false,
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your clothes back within 24-48 hours. Express options available for urgent needs."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed. If you're not happy, we'll re-clean your items for free."
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service. We come to you at your preferred time."
    },
    {
      icon: Star,
      title: "Expert Care",
      description: "Our trained professionals handle your garments with the utmost care and attention."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Jellie LaundryMART - Professional Laundry & Dry Cleaning</title>
        <meta name="description" content="Discover our comprehensive laundry services including wash & fold, dry cleaning, press & iron, stain removal, and eco-friendly options. Professional care for all your garments." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-accent/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 tracking-wide">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Laundry <span className="text-gradient">Services</span> Tailored for You
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              From everyday laundry to specialty cleaning, we handle it all with professional expertise and care. Experience the Jellie difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="/#pricing">View Pricing</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="/#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-6 md:p-8 rounded-2xl bg-card border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                  service.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/20'
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{service.priceNote}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={service.popular ? "default" : "outline"} 
                  className="w-full group"
                  asChild
                >
                  <a href="/#pricing">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              The Jellie <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We go above and beyond to ensure your laundry experience is seamless and satisfying.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl gradient-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Experience Premium Laundry Care?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Jellie LaundryMART for their laundry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                  <a href="/#pricing">Choose a Plan</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
