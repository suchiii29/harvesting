interface MRLProgressBarProps {
  label: string;
  percentage: number;
  color: "green" | "blue" | "yellow";
}

const MRLProgressBar = ({ label, percentage, color }: MRLProgressBarProps) => {
  const getColorClasses = () => {
    switch (color) {
      case "green":
        return "bg-success";
      case "blue": 
        return "bg-info";
      case "yellow":
        return "bg-warning";
      default:
        return "bg-success";
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{percentage}% of limit</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${getColorClasses()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MRLProgressBar;