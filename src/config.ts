export const SITE = {
    title: 'AmazingSite',                                                   /* Insert your website title here. It will appear on all pages. */
    description: 'Your website description',                                /* Insert your website description here. This is important for robots when they crawl your site */
    keywords: 'page, webpage, astro, development, multilanguage, site',     /* Site keywords to be used for search engines */
    copyright: 'My Company Ltd.',                                           /* Owner of the page copyrights */
    author: 'Jane Doe',                                                     /* The Page Author */
    'reply-to': 'webmaster@amazingsite.com',                                /* The default reply-to address of the site. Usually the webmaster */
};

export const OG_SEO = {
    image: {
        src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',      /* Path to your desired preview image of your site. Can be local to project. */
        alt:
            'astro logo on a starry expanse of space,' +
            ' with a purple saturn-like planet floating in the right foreground',                   /* Provide an alt text in case there is an issue with your preview image. */
    },
    twitter: 'astrodotbuild',                                                                       /* Provide twitter handle if applicable for OpenGraph meta tags */
};

export const KNOWN_LANGUAGES = {
    en : 'English',
    de: 'German',
    no: 'Norwegian',
};

export const TOPNAV = {                     /* Every translation that is re-used among pages like topnavs, footers, popups, etc */
    en: {                                   /* should be defined in this config.ts file                                         */
        'home' : 'Home',
        'products' : 'Our Products',
    },
    de: {
        'home' : 'Startseite',
        'products' : 'Unsere Produkte',
    },
    no: {
        'home' : 'Hjemmeside',
        'products' : 'Våre Produkter',
    },
};

export const FOOTER = {
    en: {
        'terms' : 'Terms & Conditions',
        'privacy': 'Privacy Policy',
        'copyright': 'All Rights Reserved.'
    },
    de: {
        'terms' : 'Geschäftsbedingungen',
        'privacy': 'Datenschutz-Bestimmungen',
        'copyright': 'Alle Rechte vorbehalten.'
    },
    no: {
        'terms' : 'Betingelser & Vilkår',
        'privacy': 'Personvernerklæring',
        'copyright': 'Alle Rettigheter Forbeholdt.'
    },
};

export function getLanguageFromPath(URL){
    const lang = URL.pathname.split("/")[1];
    return lang;
}

