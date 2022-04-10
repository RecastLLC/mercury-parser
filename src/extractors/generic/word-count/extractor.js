import cheerio from 'cheerio';
import wordCount from 'html-word-count';

import { normalizeSpaces } from 'utils/text';

const GenericWordCountExtractor = {
  extract({ content }) {
    const $ = cheerio.load(content);
    const $content = $('div').first();

    const text = normalizeSpaces($content.text());
    return text.split(/\s/).length;
  },
  extractWitPackage({ content }) {
    return wordCount(content);
  },
};

export default GenericWordCountExtractor;
