export const WwwVanityfairComExtractor = {
    domain: 'www.vanityfair.com',

    title: {
        selectors: [
            // enter title selectors
        ],
    },

    author: {
        selectors: [
            // enter author selectors
        ],
    },

    date_published: {
        selectors: [
            // enter selectors
        ],
    },

    dek: {
        selectors: [
            // enter selectors
        ],
    },

    lead_image_url: {
        selectors: [
            // enter selectors
        ],
    },

    content: {
        selectors: [
            'article.article.main-content',
            'article.content',
            // enter content selectors
        ],

        // Is there anything in the content you selected that needs transformed
        // before it's consumable content? E.g., unusual lazy loaded images
        transforms: [],

        // Is there anything that is in the result that shouldn't be?
        // The clean selectors will remove anything that matches from
        // the result
        clean: [
            '.visually-hidden',
            'figcaption img.photo',
            'header.content-header',
            'figure',
            'aside',
        ],
    },
};