export interface CVData {
  mobilePhone: string;
  lastUpdate: DateString;
  email: string;
  residence: string;
  citizenship: string;
  name: string;
  image: string;
  blocks: Block[];
}

export type DateString = `${number}-${number}-${number}`;

export interface WorkExperience {
  period: [DateString, DateString | null];
  company: string;
  location: string;
  position: string;
  responsibilities: string;
}

export type Table = [string | number, string | string[]][];

export interface TextBlock {
  title: string;
  type: "text";
  content: string;
}

export interface QuoteBlock {
  content: string;
  type: "quote";
  author: string;
}

export interface WorkExperienceBlock {
  title: string;
  type: "work-experience";
  content: WorkExperience[];
}

export interface TableBlock {
  title: string;
  type: "table";
  content: Table;
}

export type Block = TextBlock | WorkExperienceBlock | TableBlock | QuoteBlock;
