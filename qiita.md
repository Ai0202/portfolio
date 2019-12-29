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

### Skills
components/Work.vue
```js
<template>
  <v-card :color="item.color" dark shaped>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">
          <v-icon left large>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-card-title>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>
```

App.vue
```js
<template>
  <v-app>
    <v-header />
    <v-container class="mt-6">
      <h2 class="d-block text-center display-1">WORKS</h2>
      <v-row class="justify-center mt-4">
        <v-col cols="10" sm="6" md="4" v-for="n in 3" :key="n">
          <v-work />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-6">
      <h2 class="d-block text-center display-1">SKILLS</h2>
      <v-row class="justify-center mt-4">
        <v-col cols="8" sm="4" md="3" v-for="(item, i) in items" :key="i">
          <v-skill :item="item" />
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
import VSkill from "@/components/Skill";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
    VWork,
    VSkill
  },
  data: () => ({
    items: [
      { color: "red", title: "HTML", icon: "mdi-language-html5" },
      { color: "blue", title: "CSS", icon: "mdi-language-css3" },
      { color: "red", title: "JavaScript", icon: "mdi-language-javascript" },
      {
        color: "green",
        title: "jQuery",
        icon: "mdi-jquery"
      },
      {
        color: "red",
        title: "Vue.js",
        icon: "mdi-vuejs"
      },
      { color: "brown", title: "PHP", icon: "mdi-language-php" },
      {
        color: "red",
        title: "Laravel",
        icon: "mdi-laravel"
      },
      { color: "red", title: "Sass", icon: "mdi-sass" },
      { color: "red", title: "Swift", icon: "mdi-language-swift" }
    ]
  })
};
</script>
```

### About me
components/AboutMe.vue
```js
<template>
  <v-container>
    <h2 class="d-block text-center display-1">ABOUT ME</h2>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="8" sm="6" class="text-center">
        <v-avatar size="200">
          <v-img src="https://placehold.jp/100x100.png" alt="Atsushi"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8" sm="6" class="text-center text-sm-left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda, facere perferendis molestiae illum quaerat, porro, magnam quo exercitationem corporis pariatur mollitia accusantium eum sequi dicta. Ipsum obcaecati a dignissimos?</p>
      </v-col>
    </v-row>
  </v-container>
</template>
```

App.vueは作成したコンポーネントを読み込むのみ

### メインビジュアル
components/MainVisual.vue
```js
<template>
  <v-container>
    <h2 class="d-block text-center display-1">ABOUT ME</h2>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="8" sm="6" class="text-center">
        <v-avatar size="200">
          <v-img src="https://placehold.jp/100x100.png" alt="Atsushi"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8" sm="6" class="text-center text-sm-left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda, facere perferendis molestiae illum quaerat, porro, magnam quo exercitationem corporis pariatur mollitia accusantium eum sequi dicta. Ipsum obcaecati a dignissimos?</p>
      </v-col>
    </v-row>
  </v-container>
</template>
```

App.vueは作成したコンポーネントを読み込むのみ

## ポートフォリオページの作成

# Vue + Vuetifyで作成したポートフォリオサイトにFirebaseを加える

## Firebaseのインストール