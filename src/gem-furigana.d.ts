declare module "gem-furigana" {
  export class Furigana {
    constructor(text: string);
    public Expression: string;
    public Reading: string;
    public Hiragana: string;
    public ReadingHtml: string;
  }
}
