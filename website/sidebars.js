module.exports = {
  mainSidebar: {
    'OSS Journey': [
      "journey/learn",
      "journey/consume",
      "journey/engage",
      "journey/participate",
      "journey/lead",
    ],
    'FINOS Governance': [
      "governance/intro",
      {
        type: 'category',
        label: 'Corporate Governance',
        items: [
          "governance/funding-documents",
          "governance/board-election",
          "governance/code-of-conduct",
          "governance/individual-supporter-program",
          "governance/project-branding-guidelines"
        ]
      },
      {
        type: 'category',
        label: 'Software Project Governance',
        items: [
          {
            type: "link", 
            label: "Intro",
            href:"/docs/governance/#open-source-software-projects"
          },
          "governance/Software-Projects/contribution",
          "governance/Software-Projects/code-transfer",
          "governance/Software-Projects/contribution-compliance-requirements",
          "governance/Software-Projects/easycla",
          "governance/Software-Projects/license-categories",
          "governance/Software-Projects/cve-responsible-disclosure",
          {
            type: 'category',
            label: 'Project Lifecycle',
            items: [
              'governance/Software-Projects/project-lifecycle',
              "governance/Software-Projects/stages/incubating",
              "governance/Software-Projects/stages/active",
              "governance/Software-Projects/stages/archived"
            ]
          }
        ]
      },
       {
        type: "link", 
        label: "Standard Projects Governance",
        href:"/docs/governance/#open-standard-projects"
      },      
      "governance/special-interest-groups/intro",
      "governance/meeting-procedures"
    ],
    'Project Collaboration': [
      {
        type: 'category',
        label: 'Basics',
        items: [
          "governance/collaborative-principles",
          "collaboration-infrastructure",
          "development-infrastructure/project-documentation",
          "finos-contributors-cheatsheet",
          "finos-maintainers-cheatsheet",
        ]
      },
      {
        type: 'category',
        label: 'Tooling',
        items: [
          {
            type: 'category',
            label: 'CI/CD',
            items: [
              "development-infrastructure/continuous-integration/intro",
              "development-infrastructure/continuous-integration/clojure",
              "development-infrastructure/continuous-integration/csharp",
              "development-infrastructure/continuous-integration/java",
              "development-infrastructure/continuous-integration/javascript",
              "development-infrastructure/continuous-integration/python",
              'development-infrastructure/continuous-delivery'
            ]
          },
          {
            type: 'category',
            label: 'Code Validations',
            items: [
            "development-infrastructure/code-validation/intro",
            "development-infrastructure/code-validation/bithound",
            "development-infrastructure/code-validation/codeclimate",
            "development-infrastructure/code-validation/coverityscan",
            "development-infrastructure/code-validation/nodesecurity",
            "development-infrastructure/code-validation/sonarcloud",
            "development-infrastructure/code-validation/sonatype",
            "development-infrastructure/code-validation/whitesource",
            ]
          }
        ]
      },
      {
        type: 'doc',
        id: 'project-sandbox'
      }  
    ],
    'Grow Your Project Community':[
      "growing-your-project-community/meetups/finos-meetups",
      {
        type: 'category',
        label: 'Best Practices',
        items: [
          "growing-your-project-community/finos-community-strategy/leveraging-finos-projects-sigs",
          "growing-your-project-community/finos-community-strategy/finos-community-2022-strategic-overview",
          "growing-your-project-community/finos-community-strategy/communicate-why-and-how",
          "growing-your-project-community/finos-community-strategy/provide-an-amazing-engineering-experience",
          "growing-your-project-community/finos-community-strategy/coordinate-work",
          "growing-your-project-community/finos-community-strategy/create-an-open-profile",
          "growing-your-project-community/finos-community-strategy/measure-finos-project-and-sig-success",
          "growing-your-project-community/finos-community-strategy/recognise-community-achievements",
          "growing-your-project-community/finos-community-strategy/ensure-finos-project-security", 
        ]
      },
    ]
  }
}
