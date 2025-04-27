// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="pt-30">
      <h1 className="text-2xl font-semibold mb-4">ダッシュボード</h1>
      <p>ダミー</p>
      {/* たくさんのコンテンツを配置してスクロールを確認 */}
      <div className="mt-8 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            ダミーコンテンツ {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
