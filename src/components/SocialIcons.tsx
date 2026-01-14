import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

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
    { key: "twitter", url: socials.twitter, Icon: Twitter, label: "Twitter" },
    { key: "instagram", url: socials.instagram, Icon: Instagram, label: "Instagram" },
    { key: "facebook", url: socials.facebook, Icon: Facebook, label: "Facebook" },
    { key: "youtube", url: socials.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((social) => social.url);

  return (
    <div className="flex items-center justify-center gap-5">
      {socialLinks.map(({ key, url, Icon, label }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon p-2 rounded-full hover:bg-accent transition-colors"
          aria-label={label}
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
