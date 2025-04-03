import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Atom, Code } from "lucide-react";
const teamMembers = [

  // Core Team
  {
    name: "Divyansh Singhal",
    id: "22DSMA019",
    role: "President",
    category: "core",
    email: "divyanshsinghal067@gmail.com",
    linkedin: "https://www.linkedin.com/in/divyansh-singhal-b82aa9248",
    github: "https://github.com/D-i-vyansh",
    image: "/assets/teamMembers/divyansh.jpg"
  },
  {
    name: "Jigyasu Krishnan",
    id: "23UEI104",
    role: "Vice President",
    category: "core",
    email: "jigyasu@outlook.in",
    linkedin: "https://www.linkedin.com/in/jgyasu/",
    github: "",
    image: "/assets/teamMembers/jigyasu.jpeg",
  },
  {
    name: "Parmesh Lata",
    id: "23DSMA015",
    role: "Vice President and Design Lead",
    category: "core",
    email: "lataayush6@gmail.com",
    linkedin: "https://www.linkedin.com/in/parmesh-lata",
    github: "https://github.com/ParmeshLata",
    image: "/assets/teamMembers/pramesh.jpg"
  },

  // Leads
  {
    name: "Amit Kumar Meena",
    id: "22DSMA015",
    role: "Financial Lead",
    category: "core",
    email: "sm2614592@gmail.com ",
    linkedin: "https://www.linkedin.com/in/meenaamit25",
    image: "/assets/teamMembers/amit.jpeg"
  },
  {
    name: "Amitabh Anand",
    id: "22UME098",
    role: "Event Lead",
    category: "core",
    email: "amitabhan111@gmail.com",
    linkedin: "https://www.linkedin.com/in/amitabh~anand",
    github: "",
    image: "/assets/teamMembers/amitabh.jpg"
  },
  {
    name: "Vishal Deep",
    id: "23UCSXXX",
    role: "Event Co-Lead",
    category: "core",
    email: "vishaldeep@example.com",
    linkedin: "https://www.linkedin.com/in/vishal-deep",
    github: "https://github.com/vishaldeep",
    image: "https://anarcnita.in/img/active_team/Vishal%20Deep.jpeg"
  },
  {
    name: "Pratyush Baliarsingh",
    id: "23DTMA027",
    role: "Team Lead (Quantfy)",
    category: "core",
    email: "pratyush.baliarsingh2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/pratyush-baliarsingh/",
    github: "https://github.com/pratycodes",
    image: "/assets/teamMembers/pratush.png"
  },
  {
    name: "Shubham Kumar",
    id: "23UCS119",
    role: "Team Lead (Turing Complete)",
    category: "core",
    email: "shubhkr1320@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubham-sebrin",
    github: "",
    image: "/assets/teamMembers/shubham.jpg"
  },
  {
    name: "Anand Singh",
    id: "23UEC127",
    role: "Team Lead (Dynamo)",
    category: "core",
    email: "anandsingh.as1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/anand-singh-20102-/",
    github: "https://github.com/Pinaka07",
    image: "/assets/teamMembers/anand.jpeg"
  },
  {
    name: "Swayam Verma",
    id: "23DTMA023",
    role: "Team Lead (Neural Nexus)",
    category: "core",
    email: "vermaswayam1.nita@gmail.com",
    linkedin: "https://www.linkedin.com/in/swayam-verma-",
    github: "",
    image: "/assets/teamMembers/swayam.jpg"
  },

  // Event Management
  {
    name: "Vidhi Mittal",
    id: "23UCS217",
    role: "Team Member",
    category: "technical",
    email: "vidhi42004@gmail.com",
    linkedin: "https://www.linkedin.com/in/vidhi-mittal04",
    github: "",
    image: "/assets/teamMembers/vidhi.jpg"
  },
  {
    name: "Manish Kumar",
    id: "23UCS081",
    role: "Team Member",
    category: "technical",
    email: "manishmahi2104maa@gmail.com",
    linkedin: "www.linkedin.com/in/manish-kumar-a78329290",
    github: "https://github.com/ManishKumar081",
    image: "/assets/teamMembers/manish.jpg"
  },
  {
    name: "Reddy Eswar Anush",
    id: "23UCS173",
    role: "Team Member",
    category: "technical",
    email: "eswaranushreddy@gmail.com",
    linkedin: "https://www.linkedin.com/in/reddy-eswar/",
    github: "https://github.com/reddyeswaranush",
    image: "/assets/teamMembers/eswar.jpeg"
  },

  // Team Members
  {
    name: "Vishakha Rao",
    id: "23UICS120",
    role: "Team Member",
    category: "technical",
    email: "vishakha7639@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishakha-rao-126313235",
    github: "https://github.com/VishakhaRao18/virtual-robo",
    image: "/assets/teamMembers/vishkha.jpg"
  },
  {
    name: "Ritika Raj",
    id: "23UCSO89",
    role: "Team Member",
    category: "technical",
    email: "ritikaraj0601@gmail.com",
    linkedin: "https://www.linkedin.com/in/ritikaraj0106",
    github: "https://github.com/Rit0106",
    image: "/assets/teamMembers/ritika.jpg"
  },
  {
    name: "Antareep Roy",
    id: "23UCS083",
    role: "Team Member",
    category: "technical",
    email: "rantareep2@gmail.com",
    linkedin: "https://www.linkedin.com/in/antareep-roy-182a74195/",
    github: "https://github.com/user-anto",
    image: "/assets/teamMembers/antreep.jpg"
  },

  // Members
  {
    name: "Yogesh Singh",
    id: "23UBE017",
    role: "Team Member",
    category: "technical",
    email: "yogeshrajputsingh000@gmail.com",
    linkedin: "https://www.linkedin.com/in/yogesh-singh-285b46218",
    github: "https://github.com/yogeshsingh360",
    image: "/assets/teamMembers/yogesh.jpg"
  },
  {
    name: "Subhasish Saha",
    id: "23UEC019",
    role: "Team Member",
    category: "technical",
    email: "subhasishs111@gmail.com",
    linkedin: "https://www.linkedin.com/in/subhasish-saha-8b426b28a",
    github: "",
    image: "/assets/teamMembers/subhasish.jpg"
  },
  
  {
    name: "Anuradha Kumari",
    id: "23UEI154",
    role: "Team Member",
    category: "technical",
    email: "a.anuradhakgloc027@gmail.com",
    linkedin: "https://www.linkedin.com/in/anuradha-kumari-348179317/",
    github: "https://github.com/anuradha081",
    image: "/assets/teamMembers/anuradha.png"
  },
  {
    name: "Jarupula Sony",
    id: "23UCS156",
    role: "Team Member",
    category: "technical",
    email: "jarupulasony81@gmail.com",
    linkedin: "https://www.linkedin.com/in/sony-jarupula-8ba1832a7/",
    github: "https://github.com/SONY123n",
    image: "/assets/teamMembers/sony.jpg"
  },
  {
    id: '23xyxy',
    name: "Kumar Gaurav",
    role: "Team Member",
    category: "technical",
    image: "/assets/teamMembers/gaurav.jpeg", 
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];



const Team = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");

  const advisors = teamMembers.filter(member => member.category === 'advisor');
  const coreTeam = teamMembers.filter(member => member.category === 'core');
  const technicalTeam = teamMembers.filter(member => member.category === 'technical');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const filterMembers = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 15 + 5}px`,
                width: `${Math.random() * 15 + 5}px`,
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                boxShadow: '0 0 15px 5px rgba(16, 185, 129, 0.3)',
                transform: `translate(${(mousePosition.x / window.innerWidth * 20) - 10}px, ${(mousePosition.y / window.innerHeight * 20) - 10}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: -1
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: '1px',
                width: `${Math.random() * 100 + 50}px`,
                backgroundColor: 'rgba(16, 185, 129, 0.4)',
                transform: `rotate(${Math.random() * 360}deg) translate(${(mousePosition.x / window.innerWidth * 10) - 5}px, ${(mousePosition.y / window.innerHeight * 10) - 5}px)`,
                transition: 'transform 0.3s ease-out',
                zIndex: -1
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          subtitle="Meet Our Team"
          title="The DSAI Squad"
          description="Our diverse team of passionate students and faculty working together to build a vibrant data science and AI club at NIT Agartala."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            className={`${activeCategory === "all" ? "bg-dsai-green text-black" : "border-dsai-green/30 text-white"} flex items-center gap-2 transition-all hover:scale-105`}
            onClick={() => filterMembers("all")}
          >
            <Atom className="h-4 w-4" />
            All Members
          </Button>
          <Button
            variant={activeCategory === "core" ? "default" : "outline"}
            className={`${activeCategory === "core" ? "bg-dsai-green text-black" : "border-dsai-green/30 text-white"} flex items-center gap-2 transition-all hover:scale-105`}
            onClick={() => filterMembers("core")}
          >
            <Code className="h-4 w-4" />
            Core Team
          </Button>
          <Button
            variant={activeCategory === "technical" ? "default" : "outline"}
            className={`${activeCategory === "technical" ? "bg-dsai-green text-black" : "border-dsai-green/30 text-white"} flex items-center gap-2 transition-all hover:scale-105`}
            onClick={() => filterMembers("technical")}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 7V12L16 14M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
            Team Members
          </Button>
        </div>


        {(activeCategory === "all" || activeCategory === "core") && (
          <div className="mb-20 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="h-6 w-6 text-dsai-green" />
              Core Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="transform hover:translate-y-[-10px] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TeamMemberCard
                    name={member.name.toUpperCase()}
                    role={member.role}
                    image={member.image}
                    linkedin={member.linkedin}
                    twitter={member.twitter}
                    github={member.github}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeCategory === "all" || activeCategory === "technical") && (
          <div className="mb-10 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <svg
                className="h-6 w-6 text-dsai-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 7V12L16 14M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
              Team Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="transform hover:translate-y-[-10px] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <TeamMemberCard
                    name={member.name.toUpperCase()}
                    role={member.role}
                    image={member.image}
                    linkedin={member.linkedin}
                    twitter={member.twitter}
                    github={member.github}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center relative">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-dsai-dark-lighter to-dsai-dark border border-dsai-green/20 shadow-xl shadow-dsai-green/5">
            <SectionHeading
              title="Join the Team"
              description="Interested in becoming part of our team? We're always looking for enthusiastic students who are passionate about data science and AI."
              align="center"
              className="mb-8"
            />

            <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-dsai-green/20">
              <a href="mailto:join@dsaiclub.com">Apply Now</a>
            </Button>

            <div className="absolute -z-10 inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse-slow"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    height: `${Math.random() * 10 + 3}px`,
                    width: `${Math.random() * 10 + 3}px`,
                    backgroundColor: 'rgba(16, 185, 129, 0.4)',
                    boxShadow: '0 0 10px 2px rgba(16, 185, 129, 0.2)',
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                  }}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
