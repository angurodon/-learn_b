// components/page-layout.tsx
import React from 'react';

// このコンポーネントは props として children を受け取る
type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    // --- ページ全体のコンテナ (背景など) ---
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 dark:from-gray-900 dark:via-black dark:to-slate-900">
      {/* --- コンテンツカード --- */}
      {/* この中に可変のコンテンツ (children) を表示する */}
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-xl dark:bg-gray-800 md:p-20">
        {children} {/* ★ 受け取った children をここで表示 */}
      </div>

      {/* --- フッター情報など (共通) --- */}
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 マイアプリ. All rights reserved.</p>
      </footer>
    </div>
  );
}