import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/config/config.json";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {config.tagline}
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">{config.siteName}</span>
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            {config.description}
          </p>

          <p 
            className="text-lg text-muted-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Experience blazing-fast performance with enterprise-grade infrastructure.
            NVMe SSDs, DDR5 RAM, and 24/7 expert support. Deploy in seconds.
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {config.stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl glass">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By */}
          <p 
            className="text-sm text-muted-foreground mt-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {config.trustedBy}
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
