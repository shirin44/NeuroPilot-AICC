
export enum NarratorRole {
  Jobseeker = 'Jobseeker',
  Employer = 'Employer',
  Parent = 'Parent',
  Volunteer = 'Volunteer',
}

export enum Language {
  EN = 'en',
  VN = 'vn',
}

export type NarratorState = 'idle' | 'intro' | 'thinking' | 'pointing' | 'celebrating' | 'explaining' | 'listening' | 'talking';

export type AppMode = 'practice' | 'story';

export interface Narrator {
  role: NarratorRole;
  name: { [key in Language]: string };
  intro: { [key in Language]: string };
  hover: { [key in Language]: string };
  avatars: { [key in NarratorState]?: string };
  theme: string;
}

export interface StarFeedback {
  situation: { score: number; feedback: string };
  task: { score: number; feedback: string };
  action: { score: number; feedback: string };
  result: { score: number; feedback: string };
  overall: { score: number; feedback: string };
}

export interface StoryChoice {
  text: { [key in Language]: string };
  isMultiSelect?: boolean; // Indicates the 'title' of a multi-select group
  affirmation?: { [key in Language]: string };
}

export interface StoryScene {
  title: { [key in Language]: string };
  text: { [key in Language]: string };
  choices: StoryChoice[];
}

export interface Story {
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  scenes: StoryScene[];
  closingAffirmation: { [key in Language]: string };
}