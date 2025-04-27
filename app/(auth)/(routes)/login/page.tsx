// app/(auth)/(routes)/login/page.tsx (修正後)
"use client"; // このページは状態を持つので 'use client' が必要

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/page-layout"; // ★ 作成したレイアウトコンポーネントをインポート
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const router = useRouter(); // 必要ならコメント解除

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }
    console.log("ログイン試行:", { email, password });
    alert(
      `ログイン情報:\nメールアドレス: ${email}\nパスワード: ${password}\n\n（ダミー処理）`,
    );
    // router.push('/');
  };

  return (
    // ★ PageLayout で全体をラップする
    <PageLayout>
      {/* ↓ ここからが PageLayout の children になる (固有のコンテンツ) */}
      <h1 className="mb-6 flex justify-center">
        <Logo /> {/* ★ Logo コンポーネントを配置 */}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        {" "}
        {/* space-y で要素間の垂直マージン、text-left でラベルを左揃え */}
        <div>
          {/* --- メールアドレス入力 --- */}
          <Label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            メールアドレス
          </Label>
          <Input // Shadcn/ui の Input を使う場合 (なければ通常の input タグにクラスを適用)
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            // 通常の input タグの場合のクラス例:
            // className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div>
          {/* --- パスワード入力 --- */}
          <Label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            パスワード
          </Label>
          <Input // Shadcn/ui の Input を使う場合
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            // 通常の input タグの場合のクラス例: (上記 email と同様)
          />
        </div>
        {/* --- エラーメッセージ表示 --- */}
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        {/* --- ログインボタン --- */}
        <Button // Shadcn/ui の Button を使う場合
          type="submit"
          className="w-full mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-gray-800"
          // 通常の button タグの場合のクラス例: (上記のクラスをそのまま適用)
        >
          ログイン
        </Button>
      </form>
      <a // <Button> の代わりに <a> タグを使用
        href="/dashboard"
        className="w-full mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-1 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-gray-800"
      >
        ダッシュボード
      </a>
      {/* ↑ ここまでが PageLayout の children */}
    </PageLayout>
  );
};

export default LoginPage;
