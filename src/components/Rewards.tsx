import { Gift, Users, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import rewards from "@/config/rewards.json";

const Rewards = () => {
  return (
    <section className="py-24 relative bg-muted/30" id="rewards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Free Plan</span> & Rewards
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start for free or earn rewards by inviting your friends!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Plan Card */}
          <div className="p-8 rounded-2xl glass glow-border animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {rewards.freePlan.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {rewards.freePlan.description}
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-3">INCLUDED</h4>
                <ul className="space-y-2">
                  {rewards.freePlan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-warning mb-3">LIMITATIONS</h4>
                <ul className="space-y-2">
                  {rewards.freePlan.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button variant="glow" className="w-full" size="lg" asChild>
              <a href={rewards.freePlan.buttonLink} target="_blank" rel="noopener noreferrer">
                {rewards.freePlan.buttonText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          {/* Invite Rewards Card */}
          <div className="p-8 rounded-2xl bg-card border border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {rewards.inviteRewards.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {rewards.inviteRewards.description}
                </p>
              </div>
            </div>

            {/* Reward Tiers */}
            <div className="space-y-3 mb-6">
              {rewards.inviteRewards.tiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {tier.invites}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{tier.reward}</div>
                      <div className="text-xs text-muted-foreground">{tier.description}</div>
                    </div>
                  </div>
                  <Star className="w-4 h-4 text-primary" />
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm text-muted-foreground mb-3">HOW IT WORKS</h4>
              <div className="grid grid-cols-2 gap-2">
                {rewards.inviteRewards.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-full" size="lg" asChild>
              <a href={rewards.inviteRewards.buttonLink} target="_blank" rel="noopener noreferrer">
                {rewards.inviteRewards.buttonText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
