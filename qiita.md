# Vue + Vuetifyでポートフォリオサイトを作成してNetlifyで公開

## 事前準備
- Vue CLIのインストール
- netlifyのユーザー登録

## Vue.jsのプロジェクト作成
```
vue create portfolio

Generate project in current directory? (Y/n) yes

? Please pick a preset: default (babel, eslint)
```

### 動作確認
`npm run serve` を実行し、表示されたURLにブラウザからアクセス
以下の画面が表示されていればOKです。
確認ができたらターミナルで、 `ctrl + c` を押してサーバを止めます。

## Vuetifyのインストール
```
vue add vuetify

? Choose a preset: Default (recommended)
```

### 動作確認
`npm run serve` を実行し、表示されたURLにブラウザからアクセス
以下の画面が表示されていればOKです。




## その他必要なライブラリのインストール
```
npm i -D vue-router
```

## 不要なファイルの削除
- `HelloWorld.vue` ファイルの削除
- `App.vue` を以下のように修正
```js
<template>
  <v-app></v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

```

## TOPページの作成
### ヘッダー

### メインビジュアル

### Skills

### Works (過去の作品)

### フッター


## ポートフォリオページの作成

# Vue + Vuetifyで作成したポートフォリオサイトにFirebaseを加える

## Firebaseのインストール