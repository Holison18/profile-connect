import yenAdamsImg from "@/assets/profiles/yenadams.jpeg";
import albertImg from "@/assets/profiles/alb.jpg";
import edward from "@/assets/profiles/Edward.jpg";
import maxpolic from "@/assets/profiles/Maxpolic.jpg";
import gifty from "@/assets/profiles/gifty_two.jpeg";
import monica from "@/assets/profiles/Monica.jpeg";
import ankomah from "@/assets/profiles/Ankomah.jpeg";
import kobina from "@/assets/profiles/kobina.jpeg";

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
  imageObjectPosition?: string;
}

const NCEL_SOCIALS = {
  linkedin: "https://www.linkedin.com/company/ncelknust/?viewAsMember=true",
  twitter: "https://x.com/NcelK33370",
  instagram: "https://www.instagram.com/ncelknust/",
  facebook: "https://www.facebook.com/share/17MKh6f6Hr/?mibextid=wwXIfr",
  youtube: "https://www.youtube.com/@ncelknust",
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

  {
    slug: "albert",
    firstName: "Albert",
    lastName: "T. Asiamah",
    title: "Project Manager",
    department: "NCEL",
    email: "albert.asiamah@knust.edu.gh",
    phone: "+233 20 978 3409",
    imageObjectPosition: "top",
    photoUrl: albertImg,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "maspolic",
    firstName: "Maspolic",
    lastName: "Amo Yeboah",
    title: "Research Scholar",
    department: "NCEL",
    email: "amoyeboahmaspolic@gmail.com",
    phone: "+233 54 770 3122",
    imageObjectPosition: "top",
    photoUrl: maxpolic,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "edmond",
    firstName: "Edmond Peprah",
    lastName: "Ankamah",
    title: "Research Scholar",
    department: "NCEL",
    email: "ankamah2017@gmail.com",
    phone: "+233557842196 / +233503813793",
    imageObjectPosition: "top",
    photoUrl: edward,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "gifty",
    firstName: "Gifty",
    lastName: "Asare Wiafe Dankwah",
    title: "Research Scholar",
    department: "NCEL",
    email: "giftyasare001@gmail.com",
    phone: "+233 59 170 1346",
    imageObjectPosition: "top",
    photoUrl: gifty,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "monica",
    firstName: "Monica",
    lastName: "Acheampong",
    title: "Research Scholar",
    department: "NCEL",
    email: "akyeampongmonica@gmail.com",
    phone: "+233 24 974 7216",
    imageObjectPosition: "top",
    photoUrl: monica,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "ankomah",
    firstName: "Kwame",
    lastName: "Ankomah",
    title: "Research Scholar",
    department: "NCEL",
    email: "kankomah10@st.knust.edu.gh",
    phone: "+233 55 571 7959",
    imageObjectPosition: "top",
    photoUrl: ankomah,
    company: {
      name: "NCEL",
      tagline: "YOUR TRUSTED PARTNER IN EXCELLENCE",
      website: "www.ncel.knust.edu.gh",
    },
    socials: NCEL_SOCIALS,
  },

  {
    slug: "kobina",
    firstName: "Kobina",
    lastName: "Akofi-Holison",
    title: "Research Scholar",
    department: "NCEL",
    email: "akofiholisonkobina@gmail.com",
    phone: "+233 54 181 2762",
    imageObjectPosition: "top",
    photoUrl: kobina,
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
