import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock, MapPin, Phone, User, Shirt, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    timeSlot: "",
    service: "",
    notes: "",
  });

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ];

  const services = [
    "Wash & Fold",
    "Dry Cleaning",
    "Press & Iron",
    "Stain Removal",
    "Express Service",
    "Eco Wash",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim() || !date || !formData.timeSlot || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    // Show success
    setIsSubmitted(true);
    toast({
      title: "Pickup Scheduled!",
      description: `Your pickup is confirmed for ${format(date, "PPP")} at ${formData.timeSlot}.`,
    });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 md:py-28 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pickup Scheduled!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you, <span className="font-semibold text-foreground">{formData.name}</span>! Your laundry pickup has been scheduled for:
            </p>
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 inline-block">
              <p className="text-xl font-semibold text-foreground">
                {date && format(date, "EEEE, MMMM d, yyyy")}
              </p>
              <p className="text-primary font-medium">{formData.timeSlot}</p>
              <p className="text-sm text-muted-foreground mt-2">{formData.service}</p>
            </div>
            <p className="text-muted-foreground mb-8">
              We'll send you a confirmation SMS shortly. Our team will arrive at your location during the selected time slot.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", phone: "", address: "", timeSlot: "", service: "", notes: "" });
                setDate(undefined);
              }}
              variant="outline"
            >
              Schedule Another Pickup
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-28 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 tracking-wide">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Schedule Your <span className="text-gradient">Pickup</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Book a convenient time for us to pick up your laundry. We'll handle the rest!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-card">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-medium">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  maxLength={100}
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  maxLength={15}
                  className="h-12"
                />
              </div>

              {/* Address */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="flex items-center gap-2 text-foreground font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  Pickup Address *
                </Label>
                <Input
                  id="address"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  maxLength={200}
                  className="h-12"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-medium">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  Pickup Date *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  Time Slot *
                </Label>
                <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Service */}
              <div className="space-y-2 md:col-span-2">
                <Label className="flex items-center gap-2 text-foreground font-medium">
                  <Shirt className="w-4 h-4 text-primary" />
                  Service Type *
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="notes" className="text-foreground font-medium">
                  Special Instructions (Optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special instructions or requests..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  maxLength={500}
                  className="min-h-[100px] resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <Button type="submit" size="lg" className="w-full text-base h-14">
                Schedule Pickup
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                You'll receive a confirmation SMS after booking.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
