interface Contact {
  mobile: string;
  email: string;
  residence: string;
  citizenship: string;
}

interface WorkExperience {
  date: string;
  company: string;
  location: string;
  position: string;
  responsibilities: string;
  tags: string[];
}

interface Education {
  university: string;
  location: string;
  date: string;
  degree: string;
}

interface Certification {
  year: number;
  certification: string;
}

interface Language {
  language: string;
  level: string;
}

export interface CVData {
  name: string;
  contact: Contact;
  introduction: string;
  summary: string[];
  work_experience: WorkExperience[];
  education: Education;
  certifications: Certification[];
  languages: {
    native: string;
    other: Language[];
  };
  programming_interests: string;
  hobbies: string;
}
