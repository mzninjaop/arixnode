import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import PlanCard from "@/components/PlanCard";
import minecraftData from "@/config/minecraft.json";

type Currency = "usd" | "inr" | "eur";

const currencyLabels: Record<Currency, string> = {
  usd: "USD ($)",
  inr: "INR (₹)",
  eur: "EUR (€)",
};

const Minecraft = () => {
  const [currency, setCurrency] = useState<Currency>("inr");

  return (
    <PageLayout>
      <PageHero
        title={minecraftData.title}
        subtitle={minecraftData.subtitle}
        description={minecraftData.description}
        features={minecraftData.features}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {minecraftData.plans.map((plan, index) => (
              <div
                key={plan.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <PlanCard
                  name={plan.name}
                  price={plan.price}
                  specs={plan.specs}
                  features={plan.features}
                  popular={plan.popular}
                  orderUrl={`${minecraftData.orderBaseUrl}/${plan.id}`}
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

export default Minecraft;
