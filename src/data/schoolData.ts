import {
  SchoolContactInfo,
  HeroFeature,
  CoreValue,
  StatItem,
  AcademicDivision,
  ApproachPillar,
  AdmissionStep,
  WhyChooseUsItem,
  GalleryItem,
  SchoolEvent,
  Testimonial,
  FaqItem,
} from '../types';

export const schoolInfo: SchoolContactInfo = {
  schoolName: "SAMLAT EXCELLENCE ACADEMY",
  tagline: "Building Excellence. Inspiring Futures.",
  headline: "Building Excellence. Inspiring Futures.",
  supportingText: "A nurturing learning environment where knowledge, character, creativity and leadership come together to prepare students for a successful future.",
  phoneNumber: "+234 913 261 4108",
  phoneRaw: "+2349132614108",
  whatsAppNumber: "+234 813 292 7484",
  whatsAppUrl: "https://wa.me/2348132927484",
  email: "info@samlatexcellenceacademy.edu.ng",
  address: "Plot 14-18, Excellence Crescent, Off Academic Boulevard, Lagos, Nigeria",
  openingHours: {
    weekdays: "Monday – Friday: 7:30 AM – 4:30 PM",
    saturday: "Saturday: 9:00 AM – 1:00 PM (Admin & Enquiries)",
    sunday: "Sunday: Closed",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
};

export const heroFeatures: HeroFeature[] = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    description: "Rigorous British-Nigerian blended curriculum ensuring 100% distinction across all major national & international benchmark exams.",
    icon: "GraduationCap",
    badge: "100% Pass Rate",
  },
  {
    id: "experienced-teachers",
    title: "Experienced Teachers",
    description: "Passionate, certified, and continuously trained educators committed to individualized mentorship and student mastery.",
    icon: "Users",
    badge: "Certified Staff",
  },
  {
    id: "character-leadership",
    title: "Character & Leadership",
    description: "Instilling deep moral discipline, integrity, civic responsibility, public speaking, and 21st-century leadership qualities.",
    icon: "Award",
    badge: "Holistic Growth",
  },
  {
    id: "modern-environment",
    title: "Modern Learning Environment",
    description: "State-of-the-art STEM robotics labs, smart classrooms, expansive libraries, modern science suites, and secure sports grounds.",
    icon: "Sparkles",
    badge: "Smart Campus",
  },
];

export const coreValues: CoreValue[] = [
  {
    name: "Excellence",
    description: "Striving for the highest standards in academics, character, co-curricular pursuits, and personal growth.",
    icon: "Trophy",
  },
  {
    name: "Integrity",
    description: "Upholding uncompromising moral principles, truthfulness, and ethical accountability in all interactions.",
    icon: "ShieldCheck",
  },
  {
    name: "Discipline",
    description: "Cultivating focus, punctuality, respectful conduct, and the self-mastery essential for lifelong success.",
    icon: "Target",
  },
  {
    name: "Innovation",
    description: "Encouraging critical thinking, creative problem-solving, technological literacy, and curiosity.",
    icon: "Lightbulb",
  },
  {
    name: "Respect",
    description: "Fostering mutual appreciation, empathy, cultural awareness, and courteous relationships across our community.",
    icon: "HeartHandshake",
  },
  {
    name: "Leadership",
    description: "Empowering visionary thinkers who take initiative, inspire others, and positively transform society.",
    icon: "Compass",
  },
];

export const statistics: StatItem[] = [
  {
    id: "qualified-teachers",
    value: "45+",
    number: 45,
    suffix: "+",
    label: "Qualified & Certified Teachers",
    description: "Dedicated educators with postgraduate certifications and regular pedagogical training.",
  },
  {
    id: "students",
    value: "650+",
    number: 650,
    suffix: "+",
    label: "Enrolled Learners & Leaders",
    description: "Thriving students nurtured across Early Years, Primary, and Secondary divisions.",
  },
  {
    id: "years-excellence",
    value: "12+",
    number: 12,
    suffix: "+",
    label: "Years of Educational Excellence",
    description: "A proud heritage of grooming top-tier scholars, innovators, and moral role models.",
  },
  {
    id: "academic-programs",
    value: "20+",
    number: 20,
    suffix: "+",
    label: "Academic & Enrichment Programs",
    description: "Spanning STEM, coding, language arts, music, sports, debate, and leadership clubs.",
  },
];

export const academicDivisions: AcademicDivision[] = [
  {
    id: "early-years",
    title: "Early Years Education",
    subtitle: "Crèche, Playgroup & Nursery",
    ageRange: "Ages 18 Months – 5 Years",
    grades: "Crèche, Pre-Nursery, Nursery 1 & 2",
    description: "A joyful, sensory-rich foundation blending the Montessori approach with early developmental milestones to spark curiosity and social confidence.",
    fullOverview: "Our Early Years department provides a warm, safe, and stimulating home away from home. Through purposeful play, phonics, numeracy games, and creative arts, young learners develop foundational motor skills, language eloquence, emotional resilience, and an instinctive love for discovery.",
    keyHighlights: [
      "Montessori-inspired child-centered learning zones",
      "Early literacy, phonics immersion & diction building",
      "Sensory development, practical life & numeracy foundations",
      "Low teacher-to-child ratio for intimate personalized care",
      "Secure indoor & outdoor soft play activity centers"
    ],
    subjects: ["Early Phonics & Reading", "Practical Life Exercises", "Early Numeracy", "Sensorial Activities", "Creative Arts & Rhymes", "Physical Coordination & Play"],
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
    icon: "Baby",
  },
  {
    id: "primary-education",
    title: "Primary Education",
    subtitle: "Basic 1 to Basic 6",
    ageRange: "Ages 5 – 11 Years",
    grades: "Basic 1 – Basic 6",
    description: "Building strong foundational competencies in literacy, numeracy, scientific inquiry, critical thinking, and digital literacy in a vibrant setting.",
    fullOverview: "The Primary School curriculum combines the National Nigerian Primary Curriculum with international best practices. We emphasize deep conceptual understanding, collaborative projects, STEM exploration, moral formation, and bilingual development, preparing children seamlessly for secondary school entrance.",
    keyHighlights: [
      "Rigorous core foundations in Mathematics, English & Science",
      "Weekly hands-on coding & computer laboratory sessions",
      "French language, civic education & cultural studies",
      "Comprehensive reading clinics and public speaking debates",
      "Regular educational field trips and co-curricular club days"
    ],
    subjects: ["English Language & Literature", "Mathematics", "Basic Science & Technology", "Computer Studies / ICT", "Social Studies & Civic Education", "French Language", "Agricultural Science", "Music & Fine Arts"],
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80",
    icon: "BookOpen",
  },
  {
    id: "junior-secondary",
    title: "Junior Secondary School (JSS)",
    subtitle: "JSS 1 to JSS 3",
    ageRange: "Ages 11 – 14 Years",
    grades: "JSS 1, JSS 2, JSS 3",
    description: "Bridging foundational learning into analytical mastery, subject specialization, technical skills, and preparation for BECE / Junior WAEC.",
    fullOverview: "During the Junior Secondary years, students are introduced to specialized subject areas. We cultivate independent study habits, experimental scientific methods, pre-vocational skills, creative writing, and digital citizenship, ensuring excellent performances in national BECE examinations.",
    keyHighlights: [
      "Thorough preparation for National & State BECE examinations",
      "Introductory Robotics, Coding, and Technical Drawing",
      "Active Junior Debating Society & Science Discovery Club",
      "Dedicated laboratory practicals for Basic Science & Technology",
      "Career counseling & subject interest assessment for Senior High"
    ],
    subjects: ["English Studies", "Mathematics", "Basic Science", "Basic Technology", "ICT / Computer Studies", "Business Studies", "Civic Education", "Agricultural Science", "French", "Home Economics"],
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    icon: "GraduationCap",
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary School (SSS)",
    subtitle: "SSS 1 to SSS 3",
    ageRange: "Ages 14 – 17 Years",
    grades: "SSS 1, SSS 2, SSS 3",
    description: "Specialized academic pathways in Science, Arts, and Commercial disciplines tailored for stellar WAEC, NECO, JAMB/UTME, and SAT/IELTS results.",
    fullOverview: "Our Senior Secondary School is designed to launch students into prestigious universities in Nigeria and abroad. With advanced laboratories, intensive tutorial masterclasses, standardized mock testing, and leadership portfolios, students graduate with remarkable academic laurels and strong moral compasses.",
    keyHighlights: [
      "Three distinct pathways: Sciences, Arts/Humanities, and Commercial",
      "Advanced physics, chemistry, biology, and ICT laboratories",
      "Intensive WAEC, NECO, UTME/JAMB & SAT coaching bootcamps",
      "College advisory, career mentoring, and university placement support",
      "Student government, executive prefectship, and community service"
    ],
    subjects: ["Physics, Chemistry, Biology", "Further Mathematics", "Financial Accounting & Commerce", "Literature-in-English & Government", "Economics", "Computer Science", "Technical Drawing", "Visual Arts"],
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    icon: "Award",
  },
];

export const approachPillars: ApproachPillar[] = [
  {
    id: "stem-tech",
    title: "STEM & Technology",
    description: "Hands-on coding, robotics, digital literacy, and computational thinking starting from early grades.",
    icon: "Cpu",
    details: "Equipped with modern computer systems, micro-controller boards, and interactive whiteboards, students turn theoretical concepts into working software and smart engineering prototypes.",
    tags: ["Robotics", "Coding & Python", "ICT Lab", "Interactive Tech"],
  },
  {
    id: "math-science",
    title: "Mathematics & Sciences",
    description: "Inquiry-based scientific exploration with modern physics, chemistry, and biology laboratories.",
    icon: "FlaskConical",
    details: "Students conduct real experiments, master analytical mathematics problem-solving, and participate in national Olympiad competitions.",
    tags: ["Laboratory Practicals", "Math Olympiads", "Applied Physics", "Chemistry Suites"],
  },
  {
    id: "languages-comm",
    title: "Languages & Communication",
    description: "Cultivating exceptional diction, phonetics, creative writing, public speaking, and French fluency.",
    icon: "MessageSquareText",
    details: "From regular elocution clinics to debate tournaments, students learn to articulate thoughts with persuasive clarity, poise, and cross-cultural resonance.",
    tags: ["Diction Mastery", "French Fluency", "Public Speaking", "Creative Writing"],
  },
  {
    id: "arts-creativity",
    title: "Arts & Creativity",
    description: "Unlocking artistic talents through visual arts, music, instrumental training, and drama.",
    icon: "Palette",
    details: "We celebrate imagination with painting studios, musical instrument training (piano, violin, drums), and annual theatrical drama presentations.",
    tags: ["Music Studio", "Fine Arts", "Drama & Theater", "Cultural Crafts"],
  },
  {
    id: "sports-physical",
    title: "Sports & Physical Development",
    description: "Encouraging physical fitness, teamwork, sportsmanship, and endurance through athletics.",
    icon: "Activity",
    details: "Our sports complex features football pitches, basketball & volleyball courts, track facilities, table tennis, and chess clubs.",
    tags: ["Football Academy", "Athletics", "Basketball", "Mind Games & Chess"],
  },
  {
    id: "leadership-character",
    title: "Leadership & Character Development",
    description: "Mentoring ethical leaders grounded in moral integrity, community stewardship, and teamwork.",
    icon: "Compass",
    details: "Every student engages in leadership seminars, peer mentoring, charitable outreach, and student council governance.",
    tags: ["Prefectship", "Community Service", "Ethics & Civics", "Mentorship Circles"],
  },
];

export const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: "Submit an Enquiry",
    description: "Reach out through our instant WhatsApp enquiry form, call our admissions desk, or visit our campus for an initial consultation.",
    timeline: "Step 1 • Immediate Response",
    icon: "MessageSquare",
    details: [
      "Fill the online enquiry form or chat on WhatsApp (+234 813 292 7484)",
      "Speak directly with our dedicated admissions counselor",
      "Receive our comprehensive digital prospectus and curriculum overview"
    ],
  },
  {
    stepNumber: 2,
    title: "Complete Application",
    description: "Obtain and complete the official admission application form and submit necessary student academic records.",
    timeline: "Step 2 • Form & Documentation",
    icon: "FileSpreadsheet",
    details: [
      "Submit student's birth certificate & recent passport photographs",
      "Provide past academic report cards from previous school (if transferring)",
      "Submit medical clearance & immunization certificate"
    ],
  },
  {
    stepNumber: 3,
    title: "Assessment & Interaction",
    description: "Your child participates in an age-appropriate cognitive diagnostic assessment and friendly family interaction.",
    timeline: "Step 3 • Placement Evaluation",
    icon: "UserCheck",
    details: [
      "Early Years: Interactive play-based observation & readiness screening",
      "Primary & Secondary: Written assessment in Mathematics and English",
      "Brief informal chat with parents and academic head"
    ],
  },
  {
    stepNumber: 4,
    title: "Admission Confirmation",
    description: "Receive the official offer letter, complete registration, and receive your child's welcome onboarding package.",
    timeline: "Step 4 • Final Enrollment",
    icon: "CheckCircle2",
    details: [
      "Issuance of formal provisional admission letter",
      "Payment of tuition & developmental fees",
      "Collection of school uniforms, books, and class timetable"
    ],
  },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "teachers",
    title: "Qualified & Caring Teachers",
    description: "Certified educators who provide patient, personalized attention to every child's unique pace and learning style.",
    icon: "GraduationCap",
    category: "academic",
  },
  {
    id: "student-centered",
    title: "Student-Centered Learning",
    description: "Our interactive classrooms encourage active questioning, discovery, peer collaboration, and self-directed study.",
    icon: "UserCheck",
    category: "academic",
  },
  {
    id: "safe-environment",
    title: "Safe & Supportive Environment",
    description: "24/7 CCTV surveillance, biometric security, hygienic sick bay with resident nurses, and a zero-tolerance anti-bullying policy.",
    icon: "ShieldCheck",
    category: "environment",
  },
  {
    id: "academic-foundation",
    title: "Strong Academic Foundation",
    description: "Consistent distinction record in state, national (WAEC/NECO/BECE), and international qualification examinations.",
    icon: "Award",
    category: "academic",
  },
  {
    id: "character-dev",
    title: "Character & Moral Development",
    description: "Instilling deep-rooted discipline, respect, empathy, time consciousness, and high moral integrity in everyday life.",
    icon: "Heart",
    category: "development",
  },
  {
    id: "tech-learning",
    title: "Technology-Enhanced Learning",
    description: "Fully equipped computer suites, coding workshops, STEM robotics, multimedia projectors, and e-learning portals.",
    icon: "Laptop",
    category: "technology",
  },
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    description: "Over 15 dynamic clubs including Jet Club, Debate, Drama, French Club, Music, Football, Chess, and Scouts.",
    icon: "Trophy",
    category: "development",
  },
  {
    id: "individual-growth",
    title: "Focus on Individual Growth",
    description: "Tailored remedial support for emerging learners and accelerated enrichment tracks for gifted scholars.",
    icon: "TrendingUp",
    category: "development",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Modern Smart Classroom",
    category: "classrooms",
    categoryLabel: "Classrooms",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    caption: "Spacious, well-ventilated, and tech-equipped classroom environments designed for optimal focus.",
  },
  {
    id: "gallery-2",
    title: "Active Learning in Session",
    category: "academics",
    categoryLabel: "Students Learning",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
    caption: "Engaged students participating in collaborative group discussions and guided exercises.",
  },
  {
    id: "gallery-3",
    title: "Science & Chemistry Practical",
    category: "science",
    categoryLabel: "Science Activities",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    caption: "Hands-on experiments in our fully fitted chemistry and biology laboratories.",
  },
  {
    id: "gallery-4",
    title: "ICT & Computer Robotics Suite",
    category: "science",
    categoryLabel: "Science & Tech",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    caption: "Students coding, building digital presentations, and learning algorithms in the ICT lab.",
  },
  {
    id: "gallery-5",
    title: "Annual Inter-House Sports Competition",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    caption: "Celebrating athletic excellence, endurance, and house spirit on our sports arena.",
  },
  {
    id: "gallery-6",
    title: "Cultural Day Heritage Celebration",
    category: "cultural",
    categoryLabel: "Cultural Activities",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
    caption: "Showcasing rich Nigerian traditions, traditional attires, cuisine, and folklore.",
  },
  {
    id: "gallery-7",
    title: "Valedictory & Graduation Ceremony",
    category: "events",
    categoryLabel: "Graduation",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    caption: "Celebrating graduating scholars ready to take on global higher institutions.",
  },
  {
    id: "gallery-8",
    title: "Music Studio & Fine Arts Exhibition",
    category: "cultural",
    categoryLabel: "School Activities",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
    caption: "Unlocking expressive musical and artistic talents through dedicated studio performances.",
  },
  {
    id: "gallery-9",
    title: "Library & Independent Study Hub",
    category: "classrooms",
    categoryLabel: "Classrooms & Library",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
    caption: "Our quiet resource center housing thousands of physical volumes and digital research catalogs.",
  },
];

export const schoolEvents: SchoolEvent[] = [
  {
    id: "event-open-day",
    title: "Annual School Open Day & Campus Tour",
    date: "2026-09-12",
    dateFormatted: {
      day: "12",
      month: "SEP",
      year: "2026",
    },
    time: "9:00 AM – 2:00 PM",
    location: "Main Academy Campus, Hall of Excellence",
    category: "Admissions & Community",
    description: "Prospective parents and visitors are invited to explore our facilities, meet faculty heads, observe live demonstration classes, and discuss admission opportunities.",
    audience: "Prospective Parents, Students & General Public",
  },
  {
    id: "event-pta-meeting",
    title: "Parents & Teachers Association (PTA) General Meeting",
    date: "2026-09-26",
    dateFormatted: {
      day: "26",
      month: "SEP",
      year: "2026",
    },
    time: "10:00 AM – 1:00 PM",
    location: "SAMLAT Multipurpose Auditorium",
    category: "Parent Community",
    description: "A collaborative forum to review academic progress, term developments, new enrichment programs, and parental partnership initiatives.",
    audience: "All Enrolled Parents & Faculty",
  },
  {
    id: "event-inter-house",
    title: "Annual Inter-House Sports Festival",
    date: "2026-10-17",
    dateFormatted: {
      day: "17",
      month: "OCT",
      year: "2026",
    },
    time: "8:30 AM – 3:30 PM",
    location: "Academy Sports Complex & Athletics Track",
    category: "Sports & Athletics",
    description: "Cheer on our four houses (Gold, Diamond, Ruby, and Sapphire) as students compete in track events, relays, march-past, and novelty games.",
    audience: "Students, Parents, Alumni & Guests",
  },
  {
    id: "event-cultural-day",
    title: "National Cultural Day & Heritage Celebration",
    date: "2026-11-14",
    dateFormatted: {
      day: "14",
      month: "NOV",
      year: "2026",
    },
    time: "9:30 AM – 2:30 PM",
    location: "Campus Amphitheatre",
    category: "Culture & Arts",
    description: "A colorful celebration of Nigerian rich cultural heritage featuring traditional dance, indigenous languages drama, exhibitions, and culinary delights.",
    audience: "School Community & Families",
  },
  {
    id: "event-science-fair",
    title: "STEM & Robotics Innovation Exhibition",
    date: "2026-12-04",
    dateFormatted: {
      day: "04",
      month: "DEC",
      year: "2026",
    },
    time: "10:00 AM – 2:00 PM",
    location: "SAMLAT Science & Tech Pavilions",
    category: "Academics & Innovation",
    description: "Witness ingenious student inventions, software apps, solar energy models, and robotics projects developed during the term.",
    audience: "Parents, Tech Partners & Academic Evaluators",
  },
  {
    id: "event-graduation",
    title: "Valedictory Service & Graduation Ceremony",
    date: "2027-07-16",
    dateFormatted: {
      day: "16",
      month: "JUL",
      year: "2027",
    },
    time: "10:00 AM – 3:00 PM",
    location: "Grand Excellence Banquet Hall",
    category: "Graduation",
    description: "A momentous occasion honoring the graduating class of Senior Secondary School and Basic 6 transition scholars with prizes and distinctions.",
    audience: "Graduating Students, Families & Dignitaries",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Mrs. Folashade Adeleke",
    role: "Parent",
    association: "Mother of JSS 2 & Primary 4 Students",
    quote: "Enrolling my two children at SAMLAT Excellence Academy is one of the best decisions we made. The transformation in their reading fluency, discipline, and confidence is remarkable. The teachers genuinely care!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "test-2",
    author: "Dr. Babatunde Ogunleye",
    role: "Parent",
    association: "Father of SSS 3 Science Student",
    quote: "The academic discipline and modern science laboratory facilities are top notch. My son cleared his mock exams with straight A’s and is well prepared for his WAEC and university entrance. Highly recommended!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "test-3",
    author: "Chidinma Okonjo",
    role: "Student",
    association: "Head Girl & SSS 2 Scholar",
    quote: "SAMLAT has given me the platform to discover my leadership abilities, public speaking skills, and love for robotics. The supportive environment makes learning exciting every single day.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "test-4",
    author: "Engr. Emmanuel Nwosu",
    role: "Alumni",
    association: "Class of 2021 | Now at University of Lagos",
    quote: "The strong mathematical and science foundation I received at SAMLAT Excellence Academy made my engineering coursework at university smooth sailing. The core values of integrity and hard work stay with me always.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the admission procedure for transfer students?",
    answer: "Transfer students can apply throughout the academic session. We review previous academic transcripts, conduct a placement test in English and Mathematics, and arrange an informal interview to place your child in the most suitable class.",
    category: "Admissions",
  },
  {
    id: "faq-2",
    question: "What curriculum does SAMLAT Excellence Academy follow?",
    answer: "We offer a blended curriculum integrating the Nigerian National Curriculum with international best practices (British National standards). This ensures our students excel in WAEC, NECO, BECE, UTME as well as international exams like IGCSE and SAT.",
    category: "Academics",
  },
  {
    id: "faq-3",
    question: "Do you provide school bus / transportation services?",
    answer: "Yes, we operate safe, air-conditioned school buses with professional drivers and dedicated bus minders covering major residential routes across the metropolis. Inquire with our transport desk for route details.",
    category: "Facilities",
  },
  {
    id: "faq-4",
    question: "What are the school operating hours?",
    answer: "Regular school hours are Monday to Friday, 7:30 AM to 3:30 PM (with optional supervised after-school enrichment and clubs running until 4:30 PM). Our administrative desk is open until 5:00 PM on weekdays and 9:00 AM to 1:00 PM on Saturdays.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "How do parents track their child's academic progress?",
    answer: "Parents receive mid-term progress reports, end-of-term comprehensive performance dossiers, and participate in termly Open Days and PTA conferences. We also provide direct communication channels with class teachers.",
    category: "Academics",
  },
];

/**
 * Utility function to generate the exact WhatsApp message format requested by the user
 */
export function generateWhatsAppEnquiryUrl(formData: {
  fullName: string;
  parentName?: string;
  phoneNumber: string;
  email?: string;
  subject?: string;
  gradeInterest?: string;
  message: string;
}): string {
  const name = formData.fullName.trim();
  const parent = (formData.parentName && formData.parentName.trim()) || name;
  const phone = formData.phoneNumber.trim();
  const email = (formData.email && formData.email.trim()) || "Not provided";
  const subject = (formData.subject && formData.subject.trim()) || (formData.gradeInterest ? `Admissions Enquiry (${formData.gradeInterest})` : "General School Enquiry");
  const message = formData.message.trim();

  // Exactly matching requested format:
  // “Hello SAMLAT Excellence Academy,
  // I would like to make an enquiry.
  // Name: [name]
  // Parent/Guardian: [parent]
  // Phone: [phone]
  // Email: [email]
  // Subject: [subject]
  // Message: [message]”
  const formattedText = `Hello SAMLAT Excellence Academy,\nI would like to make an enquiry.\nName: ${name}\nParent/Guardian: ${parent}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`;

  const encodedText = encodeURIComponent(formattedText);
  return `https://wa.me/2348132927484?text=${encodedText}`;
}
