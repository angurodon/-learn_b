// app/dashboard/layout.tsx
import React from "react";
import { Sidebar } from "@/components/sidebar"; // 作成したサイドバーをインポート

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-black">
      {/* サイドバーエリア */}
      {/* group クラスをここに追加してホバーを検知 */}
      <div className="group hidden md:flex md:flex-shrink-0">
        {/* サイドバーを固定配置 (sticky or fixed) */}
        <div className="sticky top-0 h-screen">
          {" "}
          {/* または fixed inset-y-0 left-0 */}
          <Sidebar />
        </div>
      </div>

      {/* メインコンテンツエリア */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
        {/* ★ md以上でサイドバーが表示されることを考慮し、左パディングを追加 */}
        {/* サイドバーの閉じた幅 (w-20 = 5rem) に合わせる */}
        <div className="md:pl-20">
          {" "}
          {/* 小さい画面ではパディング不要、md以上で適用 */}
          {/* ヘッダーとの重なり防止用の padding-top も必要に応じて追加 */}
          {/* <div className="md:pl-20 pt-16 md:pt-20"> */}
          {children}
        </div>
      </main>
    </div>
  );
}
