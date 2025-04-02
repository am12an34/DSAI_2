
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SplashCursor from '../SplashCursor'

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
            <SplashCursor />

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ABOUT DSAI<span className="text-dsai-green">.</span> CLUB
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Fostering innovation and excellence in the field of Data Science and Artificial Intelligence at NIT Agartala since 2022.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all">
                  <Link to="https://chat.whatsapp.com/IZtjxNyjq6L5d9dYudzo5K">
                    Join Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 hover:border-white/40 transition-all">
                  <a href="mailto:info@dsaiclub.com">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden animate-fade-in animate-delay-200">
              <img
                src="/assets/backImages/IMG_4255.jpg"
                alt="DSAI Club Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-dsai-dark-lighter">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Foundation"
            title="Vision & Mission"
            description="Guiding principles that drive our community forward."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-dsai-green">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading student community that fosters innovation and excellence in the field of Data Science and Artificial Intelligence, empowering students to tackle real-world challenges and drive positive change through technology.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl animate-fade-in animate-delay-200">
              <h3 className="text-2xl font-bold mb-4 text-dsai-green">Our Mission</h3>
              <p className="text-gray-300">
                To create a collaborative learning environment where students can develop their skills in Data Science and AI through hands-on projects, workshops, and mentorship, while building a strong network of like-minded individuals passionate about technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Story"
            title="The DSAI Journey"
            description="From a small initiative to a thriving community of data science and AI enthusiasts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl animate-fade-in">
              <h3 className="text-xl font-bold mb-4">The Inception</h3>
              <p className="text-gray-400 mb-4">
                Established in 2022 by a group of students passionate about AI and data science, the DSAI Club started with a vision to foster innovation and collaboration.
              </p>
              <p className="text-gray-500">2022</p>
            </div>

            <div className="glass-card p-8 rounded-xl animate-fade-in animate-delay-200">
              <h3 className="text-xl font-bold mb-4">Building Momentum</h3>
              <p className="text-gray-400 mb-4">
                By 2023, the club had grown significantly, hosting workshops, hackathons, and research projects, attracting students eager to explore AI and machine learning.
              </p>
              <p className="text-gray-500">2023 - 2024</p>
            </div>

            <div className="glass-card p-8 rounded-xl animate-fade-in animate-delay-300">
              <h3 className="text-xl font-bold mb-4">Shaping the Future</h3>
              <p className="text-gray-400 mb-4">
                Now in 2025, DSAI Club is one of the most vibrant technical communities at NIT Agartala, with a growing network of members, industry collaborations, and impactful projects.
              </p>
              <p className="text-gray-500">2025 - Present</p>
            </div>
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section className="py-16 bg-dsai-dark-lighter">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Recognition"
            title="Our Achievements"
            description="Milestones and recognition that highlight our journey of excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl flex items-start space-x-4 animate-fade-in">
              <div className="bg-dsai-green/20 rounded-full p-3 text-dsai-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovative Project Works</h3>
                <p className="text-gray-400">Developed AI-powered applications such as Face Recognition, Sky Saving Pro, and Plant Disease Detector.</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-start space-x-4 animate-fade-in animate-delay-100">
              <div className="bg-dsai-green/20 rounded-full p-3 text-dsai-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive Excellence</h3>
                <p className="text-gray-400">Achieved top positions in national and international AI & ML hackathons, including Smart India Hackathon and Google Solution Challenge.</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-start space-x-4 animate-fade-in animate-delay-200">
              <div className="bg-dsai-green/20 rounded-full p-3 text-dsai-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Workshops & Collaborations</h3>
                <p className="text-gray-400">Organized workshops on Machine Learning, Quantum Computing, and Automation with experts from Google.</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-start space-x-4 animate-fade-in animate-delay-300">
              <div className="bg-dsai-green/20 rounded-full p-3 text-dsai-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Research & Industry Placements</h3>
                <p className="text-gray-400">Members published AI research papers and secured internships at top tech firms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 parallax-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/backImages/IMG_4311.jpg')" }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Be Part of Our Journey</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Join our club of innovators, builders, and problem solvers. Together, we can push the boundaries of what's possible with data science and artificial intelligence.
          </p>

          <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-dsai-green/20 transition-all animate-fade-in animate-delay-200">
            <Link to="https://chat.whatsapp.com/IZtjxNyjq6L5d9dYudzo5K">
              Join DSAI Club <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
