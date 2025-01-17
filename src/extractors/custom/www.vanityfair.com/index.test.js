import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwVanityfairComExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://www.vanityfair.com/hollywood/2021/09/the-controversy-behind-the-scenes-of-dallas-buyers-club';
      const html =
        fs.readFileSync('./fixtures/www.vanityfair.com/1634423155753.html');
      result =
        Mercury.parse(url, { html, fallback: false });
    });

    it('is selected properly', () => {
      // This test should be passing by default.
      // It sanity checks that the correct parser
      // is being selected for URLs from this domain
      const extractor = getExtractor(url);
      assert.equal(extractor.domain, URL.parse(url).hostname)
    })

      it('returns the title', async () => {
    // To pass this test, fill out the title selector
    // in ./src/extractors/custom/www.vanityfair.com/index.js.
    const { title } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(title, `The Controversy Behind the Scenes of Dallas Buyers Club`)
  });

it('returns the author', async () => {
    // To pass this test, fill out the author selector
    // in ./src/extractors/custom/www.vanityfair.com/index.js.
    const { author } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(author, `Peter Staley`)
  });

it('returns the date_published', async () => {
    // To pass this test, fill out the date_published selector
    // in ./src/extractors/custom/www.vanityfair.com/index.js.
    const { date_published } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(date_published, `2021-09-30T13:00:00.000Z`)
  });

it('returns the dek', async () => {
    // To pass this test, fill out the dek selector
    // in ./src/extractors/custom/www.vanityfair.com/index.js.
    const { dek } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(dek, '')
  });

it('returns the lead_image_url', async () => {
    // To pass this test, fill out the lead_image_url selector
    // in ./src/extractors/custom/www.vanityfair.com/index.js.
    const { lead_image_url } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(lead_image_url, `https://media.vanityfair.com/photos/615480eb25fe269fb54aa323/16:9/w_1280,c_limit/dallas-buyers-club-2013-film-still.jpg`)
  });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/www.vanityfair.com/index.js.
      // You may also want to make use of the clean and transform
      // options.
      const { content } = await result;

      const $ = cheerio.load(content || '');

      const first13 = excerptContent($('*').first().text(), 13)

      // Update these values with the expected values from
      // the article.
      assert.equal(first13, 'Add the first 13 words of the article here');
    });
  });
});
