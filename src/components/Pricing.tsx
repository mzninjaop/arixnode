import { useState } from "react";
import { Gamepad2, Bot, Server, Globe } from "lucide-react";
import PricingCard from "./PricingCard";
import plans from "@/config/plans.json";

type ServiceType = "minecraft" | "discord" | "vps" | "web";

const tabs: { id: ServiceType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "minecraft", label: "Minecraft", icon: Gamepad2 },
  { id: "discord", label: "Discord Bot", icon: Bot },
  { id: "vps", label: "VPS", icon: Server },
  { id: "web", label: "Web Hosting", icon: Globe },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>("minecraft");

  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-primary text-primary-foreground glow-purple"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans[activeTab].map((plan, index) => (
            <div
              key={plan.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PricingCard
                name={plan.name}
                description={plan.description}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                popular={plan.popular}
                buttonText={plan.buttonText}
                buttonLink={plan.buttonLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
