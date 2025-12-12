import { Check, Sparkles, Cpu, HardDrive, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanCardProps {
  name: string;
  price: number | { usd: number; inr: number; eur: number };
  specs: Record<string, string>;
  features?: string[];
  popular?: boolean;
  orderUrl: string;
  currency?: "usd" | "inr" | "eur";
}

const PlanCard = ({
  name,
  price,
  specs,
  features = [],
  popular = false,
  orderUrl,
  currency = "usd",
}: PlanCardProps) => {
  const displayPrice = typeof price === "number" 
    ? price 
    : price[currency];
  
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  return (
    <div
      className={`relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        popular
          ? "glow-border glow-purple bg-card"
          : "bg-card border border-border hover:border-primary/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
            <Sparkles className="w-3 h-3" />
            Popular
          </div>
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-display text-xl font-bold">{name}</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-display font-bold text-gradient">
            {currencySymbol}{displayPrice.toFixed(2)}
          </span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-2 mb-6 flex-grow">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-muted-foreground capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </span>
            <span className="font-medium text-foreground ml-auto">{value}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6 pt-4 border-t border-border">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Button
        variant={popular ? "glow" : "outline"}
        className="w-full mt-auto"
        asChild
      >
        <a href={orderUrl} target="_blank" rel="noopener noreferrer">
          Order Now
        </a>
      </Button>
    </div>
  );
};

export default PlanCard;
