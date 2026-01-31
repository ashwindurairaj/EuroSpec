import { useState } from 'react';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';
import { PageBanner } from '../components/Common/PageBanner';
import { SectionTitle } from '../components/Common/SectionTitle';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Console log the form data
    console.log('Contact Form Submitted:', formData);
    
    // Show success toast
    toast.success('Message Sent!', {
      description: 'Thank you for contacting us. We\'ll respond within 24-48 hours.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen" data-testid="contact-page">
      <Header />
      <main>
        <PageBanner 
          title="Contact Us"
          subtitle="Get in touch with our team"
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        />
        
        {/* Contact Info Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    130 Harry Walker Parkway<br />
                    Newmarket, Ontario, Canada
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Phone</h3>
                  <a 
                    href="tel:+12482498130" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    (248) 249-8130
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Email</h3>
                  <a 
                    href="mailto:mwilley@eurospectooling.com" 
                    className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                  >
                    mwilley@eurospectooling.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border border-slate-100 shadow-sm text-center p-6">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <SectionTitle 
                  title="Send Us a Message"
                  subtitle="We'll get back to you within 24-48 hours"
                  centered={false}
                />
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        data-testid="contact-name-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        data-testid="contact-company-input"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        data-testid="contact-phone-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      data-testid="contact-subject-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or inquiry..."
                      data-testid="contact-message-input"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-hover text-white"
                    data-testid="contact-submit-btn"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map & Sales Contact */}
              <div>
                <SectionTitle 
                  title="Our Location"
                  subtitle="Visit our main facility in Newmarket, Ontario"
                  centered={false}
                />
                
                {/* Google Maps Embed */}
                <div className="rounded-md overflow-hidden shadow-lg mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.4812853768654!2d-79.46183842391682!3d44.04858857108844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad3a96a2e6e6b%3A0x6c6b5e9a4a3e6b6c!2s130%20Harry%20Walker%20Pkwy%20S%2C%20Newmarket%2C%20ON!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eurospec Location"
                    data-testid="google-map"
                  />
                </div>
                
                {/* Sales Contact */}
                <Card className="bg-primary text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Sales Inquiries</h3>
                    <p className="text-gray-200 mb-4">
                      For all new business manufacturing & tooling inquiries, please contact:
                    </p>
                    <div className="space-y-3">
                      <p className="font-semibold text-lg">Michael Willey</p>
                      <p className="text-gray-300">Sr. Director of Sales</p>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <a href="tel:+12482498130" className="text-gray-200 hover:text-white transition-colors">
                          (248) 249-8130
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <a href="mailto:mwilley@eurospectooling.com" className="text-gray-200 hover:text-white transition-colors">
                          mwilley@eurospectooling.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
