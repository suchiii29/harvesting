import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Clock, Filter } from "lucide-react";

const Livestock = () => {
  const livestockData = [
    { id: "LV001", group: "Cattle Group A", count: 45, location: "Field North", status: "Active", lastChecked: "2 hours ago" },
    { id: "LV002", group: "Cattle Group B", count: 38, location: "Field South", status: "Monitoring", lastChecked: "4 hours ago" },
    { id: "LV003", group: "Cattle Group C", count: 52, location: "Field East", status: "Active", lastChecked: "1 hour ago" },
    { id: "LV004", group: "Dairy Herd A", count: 67, location: "Barn Complex", status: "Active", lastChecked: "30 min ago" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "Monitoring":
        return <Badge className="bg-warning text-warning-foreground">Monitoring</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Livestock Management</h1>
            <p className="text-muted-foreground">Monitor and manage your livestock groups</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Add Livestock
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {livestockData.map((livestock) => (
            <Card key={livestock.id} className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{livestock.group}</CardTitle>
                    <p className="text-sm text-muted-foreground">ID: {livestock.id}</p>
                  </div>
                  {getStatusBadge(livestock.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Count</p>
                      <p className="font-semibold">{livestock.count}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{livestock.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Last Checked</p>
                      <p className="font-semibold">{livestock.lastChecked}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Livestock;