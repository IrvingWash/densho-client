import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DictionaryScreen } from "./screens/dictionary-screen/dictionary-screen";

export function renderGui(): void {
    const rootElement = document.getElementById("root");

    if (rootElement === null) {
        throw new Error("Failed to attach React to the root element");
    }

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <DictionaryScreen />
        </StrictMode>,
    );
}
