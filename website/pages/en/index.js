/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/docusaurus.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('projects')}>Call for Projects</Button>
            <Button href="https://github.com/finos-deg/finos-deg">GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <MarkdownBlock>...</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: "<p>Discussion happens on the mailing list. <br>Send a blank <a href='mailto:deg+subscribe@finos.org'>email</a> to join or read the <a href='https://groups.google.com/a/finos.org/forum/#!forum/deg'>archives</a>.</p><p>We meet virtually once per quarter to share progress and exchange ideas, and you don't need to be a member to join the conversation. Check the <a href='https://calendar.google.com/calendar/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig%40group.calendar.google.com&ctz=America%2FNew_York'>calendar</a> for details.</p>",
            image: `${baseUrl}img/deg-logo-white.png`,
            imageAlign: 'left',
            title: 'The Decentralized Ecosystem Growth program is a welcoming place for people interested in decentralized finance to meet, learn, and build.',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              "Welcome to the collaboration space for the Decentralized Ecosystem Growth Program!  This Program was formed to aggregate, develop, and integrate tools that facilitate coordination of decentralized applications across financial firms and existing ecosystems. Best practices and promising architectures may be proposed and circulated, but the goal is not to create top-down standards documents. Instead, we will work together to ensure there is concrete code, open-sourced both within FINOS and across various member and non-member firms' repositories, which work together to reduce time-to-market for decentralized financial applications.",
            image: `${baseUrl}img/deg-logo-white.png`,
            imageAlign: 'right',
            title: 'this one',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: "our mission",
            image: `${baseUrl}img/deg-logo-white.png`,
            imageAlign: 'right',
            title: 'Mission',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block background="light" layout="fourColumn">
        {[
          {
            content: "We build tools that make decentralized finance work for banks, businesses, regulators, clients, and customers.",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Develop Tools',
          },
          {
            content: "We identify long-standing challenges in the financial industry that we can solve in new ways.",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Think Differently',
          },
          {
            content: "We learn from each other and we create space for diverse perspectives to flourish.",
            image: `${baseUrl}img/check-box.svg`,
            imageAlign: 'top',
            title: 'Build Community',
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is participating to Decentralized Ecosystem Growth?</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TryOut />
          {/* <LearnHow />*/}
          {/* <Description />*/}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
