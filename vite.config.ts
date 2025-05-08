import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import zipPack from "vite-plugin-zip-pack";

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      vue(),
      zipPack({
        outDir: "dist-zip",
        inDir: "dist",
        outFileName: "wedding.zip",
      }),
    ],
    server: {
      proxy: {
        [env.VITE_API_BASE_URL]: {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), ""),
        },
      },
    },
    build: {
      outDir: "dist/wedding",
    },
  };
});
