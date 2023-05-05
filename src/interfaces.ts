export interface CV {
  "mobile-phone": string;
  email: string;
  residence: string;
  citizenship: string;
  name: string;
  image: string;
  blocks: Block[];
}

export interface WorkExperience {
  period: [Date, Date];
  company: string;
  location: string;
  position: string;
  responsibilities: string;
}

export type Table = [string, string][];

export interface TextBlock {
  title: string;
  type: "text";
  content: string;
}

export interface WorkExperienceBlock {
  title: string;
  type: "work";
  content: WorkExperience;
}

export interface TableBlock {
  title: string;
  type: "table";
  content: Table;
}

export type Block = TextBlock | WorkExperienceBlock | TableBlock;
