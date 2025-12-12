import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "operational" | "degraded" | "outage" | "maintenance";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const statusConfig = {
  operational: {
    color: "bg-success",
    label: "Operational",
    pulse: true,
  },
  degraded: {
    color: "bg-warning",
    label: "Degraded",
    pulse: true,
  },
  outage: {
    color: "bg-destructive",
    label: "Outage",
    pulse: true,
  },
  maintenance: {
    color: "bg-secondary",
    label: "Maintenance",
    pulse: false,
  },
};

const sizeConfig = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

const StatusIndicator = ({
  status,
  size = "md",
  showLabel = false,
}: StatusIndicatorProps) => {
  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full",
            config.color,
            sizeConfig[size]
          )}
        />
        {config.pulse && (
          <div
            className={cn(
              "absolute inset-0 rounded-full animate-ping opacity-75",
              config.color
            )}
          />
        )}
      </div>
      {showLabel && (
        <span className="text-sm text-muted-foreground">{config.label}</span>
      )}
    </div>
  );
};

export default StatusIndicator;
