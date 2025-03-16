
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CalendarButtonProps {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

const CalendarButton: React.FC<CalendarButtonProps> = ({
  title,
  description,
  location,
  startDate,
  endDate
}) => {
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const createGoogleCalendarUrl = () => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
  };

  return (
    <Button 
      onClick={() => window.open(createGoogleCalendarUrl(), '_blank')}
      className="bg-purple hover:bg-purple-dark text-white rounded-full px-6 py-2.5 flex items-center gap-2"
    >
      <Calendar className="w-5 h-5" />
      <span>Add to Calendar</span>
    </Button>
  );
};

export default CalendarButton;
