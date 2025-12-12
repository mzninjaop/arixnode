import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingCard = ({
  name,
  description,
  price,
  period,
  features,
  popular,
  buttonText,
  buttonLink,
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
        popular
          ? "glow-border glow-purple bg-card"
          : "bg-card border border-border hover:border-primary/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-bold text-gradient">
            ${price}
          </span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "glow" : "outline"}
        className="w-full"
        asChild
      >
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </div>
  );
};

export default PricingCard;
