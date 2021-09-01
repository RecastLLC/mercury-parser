export const WwwTechnologyReviewComExtractor = {
  domain: 'www.technologyreview.com',

  title: {
    selectors: ['.content__headline'],
  },

  author: {
    selectors: [['span[class^="contentFooter__item"]', 'value']],
  },

  date_published: {
    selectors: [['meta[name="article:published_time"]', 'value']],
  },

  dek: {
    selectors: ['.content__standfirst'],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['div#content--body', '.content__article-body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    clean: ['figure.wp-block-image'],
  },
};
