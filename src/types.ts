export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  vercelUrl: string;
}

export interface TechItem {
  name: string;
  icon?: string;
  icons?: string[];
  category: 'Frontend' | 'Tools' | 'Concepts';
}
