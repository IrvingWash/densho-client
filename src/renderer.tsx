import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export function renderGui(): void {
    const rootElement = document.getElementById("root");

    if (rootElement === null) {
        throw new Error("Failed to attach React to the root element");
    }

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <div>Hello, world</div>
        </StrictMode>,
    );
}
