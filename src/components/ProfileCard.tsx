import logo from "@/assets/logo.png";
import { Mail } from "lucide-react";
import type { Employee } from "@/data/employees";
import { downloadVCard } from "@/utils/vcard";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20">
      {/* Header Section - Solid Green */}
      <header className="relative pt-12 pb-48 px-6 bg-[#1db978] text-white overflow-visible text-center">
        {/* Texture Pattern - Dot Grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}></div>
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-0">
            <img
              src={logo}
              alt="NCEL Logo"
              className="h-56 w-auto object-contain drop-shadow-sm"
            />
          </div>
          {/* Taglines */}
          <div className="space-y-0.5 mb-2 mt-4">
            {/* Redundant text removed */}
            <h2 className="text-xl font-bold uppercase leading-tight max-w-xs mx-auto drop-shadow-md text-shadow-sm">
              Your Trusted Partner <br /> In Climate Action
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 -mt-48 px-4 pb-12 z-20 flex flex-col items-center">

        {/* Sibling 1: Profile Image (On Top) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="z-40 relative"
        >
          <img
            src={employee.photoUrl}
            alt={`${employee.firstName} ${employee.lastName}`}
            className="w-48 h-48 rounded-full object-cover border-[6px] border-white shadow-md bg-gray-100"
            style={{ objectPosition: employee.imageObjectPosition || 'center' }}
          />
        </motion.div>

        {/* Sibling 2: Content Card (Behind Image) */}
        <div className="max-w-[400px] w-full bg-white rounded-[30px] shadow-xl -mt-[100px] pt-[110px] px-6 pb-12 z-30 relative font-poppins text-center">

          {/* Name & Title */}
          <h2 className="text-[22px] font-montserrat font-bold text-[#1a1a1a] mb-1 leading-tight">
            {employee.firstName} <br /> {employee.lastName}
          </h2>

          <p className="text-[#666666] font-normal text-[16px] leading-snug mb-1">
            {employee.title}
          </p>
          <p className="text-[#999999] text-[13px] mb-5 uppercase tracking-wider">
            ({employee.department || "NCEL"})
          </p>

          {/* Contact Text */}
          <p className="text-[#4a4a4a] mb-5 font-normal text-[14px]">
            Contact: {employee.phone}
          </p>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-gray-300 mx-auto rounded-full mb-6"></div>

          {/* Social Icons */}
          <div className="mb-6 flex justify-center">
            <SocialIcons socials={employee.socials} />
          </div>

          {/* Website Link */}
          <div className="mb-8">
            <a
              href={`https://${employee.company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-primary transition-colors text-[13px]"
            >
              {employee.company.website}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 px-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSendEmail}
              className="w-full py-3 px-6 bg-[#1db978] text-white font-semibold rounded-lg shadow-sm hover:bg-[#169d66] transition-all flex items-center justify-center gap-2 font-poppins text-[15px]"
            >
              <Mail className="w-5 h-5 fill-current" />
              Send Email
            </motion.button>

            {/* Secondary Save Contact Button */}
            <button
              onClick={handleSaveContact}
              className="text-sm text-red-500 font-semibold hover:text-primary underline decoration-dotted underline-offset-4"
            >
              Download vCard (Save Contact)
            </button>
          </div>
        </div>
      </main>

      {/* Footer space */}
      <div className="h-8"></div>
    </div>
  );
};

export default ProfileCard;
