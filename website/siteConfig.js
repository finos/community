// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const users = [
  { caption: 'Rbo Underwood, Director of Programs', pinned: true },
  { caption: 'Aitana Myohl, Community Support Specialist', pinned: true }
];

const siteConfig = {
  title: 'FINOS Pan Program Management Committees',
  tagline: 'Cross Programs and Project Collaboration Work',
  url: 'https://pmcs.finos.org',
  cname: 'pmcs.finos.org',
  baseUrl: '/',
  projectName: 'finos-pmcs',
  organizationName: 'finos-pmcs',
  headerLinks: [
    {doc: 'learn-more', label: 'Learn More'},
    {doc: 'meetings', label: 'Meetings'},
    { blog: true, label: 'News' },
  ],
  headerIcon: 'img/finos-white.png',
  footerIcon: 'img/finos.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#00b5e2',
    secondaryColor: '#205C3B',
  },

  // If you have users set above, you add it here:
  users,

  copyright: `Copyright © ${new Date().getFullYear()} FINOS - The Fintech Opensource Foundation`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  twitterUsername: 'finos',
  // Open Graph and Twitter card images.
  ogImage: 'img/deg-logo-white.png',
  twitterImage: 'img/deg-logo-white.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/finos/finos-pmcs'
};

module.exports = siteConfig;
