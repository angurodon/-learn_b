// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider"; 


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Learn-bun",
  description: "Next.js の学習用アプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${notojp.variable} antialiased`}>
      <ThemeProvider // ThemeProvider は children を含む全体をラップする
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* ↓ children は ThemeProvider の *内側* に戻す */}
          {/* ↓ main タグでラップし、中央揃えと padding-top を適用 */}
          <main>
            {children}
          </main>
          {/* フッターなどをここに追加する場合は <main> の外、</ThemeProvider> の内側など */}
        </ThemeProvider>
      </body>
    </html>
  );
}