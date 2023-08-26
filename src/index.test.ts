import { Furigana } from "gem-furigana";
import { expression, hiragana, reading, readingHtml } from "./index";

const text = "今日[きょう]は、ちょっと。。。";

it("reading", () => {
  expect(reading(text)).toEqual(new Furigana(text).Reading);
});

it("expression", () => {
  expect(expression(text)).toEqual(new Furigana(text).Expression);
});

it("hiragana", () => {
  expect(hiragana(text)).toEqual(new Furigana(text).Hiragana);
});

it("readingHtml", () => {
  expect(readingHtml(text)).toEqual(new Furigana(text).ReadingHtml);
});
