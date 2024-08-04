import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    resolve: {
        alias: {
            "@ui-kit": resolve(__dirname, "./src/ui-kit"),
            "@utils": resolve(__dirname, "./src/utils"),
        },
    },
    plugins: [react()],
});
