import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatsCard from "./StatsCard";
import MRLProgressBar from "./MRLProgressBar";
import AlertBadge from "./AlertBadge";
import { 
  TrendingUp, 
  Activity, 
  QrCode, 
  FileText, 
  AlertTriangle,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const statsData = [
    { title: "Total Livestock", value: "1,247", change: "+12%", icon: TrendingUp, trend: "up" as const },
    { title: "Active Monitoring", value: "1,198", change: "+5%", icon: Activity, trend: "up" as const },
    { title: "QR Codes Generated", value: "2,847", change: "+8%", icon: QrCode, trend: "up" as const },
    { title: "Compliance Reports", value: "156", change: "+15%", icon: FileText, trend: "up" as const },
  ];

  const alerts = [
    { severity: "high" as const, message: "High AMU detected in Cattle Group A", time: "2 hours ago" },
    { severity: "medium" as const, message: "MRL approaching limit for Batch B204", time: "4 hours ago" },
    { severity: "low" as const, message: "QR code scan required for new livestock", time: "1 day ago" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Farm Dashboard</h2>
            <p className="text-muted-foreground">Welcome back! Here's your farm overview.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Generate Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <CardTitle className="text-lg">Active Alerts</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="space-y-1">
                    <AlertBadge severity={alert.severity}>
                      {alert.severity}
                    </AlertBadge>
                    <p className="text-sm text-foreground font-medium">{alert.message}</p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {alert.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* MRL/AMU Monitoring */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Maximum Residue Limits (MRL) Status</CardTitle>
              <p className="text-sm text-muted-foreground">Current status of chemical residues in livestock products</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <MRLProgressBar label="Antibiotics" percentage={75} color="green" />
              <MRLProgressBar label="Pesticides" percentage={45} color="green" />
              <MRLProgressBar label="Growth Hormones" percentage={32} color="blue" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;