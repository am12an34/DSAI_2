
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SplashCursor from '../SplashCursor'

const projects = [
  {
    "id": 0,
    "title": "Face Recognition",
    "description": "A facial recognition system that detects and analyzes live facial recordings to determine a person's mood based on expressions and gestures. It can be used for sentiment analysis, security authentication, and personalized user experiences.",
    "imageSrc": "https://img.freepik.com/free-photo/facial-recognition-collage-concept_23-2150038886.jpg?t=st=1743115390~exp=1743118990~hmac=261b82cf9d763786b366816d0d55d8b773ea9a9fb255bf60cb696c5c116adaba&w=1380",
    "tags": ["Computer Vision", "Face Recognition", "AI", "Deep Learning"],
    "category": "computer-vision",
    "githubLink": "https://github.com/example/face-recognition",
    "demoLink": "https://example.com/face-recognition-demo"
  },
  {
    "id": 1,
    "title": "Book Recommender",
    "description": "An AI-powered book recommendation system that suggests books based on user preferences, reading history, and genre interests. It utilizes machine learning and collaborative filtering to provide personalized book recommendations.",
    "imageSrc": "https://images.pexels.com/photos/16380906/pexels-photo-16380906/free-photo-of-webpage-of-ai-chatbot-a-prototype-ai-smith-open-chatbot-is-seen-on-the-website-of-openai-on-a-apple-smartphone-examples-capabilities-and-limitations-are-shown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["Machine Learning", "Recommender System", "Clustering Algorithm", "Unsupervised Learning"],
    "category": "recommendation-system",
    "githubLink": "https://github.com/example/book-recommender",
    "demoLink": "https://example.com/book-recommender-demo"
  },
  {
    "id": 1.2,
    "title": "Next Word Predictor using LSTM",
    "description": "An AI-based text prediction system that uses an LSTM (Long Short-Term Memory) neural network to predict the next word in a given sentence. It is trained on large text datasets to improve accuracy and contextual understanding.",
    "imageSrc": "https://images.pexels.com/photos/6964149/pexels-photo-6964149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["Deep Learning", "LSTM", "Natural Language Processing", "AI"],
    "category": "natural-language-processing",
    "githubLink": "https://github.com/D-i-vyansh/next-word/tree/main/next_word",
    "demoLink": ""
  },

  {
    "id": 2,
    "title": "Sky Saving Pro",
    "description": "A real-time flight price comparison tool that scans multiple airline and travel platforms to help users find the cheapest available flight tickets. It includes alert features to notify users about price drops.",
    "imageSrc": "https://images.pexels.com/photos/99567/aircraft-holiday-sun-tourism-99567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["Web Scraping", "Price Comparison", "Automation", "TravelTech"],
    "category": "automation",
    "githubLink": "https://github.com/example/sky-saving-pro",
    "demoLink": "https://example.com/sky-saving-pro-demo"
  },
  {
    "id": 3,
    "title": "Facial Cursor Control",
    "description": "A vision-based cursor control system that allows users to navigate their computer screen using eye movements. It utilizes iris tracking and facial gesture detection to provide a hands-free interaction experience.",
    "imageSrc": "https://images.pexels.com/photos/5474035/pexels-photo-5474035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["AI", "Gesture Control", "Computer Vision", "Accessibility"],
    "category": "human-computer-interaction",
    "githubLink": "https://github.com/example/facial-cursor-control",
    "demoLink": "https://example.com/facial-cursor-control-demo"
  },
  {
    "id": 4,
    "title": "Article Summarizer and Sentiment Analysis",
    "description": "An NLP-based application that extracts key insights from articles, generates concise summaries, and analyzes the sentiment of the text to determine whether it is positive, negative, or neutral.",
    "imageSrc": "https://images.pexels.com/photos/7947849/pexels-photo-7947849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["NLP", "Text Summarization", "Sentiment Analysis", "AI"],
    "category": "natural-language-processing",
    "githubLink": "https://github.com/example/article-summarizer",
    "demoLink": "https://example.com/article-summarizer-demo"
  },
  {
    "id": 5,
    "title": "The World Revolves Around You",
    "description": "An interactive art installation where users control a particle system mimicking bird flocking behavior using hand gestures in front of a webcam. The project blends creative coding with AI-driven motion tracking.",
    "imageSrc": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["Creative Coding", "AI", "Gesture Recognition", "Computer Vision"],
    "category": "interactive-art",
    "githubLink": "https://github.com/example/world-revolves",
    "demoLink": "https://jgyasu.github.io/the-world-revolves-around-you/"
  },
  {
    "id": 6,
    "title": "SEO Blog Generator",
    "description": "An AI-powered blog generation system that automates research, content structuring, SEO optimization, grammar correction, and sentiment analysis. It ensures high-quality blog posts with optimized visibility.",
    "imageSrc": "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["AI", "Content Generation", "SEO", "NLP"],
    "category": "content-automation",
    "githubLink": "https://github.com/jgyasu/the-world-revolves-around-you",
    "demoLink": "https://example.com/seo-blog-generator-demo"
  },
  {
    "id": 7,
    "title": "Controlling a Particle System Mimicking Bird Flocking Behaviour",
    "description": "An AI-based hand gesture recognition system that controls a particle system resembling bird flocking behavior. Users can interact with the simulation in real-time using hand movements.",
    "imageSrc": "https://images.pexels.com/photos/8728105/pexels-photo-8728105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["AI", "Particle Systems", "Gesture Control", "Creative Coding"],
    "category": "interactive-simulation",
    "githubLink": "https://github.com/example/particle-flocking",
    "demoLink": "https://example.com/particle-flocking-demo"
  },
  {
    "id": 8,
    "title": "Crop Yield Prediction",
    "description": "A machine learning model that predicts crop yields based on environmental conditions, soil health, and historical data. The model helps farmers optimize their agricultural strategies for better productivity.",
    "imageSrc": "https://images.pexels.com/photos/539856/pexels-photo-539856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "tags": ["Machine Learning", "Agriculture", "Data Science", "Python"],
    "category": "machine-learning",
    "githubLink": "https://github.com/yogeshsingh360/crop_yield",
    "demoLink": "https://crop-yield-predict.onrender.com/"
  }
]

// Define categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'machine-learning', name: 'Machine Learning' },
  { id: 'nlp', name: 'Natural Language Processing' },
  { id: 'computer-vision', name: 'Computer Vision' },
  { id: 'generative-ai', name: 'Generative AI' }
];

const Innovations = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <SplashCursor />

      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Our Research & Development"
          title="Innovation Showcase"
          description="Explore cutting-edge projects and research developed by our club members, showcasing the practical applications of data science and artificial intelligence."
        />

        <div className="flex justify-center mb-12 overflow-x-auto py-2">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={
                  activeCategory === category.id
                    ? 'bg-dsai-green text-black'
                    : 'border-gray-700 text-gray-300 hover:border-dsai-green hover:text-black'
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <SectionHeading
            title="Start Your Own Project"
            description="Have an innovative idea? DSAI Club provides resources, mentorship, and a collaborative environment to bring your AI and data science projects to life."
            align="center"
            className="mb-8"
          />

          <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all">
            <a href="mailto:info@dsaiclub.com">Propose a Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
