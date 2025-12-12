import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import vpsData from "@/config/vps.json";

const VPS = () => {
  const [activeCategory, setActiveCategory] = useState(vpsData.categories[0].id);
  const currentCategory = vpsData.categories.find(c => c.id === activeCategory) || vpsData.categories[0];

  return (
    <PageLayout>
      <PageHero
        title={vpsData.title}
        subtitle={vpsData.subtitle}
        description={vpsData.description}
      />

      {/* Category Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {vpsData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-primary text-primary-foreground glow-purple"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Description */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">{currentCategory.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {currentCategory.features.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col animate-fade-in ${
                  plan.popular
                    ? "glow-border glow-purple bg-card"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                <h3 className="font-display text-lg font-bold mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-display font-bold text-gradient">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <div className="space-y-2 mb-6 flex-grow">
                  {Object.entries(plan.specs).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                {(plan as any).useCase && (
                  <p className="text-xs text-muted-foreground mb-4 p-3 rounded-lg bg-muted/50">
                    {(plan as any).useCase}
                  </p>
                )}

                <Button
                  variant={plan.popular ? "glow" : "outline"}
                  className="w-full mt-auto"
                  asChild
                >
                  <a href={`${currentCategory.orderBaseUrl}/${plan.id}`} target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VPS;
