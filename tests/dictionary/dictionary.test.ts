import { describe, expect, test } from "vitest";
import { DictionaryEntry } from "../../src/dictionary/dictionary-entry";
import { Dictionary } from "../../src/dictionary/dictionary";

describe("Dictionary", () => {
    const entries: DictionaryEntry[] = [
        {
            kanji: "僕の夏休み",
            hiragana: "ぼくのなつやすみ",
            translation: "My summer break",
        },
        {
            kanji: "隣のトトロ",
            hiragana: "となりのととろ",
            translation: "My neighbor Totoro",
        },
    ];

    test("should be constructed with the passed entries", () => {
        const dictionary = new Dictionary(entries);

        expect(dictionary.entries().length).toEqual(2);
        expect(dictionary.entries()[1].kanji).toEqual("隣のトトロ");
    });

    test("should add the passed entry", () => {
        const dictionary = new Dictionary(entries);

        dictionary.addEntry({
            kanji: "花火",
            hiragana: "はなび",
            translation: "Fireworks",
        });

        expect(dictionary.entries().length).toEqual(3);
        expect(dictionary.entries()[2].translation).toEqual("Fireworks");
    });

    test("should remove the passed entry", () => {
        const dictionary = new Dictionary(entries);

        dictionary.addEntry({
            kanji: "花火",
            hiragana: "はなび",
            translation: "Fireworks",
        });

        dictionary.removeEntry(entries[1]);

        expect(dictionary.entries().length).toEqual(2);

        expect(dictionary.entries()).not.toContain(entries[1]);
    });
});
