import { Activity, Clock, AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import StatusIndicator from "@/components/StatusIndicator";
import statusData from "@/config/status.json";

const getOverallStatusInfo = (status: string) => {
  switch (status) {
    case "operational":
      return {
        icon: CheckCircle2,
        label: "All Systems Operational",
        color: "text-success",
        bgColor: "bg-success/10",
      };
    case "degraded":
      return {
        icon: AlertTriangle,
        label: "Partial System Outage",
        color: "text-warning",
        bgColor: "bg-warning/10",
      };
    case "outage":
      return {
        icon: AlertTriangle,
        label: "Major System Outage",
        color: "text-destructive",
        bgColor: "bg-destructive/10",
      };
    default:
      return {
        icon: Wrench,
        label: "Scheduled Maintenance",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
      };
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Status = () => {
  const overallInfo = getOverallStatusInfo(statusData.overallStatus);
  const OverallIcon = overallInfo.icon;

  return (
    <PageLayout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              System <span className="text-gradient">Status</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time status of all ArixNode services
            </p>
          </div>

          {/* Overall Status */}
          <div
            className={`p-6 rounded-2xl ${overallInfo.bgColor} border border-border mb-8 animate-fade-in`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <OverallIcon className={`w-8 h-8 ${overallInfo.color}`} />
                <div>
                  <h2 className={`font-display text-xl font-bold ${overallInfo.color}`}>
                    {overallInfo.label}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {formatDate(statusData.lastUpdated)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Auto-refreshes every 60 seconds
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {statusData.services.map((service, index) => (
              <div
                key={service.id}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <StatusIndicator
                    status={service.status as "operational" | "degraded" | "outage" | "maintenance"}
                    showLabel
                  />
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Uptime: <span className="text-foreground font-medium">{service.uptime}%</span>
                    </span>
                  </div>
                  {service.responseTime > 0 && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Response: <span className="text-foreground font-medium">{service.responseTime}ms</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Incidents */}
          {statusData.incidents.length > 0 && (
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-display text-2xl font-bold mb-6">
                Active Incidents
              </h2>

              <div className="space-y-4">
                {statusData.incidents.map((incident: any) => (
                  <div
                    key={incident.id}
                    className="p-5 rounded-xl bg-card border border-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {incident.severity === "maintenance" ? (
                          <Wrench className="w-5 h-5 text-secondary" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-warning" />
                        )}
                        <h3 className="font-semibold">{incident.title}</h3>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          incident.status === "in_progress"
                            ? "bg-warning/10 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {incident.status === "in_progress" ? "In Progress" : incident.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {incident.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Started: {formatDate(incident.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="mt-12 p-6 rounded-xl bg-muted/30 border border-border">
            <h3 className="font-display font-bold mb-4">Status Legend</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <StatusIndicator status="operational" />
                <span className="text-sm text-muted-foreground">Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIndicator status="degraded" />
                <span className="text-sm text-muted-foreground">Degraded</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIndicator status="outage" />
                <span className="text-sm text-muted-foreground">Outage</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIndicator status="maintenance" />
                <span className="text-sm text-muted-foreground">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Status;
