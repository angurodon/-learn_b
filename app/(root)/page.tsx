// app/(root)/page.tsx
import Link from "next/link"; // Link コンポーネントをインポート

export default function HomePage() {
  return (
    <div>
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
