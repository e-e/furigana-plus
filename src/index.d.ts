interface FuriganaPlus {
    (text: string): string;
    fromRuby: (html: string) => string;
}
declare const reading: FuriganaPlus;
declare const expression: FuriganaPlus;
declare const hiragana: FuriganaPlus;
declare const readingHtml: FuriganaPlus;
export { expression, hiragana, reading, readingHtml };
