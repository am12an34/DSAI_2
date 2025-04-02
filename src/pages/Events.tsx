
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import SectionHeading from '@/components/SectionHeading';

const events = [
  // Upcoming Events
  {
    id: 1,
    title: "AI Model Deployment Workshop",
    date: "April 10, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Virtual Event",
    description: "Learn how to deploy machine learning models in production environments using FastAPI and Docker. This hands-on workshop will guide you through best practices for model serving.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    isPast: false,
  },
  {
    id: 2,
    title: "Data Visualization Challenge",
    date: "May 5, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "CS Department, NIT Agartala",
    description: "Show off your data storytelling skills in this day-long challenge. Participants will analyze real-world datasets and create compelling visualizations to communicate insights.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
    isPast: false,
  },
  {
    id: 3,
    title: "Reinforcement Learning Workshop",
    date: "June 22, 2025",
    time: "2:30 PM - 5:30 PM",
    location: "Virtual Event",
    description: "Dive into the world of reinforcement learning! This workshop will cover fundamental RL concepts, Q-learning, and how to build an agent to play simple games.",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3",
    isPast: false,
  },

  // Past Events
  {
    id: 4,
    title: "Guest Lecture: Ethics in AI",
    date: "February 18, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Auditorium, NIT Agartala",
    description: "An insightful talk on the ethical considerations in artificial intelligence with Dr. Priya Sharma, AI Ethics Researcher at Google.",
    imageSrc: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3",
    isPast: true,
  },
  {
    id: 5,
    title: "Python for Data Science Bootcamp",
    date: "January 12-14, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Center, NIT Agartala",
    description: "A 3-day intensive bootcamp covering Python fundamentals, data manipulation with pandas, and visualization with matplotlib and seaborn.",
    imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3",
    isPast: true,
  },
  {
    id: 6,
    title: "Natural Language Processing Hackathon",
    date: "December 5, 2023",
    time: "9:00 AM - 9:00 PM",
    location: "Innovation Hub, NIT Agartala",
    description: "A 12-hour hackathon focused on building NLP applications. Participants worked in teams to develop solutions for text classification, sentiment analysis, and more.",
    imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3",
    isPast: true,
  },
  {
    id: 7,
    title: "Data Privacy and Security Seminar",
    date: "November 10, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Auditorium, NIT Agartala",
    description: "A seminar on the importance of data privacy and security in the age of AI, featuring talks from industry experts and researchers.",
    imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3",
    isPast: true,
  },
  {
    id: 8,
    title: "AI in Healthcare Workshop",
    date: "October 15, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "A collaborative workshop with the Biomedical Engineering Department exploring applications of AI in healthcare, medical imaging, and diagnostics.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
    isPast: true,
  },
];


const Events = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return !event.isPast;
    if (filter === 'past') return event.isPast;
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="What's Happening"
          title="DSAI Club Events"
          description="Join us for workshops, hackathons, guest lectures, and networking events designed to enhance your data science and AI skills."
        />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-dsai-dark-lighter">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              className={filter === 'all' ? 'bg-dsai-green text-black' : 'text-white hover:text-dsai-green'}
              onClick={() => setFilter('all')}
            >
              All Events
            </Button>
            <Button
              variant={filter === 'upcoming' ? 'default' : 'ghost'}
              className={filter === 'upcoming' ? 'bg-dsai-green text-black' : 'text-white hover:text-dsai-green'}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </Button>
            <Button
              variant={filter === 'past' ? 'default' : 'ghost'}
              className={filter === 'past' ? 'bg-dsai-green text-black' : 'text-white hover:text-dsai-green'}
              onClick={() => setFilter('past')}
            >
              Past Events
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              imageSrc={event.imageSrc}
              isPast={event.isPast}
              className="animate-fade-in"
            />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No events found matching your filter criteria.</p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Want to propose an event or collaborate with us?</p>
          <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all">
            <a href="mailto:info@dsaiclub.com">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
