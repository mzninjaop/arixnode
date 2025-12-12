import { Gift, Users, Check, AlertTriangle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import freeHostingData from "@/config/freehosting.json";

const FreeHosting = () => {
  return (
    <PageLayout>
      <PageHero
        title={freeHostingData.title}
        subtitle={freeHostingData.subtitle}
        description={freeHostingData.description}
        features={freeHostingData.features.slice(0, 6)}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Invite Rewards Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Invite Rewards System</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Invite Friends, <span className="text-gradient">Get Free Hosting</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Invite your friends to our Discord server and unlock free hosting resources!
                </p>
              </div>

              {/* Rewards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {freeHostingData.inviteRewards.map((tier, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">
                          {tier.invites}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Invites</p>
                        <p className="font-display font-bold">Tier {index + 1}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                        <span className="text-sm text-muted-foreground">RAM</span>
                        <span className="font-semibold text-primary">{tier.ram}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                        <span className="text-sm text-muted-foreground">CPU</span>
                        <span className="font-semibold text-primary">{tier.cpu}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                        <span className="text-sm text-muted-foreground">Disk</span>
                        <span className="font-semibold text-primary">{tier.disk}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Badge */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Location: <span className="font-semibold text-foreground">{freeHostingData.location}</span>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="hero" size="xl" asChild>
                  <a href={freeHostingData.claimUrl} target="_blank" rel="noopener noreferrer">
                    <Users className="w-5 h-5 mr-2" />
                    Join Discord to Claim
                  </a>
                </Button>
              </div>
            </div>

            {/* Rules Section */}
            <div className="p-8 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-warning" />
                <h3 className="font-display text-xl font-bold">Important Rules</h3>
              </div>
              <ul className="space-y-3">
                {freeHostingData.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-warning">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FreeHosting;
