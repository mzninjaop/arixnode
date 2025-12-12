import { 
  Zap, Shield, Lock, Headphones, LayoutDashboard, 
  Database, Globe, Clock 
} from "lucide-react";
import features from "@/config/features.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Lock,
  Headphones,
  LayoutDashboard,
  Database,
  Globe,
  Clock,
};

const Features = () => {
  return (
    <section className="py-24 relative bg-muted/30" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">ArixNode</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-leading features that set us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.mainFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div
                key={feature.id}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:glow-purple transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
