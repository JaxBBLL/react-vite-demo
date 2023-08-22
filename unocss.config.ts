import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  presets: [
    presetRemToPx({
      baseFontSize: 4, // 1单位 = 0.25rem = 1px
    }),
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
  ],
  shortcuts: [["wh-full", "w-full h-full"]],
  rules: [],
  theme: {
    colors: {
      primary: "var(--primary-color)",
    },
  },
});
