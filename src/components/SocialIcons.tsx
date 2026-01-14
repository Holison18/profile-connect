import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";

interface SocialIconsProps {
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

const SocialIcons = ({ socials }: SocialIconsProps) => {
  const socialLinks = [
    { key: "linkedin", url: socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { key: "twitter", url: socials.twitter, Icon: Twitter, label: "Twitter" }, // X icon usually replaces Twitter, but using Twitter icon for now or standard Lucide
    { key: "instagram", url: socials.instagram, Icon: Instagram, label: "Instagram" },
    { key: "facebook", url: socials.facebook, Icon: Facebook, label: "Facebook" },
    { key: "youtube", url: socials.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((social) => social.url);

  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map(({ key, url, Icon, label }) => (
        <motion.a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          aria-label={label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-6 h-6" strokeWidth={2} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
