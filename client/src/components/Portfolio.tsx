import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import webProjectImg from '@assets/generated_images/Web_app_portfolio_project_a6d332da.png';
import gameProjectImg from '@assets/generated_images/Game_development_portfolio_project_d952e92f.png';
import seoProjectImg from '@assets/generated_images/SEO_services_portfolio_project_d5c5dee5.png';
import aiProjectImg from '@assets/generated_images/AI_automation_portfolio_project_e1213f76.png';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Full-stack e-commerce solution with payment integration',
    image: webProjectImg,
    fullDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Cyberpunk Racing Game',
    category: 'Games',
    description: 'Immersive 3D racing experience with stunning visuals',
    image: gameProjectImg,
    fullDescription: 'A futuristic racing game developed in Unreal Engine 5, featuring photorealistic graphics, dynamic weather systems, and multiplayer support for up to 16 players.',
    tech: ['Unreal Engine', 'C++', 'Blueprints', 'Multiplayer'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'SEO Analytics Suite',
    category: 'SEO',
    description: 'Comprehensive SEO tracking and optimization platform',
    image: seoProjectImg,
    fullDescription: 'An all-in-one SEO platform that tracks rankings, analyzes competitors, and provides actionable insights to improve search engine visibility and organic traffic.',
    tech: ['Python', 'React', 'MongoDB', 'API Integration'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'AI',
    description: 'Intelligent content creation powered by machine learning',
    image: aiProjectImg,
    fullDescription: 'An AI-powered content generation tool that creates high-quality marketing copy, blog posts, and social media content using advanced natural language processing.',
    tech: ['TensorFlow', 'OpenAI', 'FastAPI', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

type Category = 'All' | 'Web' | 'Games' | 'SEO' | 'AI';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories: Category[] = ['All', 'Web', 'Games', 'SEO', 'AI'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-gradient-to-r from-primary to-chart-2' : ''}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="backdrop-blur-sm bg-card/50 border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-[var(--glow-primary)] overflow-visible"
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden rounded-t-md aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="ghost"
                    className="text-primary p-0 h-auto"
                    data-testid={`button-view-details-${project.id}`}
                  >
                    View Details →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-background/95" data-testid="modal-project-details">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  <Badge className="mt-2">{selectedProject.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full rounded-md"
                  data-testid="img-modal-project"
                />
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" data-testid={`badge-tech-${i}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-primary to-chart-2 gap-2"
                    data-testid="button-live-demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="gap-2" data-testid="button-github">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}