// app/(root)/page.tsx
import Link from "next/link"; // Link コンポーネントをインポート

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>ホームページ</h1>
      <p>ようこそ！</p>
      <Link href="/login">
        {" "}
        {/* /login ページへのリンク */}
        ログインはこちら
      </Link>
    </div>
  );
}
