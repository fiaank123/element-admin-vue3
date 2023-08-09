
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";
const pathSrc = path.resolve(__dirname, "src");
// unplugin-auto-import	按需自动导入API	ref，reactive,watch,computed 等API
// unplugin-vue-components	按需自动导入组件	Element Plus 等三方库和指定目录下的自定义组件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  //相对路径别名配置，使用 @ 代替 src
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    plugins: [
      vue(),
      // UnoCSS({}),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],
        eslintrc: {
          enabled: false,
          filepath: "./.eslintrc-auto-import.json"
        },
        // resolvers: [
        //   // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        //   ElementPlusResolver(),
        //   IconsResolver({}),
        // ],
        // vueTemplate: true,
        // 配置文件生成位置(false:关闭自动生成)
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
        // dts: "src/types/auto-imports.d.ts",
      }),
      Components({
        dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
      }),
    ]
  };
});
