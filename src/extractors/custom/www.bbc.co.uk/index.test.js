import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwBbcCoUkExtractor', () => {
    describe('initial test case', () => {
        let result;
        let url;
        beforeAll(() => {
            url =
                'https://www.bbc.co.uk/news/extra/IFtb42kkNv/boeing-two-deadly-crashes';
            const html = fs.readFileSync(
                './fixtures/www.bbc.co.uk/1634432199352.html'
            );
            result = Mercury.parse(url, { html, fallback: false });
        });

        it('is selected properly', () => {
            // This test should be passing by default.
            // It sanity checks that the correct parser
            // is being selected for URLs from this domain
            const extractor = getExtractor(url);
            assert.equal(extractor.domain, URL.parse(url).hostname);
        });

        it('returns the title', async() => {
            // To pass this test, fill out the title selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            const { title } = await result;

            // Update these values with the expected values from
            // the article.
            assert.equal(title, `What went wrong inside Boeing's cockpit?`);
        });

        it('returns the author', async() => {
            // To pass this test, fill out the author selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            const { author } = await result;

            // Update these values with the expected values from
            // the article.
            assert.equal(author, '');
        });

        it('returns the date_published', async() => {
            // To pass this test, fill out the date_published selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            const { date_published } = await result;

            // Update these values with the expected values from
            // the article.
            assert.equal(date_published, '');
        });

        it('returns the dek', async() => {
            // To pass this test, fill out the dek selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            const { dek } = await result;

            // Update these values with the expected values from
            // the article.
            assert.equal(dek, '');
        });

        it('returns the lead_image_url', async() => {
            // To pass this test, fill out the lead_image_url selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            const { lead_image_url } = await result;

            // Update these values with the expected values from
            // the article.
            assert.equal(
                lead_image_url,
                `https://news.files.bbci.co.uk/include/extra/shorthand/assets/news/IFtb42kkNv/assets/IXjlgYrG4c/6gdj77c-1920x1080.jpeg`
            );
        });

        it('returns the content', async() => {
            // To pass this test, fill out the content selector
            // in ./src/extractors/custom/www.bbc.co.uk/index.js.
            // You may also want to make use of the clean and transform
            // options.
            const { content } = await result;

            const $ = cheerio.load(content || '');

            const first13 = excerptContent(
                $('*')
                .first()
                .text(),
                13
            );

            // Update these values with the expected values from
            // the article.
            assert.equal(first13, 'Add the first 13 words of the article here');
        });
    });
});