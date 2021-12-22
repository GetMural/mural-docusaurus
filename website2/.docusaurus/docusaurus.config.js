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
  "customFields": {
    "repoUrl": "https://github.com/GetMural/Mural",
    "discordUrl": "https://discord.gg/KVwhfjHunE",
    "redditUrl": "https://www.reddit.com/r/getmural",
    "fbPage": "https://www.facebook.com/getmural"
  },
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
          "to": "/coilcommisions",
          "label": "Coil Commissions",
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
        }
      ],
      "hideOnScroll": false
    },
    "image": "uploads/mural_website/photographer_ice_sunrise.jpg",
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/muralstories"
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