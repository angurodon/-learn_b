// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'マイ Next.js アプリ',
  description: 'Next.js の学習用アプリです',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>共通ヘッダー</h1>
          <>-------------</>
        </header>
        <main>
          {children}
        </main>
        <footer>
        <>-------------</>
          <p>共通フッター</p>
        </footer>
      </body>
    </html>
  );
}