import { Gamepad2, Bot, Server, Globe } from "lucide-react";
import features from "@/config/features.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Bot,
  Server,
  Globe,
};

const Services = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to power your projects, from game servers to enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <a
                key={service.id}
                href={service.link}
                className="group p-6 rounded-2xl glass hover-glow hover:glow-purple transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
