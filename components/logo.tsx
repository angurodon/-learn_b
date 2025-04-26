import Image from "next/image";

export function Logo() {
  return (
    // shadow-md や shadow-lg などを追加
    <div className="hidden items-center gap-x-2 md:flex shadow-lg rounded-full"> {/* 例: 丸い影をつける場合 */}
      <Image src="/images/logo.png" height="150" width="150" alt="Natuyoi" className="rounded-full" /> {/* 画像も丸くする場合 */}
    </div>
  );
}