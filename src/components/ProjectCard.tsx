
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  githubLink,
  demoLink,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:shadow-dsai-green/20 hover:shadow-xl group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Data flow animation */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-dsai-green/40 to-transparent"
            style={{
              top: `${25 * (i + 1)}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.2}s`,
              animation: 'flowRight 3s infinite ease-in-out'
            }}
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-dsai-green/40 to-transparent"
            style={{
              left: `${25 * (i + 1)}%`,
              top: 0,
              bottom: 0,
              animationDelay: `${i * 0.2}s`,
              animation: 'flowDown 3s infinite ease-in-out'
            }}
          />
        ))}
      </div>
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dsai-dark via-transparent to-transparent"></div>
        
        {/* Animated overlay */}
        <div className={`absolute inset-0 bg-dsai-green/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="w-24 h-24 rounded-full bg-dsai-green/20 animate-pulse-slow"></div>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        {/* Glowing accent */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-dsai-green/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-dsai-green transition-colors flex items-center">
          <span className={`inline-block transition-all duration-500 ${isHovered ? 'translate-x-2' : ''}`}>{title}</span>
          <span className={`ml-2 inline-block w-2 h-2 rounded-full bg-dsai-green ${isHovered ? 'animate-pulse' : 'opacity-0'} transition-all duration-300`}></span>
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 transition-transform duration-500 group-hover:translate-x-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-dsai-dark-lighter rounded-full text-xs text-gray-300 transition-all duration-300 hover:bg-dsai-green/20 hover:text-white"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-dsai-green text-sm hover:underline group-hover:translate-y-0 transition-all duration-500"
              style={{ transform: isHovered ? 'translateY(0)' : 'translateY(5px)', opacity: isHovered ? 1 : 0.7 }}
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={16} className="mr-1" />
              <span>GitHub</span>
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-dsai-green text-sm hover:underline group-hover:translate-y-0 transition-all duration-500"
              style={{ transform: isHovered ? 'translateY(0)' : 'translateY(5px)', opacity: isHovered ? 1 : 0.7, transitionDelay: '50ms' }}
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
