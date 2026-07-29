import { ProgramInfo, Facility, GalleryItem, Testimonial, NewsItem, FAQItem, PillarInfo } from '../types';

export const SCHOOL_INFO = {
  name: "New Era's Vivaan The School",
  group: "A New Era Group Institution",
  motto: "Empowering Young Minds Through State Board Excellence, Values & Holistic Learning",
  location: "Srinivasa Nagar, Khammam, Telangana",
  fullAddress: "Srinivasa Nagar, Khammam Landmark Area, Khammam District, Telangana - 507001",
  phones: ["93813 61354", "93980 52389"],
  phoneFormatted: ["+91 93813 61354", "+91 93980 52389"],
  email: "admissions@vivaantheschool.edu.in",
  whatsapp: "919381361354",
  workingHours: "Monday to Saturday: 8:30 AM – 4:00 PM",
  classes: "Nursery to Class 10 (State Syllabus / SSC)",
  academicYear: "2026–2027",
};

export const HERO_STATS = [
  { label: "Community", value: "2024+", suffix: "Students & Alumni" },
  { label: "Admissions Open", value: "2026–27", suffix: "Nursery to Class 10 (SSC)" },
  { label: "Academics", value: "Class VI–X", suffix: "High School Rigor" },
  { label: "Syllabus", value: "State Board", suffix: "Telangana SSC Curriculum" },
  { label: "Expert Mentors", value: "15+ Yrs", suffix: "Avg Faculty Experience" },
];

export const VIVAAN_PILLARS: PillarInfo[] = [
  {
    id: "individual-attention",
    title: "Individual Attention",
    description: "Strict 1:15 mentor ratio ensures every child receives personalized guidance.",
    detailText: "We maintain small batch sizes so teachers can monitor each child's learning pace, emotional development, and academic strengths closely.",
    icon: "UserCheck",
    stats: "1:15 Student Ratio"
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    description: "Conceptual mastery aligned with top national standards and futuristic learning.",
    detailText: "Our curriculum balances core subject fundamentals with critical thinking, analytical problem solving, and practical application.",
    icon: "GraduationCap",
    stats: "100% Board Pass Rate"
  },
  {
    id: "analytical-thinking",
    title: "Analytical & STEM Learning",
    description: "Specialized analytical training from Grade VI to X for competitive excellence.",
    detailText: "Early exposure to Physics, Chemistry, Math concepts, logical reasoning, and Olympiad problem-solving sets our students years ahead.",
    icon: "Brain",
    stats: "Grades VI – X Analytical"
  },
  {
    id: "sports-wellness",
    title: "Sports & Fitness",
    description: "Multi-sport arena, professional coaches, physical fitness, and teamwork.",
    detailText: "Dedicated time for cricket, badminton, basketball, athletics, yoga, and gymnastics nurtures physical stamina and leadership skills.",
    icon: "Trophy",
    stats: "5+ Athletic Disciplines"
  },
  {
    id: "smart-technology",
    title: "Smart Technology",
    description: "Digital interactive smart boards, coding lab, and AI-enabled smart learning.",
    detailText: "Classrooms equipped with interactive digital panels bring textbook concepts to life through 3D simulations and visual learning.",
    icon: "Laptop",
    stats: "100% Digital Classrooms"
  },
  {
    id: "safety-security",
    title: "Campus Safety",
    description: "24/7 CCTV surveillance, biometric security, and GPS-tracked school buses.",
    detailText: "Parents receive real-time bus tracking alerts and live entry notifications for complete peace of mind.",
    icon: "ShieldCheck",
    stats: "24/7 Monitored Campus"
  },
  {
    id: "discipline-ethics",
    title: "Discipline & Values",
    description: "Rooted in Indian heritage, moral ethics, mindfulness, and global character.",
    detailText: "Daily morning assemblies, moral storytelling, value-education workshops, and community service build ethical leaders.",
    icon: "HeartHandshake",
    stats: "Character-First Culture"
  },
  {
    id: "innovation-lab",
    title: "Innovation & STEM",
    description: "Hands-on robotics, science tinkering labs, and creative design thinking.",
    detailText: "Students build real working models, circuits, robotics kits, and conduct hands-on experiments from early grades.",
    icon: "Sparkles",
    stats: "STEM & Robotics Club"
  },
  {
    id: "holistic-development",
    title: "Holistic Development",
    description: "Equal emphasis on public speaking, music, fine arts, drama, and debate.",
    detailText: "Weekly cultural events, inter-house competitions, arts workshops, and public speaking clubs foster confident personalities.",
    icon: "Palette",
    stats: "20+ Co-Curricular Clubs"
  }
];

export const ACADEMIC_PROGRAMS: ProgramInfo[] = [
  {
    id: 'nursery',
    title: 'Nursery & Kindergarten',
    ageGroup: '3.0 – 5.5 Years',
    grades: 'Nursery, LKG, UKG',
    description: 'A joyful play-way sensory foundation encouraging curiosity, fine motor skills, language immersion, and social confidence.',
    highlights: [
      'Montessori & Play-Way Blended Learning',
      'Phonics & Storytelling Language Corner',
      'Sensory Play, Music & Rhymes',
      'Safe, Cushioned Kids Activity Zone'
    ],
    curriculum: ['Early Phonics & Communication', 'Fun with Numbers & Shapes', 'Environmental Awareness', 'Art, Craft & Creative Movement'],
    icon: 'Baby'
  },
  {
    id: 'primary',
    title: 'Primary School',
    ageGroup: '5.5 – 10 Years',
    grades: 'Grades I to V',
    description: 'Nurturing fundamental concepts in Mathematics, Languages, Science, and Social Studies through activity-based learning.',
    highlights: [
      'Experiential Math & Science Experiments',
      'Bilingual Fluency & Creative Writing',
      'Computer Basics & Digital Literacy',
      'Value Education & Life Skills'
    ],
    curriculum: ['English & Vernacular Languages', 'Mathematics & Logic', 'Environmental Studies (EVS)', 'Computer Science & Coding Basics', 'Art, Music & PE'],
    icon: 'BookOpen'
  },
  {
    id: 'middle',
    title: 'Middle School',
    ageGroup: '10 – 13 Years',
    grades: 'Grades VI to VIII',
    description: 'Transitioning from concrete to analytical thinking with subject specialization, research projects, and intro to IIT Foundation.',
    highlights: [
      'Structured Physics, Chemistry & Biology',
      'Advanced Mathematics & Logical Reasoning',
      'Integrated IIT & Olympiad Foundation',
      'Robotics & STEM Tinkering'
    ],
    curriculum: ['Advanced Science Disciplines', 'Algebra, Geometry & Mensuration', 'Social Sciences & World History', 'Languages & Rhetoric', 'Computer Applications'],
    icon: 'Brain'
  },
  {
    id: 'high_iit',
    title: 'High School & IIT Foundation',
    ageGroup: '13 – 16 Years',
    grades: 'Grades IX to X',
    description: 'Rigorously preparing students for Board examinations alongside JEE/NEET competitive mastery with expert coaching.',
    highlights: [
      'Concept-first Physics, Math & Chemistry',
      'Weekly Mock Tests & Performance Analytics',
      'Dedicated Doubt Clearing Sessions',
      'Olympiad & NTSE Special Training'
    ],
    curriculum: ['Telangana State Board Syllabus (SSC)', 'IIT-JEE & NEET Foundation Problems', 'Analytical Problem Solving', 'Model Science Practicals', 'Career & SSC Board Exam Mentoring'],
    icon: 'Zap'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'smart-classrooms',
    title: 'Smart Digital Classrooms',
    category: 'Academics',
    description: 'Interactive audio-visual digital classrooms empowering students with engaging conceptual lessons and digital learning tools.',
    features: ['Interactive Smart Screens', 'Digital Content Suite', 'Ergonomic Student Seating', 'Optimal Natural Ventilation'],
    image: '/smart-digital-classrooms.jpeg',
    iconName: 'Tv'
  },
  {
    id: 'science-lab',
    title: 'Advanced Science Laboratories',
    category: 'Practicals',
    description: 'Fully equipped Physics, Chemistry, and Biology practical lab facilities fostering curiosity and hands-on experimental inquiry.',
    features: ['Hands-on Experiment Tables', 'Safety Standards & Equipment', 'Microscopes & Reagents', 'Teacher Guided Demonstrations'],
    image: '/advanced-science-laboratories.jpeg',
    iconName: 'FlaskConical'
  },
  {
    id: 'science-projects',
    title: 'Science & Innovation Projects',
    category: 'Innovation',
    description: 'Student-led scientific model building, STEM exhibitions, and creative problem-solving projects for state-level competitions.',
    features: ['STEM Model Making', 'Exhibition Displays', 'Working Prototype Kits', 'Analytical Guidance'],
    image: '/science-projects.jpeg',
    iconName: 'Brain'
  },
  {
    id: 'sports-arena',
    title: 'Sports & Athletic Arena',
    category: 'Sports',
    description: 'Vast open sports ground for volleyball, athletics, physical fitness, cricket, and outdoor team championships.',
    features: ['Volleyball & Badminton Courts', 'Athletic Fitness Track', 'Professional Sports Coaches', 'Team Spirit & Physical Wellness'],
    image: '/sports.jpeg',
    iconName: 'Dumbbell'
  },
  {
    id: 'art-culture',
    title: 'Art, Culture & Talent Platform',
    category: 'Co-Curricular',
    description: 'Dedicated platform for literary events, cultural talent showcases, debate competitions, and creative arts.',
    features: ['Stage Performances', 'Literary Competitions', 'Art Workshops', 'Student Recognition Awards'],
    image: '/art-and-culture.jpeg',
    iconName: 'Palette'
  },
  {
    id: 'ncc-wing',
    title: 'NCC & Discipline Cadets',
    category: 'Leadership',
    description: 'Structured cadet training building leadership, patriotism, national service, physical stamina, and ethical character.',
    features: ['Cadet Drill Parade', 'Discipline & Leadership', 'National Level Camps', 'Patriotic Heritage'],
    image: '/ncc.jpeg',
    iconName: 'ShieldCheck'
  },
  {
    id: 'dedicated-staff',
    title: 'Experienced & Caring Faculty',
    category: 'Faculty',
    description: 'Highly qualified, compassionate educators and mentors dedicated to student success and individual guidance.',
    features: ['Avg 15+ Yrs Experience', 'Personal Mentoring (1:15)', 'Continuous Academic Upgradation', 'Student Welfare Support'],
    image: '/staff.jpeg',
    iconName: 'GraduationCap'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'School Campus & Entrance',
    category: 'campus',
    imageUrl: '/gallery/g1.jpg',
    caption: 'Modern learning space designed for holistic education.',
    date: 'July 2026'
  },
  {
    id: 'g2',
    title: 'Annual Cultural Day Celebrations',
    category: 'arts',
    imageUrl: '/gallery/g2.jpg',
    caption: 'Vibrant dance, drama, and musical stage performances.',
    date: 'June 2026'
  },
  {
    id: 'g3',
    title: 'School Leadership & Management',
    category: 'campus',
    imageUrl: '/gallery/g3.jpg',
    caption: 'Dedicated leadership driving educational excellence at Vivaan.',
    date: 'May 2026'
  },
  {
    id: 'g4',
    title: 'State Science & Talent Exhibition',
    category: 'science',
    imageUrl: '/gallery/g4.jpg',
    caption: 'Students demonstrating innovative science models and experiments.',
    date: 'April 2026'
  },
  {
    id: 'g5',
    title: 'NCC Cadet Drill & Parade Training',
    category: 'events',
    imageUrl: '/gallery/g5.jpg',
    caption: 'Building leadership, patriotism, and discipline through cadet training.',
    date: 'March 2026'
  },
  {
    id: 'g6',
    title: 'Student Life & Co-Curricular Workshops',
    category: 'events',
    imageUrl: '/gallery/g6.jpg',
    caption: 'Interactive workshops nurturing holistic growth.',
    date: 'February 2026'
  },
  {
    id: 'g7',
    title: 'Cultural Festival Celebrations',
    category: 'arts',
    imageUrl: '/gallery/g7.jpg',
    caption: 'Traditional festivities celebrated with joy on campus.',
    date: 'January 2026'
  },
  {
    id: 'g8',
    title: 'Student Project Presentation',
    category: 'science',
    imageUrl: '/gallery/g8.jpg',
    caption: 'Hands-on practical models built by students.',
    date: 'July 2026'
  },
  {
    id: 'g9',
    title: 'Academic Honors & Award Felicitation',
    category: 'events',
    imageUrl: '/gallery/g9.jpg',
    caption: 'Felicitation of outstanding academic and co-curricular achievers.',
    date: 'June 2026'
  },
  {
    id: 'g10',
    title: 'Campus Celebrations & Gathering',
    category: 'events',
    imageUrl: '/gallery/g10.jpg',
    caption: 'Joyful community celebrations on school grounds.',
    date: 'May 2026'
  },
  {
    id: 'g11',
    title: 'Interactive Classroom Learning',
    category: 'campus',
    imageUrl: '/gallery/g11.jpg',
    caption: 'Students engaging in collaborative group activities.',
    date: 'April 2026'
  },
  {
    id: 'g12',
    title: 'Sports Championship & Athletics Meet',
    category: 'sports',
    imageUrl: '/gallery/g12.jpg',
    caption: 'Outdoor sports events fostering sportsmanship and agility.',
    date: 'March 2026'
  },
  {
    id: 'g13',
    title: 'Sports & Team Activities',
    category: 'sports',
    imageUrl: '/gallery/g13.jpg',
    caption: 'Active participation in outdoor team games and sports.',
    date: 'February 2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Dr. K. Srinivas Rao',
    studentName: 'Siddharth Rao',
    grade: 'Grade IX (IIT Foundation)',
    quote: "New Era's Vivaan The School has completely transformed my son's logical thinking. The integrated IIT Foundation coaching saves hours of evening tuition pressure while maintaining stellar CBSE scores.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    role: 'Doctor & Parent'
  },
  {
    id: 't2',
    parentName: 'Smt. Lakshmi Prasanna',
    studentName: 'Ananya Reddy',
    grade: 'Grade IV',
    quote: "The personal care and warmth of teachers here is unmatched. Ananya comes home eager to tell us about her smart classroom lessons and story corner. Highly recommended!",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    role: 'IT Professional & Parent'
  },
  {
    id: 't3',
    parentName: 'Mr. V. Venkatramana',
    studentName: 'Charan V.',
    grade: 'Grade VII (IIT Foundation)',
    quote: "Safety was my primary concern. With GPS tracking on the school bus and instant CCTV updates, Vivaan gives our family 100% peace of mind every single day.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    role: 'Business Owner & Parent'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Admissions Open for Academic Session 2026–27',
    date: 'July 20, 2026',
    category: 'Circular',
    summary: 'Registrations are open from Nursery to Grade X. Parents can schedule campus visits online or visit the admin office.',
    isImportant: true
  },
  {
    id: 'n2',
    title: 'Specialized IIT Foundation Workshop for Grade VI–X',
    date: 'July 15, 2026',
    category: 'Academic',
    summary: 'Masterclass on Logical Reasoning and Science Olympiad Problem Solving conducted by senior guest faculty.',
    isImportant: false
  },
  {
    id: 'n3',
    title: 'Inter-School Sports Carnival & Athletics Meet',
    date: 'August 05, 2026',
    category: 'Event',
    summary: 'Upcoming annual sports meet featuring track events, basketball, badminton, and chess competitions.',
    isImportant: false
  },
  {
    id: 'n4',
    title: 'Vivaan Students Secure Top Ranks in State Mathematics Olympiad',
    date: 'July 02, 2026',
    category: 'Achievement',
    summary: '14 students from Vivaan Grade VIII & IX secured gold medals in the Telangana Math Talent Hunt.',
    isImportant: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What classes are offered at New Era\'s Vivaan The School?',
    answer: 'We offer classes from Nursery to Grade X. From Grade VI onwards, we provide an integrated IIT Foundation & NEET readiness program alongside standard CBSE curriculum.',
    category: 'Admissions'
  },
  {
    id: 'faq-2',
    question: 'Where is the school located in Khammam?',
    answer: 'Our campus is located in Srinivasa Nagar, Khammam, Telangana. It is easily accessible from all major landmarks in Khammam city.',
    category: 'Facilities'
  },
  {
    id: 'faq-3',
    question: 'How does the IIT Foundation program work for Grades VI to X?',
    answer: 'The IIT Foundation program is integrated within school hours. It enhances standard mathematics and science concepts with deep analytical logic, numerical problem solving, and Olympiad practice without overloading students.',
    category: 'IIT Foundation'
  },
  {
    id: 'faq-4',
    question: 'What safety measures are implemented on campus and in school transport?',
    answer: 'Our entire campus is monitored by 24/7 CCTV surveillance with strict security logs. School buses are equipped with GPS live tracking app access for parents, speed governors, first-aid kits, and female bus attendants.',
    category: 'Transport'
  },
  {
    id: 'faq-5',
    question: 'How can I apply for admission or book a campus visit?',
    answer: 'You can apply directly using the "Apply for Admission" button on our website, book a campus visit through our online visit scheduler, or contact our admissions office at +91 93813 61354 or +91 93980 52389.',
    category: 'Admissions'
  },
  {
    id: 'faq-6',
    question: 'What is the teacher-to-student ratio?',
    answer: 'We maintain an optimal ratio of 1:15 to ensure personalized attention, academic mentoring, and individual child monitoring.',
    category: 'Academics'
  }
];
