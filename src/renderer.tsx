import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TopPanel } from "./hardware/top-panel/top-panel";

export function renderGui(): void {
    const rootElement = document.getElementById("root");

    if (rootElement === null) {
        throw new Error("Failed to attach React to the root element");
    }

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <TopPanel />
        </StrictMode>,
    );
}
