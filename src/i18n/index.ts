import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      dashboard: 'Dashboard',
      livestock: 'Livestock',
      traceability: 'Traceability',
      signIn: 'Sign In',
      getStarted: 'Get Started',
      
      // Hero Section
      heroTitle: 'DataHarvest Farm Management Portal',
      heroSubtitle: 'Digital platform for monitoring Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in livestock with blockchain-powered traceability',
      watchDemo: 'Watch Demo',
      blockchainSecure: 'Blockchain Secure',
      aiAnalytics: 'AI Analytics',
      mobileReady: 'Mobile Ready',
      
      // Dashboard
      farmDashboard: 'Farm Dashboard',
      welcomeBack: 'Welcome back! Here\'s your farm overview.',
      generateReport: 'Generate Report',
      totalLivestock: 'Total Livestock',
      activeMonitoring: 'Active Monitoring',
      qrCodesGenerated: 'QR Codes Generated',
      complianceReports: 'Compliance Reports',
      activeAlerts: 'Active Alerts',
      mrlStatus: 'Maximum Residue Limits (MRL) Status',
      mrlStatusDesc: 'Current status of chemical residues in livestock products',
      antibiotics: 'Antibiotics',
      pesticides: 'Pesticides',
      growthHormones: 'Growth Hormones',
      
      // Livestock
      livestockManagement: 'Livestock Management',
      livestockDesc: 'Monitor and manage your livestock groups',
      addLivestock: 'Add Livestock',
      filter: 'Filter',
      count: 'Count',
      location: 'Location',
      lastChecked: 'Last Checked',
      viewDetails: 'View Details',
      active: 'Active',
      monitoring: 'Monitoring',
      
      // Traceability
      productTraceability: 'Product Traceability',
      traceabilityDesc: 'Track products from farm to consumer using QR codes',
      generateQrCode: 'Generate QR Code',
      qrScanner: 'QR Code Scanner & Search',
      search: 'Search',
      scanQr: 'Scan QR',
      currentLocation: 'Current Location',
      destination: 'Destination',
      lastScan: 'Last Scan',
      journeyProgress: 'Journey Progress',
      viewFullJourney: 'View Full Journey',
      delivered: 'Delivered',
      inTransit: 'In Transit',
      processing: 'Processing',
      
      // Benefits
      buildingSaferFood: 'Building a Safer, More Transparent Food System',
      benefitsDesc: 'Our solution benefits every stakeholder in the food supply chain',
      farmers: 'Farmers',
      farmersDesc: 'Higher profits via premium markets and early alerts',
      consumers: 'Consumers',
      consumersDesc: 'Safe food with farm-to-fork transparency and trust',
      government: 'Government',
      governmentDesc: 'Data-driven policy and regulatory compliance',
      environment: 'Environment',
      environmentDesc: 'Reduced chemical usage and sustainable practices',
      
      // Status and time
      high: 'high',
      medium: 'medium',
      low: 'low',
      hoursAgo: 'hours ago',
      dayAgo: 'day ago',
      minAgo: 'min ago',
      ofLimit: 'of limit'
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      dashboard: 'डैशबोर्ड',
      livestock: 'पशुधन',
      traceability: 'ट्रेसेबिलिटी',
      signIn: 'साइन इन',
      getStarted: 'शुरू करें',
      
      // Hero Section
      heroTitle: 'डेटाहार्वेस्ट फार्म प्रबंधन पोर्टल',
      heroSubtitle: 'ब्लॉकचेन-संचालित ट्रेसेबिलिटी के साथ पशुधन में अधिकतम अवशेष सीमा (एमआरएल) और एंटीमाइक्रोबियल उपयोग (एएमयू) की निगरानी के लिए डिजिटल प्लेटफॉर्म',
      watchDemo: 'डेमो देखें',
      blockchainSecure: 'ब्लॉकचेन सुरक्षित',
      aiAnalytics: 'एआई एनालिटिक्स',
      mobileReady: 'मोबाइल तैयार',
      
      // Dashboard
      farmDashboard: 'फार्म डैशबोर्ड',
      welcomeBack: 'वापस स्वागत है! यहाँ आपका फार्म अवलोकन है।',
      generateReport: 'रिपोर्ट जेनरेट करें',
      totalLivestock: 'कुल पशुधन',
      activeMonitoring: 'सक्रिय निगरानी',
      qrCodesGenerated: 'जेनरेट किए गए QR कोड',
      complianceReports: 'अनुपालन रिपोर्ट',
      activeAlerts: 'सक्रिय अलर्ट',
      mrlStatus: 'अधिकतम अवशेष सीमा (एमआरएल) स्थिति',
      mrlStatusDesc: 'पशुधन उत्पादों में रासायनिक अवशेषों की वर्तमान स्थिति',
      antibiotics: 'एंटीबायोटिक्स',
      pesticides: 'कीटनाशक',
      growthHormones: 'ग्रोथ हार्मोन',
      
      // Benefits
      farmers: 'किसान',
      farmersDesc: 'प्रीमियम बाजारों और प्रारंभिक अलर्ट के माध्यम से अधिक लाभ',
      consumers: 'उपभोक्ता',
      consumersDesc: 'फार्म-टू-फोर्क पारदर्शिता और विश्वास के साथ सुरक्षित भोजन',
      government: 'सरकार',
      governmentDesc: 'डेटा-संचालित नीति और नियामक अनुपालन',
      environment: 'पर्यावरण',
      environmentDesc: 'रासायनिक उपयोग में कमी और टिकाऊ प्रथाएं',
      
      high: 'उच्च',
      medium: 'मध्यम',
      low: 'निम्न',
      hoursAgo: 'घंटे पहले',
      dayAgo: 'दिन पहले',
      minAgo: 'मिनट पहले',
      ofLimit: 'सीमा का'
    }
  },
  kn: {
    translation: {
      // Navigation
      home: 'ಹೋಮ್',
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      livestock: 'ಜಾನುವಾರು',
      traceability: 'ಟ್ರೇಸೆಬಿಲಿಟಿ',
      signIn: 'ಸೈನ್ ಇನ್',
      getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
      
      // Hero Section
      heroTitle: 'ಡೇಟಾಹಾರ್ವೆಸ್ಟ್ ಫಾರ್ಮ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಪೋರ್ಟಲ್',
      heroSubtitle: 'ಬ್ಲಾಕ್‌ಚೈನ್-ಚಾಲಿತ ಟ್ರೇಸೆಬಿಲಿಟಿಯೊಂದಿಗೆ ಜಾನುವಾರುಗಳಲ್ಲಿ ಗರಿಷ್ಠ ಶೇಷ ಮಿತಿಗಳು (ಎಂಆರ್‌ಎಲ್) ಮತ್ತು ಆಂಟಿಮೈಕ್ರೋಬಿಯಲ್ ಬಳಕೆ (ಎಎಂಯು) ಮೇಲ್ವಿಚಾರಣೆಗೆ ಡಿಜಿಟಲ್ ವೇದಿಕೆ',
      watchDemo: 'ಡೆಮೋ ನೋಡಿ',
      blockchainSecure: 'ಬ್ಲಾಕ್‌ಚೈನ್ ಸುರಕ್ಷಿತ',
      aiAnalytics: 'ಎಐ ಅನಾಲಿಟಿಕ್ಸ್',
      mobileReady: 'ಮೊಬೈಲ್ ಸಿದ್ಧ',
      
      // Dashboard
      farmDashboard: 'ಫಾರ್ಮ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      welcomeBack: 'ಮತ್ತೆ ಸ್ವಾಗತ! ಇಲ್ಲಿ ನಿಮ್ಮ ಫಾರ್ಮ್ ಅವಲೋಕನ.',
      generateReport: 'ವರದಿ ಜನರೇಟ್ ಮಾಡಿ',
      totalLivestock: 'ಒಟ್ಟು ಜಾನುವಾರು',
      activeMonitoring: 'ಸಕ್ರಿಯ ಮೇಲ್ವಿಚಾರಣೆ',
      qrCodesGenerated: 'ಉತ್ಪಾದಿಸಿದ ಕ್ಯೂಆರ್ ಕೋಡ್‌ಗಳು',
      complianceReports: 'ಅನುಸರಣೆ ವರದಿಗಳು',
      activeAlerts: 'ಸಕ್ರಿಯ ಎಚ್ಚರಿಕೆಗಳು',
      mrlStatus: 'ಗರಿಷ್ಠ ಶೇಷ ಮಿತಿಗಳು (ಎಂಆರ್‌ಎಲ್) ಸ್ಥಿತಿ',
      mrlStatusDesc: 'ಜಾನುವಾರು ಉತ್ಪನ್ನಗಳಲ್ಲಿ ರಾಸಾಯನಿಕ ಶೇಷಗಳ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ',
      antibiotics: 'ಆಂಟಿಬಯಾಟಿಕ್‌ಗಳು',
      pesticides: 'ಕೀಟನಾಶಕಗಳು',
      growthHormones: 'ಬೆಳವಣಿಗೆ ಹಾರ್ಮೋನುಗಳು',
      
      // Benefits
      farmers: 'ರೈತರು',
      farmersDesc: 'ಪ್ರೀಮಿಯಂ ಮಾರುಕಟ್ಟೆಗಳು ಮತ್ತು ಆರಂಭಿಕ ಎಚ್ಚರಿಕೆಗಳ ಮೂಲಕ ಹೆಚ್ಚಿನ ಲಾಭ',
      consumers: 'ಗ್ರಾಹಕರು',
      consumersDesc: 'ಫಾರ್ಮ್-ಟು-ಫೋರ್ಕ್ ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆಯೊಂದಿಗೆ ಸುರಕ್ಷಿತ ಆಹಾರ',
      government: 'ಸರ್ಕಾರ',
      governmentDesc: 'ದತ್ತಾಂಶ-ಚಾಲಿತ ನೀತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ಅನುಸರಣೆ',
      environment: 'ಪರಿಸರ',
      environmentDesc: 'ರಾಸಾಯನಿಕ ಬಳಕೆ ಕಡಿಮೆ ಮತ್ತು ಸಮರ್ಥನೀಯ ಅಭ್ಯಾಸಗಳು',
      
      high: 'ಹೆಚ್ಚು',
      medium: 'ಮಧ್ಯಮ',
      low: 'ಕಡಿಮೆ',
      hoursAgo: 'ಗಂಟೆಗಳ ಹಿಂದೆ',
      dayAgo: 'ದಿನ ಹಿಂದೆ',
      minAgo: 'ನಿಮಿಷಗಳ ಹಿಂದೆ',
      ofLimit: 'ಮಿತಿಯ'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;