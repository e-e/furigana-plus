import { Furigana } from "gem-furigana";
import { rubyToBrackets } from "ruby-to-brackets/src/ruby-to-brackets";

interface FuriganaPlus {
  (text: string): string;
  fromRuby: (html: string) => string;
}

const reading: FuriganaPlus = (text: string): string => {
  return new Furigana(text).Reading;
};
reading.fromRuby = (html: string): string => {
  return new Furigana(rubyToBrackets(html)).Reading;
};

const expression: FuriganaPlus = (text: string): string => {
  return new Furigana(text).Expression;
};
expression.fromRuby = (html: string): string => {
  return new Furigana(rubyToBrackets(html)).Expression;
};

const hiragana: FuriganaPlus = (text: string): string => {
  return new Furigana(text).Hiragana;
};
hiragana.fromRuby = (html: string): string => {
  return new Furigana(rubyToBrackets(html)).Hiragana;
};

const readingHtml: FuriganaPlus = (text: string): string => {
  return new Furigana(text).ReadingHtml;
};
readingHtml.fromRuby = (html: string): string => {
  return new Furigana(rubyToBrackets(html)).ReadingHtml;
};

export { expression, hiragana, reading, readingHtml };
