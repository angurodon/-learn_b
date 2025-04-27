// components/sidebar.tsx
import Link from "next/link";
import {
  LayoutDashboard,
  Settings,
  UserRoundPen,
  AudioLines,
  MessagesSquare,
  History,
  PhoneCall,
  Wrench,
  Database,
  Mails,
  FolderDown,
  LogOut,
} from "lucide-react"; // アイコン例
import { cn } from "@/lib/utils"; // Shadcn UI のユーティリティ (あれば)
// import { Logo } from "./logo"; // ロゴを使う場合はインポート

export function Sidebar() {
  // サイドバーに表示するメニュー項目 (例)
  const routes = [
    { label: "お知らせ", icon: LayoutDashboard, href: "/dashboard" },
    { label: "音声認識リアルタイム", icon: AudioLines, href: "/faq" },
    { label: "内部チャット", icon: MessagesSquare, href: "/chat" },
    { label: "発着信履歴", icon: History, href: "/call-history" },
    { label: "ユーザー", icon: UserRoundPen, href: "/user" },
    { label: "電話設定", icon: PhoneCall, href: "/project" },
    { label: "ツール", icon: Wrench, href: "/hour" },
    { label: "通話データ", icon: Database, href: "/real-report" },
    { label: "SMS", icon: Mails, href: "/sms" },
    { label: "設定", icon: Settings, href: "/setting" }, // 仮のパス
    { label: "ソフトフォンダウンロード", icon: FolderDown, href: "/zip" }, // 仮のパス
    // 他のルートを追加...
  ];

  const logout = [{ label: "ログアウト", icon: LogOut, href: "/" }];

  return (
    // サイドバー本体
    <div
      className={cn(
        "h-full flex flex-col overflow-y-auto bg-gray-100 dark:bg-gray-900 shadow-md",
        "w-20 group-hover:w-64",
        "transition-all duration-300 ease-in-out",
      )}
    >
      <div className="p-14 flex items-center justify-center group-hover:justify-start h-16 border-b border-gray-200 dark:border-gray-700">
        {" "}
        {/* ボーダー色も確認 */}
        {/* ↓ 「メニュー」タイトルもモードに合わせて色を変更 */}
        <span className="text-lg font-semibold ml-3 text-gray-900 dark:text-white whitespace-nowrap overflow-hidden transition-opacity duration-200 delay-100">
          メニュー
        </span>
      </div>

      {/* ナビゲーションリンク */}
      <div className="flex flex-col p-2 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center p-3 rounded-lg text-sm font-medium",
              "hover:bg-gray-200 dark:hover:bg-gray-700", // ホバー時の背景色
              "transition-colors duration-150",
            )}
          >
            <route.icon
              className={cn(
                "h-6 w-6 flex-shrink-0 mr-3",
                "text-gray-900 dark:text-white",
              )}
            />

            <span
              className={cn(
                "whitespace-nowrap overflow-hidden",
                "text-gray-900 dark:text-white",
                "truncate",
                "opacity-0 group-hover:opacity-100", // ★ デフォルト非表示、日本語をホバーで表示
                "transition-opacity duration-200 delay-100",
              )}
            >
              {route.label}
            </span>
          </Link>
        ))}
      </div>

      {/* 下部の区切り線とログアウトボタン */}
      <div className="p-2 mt-auto border-t border-gray-200 dark:border-gray-700">
        {/* ログアウトボタン（リンク） */}
        {logout.map((logoutRoute) => (
          <Link
            key={logoutRoute.href}
            href={logoutRoute.href}
            // onClick={() => { /* 実際のログアウト処理（セッションクリア等）が必要な場合はここに追加 */ }}
            className={cn(
              "flex items-center p-3 rounded-lg text-sm font-medium",
              // "text-gray-700 dark:text-gray-200", // 色は内部で指定
              "hover:bg-gray-200 dark:hover:bg-gray-700", // ホバー時の背景色
              "transition-colors duration-150",
            )}
          >
            <logoutRoute.icon
              className={cn(
                "h-6 w-6 flex-shrink-0 mr-3",
                "text-gray-900 dark:text-white", // アイコンの色
              )}
            />
            <span
              className={cn(
                "whitespace-nowrap overflow-hidden",
                "text-gray-900 dark:text-white",
                "truncate",
                "opacity-0 group-hover:opacity-100", // ★ デフォルト非表示、日本語をホバーで表示
                "transition-opacity duration-200 delay-100",
              )}
            >
              {logoutRoute.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
