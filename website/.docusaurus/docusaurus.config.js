export default {
  "title": "Mural",
  "tagline": "Visual storytelling made easy",
  "url": "https://www.getmural.io",
  "baseUrl": "/",
  "organizationName": "Mural Software s.r.o.",
  "projectName": "mural-website",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700",
    "https://cdn-images.mailchimp.com/embedcode/classic-10_7.css",
    {
      "href": "/css/carousel.min.css",
      "type": "text/css"
    }
  ],
  "favicon": "img/favicon.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Mural",
      "logo": {
        "src": "img/logo_small.svg"
      },
      "items": [
        {
          "to": "/download",
          "label": "Download",
          "position": "left"
        },
        {
          "to": "/stories",
          "label": "Stories",
          "position": "left"
        },
        {
          "to": "docs/intro",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "image": "uploads/mural_website/photographer_ice_sunrise.jpg",
    "footer": {
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "How it works",
              "to": "docs/how-it-works"
            },
            {
              "label": "Getting Started",
              "to": "docs/getting-started"
            },
            {
              "label": "Mural Items",
              "to": "docs/metadata"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "to": "https://discord.gg/KVwhfjHunE"
            },
            {
              "label": "Reddit",
              "to": "https://www.reddit.com/r/getmural"
            },
            {
              "label": "Twitter",
              "to": "https://twitter.com/muralstories"
            },
            {
              "label": "Facebook",
              "to": "https://www.facebook.com/getmural"
            }
          ]
        },
        {
          "title": "Contact Us",
          "items": [
            {
              "html": "<address><strong>Mural Software s.r.o.</strong><br/>Bubenečská 496/53<br/>160 00 Prague 6<br/>Czech Republic</address>"
            },
            {
              "label": "+420 724 073 364",
              "to": "tel:+420724073364"
            },
            {
              "label": "info@getmural.io",
              "to": "mailto://info@getmural.io"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Github",
              "to": "https://github.com/GetMural/Mural"
            },
            {
              "label": "Privacy Policy",
              "to": "privacy"
            },
            {
              "label": "Cookies Policy",
              "to": "cookies"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Mural Software s.r.o.",
      "logo": {
        "src": "img/logo_small.svg"
      },
      "style": "light"
    },
    "gtag": {
      "trackingID": "UA-119779433-1"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};