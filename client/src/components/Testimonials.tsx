import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    company: 'Tech Innovations Inc.',
    role: 'CTO',
    content: 'D-TECH transformed our digital presence completely. Their AI automation solutions saved us countless hours and significantly improved our efficiency.',
    rating: 5,
    initials: 'JM',
    color: 'bg-gradient-to-br from-primary to-chart-2',
  },
  {
    name: 'David Lee',
    company: 'GameSphere Studios',
    role: 'Creative Director',
    content: 'Working with D-TECH on our game development project was exceptional. Their expertise in Unreal Engine brought our vision to life beyond expectations.',
    rating: 5,
    initials: 'DL',
    color: 'bg-gradient-to-br from-chart-2 to-chart-4',
  },
  {
    name: 'Rachel Foster',
    company: 'Digital Marketing Pro',
    role: 'Marketing Manager',
    content: 'The SEO strategies implemented by D-TECH doubled our organic traffic within three months. Their data-driven approach delivers real results.',
    rating: 5,
    initials: 'RF',
    color: 'bg-gradient-to-br from-chart-4 to-primary',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-card/50 border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-[var(--glow-primary)] overflow-visible"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" data-testid={`star-${index}-${i}`} />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className={`${testimonial.color} text-white font-semibold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}