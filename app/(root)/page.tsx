// app/(root)/page.tsx (修正後)
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/page-layout"; // ★ 作成したレイアウトコンポーネントをインポート

export default function HomePage() {
  return (
    // ★ PageLayout で全体をラップする
    <PageLayout>
      {/* ↓ ここからが PageLayout の children になる (固有のコンテンツ) */}
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        ホームページ
      </h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        ようこそ！Next.js と Tailwind CSS の世界へ。
      </p>
      <Link
        href="/login"
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        ログインはこちら
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      {/* ↑ ここまでが PageLayout の children */}
    </PageLayout>
  );
}