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
  { label: '首頁', href: '#home' },
  { label: '關於', href: '#about' },
  { label: 'GP 累積', href: '#earn-gp' },
  { label: '互助頻道', href: '#channel' },
  { label: '常見問題', href: '#faq' },
] as const;

// Hero 區塊
export const HERO = {
  title: '你的「雞婆」，值得被看見',
  subtitle: '讓你的熱情與付出，能被真實地看見',
  cta: '立即分享',
} as const;

// 關於段落
export const ABOUT_PARAGRAPHS = [
  '一個新發現的工具、一個超難的 bug 解決方案、一家超讚的宵夜……這些不經意的「雞婆」分享，常常在不經意間幫助了別人。我們認為，這些寶貴的熱情值得被記錄下來。',
  '「雞婆鄰里互助會」的目的很單純，就是將這些散落在各處的分享，變成一個具現化的「雞婆」點數 (GP)。',
  '我們不強調你能獲得什麼，而是希望讓你的熱情與付出，能被真實地看見。',
] as const;

// 分享介紹
export const SHARING_INTRO = {
  title: '你的「雞婆」，隨時隨地都能發生！',
  subtitle: '想分享？隨時都可以！',
  description: '無論你有沒有事先規劃，只要在 GDG Tainan 或好想工作室的社群裡，分享任何你感興趣、覺得有價值的知識或經驗，我們都會「雞婆」地為你留下紀錄。',
} as const;

// GP 賺取方式
export const GP_METHODS = [
  {
    title: '實體分享',
    description: '地點在好想工作室',
    gp: '50 GP',
  },
  {
    title: '線上分享',
    description: '透過線上平台進行分享',
    gp: '50 GP',
  },
  {
    title: '文字分享',
    description: '自行產出或轉譯的內容，非單純轉貼文章',
    gp: '30 GP',
  },
  {
    title: '其他活動主揪',
    description: '含運動、共餐、KTV 等，地點不限',
    gp: '20 GP',
  },
  {
    title: '節慶活動主揪',
    description: '聖誕節裝飾、慶生等',
    gp: '50 GP',
  },
] as const;

export const GP_NOTE = '所有與社群相關的分享活動，只要花 20 秒填寫表單即可獲得點數。';
export const GP_PS = 'ps. 如果你發起的活動有收取維持活動進行的小額費用，且為非營利性質，也符合點數計算資格。';
export const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdKrAzJW4DzRk5pb0zc89p5pwL6xXjmUTW6Je2YqX1isdqUvg/viewform';

// Google 雞婆加碼
export const GOOGLE_BONUS = {
  title: 'Google 雞婆加碼！',
  description: '你的分享如果跟 Google 的產品或技術有關，那恭喜你，你的「雞婆」會得到特別的 Buff！',
  rewards: [
    { icon: '✨', text: '額外 50GP' },
    { icon: '📢', text: 'GDG 平台宣傳：GDG Tainan 平台活動頁面宣傳。' },
    { icon: '🎁', text: '迷你補血包：有機會隨機獲得迷你裝備 (swag) 或補血包 (微茶點贊助)。' },
  ],
  steps: [
    '在活動開始前，將活動資訊分享至以下任一頻道（擇一即可）：everybody-in-house、general 或 random。',
    '20 秒填寫表單',
  ],
} as const;

// 雞婆頻道功能
export const CHANNEL_FEATURES = [
  {
    icon: '/images/forum-icon.svg',
    title: '分享資訊',
    description: '所有即將發生的分享都會在這裡轉貼。',
  },
  {
    icon: '/images/groups-icon.svg',
    title: '活躍分享者',
    description: '活躍分享者 TOP 5',
  },
  {
    icon: '/images/survey-icon.svg',
    title: '查詢 GP 點數',
    description: '在頻道中輸入「查詢 + 你的 email」（例如：「查詢 your.email@example.com」），系統將會回覆你的個人 GP 點數餘額。',
  },
] as const;

export const CHANNEL_NOTE = '（目前為人工處理，還沒串聊天機器人，感謝你的耐心🫠）';

// FAQ 項目
export const FAQ_ITEMS = [
  {
    question: '什麼是雞婆點數 (GP)？',
    answer: 'GP (Good Points) 是記錄你在社群分享貢獻的點數系統。無論是分享技術、工具、經驗，或是主揪活動，都能累積 GP。',
  },
  {
    question: '如何累積 GP？',
    answer: '你可以透過 5 種方式累積：實體分享 (50GP)、線上分享 (50GP)、文字分享 (30GP)、活動主揪 (20GP)、節慶活動主揪 (50GP)。只要填寫表單即可獲得點數。',
  },
  {
    question: 'GP 可以用來做什麼？',
    answer: '目前雞婆點數可以幹嘛我們還沒想到？或許可以兌換一些小小的 swag，或是參加雞婆們的茶點分享會。總之，先分享再說吧！',
  },
  {
    question: 'Google 雞婆加碼是什麼？',
    answer: '如果你的分享與 Google 產品或技術相關，可以獲得額外 50GP、GDG 平台宣傳，以及有機會獲得迷你 swag 或茶點贊助！',
  },
  {
    question: '如何查詢我的 GP？',
    answer: '在雞婆鄰里互助會頻道中輸入「查詢 + 你的 email」（例如：查詢 your.email@example.com），系統就會回覆你的 GP 餘額。目前為人工處理，感謝耐心等待！',
  },
] as const;

// Footer CTA
export const FOOTER_CTA = {
  title: '開始你的「雞婆」分享之旅',
  cta: '立即填寫表單',
} as const;
