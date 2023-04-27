import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import path from "path";
import Jsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vue(), Unocss(), Jsx()],
});
