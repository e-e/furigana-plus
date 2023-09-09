import { Furigana } from "gem-furigana";
import { expression, hiragana, reading, readingHtml } from "./index";

const textBracket = "今日[きょう]は、ちょっと。。。";
const textRuby = "<ruby>今日<rt>きょう</rt></ruby>は、ちょっと。。。";

describe("from bracket notation", () => {
  it("reading", () => {
    expect(reading(textBracket)).toEqual(new Furigana(textBracket).Reading);
  });

  it("expression", () => {
    expect(expression(textBracket)).toEqual(
      new Furigana(textBracket).Expression,
    );
  });

  it("hiragana", () => {
    expect(hiragana(textBracket)).toEqual(new Furigana(textBracket).Hiragana);
  });

  it("readingHtml", () => {
    expect(readingHtml(textBracket)).toEqual(
      new Furigana(textBracket).ReadingHtml,
    );
  });
});

describe("from ruby notation", () => {
  it("reading", () => {
    expect(reading.fromRuby(textRuby)).toEqual(
      "今日[きょう]は、ちょっと。。。",
    );
  });

  it("expression", () => {
    expect(expression.fromRuby(textRuby)).toEqual("今日は、ちょっと。。。");
  });

  it("hiragana", () => {
    expect(hiragana.fromRuby(textRuby)).toEqual("きょうは、ちょっと。。。");
  });

  it("readingHtml", () => {
    expect(readingHtml.fromRuby(textRuby)).toEqual(
      "<ruby><rb>今日</rb><rt>きょう</rt></ruby>は、ちょっと。。。",
    );
  });
});
