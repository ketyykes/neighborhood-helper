// 基础类型定义
export interface WeddingInfo {
  id: string;
  groomName: string;
  brideName: string;
  weddingDate: string; // ISO date string
  venue?: string;
  story?: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Wish {
  id: string;
  authorName: string;
  email?: string;
  phone?: string;
  content: string;
  wishType: WishType;
  images: string[];
  isApproved: boolean;
  likesCount: number;
  repliesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface WishReply {
  id: string;
  wishId: string;
  authorName: string;
  content: string;
  isApproved: boolean;
  createdAt: string;
}

export interface WishLike {
  id: string;
  wishId: string;
  userIp: string;
  createdAt: string;
}

// 枚举类型
export enum WishType {
  GENERAL = 'general',
  BLESSING = 'blessing',
  ADVICE = 'advice',
  MEMORY = 'memory',
  FUNNY = 'funny'
}

export enum SortBy {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  LIKES = 'likes'
}

// 表单类型
export interface WishFormData {
  authorName: string;
  email?: string;
  phone?: string;
  content: string;
  wishType: WishType;
  images: File[];
}

export interface ReplyFormData {
  wishId: string;
  authorName: string;
  content: string;
}

// API 响应类型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// 组件 Props 类型
export interface WishCardProps {
  wish: Wish;
  onLike?: (wishId: string) => void;
  onReply?: (wishId: string) => void;
  showActions?: boolean;
  isAdmin?: boolean;
  onEdit?: (wish: Wish) => void;
  onDelete?: (wishId: string) => void;
}

export interface WishFormProps {
  onSubmit: (data: WishFormData) => Promise<void>;
  initialData?: Partial<WishFormData>;
  isLoading?: boolean;
  isEdit?: boolean;
}

export interface WishListProps {
  wishes: Wish[];
  loading?: boolean;
  error?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
  sortBy?: SortBy;
  onSortChange?: (sort: SortBy) => void;
  filterType?: WishType | 'all';
  onFilterChange?: (type: WishType | 'all') => void;
}

export interface HeroProps {
  weddingInfo?: WeddingInfo;
  onWriteWish?: () => void;
  onViewWishes?: () => void;
}

export interface GalleryProps {
  images: string[];
  loading?: boolean;
  onImageClick?: (index: number) => void;
}

// 状态管理类型
export interface AppState {
  weddingInfo: WeddingInfo | null;
  wishes: Wish[];
  loading: boolean;
  error: string | null;
  filters: {
    wishType: WishType | 'all';
    sortBy: SortBy;
    search: string;
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}

export interface WishesState extends AppState {
  selectedWish: Wish | null;
  isSubmitting: boolean;
  uploadProgress: number;
}

// Action 类型
export type AppAction =
  | { type: 'SET_WEDDING_INFO'; payload: WeddingInfo }
  | { type: 'SET_WISHES'; payload: Wish[] }
  | { type: 'ADD_WISH'; payload: Wish }
  | { type: 'UPDATE_WISH'; payload: Wish }
  | { type: 'DELETE_WISH'; payload: string }
  | { type: 'LIKE_WISH'; payload: { wishId: string; increment: boolean } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_FILTER'; payload: Partial<AppState['filters']> }
  | { type: 'SET_PAGINATION'; payload: Partial<AppState['pagination']> }
  | { type: 'RESET_STATE' };

// Hook 类型
export interface UseWishesReturn {
  wishes: Wish[];
  loading: boolean;
  error: string | null;
  addWish: (wishData: WishFormData) => Promise<Wish>;
  updateWish: (id: string, wishData: Partial<WishFormData>) => Promise<Wish>;
  deleteWish: (id: string) => Promise<void>;
  likeWish: (id: string) => Promise<void>;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
  hasMore: boolean;
}

export interface UseWeddingInfoReturn {
  weddingInfo: WeddingInfo | null;
  loading: boolean;
  error: string | null;
  updateWeddingInfo: (data: Partial<WeddingInfo>) => Promise<WeddingInfo>;
}

// 验证 schema 类型 (用于 Zod 或其他验证库)
export interface WishValidationSchema {
  authorName: string; // min: 1, max: 100
  email?: string; // email format, optional
  phone?: string; // phone format, optional
  content: string; // min: 10, max: 1000
  wishType: WishType;
  images: File[]; // max: 5 files, max size: 5MB each
}

// 工具类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Supabase 数据库行类型转换辅助函数
export const mapWeddingInfoFromDB = (dbRow: Record<string, unknown>): WeddingInfo => ({
  id: dbRow.id as string,
  groomName: dbRow.groom_name as string,
  brideName: dbRow.bride_name as string,
  weddingDate: dbRow.wedding_date as string,
  venue: dbRow.venue as string,
  story: dbRow.story as string,
  coverImage: dbRow.cover_image as string,
  createdAt: dbRow.created_at as string,
  updatedAt: dbRow.updated_at as string,
});

export const mapWeddingInfoToDB = (weddingInfo: Partial<WeddingInfo>) => ({
  groom_name: weddingInfo.groomName,
  bride_name: weddingInfo.brideName,
  wedding_date: weddingInfo.weddingDate,
  venue: weddingInfo.venue,
  story: weddingInfo.story,
  cover_image: weddingInfo.coverImage,
});

export const mapWishFromDB = (dbRow: Record<string, unknown>): Wish => ({
  id: dbRow.id as string,
  authorName: dbRow.author_name as string,
  email: dbRow.email as string,
  phone: dbRow.phone as string,
  content: dbRow.content as string,
  wishType: dbRow.wish_type as WishType,
  images: (dbRow.images as string[]) || [],
  isApproved: dbRow.is_approved as boolean,
  likesCount: (dbRow.likes_count as number) || 0,
  repliesCount: (dbRow.replies_count as number) || 0,
  createdAt: dbRow.created_at as string,
  updatedAt: dbRow.updated_at as string,
});

export const mapWishToDB = (wish: Partial<WishFormData>) => ({
  author_name: wish.authorName,
  email: wish.email,
  phone: wish.phone,
  content: wish.content,
  wish_type: wish.wishType,
  images: wish.images || [],
});

export const mapWishReplyFromDB = (dbRow: Record<string, unknown>): WishReply => ({
  id: dbRow.id as string,
  wishId: dbRow.wish_id as string,
  authorName: dbRow.author_name as string,
  content: dbRow.content as string,
  isApproved: dbRow.is_approved as boolean,
  createdAt: dbRow.created_at as string,
});

export const mapWishReplyToDB = (reply: Partial<ReplyFormData>) => ({
  wish_id: reply.wishId,
  author_name: reply.authorName,
  content: reply.content,
});