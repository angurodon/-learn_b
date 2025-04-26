"use client";

import React, { useState } from "react"; // useState をインポート
import { useRouter } from "next/navigation"; // ルーターフックをインポート

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルト送信動作をキャンセル
    setError(""); // エラーメッセージをクリア

    // 簡単なバリデーション (任意)
    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }

    // --- Backend 連携部分 (今回はダミー処理) ---
    console.log("ログイン試行:", { email, password });
    // ここで実際のAPIコールなどを行う

    // ダミー: ログイン成功と仮定してホームページにリダイレクト
    console.log("ログイン成功（ダミー）。ホームページにリダイレクトします。");
    // router.push('/'); // ホームページ ('/') へ遷移
    alert(
      `ログイン情報:\nメールアドレス: ${email}\nパスワード: ${password}\n\n（本来ならここでサーバーに送信します）\nホームページへのリダイレクトはコメントアウトしています。`,
    );
    // router.push('/'); // 必要に応じてコメントアウトを解除
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">パスワード:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;
