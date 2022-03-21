import assert from 'assert';
import cheerio from 'cheerio';
import { excerptContent } from 'utils/text';

import Mercury from 'mercury';

const fs = require('fs');

describe('NYMagExtractor', () => {
  it('works with a feature story', async () => {
    const html = fs.readFileSync('./fixtures/nymag.com/ailes.html');
    const uri =
      'http://nymag.com/daily/intelligencer/2016/09/how-fox-news-women-took-down-roger-ailes.html';

    const { dek, title, author } = await Mercury.parse(uri, html);
    const actualDek =
      'How Fox News women took down the most powerful, and predatory, man in media.';

    assert.equal(dek, actualDek);
    assert.equal(title, 'The Revenge of Roger’s Angels');
    assert.equal(author, 'Gabriel Sherman');
  });

  it('should succesfully get start of the article', async () => {
    const html = fs.readFileSync(
      './fixtures/nymag.com/wirecutter-strike-new-york-times.html'
    );
    const uri =
      'https://nymag.com/intelligencer/2021/11/wirecutter-strike-new-york-times.html';
    const { content } = await Mercury.parse(uri, { html });

    const $ = cheerio.load(content || '');

    const first13 = excerptContent(
      $('*')
        .first()
        .text(),
      13
    );

    assert.equal(
      first13,
      'In October 2016, Wirecutter, a scrappy website that uses journalism to help people'
    );
  });
});
