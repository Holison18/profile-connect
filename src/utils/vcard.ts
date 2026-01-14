import type { Employee } from "@/data/employees";

export const generateVCard = (employee: Employee): string => {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${employee.lastName};${employee.firstName};;;`,
    `FN:${employee.firstName} ${employee.lastName}`,
    `ORG:${employee.company.name}`,
    `TITLE:${employee.title}`,
    `TEL;TYPE=WORK,VOICE:${employee.phone}`,
    `EMAIL;TYPE=WORK:${employee.email}`,
    `URL:https://${employee.company.website}`,
  ];

  // Add social profiles if available
  if (employee.socials.linkedin) {
    vCard.push(`X-SOCIALPROFILE;TYPE=linkedin:${employee.socials.linkedin}`);
  }
  if (employee.socials.twitter) {
    vCard.push(`X-SOCIALPROFILE;TYPE=twitter:${employee.socials.twitter}`);
  }
  if (employee.socials.instagram) {
    vCard.push(`X-SOCIALPROFILE;TYPE=instagram:${employee.socials.instagram}`);
  }
  if (employee.socials.facebook) {
    vCard.push(`X-SOCIALPROFILE;TYPE=facebook:${employee.socials.facebook}`);
  }

  // Add photo URL
  if (employee.photoUrl) {
    vCard.push(`PHOTO;VALUE=URI:${employee.photoUrl}`);
  }

  // Add note with department
  vCard.push(`NOTE:${employee.department} at ${employee.company.name}`);

  vCard.push("END:VCARD");

  return vCard.join("\r\n");
};

export const downloadVCard = (employee: Employee): void => {
  const vCardContent = generateVCard(employee);
  const blob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${employee.firstName}_${employee.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
