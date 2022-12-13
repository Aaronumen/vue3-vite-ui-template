import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
import vueJsx from "@vitejs/plugin-vue-jsx"
import autoprefixer from 'autoprefixer'
import autoName from '../plugins/vite-auto-name-plugin'
import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoName(),
    vueJsx({}),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        // 插件预设支持导入的api
        "vue",
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: "./auto-imports.d.ts"
    }),
  ],
  css: {
    postcss:{
      plugins:[
        postCssPxToRem({
          rootValue: 14,// 1rem 的大小
          propList: ['*']
      }),
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
        ],
        grid: true
      })]
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('./styles/global.less')}";`,
        },
      },
    }
  },
})
