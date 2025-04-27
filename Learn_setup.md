# Git関連

## リモートリポジトリの登録

- リモートリポジトリの登録
  -- リモートで向こうで最初に作っといてね

```zsh
git remote add origin https://github.com/angurodon/-learn_b.git
```

- 正しく登録されたか確認するには:

```zsh
git remote -v
```

## クリーンアップの動作確認

- セットアップ

```zsh
bun add -d typescript prettier husky eslint eslint-config-next
```

```zsh
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "typecheck": "tsc --noEmit",
    "clean": "git clean -xdf node_modules dist",
    "format": "prettier --check \"**/*.{ts,tsx,js,jsx,cjs,mjs,json,lintstagedrc,yml,yaml}\"",
    "format:fix": "prettier --write \"**/*.{ts,tsx,js,jsx,cjs,mjs,md,json,lintstagedrc,yml,yaml}\"",
    "prepare": "husky"
  }
```

```zsh
# node_modules や dist などのテンポラリーファイルが削除できる
bun run clean

# 再度インストール
bun i
```

## ESLint の動作確認

```zsh
bun run lint
```

## Prettier の動作確認

```zsh
# format の実行で、コードフォーマットが必要なファイルを列挙できる
bun run format
```

## tailwindの勉強

```zsh
https://tailwindcss.com/plus/ui-kit?ref=sidebar#pricing
```

## shadcn

```zsh
bunx --bun shadcn@latest add input
```
