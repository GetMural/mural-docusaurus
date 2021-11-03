/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true,
  },
];

const siteConfig = {
  title: "Mural", // Title for your website.
  tagline: "Visual storytelling made easy",
  url: "https://www.getmural.io", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "mural-website",
  organizationName: "Mural Software s.r.o.",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "download", label: "Download" },
    { page: "stories", label: "Stories" },
    { doc: "intro", label: "Docs" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo_small.svg",
  footerIcon: "img/logo_small.svg",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#343866",
    primaryDark: "#05133b",
    primaryLight: "#616294",
    secondaryColor: "#44805A",
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Mural Software s.r.o.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "uploads/mural_website/photographer_ice_sunrise.jpg",
  twitterImage: "uploads/mural_website/photographer_ice_sunrise.jpg",
  twitterUsername: "muralstories",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/GetMural/Mural",
  discordUrl: "https://discord.gg/KVwhfjHunE",
  redditUrl: "https://www.reddit.com/r/getmural",
  fbPage: "https://www.facebook.com/getmural",
  gaTrackingId: "UA-119779433-1",

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700",
    "https://cdn-images.mailchimp.com/embedcode/classic-10_7.css",
  ],
};

// colours
// red #ff0000
// yellow #fcd700
// green #a3e0bb

module.exports = siteConfig;
