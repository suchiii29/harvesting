import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import AuthModal from "./auth/AuthModal";
import { useState } from "react";

const Navigation = () => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DH</span>
            </div>
            <span className="text-2xl font-bold text-foreground">DataHarvest</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              {t('dashboard')}
            </Link>
            <Link to="/livestock" className="text-muted-foreground hover:text-primary transition-colors">
              {t('livestock')}
            </Link>
            <Link to="/traceability" className="text-muted-foreground hover:text-primary transition-colors">
              {t('traceability')}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setAuthModalOpen(true)}>
              {t('signIn')}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setAuthModalOpen(true)}>
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </div>
      
      <AuthModal 
        open={authModalOpen} 
        onOpenChange={setAuthModalOpen} 
      />
    </header>
  );
};

export default Navigation;