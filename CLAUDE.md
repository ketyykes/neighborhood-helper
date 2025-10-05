# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

這是一個基於 **Next.js 15.4** 和 **React 19** 的現代化 Web 應用程式專案，使用 **TypeScript**、**Tailwind CSS v4** 和 **pnpm** 套件管理器。專案採用 App Router 架構，並整合了 Framer Motion、React Hook Form、SWR 等現代化前端工具。

## 開發指令

### 核心指令
```bash
# 啟動開發伺服器（使用 Turbopack）
pnpm dev

# 建置生產版本
pnpm build

# 啟動生產伺服器
pnpm start

# 執行 ESLint 程式碼檢查
pnpm lint
```

### Node.js 版本
專案指定使用 **Node.js 22.20.0**（見 `.node-version` 檔案）

## 專案架構

### 目錄結構
```
src/
├── app/                # Next.js App Router
│   ├── api/           # API 路由（目前為空）
│   ├── layout.tsx     # 根版面配置
│   ├── page.tsx       # 首頁
│   └── globals.css    # 全域樣式
├── components/
│   └── ui/            # UI 元件庫
│       └── Button.tsx # 按鈕元件
├── lib/               # 工具函式庫（待建立）
├── styles/            # 樣式檔案（待建立）
└── types/             # TypeScript 型別定義（待建立）
```

### 技術堆疊

#### 核心框架
- **Next.js 15.4.4** - React 框架，使用 App Router 和 Turbopack
- **React 19.1.0** - UI 函式庫
- **TypeScript 5** - 型別安全

#### 樣式方案
- **Tailwind CSS v4** - 實用優先的 CSS 框架
- **@tailwindcss/postcss** - PostCSS 外掛程式
- **Framer Motion** - 動畫函式庫
- **clsx** + **tailwind-merge** - 條件式類別名稱組合

#### 表單與資料處理
- **React Hook Form 7.61** - 表單狀態管理
- **Zod 4.0** - Schema 驗證
- **@hookform/resolvers** - React Hook Form 與 Zod 整合
- **SWR 2.3** - 資料擷取與快取

#### 字型
- **Geist Sans** 和 **Geist Mono** - Google Fonts

### 路徑別名
TypeScript 設定了路徑別名 `@/*` 指向 `./src/*`，可以使用：
```typescript
import { Something } from '@/components/...'
import { utils } from '@/lib/...'
```

### 樣式系統

#### Tailwind CSS v4 設定
- 使用新版 `@import "tailwindcss"` 語法（非 `@tailwind` 指令）
- 支援暗色模式（`prefers-color-scheme`）
- 使用 `@theme inline` 定義設計符號
- CSS 變數：`--background`、`--foreground`、`--font-geist-sans`、`--font-geist-mono`

#### 元件樣式模式
Button 元件展示了專案的樣式模式：
- 使用 `clsx` 和 `tailwind-merge` 的 `cn()` 工具函式
- 基於 variant 和 size 的變體系統
- 支援動畫效果（transform、scale、shadow）
- 圓角設計（`rounded-full`）
- 粉色/紫色主題色系

### UI 元件規範

#### Button 元件
位於 `src/components/ui/Button.tsx`，特點：
- **Variants**: `primary` (粉色)、`secondary` (紫色)、`outline`、`ghost`、`destructive` (紅色)
- **Sizes**: `sm`、`md`、`lg`、`xl`
- **功能**: 支援 loading 狀態、fullWidth 模式、disabled 狀態
- **動畫**: hover 時縮放 (scale-105)、陰影變化
- **使用 forwardRef**: 支援 ref 傳遞

## 開發注意事項

### 缺少的工具函式
Button 元件引用了 `@/lib/utils` 中的 `cn` 函式，但此檔案尚未建立。建議建立：

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### TypeScript 設定
- **Target**: ES2017
- **Strict Mode**: 啟用
- **JSX**: preserve（由 Next.js 處理）
- **Module Resolution**: bundler
- **Path Alias**: `@/*` → `./src/*`

### ESLint 設定
使用 Next.js 推薦的規則：
- `next/core-web-vitals`
- `next/typescript`

### 環境變數
- `.env.local` - 本機開發環境變數（已建立但為空）
- `.env.example` - 環境變數範例檔案（已建立但為空）

## 建立新功能的建議流程

1. **元件開發**: 在 `src/components/` 建立元件，UI 元件放在 `ui/` 子目錄
2. **頁面開發**: 在 `src/app/` 建立路由資料夾
3. **API 開發**: 在 `src/app/api/` 建立 API 路由
4. **型別定義**: 在 `src/types/` 定義共用型別
5. **工具函式**: 在 `src/lib/` 建立工具函式

## 部署考量

- 專案使用 Next.js，支援 Vercel 無縫部署
- 建置指令：`pnpm build`
- 輸出目錄：`.next/`
- 建議使用 Node.js 22.20.0 版本
