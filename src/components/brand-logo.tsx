import type { SimpleIcon } from "simple-icons";
import {
  siApple,
  siGoogleplay,
  siMastercard,
  siPlaystation,
  siRoblox,
  siSpotify,
  siSteam,
  siVisa,
} from "simple-icons";
import { Link2, Phone, Wifi } from "lucide-react";

const iconMap: Record<string, SimpleIcon> = {
  apple: siApple,
  googleplay: siGoogleplay,
  mastercard: siMastercard,
  playstation: siPlaystation,
  roblox: siRoblox,
  spotify: siSpotify,
  steam: siSteam,
  visa: siVisa,
};

const wordmarks: Record<string, string> = {
  amazon: "amazon",
  nintendo: "Nintendo",
  xbox: "Xbox",
};

type BrandLogoProps = {
  logo: string;
  label: string;
  className?: string;
};

export function BrandLogo({ logo, label, className = "" }: BrandLogoProps) {
  const icon = iconMap[logo];

  if (icon) {
    return (
      <svg
        aria-label={`${label} logo`}
        role="img"
        viewBox="0 0 24 24"
        className={className}
      >
        <path fill="currentColor" d={icon.path} />
      </svg>
    );
  }

  if (logo === "airtime") {
    return <Phone aria-label={`${label} icon`} className={className} />;
  }

  if (logo === "data") {
    return <Wifi aria-label={`${label} icon`} className={className} />;
  }

  if (logo === "perq") {
    return <Link2 aria-label={`${label} icon`} className={className} />;
  }

  return (
    <span
      aria-label={`${label} wordmark`}
      className={`inline-flex items-center font-semibold tracking-normal ${className}`}
    >
      {wordmarks[logo] ?? label}
    </span>
  );
}
