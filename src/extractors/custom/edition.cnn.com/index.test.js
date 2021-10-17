import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('EditionCnnComExtractor', () => {
  describe('initial test case', () => {
    let result;
    let url;
    beforeAll(() => {
      url =
        'https://edition.cnn.com/2019/01/19/us/jayme-closs-case-moment-by-moment/index.html';
      const html =
        fs.readFileSync('./fixtures/edition.cnn.com/1634425930891.html');
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
    // in ./src/extractors/custom/edition.cnn.com/index.js.
    const { title } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(title, `The Jayme Closs case: A chilling tale of murder, kidnapping and escape in rural America`)
  });

it('returns the author', async () => {
    // To pass this test, fill out the author selector
    // in ./src/extractors/custom/edition.cnn.com/index.js.
    const { author } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(author, '')
  });

it('returns the date_published', async () => {
    // To pass this test, fill out the date_published selector
    // in ./src/extractors/custom/edition.cnn.com/index.js.
    const { date_published } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(date_published, `2019-01-19T14:23:33.000Z`)
  });

it('returns the dek', async () => {
    // To pass this test, fill out the dek selector
    // in ./src/extractors/custom/edition.cnn.com/index.js.
    const { dek } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(dek, '')
  });

it('returns the lead_image_url', async () => {
    // To pass this test, fill out the lead_image_url selector
    // in ./src/extractors/custom/edition.cnn.com/index.js.
    const { lead_image_url } = await result

    // Update these values with the expected values from
    // the article.
    assert.equal(lead_image_url, `https://cdn.cnn.com/cnnnext/dam/assets/181016130437-02-ayme-closs-missing-wisconsin-super-tease.jpg`)
  });

    it('returns the content', async () => {
      // To pass this test, fill out the content selector
      // in ./src/extractors/custom/edition.cnn.com/index.js.
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
