import { SiUnity, SiUnrealengine, SiHtml5, SiCss3, SiJavascript, SiPython, SiTensorflow, SiReact } from 'react-icons/si';

const technologies = [
  { name: 'Unity', icon: SiUnity, color: 'text-[#000000] dark:text-[#FFFFFF]' },
  { name: 'Unreal Engine', icon: SiUnrealengine, color: 'text-[#313131] dark:text-[#FFFFFF]' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
  { name: 'CSS3', icon: SiCss3, color: 'text-[#1572B6]' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-[#FF6F00]' },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-sm bg-card/50 border border-card-border rounded-md p-8 flex flex-col items-center justify-center gap-4 hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-[var(--glow-primary)] overflow-visible"
                data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className={`h-16 w-16 ${tech.color}`} />
                <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}