import { Badge } from "@/components/ui/badge";

interface AlertBadgeProps {
  severity: "high" | "medium" | "low";
  children: React.ReactNode;
}

const AlertBadge = ({ severity, children }: AlertBadgeProps) => {
  const getSeverityStyles = () => {
    switch (severity) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-info text-info-foreground";
      case "low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Badge className={`${getSeverityStyles()} font-medium px-2 py-1`}>
      {children}
    </Badge>
  );
};

export default AlertBadge;