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

export const employees: Employee[] = [
  {
    slug: "yen-adams",
    firstName: "Yen",
    lastName: "Adams",
    title: "Marketing Director",
    department: "Marketing & Communications",
    email: "yen.adams@ncelgroup.com",
    phone: "+1 (555) 123-4567",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncelgroup.com",
    },
    socials: {
      linkedin: "https://linkedin.com/in/yenadams",
      twitter: "https://twitter.com/yenadams",
      instagram: "https://instagram.com/yenadams",
      facebook: "https://facebook.com/yenadams",
      youtube: "https://youtube.com/@yenadams",
    },
  },
  {
    slug: "marcus-chen",
    firstName: "Marcus",
    lastName: "Chen",
    title: "Senior Software Engineer",
    department: "Technology & Innovation",
    email: "marcus.chen@ncelgroup.com",
    phone: "+1 (555) 234-5678",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncelgroup.com",
    },
    socials: {
      linkedin: "https://linkedin.com/in/marcuschen",
      twitter: "https://twitter.com/marcuschen",
      instagram: "https://instagram.com/marcuschen",
    },
  },
  {
    slug: "sarah-johnson",
    firstName: "Sarah",
    lastName: "Johnson",
    title: "Chief Operations Officer",
    department: "Executive Leadership",
    email: "sarah.johnson@ncelgroup.com",
    phone: "+1 (555) 345-6789",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncelgroup.com",
    },
    socials: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson",
      youtube: "https://youtube.com/@sarahjohnson",
    },
  },
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return employees.find((employee) => employee.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return employees.map((employee) => employee.slug);
};
