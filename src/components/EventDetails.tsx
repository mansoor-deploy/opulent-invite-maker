
import { MapPin, Clock, Calendar, Gift } from 'lucide-react';
import CalendarButton from './CalendarButton';

interface EventDetailsProps {
  date: Date;
  venue: string;
  address: string;
  time: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  date,
  venue,
  address,
  time,
}) => {
  // Calculate end time (assuming 4 hours duration)
  const endDate = new Date(date);
  endDate.setHours(endDate.getHours() + 4);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-purple-light/10">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text">Event Details</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 px-2 sm:px-4">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-purple-light/10 group-hover:bg-purple-light/20 transition-colors">
                <Calendar className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-dark">Date</h3>
                <p className="text-gray-700">
                  {date.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-purple-light/10 group-hover:bg-purple-light/20 transition-colors">
                <Clock className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-dark">Time</h3>
                <p className="text-gray-700">{time}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-purple-light/10 group-hover:bg-purple-light/20 transition-colors">
                <MapPin className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-dark">Venue</h3>
                <p className="text-gray-700">{venue}</p>
                <p className="text-gray-600 text-sm mt-1">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-full bg-purple-light/10 group-hover:bg-purple-light/20 transition-colors">
                <Gift className="w-6 h-6 text-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-dark">Gifts</h3>
                <p className="text-gray-700">Your presence is the only gift needed! However, if you wish to bring something, a contribution to my travel fund would be appreciated.</p>
              </div>
            </div>

            <div className="pt-4">
              <CalendarButton
                title="Golden Jubilee Birthday Celebration"
                description="Join us for an elegant evening celebrating this milestone birthday!"
                location={`${venue}, ${address}`}
                startDate={date}
                endDate={endDate}
              />
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden gold-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9878584!3d40.7484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc88a76c1!2sThe%20Plaza%20Hotel!5e0!3m2!1sen!2sus!4v1623161751568!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="filter brightness-95"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
