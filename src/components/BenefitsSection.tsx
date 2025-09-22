import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, BarChart3, Globe, QrCode } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Farmers",
      description: "Higher profits via premium markets and early alerts",
    },
    {
      icon: Shield,
      title: "Consumers", 
      description: "Safe food with farm-to-fork transparency and trust",
    },
    {
      icon: BarChart3,
      title: "Government",
      description: "Data-driven policy and regulatory compliance",
    },
    {
      icon: Globe,
      title: "Environment",
      description: "Reduced chemical usage and sustainable practices",
    },
  ];

  const solutions = [
    {
      icon: "QR",
      title: "QR Code Traceability",
      description: "Track products from farm to consumer with secure blockchain technology",
    },
    {
      icon: "Shield",
      title: "MRL & AMU Monitoring", 
      description: "Real-time monitoring of Maximum Residue Limits and Antimicrobial Usage",
    },
    {
      icon: "Analytics",
      title: "Advanced Analytics",
      description: "AI-powered insights and predictive alerts for better farm management",
    },
    {
      icon: "Globe",
      title: "Global Compliance",
      description: "Meet international food safety standards and regulatory requirements",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Problem & Solution Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Building a Safer, More Transparent Food System
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our solution benefits every stakeholder in the food supply chain
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium">
                The Problem
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Food Safety Challenges</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Low farmer awareness with local language barriers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Data accuracy and connectivity issues in rural areas</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Lack of enforcement and laboratory integration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">No transparent tracking from farm to consumer</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                Our Solution
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Comprehensive Digital Platform</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Cloud, mobile, and QR code integration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Blockchain ensures data integrity and trust</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">AI-powered predictive analytics</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Real-time monitoring and compliance reporting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Solution Section */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Revolutionary Farm-to-Fork Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining cloud technology, mobile apps, QR codes, and blockchain to ensure food safety and transparency across the entire supply chain
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-200">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  {solution.icon === "QR" && <QrCode className="w-8 h-8 text-primary-foreground" />}
                  {solution.icon === "Shield" && <Shield className="w-8 h-8 text-primary-foreground" />}
                  {solution.icon === "Analytics" && <BarChart3 className="w-8 h-8 text-primary-foreground" />}
                  {solution.icon === "Globe" && <Globe className="w-8 h-8 text-primary-foreground" />}
                </div>
                <h3 className="text-lg font-bold text-foreground">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;