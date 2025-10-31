import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Target, Eye, Users } from 'lucide-react';

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', initials: 'AR', color: 'bg-gradient-to-br from-primary to-chart-2' },
  { name: 'Sarah Chen', role: 'Lead Developer', initials: 'SC', color: 'bg-gradient-to-br from-chart-2 to-chart-4' },
  { name: 'Marcus Johnson', role: 'AI Specialist', initials: 'MJ', color: 'bg-gradient-to-br from-chart-4 to-primary' },
  { name: 'Emma Watson', role: 'UX Designer', initials: 'EW', color: 'bg-gradient-to-br from-chart-1 to-chart-3' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovation-driven team building the future of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="backdrop-blur-sm bg-card/50 border-card-border p-8">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. We believe in making cutting-edge technology 
                accessible to organizations of all sizes.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-card-border p-8">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-chart-2 to-chart-4 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in AI-powered digital solutions, recognized for our commitment 
                to innovation, quality, and client success. We envision a future where technology 
                seamlessly integrates with business to create limitless possibilities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-heading font-semibold">Meet Our Team</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 rounded-md backdrop-blur-sm bg-card/30 border border-card-border hover-elevate active-elevate-2 transition-all duration-300 overflow-visible"
                data-testid={`card-team-${index}`}
              >
                <Avatar className="h-24 w-24">
                  <AvatarFallback className={`${member.color} text-2xl font-bold text-white`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="font-semibold text-lg" data-testid={`text-name-${index}`}>
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}