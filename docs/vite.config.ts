import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
import commpressPlugin from "vite-plugin-compression"
import { visualizer } from "rollup-plugin-visualizer"
import vueJsx from "@vitejs/plugin-vue-jsx"
import autoprefixer from 'autoprefixer'
import autoName from '../plugins/vite-auto-name-plugin'
import vitePluginDts from 'vite-plugin-dts'
import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoName(),
    vitePluginDts({
      outputDir:'dist',
      staticImport:true,
      insertTypesEntry:true,
      exclude:['auto-imports.d.ts','components.d.ts']
    }),
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
    commpressPlugin({
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: "gzip", //压缩算法
      ext: ".gz" //文件类型
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "buildSize.html", //分析图生成的文件名
      open: false //如果存在本地服务端口，将在打包后自动展示
    })
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "packages"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] ,
  },
  build: {
    assetsInlineLimit: 4096,
    // sourcemap:true,
    lib: {
      entry: './packages/index.ts',
      name: 'notel-ui',
      fileName: (format) => `notel.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports:'named'
      }
    }
  }
})
