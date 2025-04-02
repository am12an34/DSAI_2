
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Check, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roll: '',
    year: '',
    department: '',
    interest: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Here you would typically send this data to a server
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in DSAI Club. We'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      roll: '',
      year: '',
      department: '',
      interest: '',
      experience: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Become a Member"
          title="Join DSAI Club"
          description="Take the first step towards becoming part of our vibrant community of data science and AI enthusiasts."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Benefits and Info */}
          <div className="animate-fade-in">
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dsai-green/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-dsai-green" />
                  </div>
                  <p className="text-gray-300">Access to workshops, hackathons, and hands-on projects</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dsai-green/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-dsai-green" />
                  </div>
                  <p className="text-gray-300">Mentorship from experienced students and faculty</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dsai-green/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-dsai-green" />
                  </div>
                  <p className="text-gray-300">Networking opportunities with industry professionals</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dsai-green/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-dsai-green" />
                  </div>
                  <p className="text-gray-300">Resources to enhance your technical skills</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dsai-green/20 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-dsai-green" />
                  </div>
                  <p className="text-gray-300">Chance to work on real-world projects with impact</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Membership Process</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dsai-green/20 flex items-center justify-center text-dsai-green mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Apply</h4>
                    <p className="text-gray-400">Fill out the application form with your details and interests.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dsai-green/20 flex items-center justify-center text-dsai-green mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Interview</h4>
                    <p className="text-gray-400">Selected applicants will be invited for a casual interview to understand your interests better.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dsai-green/20 flex items-center justify-center text-dsai-green mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Onboarding</h4>
                    <p className="text-gray-400">Receive your membership and get introduced to the DSAI community!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="animate-fade-in animate-delay-200">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Application Form</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="roll" className="block text-sm font-medium text-gray-300 mb-1">Roll Number *</label>
                  <input
                    type="text"
                    id="roll"
                    name="roll"
                    value={formData.roll}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">Year of Study *</label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">Department *</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="e.g., Computer Science"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">Area of Interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  >
                    <option value="">Select Interest</option>
                    <option value="ml">Machine Learning</option>
                    <option value="dl">Deep Learning</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="cv">Computer Vision</option>
                    <option value="rl">Reinforcement Learning</option>
                    <option value="da">Data Analysis</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">Experience Level *</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="beginner">Beginner (Interested but little experience)</option>
                  <option value="intermediate">Intermediate (Some projects or coursework)</option>
                  <option value="advanced">Advanced (Multiple projects or research)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Why do you want to join DSAI Club? *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-dsai-dark-lighter border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dsai-green focus:border-transparent"
                  placeholder="Tell us about your interests, goals, and why you'd like to join the club..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all py-6">
                Submit Application <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
