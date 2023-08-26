"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingHtml = exports.hiragana = exports.expression = exports.reading = void 0;
const gem_furigana_1 = require("gem-furigana");
const reading = (text) => {
    console.log(gem_furigana_1.Furigana);
    console.log(typeof gem_furigana_1.Furigana);
    return new gem_furigana_1.Furigana(text).Reading;
};
exports.reading = reading;
const expression = (text) => {
    return new gem_furigana_1.Furigana(text).Expression;
};
exports.expression = expression;
const hiragana = (text) => {
    return new gem_furigana_1.Furigana(text).Hiragana;
};
exports.hiragana = hiragana;
const readingHtml = (text) => {
    return new gem_furigana_1.Furigana(text).ReadingHtml;
};
exports.readingHtml = readingHtml;
