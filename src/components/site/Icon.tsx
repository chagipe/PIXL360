import * as Iconly from "react-iconly";

export function MaterialIcon({ name, className = "" }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

// Map Google Material Icon names to React Iconly component names
const iconlyMap: Record<string, string> = {
  // Common navigation
  "arrow_forward": "ArrowRight",
  "check_circle": "TickSquare",
  
  // Home Services
  "precision_manufacturing": "Work",
  "movie_filter": "Video",
  "movie": "Video",
  "agriculture": "Discovery",
  "analytics": "Graph",
  
  // Features
  "sensors": "Activity",
  "shield": "Shield",
  "cell_tower": "Send",
  
  // Services page
  "biotech": "Scan",
  "map": "Location",
  
  // Dock Nav
  "home": "Home",
  "services": "Category",
  "plus": "Plus",
  "portfolio": "Image",
  "contact": "Calling"
};

export function IconlyIcon({ 
  name, 
  size = "medium", 
  set = "light", 
  primaryColor = "currentColor", 
  className = "" 
}: {
  name: string;
  size?: "small" | "medium" | "large" | number;
  set?: "bold" | "bulk" | "light" | "broken" | "two-tone" | "curved";
  primaryColor?: string;
  className?: string;
}) {
  const iconlyName = iconlyMap[name] || name;
  const IconComponent = (Iconly as any)[iconlyName];

  if (!IconComponent) {
    // Fallback to Google Material Symbols if not found in Iconly
    return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
  }

  // Convert size keyword to react-iconly size prop values
  let resolvedSize: string | number = size;
  if (size === "small") resolvedSize = 18;
  if (size === "medium") resolvedSize = 24;
  if (size === "large") resolvedSize = 32;

  return (
    <span className={`iconly-wrapper ${className}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <IconComponent size={resolvedSize} set={set} primaryColor={primaryColor} />
    </span>
  );
}
