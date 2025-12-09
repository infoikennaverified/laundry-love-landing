import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
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
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Say Goodbye to Laundry Day?
            </h2>
            <p className="text-background/70 mb-8">
              Join thousands of happy customers who have reclaimed their weekends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule Your First Pickup
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={jellieLogo} alt="Jellie LaundryMART Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">
                Jellie <span className="text-primary">LaundryMART</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Professional laundry and dry cleaning services with free pickup and delivery. 
              Making laundry day effortless since 2020.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@jellielaundrymart.com" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
                hello@jellielaundrymart.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="w-5 h-5" />
                1-800-123-4567
              </a>
              <p className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                San Francisco, CA
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Jellie LaundryMART. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
