<a name="VhVhD"></a>
# Vue 
安装
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
配置模板路径
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
创建一个tailwind.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```
main.js引入
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App).mount('#app')
```
