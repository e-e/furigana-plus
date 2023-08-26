// @ts-ignore
import Furigana from "gem-furigana";

export const reading = (text: string): string => {
  return new Furigana(text).Reading;
};

export const expression = (text: string): string => {
  return new Furigana(text).Expression;
};

export const hiragana = (text: string): string => {
  return new Furigana(text).Hiragana;
};

export const readingHtml = (text: string): string => {
  return new Furigana(text).ReadingHtml;
};
