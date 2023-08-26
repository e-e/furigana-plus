"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingHtml = exports.hiragana = exports.expression = exports.reading = void 0;
// @ts-ignore
const gem_furigana_1 = __importDefault(require("gem-furigana"));
const reading = (text) => {
    return new gem_furigana_1.default(text).Reading;
};
exports.reading = reading;
const expression = (text) => {
    return new gem_furigana_1.default(text).Expression;
};
exports.expression = expression;
const hiragana = (text) => {
    return new gem_furigana_1.default(text).Hiragana;
};
exports.hiragana = hiragana;
const readingHtml = (text) => {
    return new gem_furigana_1.default(text).ReadingHtml;
};
exports.readingHtml = readingHtml;
