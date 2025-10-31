import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Code, Gamepad2, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build responsive, scalable web applications with modern frameworks and best practices.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Create immersive gaming experiences using Unity and Unreal Engine with cutting-edge graphics.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and drive organic traffic with data-driven SEO strategies.',
  },
  {
    icon: Sparkles,
    title: 'AI Automation',
    description: 'Streamline your workflows with intelligent automation powered by advanced AI technology.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="backdrop-blur-sm bg-card/50 border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-[var(--glow-primary)] overflow-visible"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="gap-4">
                  <div className="w-14 h-14 rounded-md bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-primary p-0 h-auto" data-testid={`button-learn-more-${index}`}>
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}