export type GradeLevel = 'nursery' | 'primary' | 'middle' | 'high_iit';

export interface ProgramInfo {
  id: GradeLevel;
  title: string;
  ageGroup: string;
  grades: string;
  description: string;
  highlights: string[];
  curriculum: string[];
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'sports' | 'science' | 'arts' | 'events';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  studentName: string;
  grade: string;
  quote: string;
  rating: number;
  avatar: string;
  role: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Circular' | 'Event' | 'Achievement' | 'Academic';
  summary: string;
  isImportant?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'IIT Foundation' | 'Transport' | 'Facilities';
}

export interface PillarInfo {
  id: string;
  title: string;
  description: string;
  detailText: string;
  icon: string;
  stats?: string;
}

export interface SearchResult {
  title: string;
  category: string;
  description: string;
  sectionId: string;
}
