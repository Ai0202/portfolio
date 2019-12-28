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

components/Header.vue
```js
<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ABOUT ME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>SKILLS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>WORKS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>PORTFOLIO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="https://github.com/Ai0202">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/Ai0202">
        <v-icon>mdi-linkedin-box</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>
```

App.vue
```js
<template>
  <v-app>
    <v-header />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";

export default {
  name: "App",
  components: {
    VHeader
  }
};
</script>

```

### フッター
components/Footer.vue
```js
<template>
  <v-footer absolute>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Daaike</strong>
    </v-col>
  </v-footer>
</template>
```

App.vue
```js
<template>
  <v-app>
    <v-header />
    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter
  }
};
</script>
```

### Works (過去の作品)
components/Work.vue
```js
<template>
  <v-card>
    <v-img src="https://placehold.jp/300x200.png" height="200px" aspect-ratio="1"></v-img>

    <v-card-title>Product Name</v-card-title>

    <v-card-subtitle>
      language and FW:
      <span class="font-weight-bold">PHP / Laravel</span>
    </v-card-subtitle>

    <v-card-text>description of product</v-card-text>

    <v-card-actions>
      <v-btn text color="accent">GitHub</v-btn>
      <v-btn text color="accent">Product</v-btn>
    </v-card-actions>
  </v-card>
</template>
```

App.vue
```js
<template>
  <v-app>
    <v-header />
    <v-container>
      <h2 class="d-block text-center display-1">WORKS</h2>
      <v-row>
        <v-col xs="12" wrap v-for="n in 3" :key="n">
          <v-work />
        </v-col>
      </v-row>
    </v-container>
    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";
import VWork from "@/components/Work";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
    VWork
  }
};
</script>
```
### メインビジュアル

### Skills


## ポートフォリオページの作成

# Vue + Vuetifyで作成したポートフォリオサイトにFirebaseを加える

## Firebaseのインストール