import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DictionaryView } from "./gui/dictionary-view/dictionary-view";
import { DictionaryViewModel } from "./gui/dictionary-view/dictionary-view-model";
import { Dictionary } from "./dictionary/dictionary";

export function renderGui(): void {
    const rootElement = document.getElementById("root");

    if (rootElement === null) {
        throw new Error("Failed to attach React to the root element");
    }

    const root = createRoot(rootElement);

    const model = new DictionaryViewModel(new Dictionary([
        { id: "1", createdAt: 123, kanji: "花火", kana: "はなび", translation: "Fireworks" },
        { id: "2", createdAt: 123, kanji: "花火", kana: "はなび", translation: "Fireworks" },
        { id: "3", createdAt: 123, kanji: "花火", kana: "はなび", translation: "Fireworks" },
    ]));

    root.render(
        <StrictMode>
            <DictionaryView model={ model } />
        </StrictMode>,
    );
}
