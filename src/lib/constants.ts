// 顏色常數
export const COLORS = {
  primary: '#FAB538',
  black: '#171712',
  brown: '#8C7D5E',
  white: '#FFFFFF',
  border: '#E5E8EB',
  borderLight: '#E5E3DB',
} as const;

// 導航選單項目
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'How to Earn GP', href: '#earn-gp' },
  { label: 'Community Sharing', href: '#community' },
  { label: 'FAQ', href: '#faq' },
] as const;

// GP 賺取方式
export const GP_METHODS = [
  {
    title: 'Skill Sharing',
    description: 'Share your skills, like tutoring, crafts, tech support, etc.',
    gp: '100 GP',
  },
  {
    title: 'Resource Sharing',
    description: 'Share your resources, like tools, equipment, spaces, etc.',
    gp: '50 GP',
  },
  {
    title: 'Time Sharing',
    description: 'Share your time, like volunteering, helping neighbors, etc.',
    gp: '20 GP',
  },
] as const;

// 社群分享功能
export const COMMUNITY_FEATURES = [
  {
    icon: '/images/forum-icon.svg',
    title: 'Online Discussion Forum',
    description: 'Interact with neighbors in the online discussion forum, sharing your thoughts and suggestions.',
  },
  {
    icon: '/images/groups-icon.svg',
    title: 'Community Sharing Groups',
    description: 'Join community sharing groups to share skills, resources, and time with neighbors.',
  },
  {
    icon: '/images/survey-icon.svg',
    title: 'Submit Questionnaires',
    description: 'Submit questionnaires to help us understand your needs better.',
  },
] as const;

// FAQ 項目
export const FAQ_ITEMS = [
  {
    question: 'What is GP?',
    answer: 'GP (Good Points) is our community currency that you earn by sharing and contributing to the neighborhood.',
  },
  {
    question: 'How to Earn GP?',
    answer: 'You can earn GP by sharing your skills (100 GP), resources (50 GP), or time (20 GP) with community members.',
  },
  {
    question: 'How to Use GP?',
    answer: 'GP can be used to request services, borrow resources, or exchange with other community members.',
  },
] as const;
