import { SiGithub, SiLinkedin, SiFacebook, SiWhatsapp } from 'react-icons/si';
import logoImg from '@assets/generated_images/D-TECH_futuristic_logo_design_5163d4be.png';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="D-TECH" className="h-10 w-10" />
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                D-TECH
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovating with AI, Building Digital Future. Transform your business with cutting-edge technology solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-card border border-card-border flex items-center justify-center hover-elevate active-elevate-2 transition-all overflow-visible"
                data-testid="link-footer-github"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-card border border-card-border flex items-center justify-center hover-elevate active-elevate-2 transition-all overflow-visible"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-card border border-card-border flex items-center justify-center hover-elevate active-elevate-2 transition-all overflow-visible"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-card border border-card-border flex items-center justify-center hover-elevate active-elevate-2 transition-all overflow-visible"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} D-TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}