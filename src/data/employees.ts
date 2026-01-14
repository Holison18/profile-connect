import yenAdamsImg from "@/assets/profiles/yenadams.jpeg";

export interface Employee {
  slug: string;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  photoUrl: string;
  company: {
    name: string;
    tagline: string;
    website: string;
    logoUrl?: string;
  };
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

const NCEL_SOCIALS = {
  linkedin: "https://www.linkedin.com/company/ncelknust/?viewAsMember=true",
  twitter: "https://x.com/NcelK33370",
  instagram: "https://www.instagram.com/ncelknust/",
  facebook: "https://facebook.com/ncel.knust",
  youtube: "https://www.facebook.com/share/17MKh6f6Hr/?mibextid=wwXIfr",
};

export const employees: Employee[] = [
  {
    slug: "yen-adams",
    firstName: "Dr. Yen Adams",
    lastName: "Sokama-Neuyam",
    title: "Principal Investigator",
    department: "NCEL",
    email: "asokama@knust.edu.gh",
    phone: "+233 24 593 7358",
    photoUrl: yenAdamsImg,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return employees.find((employee) => employee.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return employees.map((employee) => employee.slug);
};
