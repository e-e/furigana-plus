"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingHtml = exports.reading = exports.hiragana = exports.expression = void 0;
const gem_furigana_1 = require("gem-furigana");
const ruby_to_brackets_1 = require("ruby-to-brackets/src/ruby-to-brackets");
// const reading = Object.assign(
//   (text: string): string => {
//     return new Furigana(text).Reading;
//   },
//   {
//     fromRuby: (html: string): string => {
//       return new Furigana(rubyToBrackets(html)).Reading;
//     },
//   },
// );
const reading = (text) => {
    return new gem_furigana_1.Furigana(text).Reading;
};
exports.reading = reading;
reading.fromRuby = (html) => {
    return new gem_furigana_1.Furigana((0, ruby_to_brackets_1.rubyToBrackets)(html)).Reading;
};
// const expression:  = Object.assign(
//   (text: string): string => {
//     return new Furigana(text).Expression;
//   },
//   {
//     fromRuby: (html: string): string => {
//       return new Furigana(rubyToBrackets(html)).Expression;
//     },
//   },
// );
const expression = (text) => {
    return new gem_furigana_1.Furigana(text).Expression;
};
exports.expression = expression;
expression.fromRuby = (html) => {
    return new gem_furigana_1.Furigana((0, ruby_to_brackets_1.rubyToBrackets)(html)).Expression;
};
// const hiragana = Object.assign(
//   (text: string): string => {
//     return new Furigana(text).Hiragana;
//   },
//   {
//     fromRuby: (html: string): string => {
//       return new Furigana(rubyToBrackets(html)).Hiragana;
//     },
//   },
// );
const hiragana = (text) => {
    return new gem_furigana_1.Furigana(text).Hiragana;
};
exports.hiragana = hiragana;
hiragana.fromRuby = (html) => {
    return new gem_furigana_1.Furigana((0, ruby_to_brackets_1.rubyToBrackets)(html)).Hiragana;
};
// const readingHtml = Object.assign(
//   (text: string): string => {
//     return new Furigana(text).ReadingHtml;
//   },
//   {
//     fromRuby: (html: string): string => {
//       return new Furigana(rubyToBrackets(html)).ReadingHtml;
//     },
//   },
// );
const readingHtml = (text) => {
    return new gem_furigana_1.Furigana(text).ReadingHtml;
};
exports.readingHtml = readingHtml;
readingHtml.fromRuby = (html) => {
    return new gem_furigana_1.Furigana((0, ruby_to_brackets_1.rubyToBrackets)(html)).ReadingHtml;
};
