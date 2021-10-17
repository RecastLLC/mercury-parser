const vanityFeature =
    'are independently selected by our editors. However, when you buy something through our retail links, we may earn an affiliate commission.';

const vanityCover = 'More Great Stories From Vanity Fair';

let condFinishVanity = false;

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
        transforms: {
            '.paywall': $node => {
                const $text = $node.text();
                if (condFinishVanity) {
                    $node.remove();
                }

                if ($text.includes(vanityFeature)) {
                    $node.remove();
                }

                if ($text === vanityCover) {
                    condFinishVanity = true;
                    $node.remove();
                }

                return $node;
            },
        },

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