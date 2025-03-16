
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from 'sonner';
import { Crown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState<string | null>(null);
  const [guests, setGuests] = useState('0');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !attending) {
      toast.error('Please fill all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for your RSVP!');
      setIsSubmitting(false);
      
      // Reset form
      setName('');
      setEmail('');
      setAttending(null);
      setGuests('0');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-16 px-4 bg-gradient-to-b from-purple-light/10 to-background">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold gold-text mb-4">RSVP</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Please let us know if you'll be joining the celebration by July 15th, 2024
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-6 bg-white ${isMobile ? 'p-5' : 'p-8'} rounded-lg shadow-lg gold-border`}>
          <div className="space-y-3">
            <Label htmlFor="name" className="text-gray-700">Your Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gold/30 focus:border-gold"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gold/30 focus:border-gold"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-gray-700">Will you attend? *</Label>
            <RadioGroup value={attending || ''} onValueChange={setAttending} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attend-yes" />
                <Label htmlFor="attend-yes" className="cursor-pointer">Joyfully Accepts</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attend-no" />
                <Label htmlFor="attend-no" className="cursor-pointer">Regretfully Declines</Label>
              </div>
            </RadioGroup>
          </div>

          {attending === 'yes' && (
            <div className="space-y-3">
              <Label htmlFor="guests" className="text-gray-700">Number of Guests (including yourself)</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border-gold/30 focus:border-gold"
              />
            </div>
          )}

          <div className="space-y-3">
            <Label htmlFor="message" className="text-gray-700">Message (Optional)</Label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-gold/30 focus:border-gold py-2 px-3"
              placeholder="Share your wishes or any dietary restrictions..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-3"
          >
            {isSubmitting ? "Sending..." : "Send RSVP"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
