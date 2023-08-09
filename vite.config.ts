
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";
const pathSrc = path.resolve(__dirname, "src");

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
      vue()
    ]
  };
});
