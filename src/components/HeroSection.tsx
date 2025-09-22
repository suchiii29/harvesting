import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm-image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground leading-tight">
                <span className="text-primary">DataHarvest</span>
                <br />
                Farm Management Portal
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Digital platform for monitoring Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in livestock with blockchain-powered traceability
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Get Started
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Blockchain Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">AI Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Mobile Ready</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage}
                alt="Farmers using DataHarvest platform in the field with livestock in background" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;