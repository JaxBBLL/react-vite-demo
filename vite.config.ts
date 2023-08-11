import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { vitePluginForArco } from "@arco-plugins/vite-react";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),
    react(),
    vitePluginForArco({
      // https://github.com/arco-design/arco-plugins/blob/main/packages/plugin-vite-react/README.zh-CN.md
      theme: "",
      iconBox: "",
      style: true,
      varsInjectScope: [],
    }),
  ],
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__dirname, "./"),
      // 设置别名
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 自定义arco的主题颜色
          "arcoblue-6": "#38f",
          hack: `true; @import (reference) "${path.resolve(
            "src/styles/var.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
