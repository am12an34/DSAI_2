
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  github,
  linkedin,
  twitter,
}: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-dsai-green/20 hover:shadow-lg group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Futuristic overlay with circuit-like patterns */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-dsai-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 30% 30%, transparent 10px, rgba(16, 185, 129, 0.1) 10px, rgba(16, 185, 129, 0.1) 12px, transparent 12px),
                          radial-gradient(circle at 70% 60%, transparent 10px, rgba(16, 185, 129, 0.1) 10px, rgba(16, 185, 129, 0.1) 12px, transparent 12px),
                          radial-gradient(circle at 40% 80%, transparent 10px, rgba(16, 185, 129, 0.1) 10px, rgba(16, 185, 129, 0.1) 12px, transparent 12px)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
          
          {/* Circuit lines */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-dsai-green/40"></div>
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-dsai-green/40"></div>
            <div className="absolute top-0 left-[30%] h-full w-[1px] bg-dsai-green/40"></div>
            <div className="absolute top-0 left-[70%] h-full w-[1px] bg-dsai-green/40"></div>
          </div>
          
          <div className="p-6 w-full flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dsai-dark flex items-center justify-center text-white hover:bg-dsai-green hover:text-dsai-dark transition-colors transform hover:scale-110"
                aria-label={`${name}'s GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dsai-dark flex items-center justify-center text-white hover:bg-dsai-green hover:text-dsai-dark transition-colors transform hover:scale-110"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dsai-dark flex items-center justify-center text-white hover:bg-dsai-green hover:text-dsai-dark transition-colors transform hover:scale-110"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 relative overflow-hidden">
        {/* Animated Data/Code Dots */}
        <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-dsai-green/20"
              style={{
                width: '4px',
                height: '4px',
                top: `${20 + (i * 10)}px`,
                right: '10px',
                animation: `pulse-slow ${1 + (i * 0.2)}s infinite alternate ease-in-out`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>

        <h3 className="text-xl font-bold relative z-10">
          {name}
          <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-dsai-green transition-all duration-300 ${isHovered ? 'w-full' : ''}`}></span>
        </h3>
        <p className="text-dsai-green">{role}</p>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-dsai-green/0 via-dsai-green/30 to-dsai-green/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-300"></div>
    </div>
  );
};

export default TeamMemberCard;
