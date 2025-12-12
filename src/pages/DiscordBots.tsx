import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import PlanCard from "@/components/PlanCard";
import discordData from "@/config/discord.json";

type Currency = "usd" | "inr" | "eur";

const currencyLabels: Record<Currency, string> = {
  usd: "USD ($)",
  inr: "INR (₹)",
  eur: "EUR (€)",
};

const DiscordBots = () => {
  const [currency, setCurrency] = useState<Currency>("inr");

  return (
    <PageLayout>
      <PageHero
        title={discordData.title}
        subtitle={discordData.subtitle}
        description={discordData.description}
        features={discordData.features}
      />

      {/* Currency Selector */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
            {(Object.keys(currencyLabels) as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currency === curr
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {currencyLabels[curr]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {discordData.plans.map((plan, index) => (
              <div
                key={plan.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PlanCard
                  name={plan.name}
                  price={plan.price}
                  specs={plan.specs}
                  features={plan.features}
                  popular={plan.popular}
                  orderUrl={`${discordData.orderBaseUrl}/${plan.id}`}
                  currency={currency}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DiscordBots;
