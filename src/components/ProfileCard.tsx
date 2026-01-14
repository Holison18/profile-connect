import { UserPlus, Mail, Globe } from "lucide-react";
import type { Employee } from "@/data/employees";
import { downloadVCard } from "@/utils/vcard";
import SocialIcons from "./SocialIcons";

interface ProfileCardProps {
  employee: Employee;
}

const ProfileCard = ({ employee }: ProfileCardProps) => {
  const handleSaveContact = () => {
    downloadVCard(employee);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${employee.email}?subject=Hello ${employee.firstName}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Section */}
      <header className="header-gradient relative pt-8 pb-24 px-6">
        {/* Company Logo & Tagline */}
        <div className="text-center animate-fade-in">
          <h1 className="text-primary-foreground text-3xl font-extrabold tracking-tight mb-2">
            {employee.company.name}
          </h1>
          <p className="text-primary-foreground/80 text-xs font-medium tracking-widest uppercase">
            {employee.company.tagline}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 -mt-16 px-4 pb-8">
        <div className="max-w-md mx-auto">
          {/* Profile Image - Overlapping */}
          <div className="flex justify-center mb-6 animate-slide-up">
            <div className="relative">
              <img
                src={employee.photoUrl}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="w-32 h-32 rounded-full object-cover profile-image-ring"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse-soft" />
              </div>
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="bg-card rounded-2xl card-shadow p-6 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Name & Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-1">
                {employee.firstName} {employee.lastName}
              </h2>
              <p className="text-muted-foreground font-medium mb-1">
                {employee.title}
              </p>
              <p className="text-muted-foreground/70 text-sm">
                {employee.department}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-6 text-center">
              <p className="text-muted-foreground text-sm">
                {employee.email}
              </p>
              <p className="text-muted-foreground text-sm">
                {employee.phone}
              </p>
            </div>

            {/* Social Icons */}
            <div className="py-4 border-y border-border">
              <SocialIcons socials={employee.socials} />
            </div>

            {/* Website Link */}
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <Globe className="w-4 h-4" />
              <a
                href={`https://${employee.company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors"
              >
                {employee.company.website}
              </a>
            </div>
          </div>

          {/* Action Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <button
              onClick={handleSendEmail}
              className="btn-primary-card w-full"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-muted-foreground/60 text-xs">
          Powered by{" "}
          <a
            href={`https://${employee.company.website}`}
            className="hover:text-primary transition-colors"
          >
            {employee.company.name}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ProfileCard;
