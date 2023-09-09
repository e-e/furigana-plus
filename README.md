Simple wrapper around the [gem-furigana](https://github.com/helephant/Gem) package

## API
```ts
import { reading, expression, hiragana, readingHtml } from 'furigana-plus';

reading('今日[きょう]は、ちょっと。。。'); // => 今日[きょう]は、ちょっと。。。
expression('今日[きょう]は、ちょっと。。。'); // => 今日は、ちょっと。。。
hiragana('今日[きょう]は、ちょっと。。。'); // => きょうは、ちょっと。。。
readingHtml('今日[きょう]は、ちょっと。。。'); // => <ruby><rb>今日</rb><rt>きょう</rt></ruby>は、ちょっと。。。

// from HTML Ruby notation
reading.fromRuby("<ruby>今日<rt>きょう</rt></ruby>は、ちょっと。。。"); // => 今日[きょう]は、ちょっと。。。
expression.fromRuby("<ruby>今日<rt>きょう</rt></ruby>は、ちょっと。。。"); // => 今日は、ちょっと。。。
hiragana.fromRuby("<ruby>今日<rt>きょう</rt></ruby>は、ちょっと。。。"); // => きょうは、ちょっと。。。
// redundant, but supported
readingHtml.fromRuby("<ruby>今日<rt>きょう</rt></ruby>は、ちょっと。。。"); // => <ruby><rb>今日</rb><rt>きょう</rt></ruby>は、ちょっと。。。
```