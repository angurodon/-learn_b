# 最新のBunの公式イメージを使用
FROM oven/bun:1.2.10

# 作業ディレクトリを設定
WORKDIR /opt/app

# パッケージリストをコピー
COPY package.json ./

# 依存関係のインストール（キャッシュを利用せず最新にするため）
RUN bun install --no-cache

# 開発サーバーを起動
CMD ["bun", "dev"]
