export interface SchoolContactInfo {
  schoolName: string;
  tagline: string;
  headline: string;
  supportingText: string;
  phoneNumber: string;
  phoneRaw: string;
  whatsAppNumber: string;
  whatsAppUrl: string;
  email: string;
  address: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface HeroFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface CoreValue {
  name: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  number: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface AcademicDivision {
  id: string;
  title: string;
  subtitle: string;
  ageRange: string;
  grades: string;
  description: string;
  fullOverview: string;
  keyHighlights: string[];
  subjects: string[];
  imageUrl: string;
  icon: string;
}

export interface ApproachPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  tags: string[];
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
  icon: string;
  details: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'academic' | 'environment' | 'development' | 'technology';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classrooms' | 'academics' | 'science' | 'sports' | 'cultural' | 'events';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  dateFormatted: {
    day: string;
    month: string;
    year: string;
  };
  time: string;
  location: string;
  category: string;
  description: string;
  audience: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: 'Parent' | 'Student' | 'Alumni';
  association: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  parentName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  gradeInterest: string;
  message: string;
}
