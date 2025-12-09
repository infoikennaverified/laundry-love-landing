import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jellieLogo from "@/assets/jellie-logo.png";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Wash & Fold", href: "#" },
      { name: "Dry Cleaning", href: "#" },
      { name: "Press & Iron", href: "#" },
      { name: "Stain Removal", href: "#" },
      { name: "Express Service", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Pricing", href: "#pricing" },
      { name: "Service Areas", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/jellie-laundrymart/", label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-balance">
              Ready to Say Goodbye to Laundry Day?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of happy customers and take control of your weekends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Schedule Your First Pickup
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <img src={jellieLogo} alt="Jellie LaundryMART Logo" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Jellie <span className="text-primary">LaundryMART</span>
                </span>
              </div>
            </a>
            <p className="text-background/60 mb-6 max-w-sm text-sm leading-relaxed">
              Professional laundry and dry cleaning services with free pickup and delivery of your first two orders. 
              Making laundry day effortless on a budget since 2020.
            </p>
            <div className="space-y-3">
              <a href="mailto:jellielaundrymart@gmail.com" className="flex items-center gap-3 text-background/60 hover:text-background transition-colors text-sm group">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                jellielaundrymart@gmail.com
              </a>
              <a href="tel:+2348145028547" className="flex items-center gap-3 text-background/60 hover:text-background transition-colors text-sm group">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +2348145028547
              </a>
              <p className="flex items-center gap-3 text-background/60 text-sm">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Rayfield Jos, Plateau State, Nigeria.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-5 text-sm tracking-wide">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-sm">
            © 2024 Jellie LaundryMART. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <social.icon className="w-4 h-4 text-background/70 group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/40 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/40 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;