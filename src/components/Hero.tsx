import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/config/config.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {config.tagline}
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{config.siteName}</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {config.description}
          </p>

          <p 
            className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Experience blazing-fast performance with enterprise-grade infrastructure.
            Deploy in seconds, scale to millions.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href={config.ctaButtons.primary.href} target="_blank" rel="noopener noreferrer">
                {config.ctaButtons.primary.label}
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href={config.ctaButtons.secondary.href} target="_blank" rel="noopener noreferrer">
                {config.ctaButtons.secondary.label}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "10K+", label: "Servers" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
