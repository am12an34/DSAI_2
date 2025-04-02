
import { Calendar, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageSrc: string;
  isPast?: boolean;
  className?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  imageSrc,
  isPast = false,
  className,
}: EventCardProps) => {
  return (
    <div 
      className={cn(
        "group rounded-xl overflow-hidden glass-card transition-all duration-300 hover:shadow-emerald-500/10 hover:shadow-lg hover:-translate-y-1",
        isPast ? "opacity-80" : "",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isPast && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-dsai-dark/80 text-white px-4 py-2 rounded-full text-sm font-medium">
              Past Event
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-dsai-green">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        
        <button className="text-dsai-green text-sm font-medium hover:underline transition-all">
          {isPast ? "View Details" : "Register Now"}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
