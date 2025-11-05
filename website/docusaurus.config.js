const projectName = 'Community'
const projectSlug = 'community'
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `FINOS ${projectName} documentation around governance, development infrastructure and best practices of our Community`, 
  url: 'https://finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  // fail build on broken links
  // onBrokenLinks: 'log',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    algolia: {
      // Algolia search configuration
      // Environment variables are set in Netlify dashboard
      appId: process.env.ALGOLIA_APP_ID || 'CTIC0AGXBA',
      apiKey: process.env.ALGOLIA_API_KEY || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'finos-community',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: `FINOS ${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        {to: "docs/journey/learn", label: 'Learn', position: 'right'},
        {to: "docs/journey/consume", label: 'Consume', position: 'right'},
        {to: "docs/journey/engage", label: 'Engage', position: 'right'},
        {to: "docs/journey/participate", label: 'Contribute', position: 'right'},
        {to: "docs/journey/lead", label: 'Lead', position: 'right'},
        {
          href: 'https://github.com/finos/community',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'FINOS Projects',
          items: [
            {
              label: 'FINOS Landscape',
              to: "https://landscape.finos.org",
            },
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Collaboration Infrastructure',
              to: "/docs/collaboration-infrastructure",
            }
          ]
        },
        {
          title: 'FINOS Governance',
          items: [
            {
              label: 'Community Governance',
              to: "/docs/governance",
            },
            {
              label: 'FINOS Funding Documents',
              to: "/docs/governance/funding-documents",
            },
            {
              label: 'Meeting Procedures',
              to: "/docs/governance/meeting-procedures",
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-Q2K0WLVFHP',
        anonymizeIP: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/community/edit/main/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
