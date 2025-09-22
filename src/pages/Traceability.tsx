import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { QrCode, Search, Package, Truck, Store, User } from "lucide-react";

const Traceability = () => {
  const traceabilityData = [
    {
      qrCode: "QR001234567",
      product: "Organic Beef - Premium Cut",
      status: "In Transit",
      currentLocation: "Distribution Center A",
      destination: "Retail Store B",
      lastScan: "2 hours ago",
      progress: 75
    },
    {
      qrCode: "QR001234568", 
      product: "Fresh Milk - Grade A",
      status: "Delivered",
      currentLocation: "Retail Store C",
      destination: "Consumer Purchase",
      lastScan: "1 day ago",
      progress: 100
    },
    {
      qrCode: "QR001234569",
      product: "Grass-Fed Beef - Steaks",
      status: "Processing",
      currentLocation: "Processing Facility",
      destination: "Distribution Center B",
      lastScan: "4 hours ago", 
      progress: 45
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Delivered":
        return <Badge className="bg-success text-success-foreground">Delivered</Badge>;
      case "In Transit":
        return <Badge className="bg-info text-info-foreground">In Transit</Badge>;
      case "Processing":
        return <Badge className="bg-warning text-warning-foreground">Processing</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProgressIcon = (progress: number) => {
    if (progress <= 25) return <Package className="w-4 h-4" />;
    if (progress <= 75) return <Truck className="w-4 h-4" />;
    if (progress < 100) return <Store className="w-4 h-4" />;
    return <User className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Product Traceability</h1>
            <p className="text-muted-foreground">Track products from farm to consumer using QR codes</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <QrCode className="w-4 h-4 mr-2" />
            Generate QR Code
          </Button>
        </div>

        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle>QR Code Scanner & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter QR code or product ID..."
                  className="text-lg"
                />
              </div>
              <Button>
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <QrCode className="w-4 h-4 mr-2" />
                Scan QR
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {traceabilityData.map((item) => (
            <Card key={item.qrCode} className="shadow-card hover:shadow-elevated transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{item.product}</CardTitle>
                    <p className="text-sm text-muted-foreground">QR: {item.qrCode}</p>
                  </div>
                  {getStatusBadge(item.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Location</p>
                    <p className="font-semibold">{item.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Destination</p>
                    <p className="font-semibold">{item.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Scan</p>
                    <p className="font-semibold">{item.lastScan}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Journey Progress</span>
                    <span className="text-sm font-medium">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full transition-all duration-300 flex items-center justify-end pr-1"
                      style={{ width: `${item.progress}%` }}
                    >
                      <div className="text-primary-foreground">
                        {getProgressIcon(item.progress)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" size="sm">
                    View Full Journey
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traceability;