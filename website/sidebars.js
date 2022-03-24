module.exports = {
  mainSidebar: {
    'OSS Journey': [
      "journey/learn",
      "journey/consume",
      "journey/engage",
      "journey/participate",
      "journey/lead",
    ],
    'Project Lifecycle': [
      "governance/Software-Projects/project-lifecycle",
      "governance/Software-Projects/contribution",
      "governance/Software-Projects/stages/incubating",
      "governance/Software-Projects/stages/active",
      "governance/Software-Projects/stages/archived"
    ],
    'Project Governance': [
      "governance/special-interest-groups/intro",
      "governance/Standards-Projects/intro",
      "governance/Software-Projects/code-transfer",
      "governance/Software-Projects/contribution-compliance-requirements",
      "governance/Software-Projects/easycla",
      "governance/Software-Projects/license-categories",
      "governance/Software-Projects/cve-responsible-disclosure",
    ],
    'Project Collaboration': [
      {
        type: 'category',
        label: 'Basics',
        items: [
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
            "development-infrastructure/code-validation/whitesource"
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Platforms',
        items: [
          "platforms/legend-studio-shared",
          "platforms/symphony-dev-pod"
        ]
      }  
    ],
    'FINOS Governance': [
      "governance/intro",
      "governance/board-election",
      "governance/charter",
      "governance/code-of-conduct",
      "governance/collaborative-principles",
      "governance/individual-supporter-program",
      "governance/meeting-procedures",
      "governance/project-branding-guidelines"
    ],
    'Growing Your Project Community':[
      "growing-your-project-community/meetups/finos-meetups",
      {
        type: 'category',
        label: 'FINOS Community Strategy',
        items: [
          "growing-your-project-community/finos-community-strategy/leveraging-finos-projects-sigs",
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
