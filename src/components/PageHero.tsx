import { Check } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
}

const PageHero = ({ title, subtitle, description, features = [] }: PageHeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold mb-2 animate-fade-in">{subtitle}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "text-gradient" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
          
          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {features.slice(0, 6).map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
