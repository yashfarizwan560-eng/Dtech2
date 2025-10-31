import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Rocket, Mail } from 'lucide-react';
import logoImg from '@assets/generated_images/D-TECH_futuristic_logo_design_5163d4be.png';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-32 text-center relative z-10">
        <div className="flex justify-center mb-12">
          <img 
            src={logoImg} 
            alt="D-TECH Logo" 
            className="h-32 w-32 animate-pulse-glow"
            data-testid="img-logo"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-fade-in-up">
          Innovating with AI
        </h1>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold mb-8 text-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Building Digital Future
        </p>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          We transform businesses with cutting-edge technology solutions, from web development to AI automation.
          Let's build something extraordinary together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 gap-2 text-lg"
            data-testid="button-hero-get-started"
          >
            <Rocket className="h-5 w-5" />
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('portfolio')}
            className="gap-2 text-lg backdrop-blur-sm bg-background/50"
            data-testid="button-hero-portfolio"
          >
            <Sparkles className="h-5 w-5" />
            View Portfolio
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => scrollToSection('contact')}
            className="gap-2 text-lg"
            data-testid="button-hero-contact"
          >
            <Mail className="h-5 w-5" />
            Contact Us
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
          <ChevronDown className="h-8 w-8 text-muted-foreground" data-testid="icon-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}