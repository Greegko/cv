export interface CVData {
  personal: {
    name: string;
    position: string;
    photo: string;
    mobilePhone: string;
    email: string;
    swissPermit: string;
    website: string;
    linkedin: string;
    github: string;
    citizenship: string;
    address: string;
  };
  languages: Scale[];
  technicalSkills: Scale[];
  softSkills: Scale[];
  introduction: string;
  quote: {
    text: string;
    author: string;
  };
  trainings: [DateString, string][];
  workExperiences: WorkExperience[];
  education: Education;
  interests: string;
  lastUpdate: DateString;
}

export type DateString = number | `${number}` | `${number}-${number}` | `${number}-${number}-${number}`;

export type Scale = [name: string, scale: 1 | 2 | 3 | 4 | 5, scaleText: string];

export interface Education {
  title: string;
  period: [DateString, DateString | null];
  highlights: string[];
  tags: string[];
}

export interface WorkExperience {
  title: string;
  position: string;
  period: [DateString, DateString | null];
  highlights: string[];
  tags: string[];
}
