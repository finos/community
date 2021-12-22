module.exports = {
  mainSidebar: {
    'OSS Journey': [
      "journey/learn",
      "journey/consume",
      "journey/engage",
      "journey/participate",
      "journey/lead"
    ],
    'Project Lifecycle': [
      "governance/Software-Projects/project-lifecycle",
      "governance/Software-Projects/contribution",
      "governance/Software-Projects/stages/incubating",
      "governance/Software-Projects/stages/active",
      "governance/Software-Projects/stages/archived"
    ],
    'Project Governance': [
      "focus-projects/intro",
      "governance/special-interest-groups/intro",
      "governance/Standards-Projects/intro",
      "governance/Software-Projects/code-transfer",
      "governance/Software-Projects/contribution-compliance-requirements",
      "governance/Software-Projects/easycla",
      "governance/Software-Projects/license-categories",
      "governance/Software-Projects/cve-responsible-disclosure",
      "meetups/intro",
    ],
    'Project Collaboration': [
      {
        type: 'category',
        label: 'Basics',
        items: [
          "odp/project-collaboration",
          "odp/development-infrastructure/project-documentation",
          "odp/finos-contributors-cheatsheet",
          "odp/finos-maintainers-cheatsheet",
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
              "odp/development-infrastructure/continuous-integration/intro",
              "odp/development-infrastructure/continuous-integration/clojure",
              "odp/development-infrastructure/continuous-integration/csharp",
              "odp/development-infrastructure/continuous-integration/java",
              "odp/development-infrastructure/continuous-integration/javascript",
              "odp/development-infrastructure/continuous-integration/python",
              'odp/development-infrastructure/continuous-delivery'
            ]
          },
          {
            type: 'category',
            label: 'Code Validations',
            items: [
            "odp/development-infrastructure/code-validation/intro",
            "odp/development-infrastructure/code-validation/bithound",
            "odp/development-infrastructure/code-validation/codeclimate",
            "odp/development-infrastructure/code-validation/coverityscan",
            "odp/development-infrastructure/code-validation/nodesecurity",
            "odp/development-infrastructure/code-validation/sonarcloud",
            "odp/development-infrastructure/code-validation/whitesource"
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Platforms',
        items: [
          "odp/platforms/legend-studio-shared",
          "odp/platforms/symphony-dev-pod"
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
    ]
  },
}
