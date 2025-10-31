export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20 blur-[100px] animate-gradient-shift top-0 left-0" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-chart-2/15 to-primary/15 blur-[120px] animate-gradient-shift bottom-0 right-0" style={{ animationDelay: "7s" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/10 to-chart-4/10 blur-[90px] animate-gradient-shift top-1/2 left-1/2" style={{ animationDelay: "14s" }} />
    </div>
  );
}