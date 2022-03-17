import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <meta charset="UTF-8"></meta>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">FINOS</h1>
          <p className={classnames('hero--subtitle')}>Community Website</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'/docs/journey/learn'}>
              GET STARTED
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://github.com/finos/community'}>
              GITHUB
            </Link>
          </div>
        </div>
      </header>
      <main>
        <br/>
        <br/>
          <section className={styles.section}>
            <div className={styles.twoColumnContainer}>
              <div className={styles.logoContainer}>
                <img className={styles.finosLogo} src="static/img/finos/finos-horizontal.png" alt="FINOS logo"></img>
              </div>
              <div className={classnames(styles.textContainer, styles.welcomeTextContainer)}>
                <h2>Welcome to the FINOS Community Collaboration Space</h2>
                <p>This website hosts all FINOS Foundation documentation for our Project Leads and Community at large. Here you can learn more about FINOS projects and participants, Project Governance, communication channels, collaboration infrastructure, security and compliance validations, and much more.</p>
                {/* <p>Feel free to submit fixes or enhancements to this documentation, by following the link `Edit this page` reported at the bottom of each page (this page is the only exception)</p> <a href="/docs/journey/learn">learn</a>. */}
              </div>
            </div>
          </section>
          <section className={styles.section}>
              <div className={classnames(styles.textContainer, styles.collabContainer)}>
                <h2>Collaborative Effort</h2>
                <p>Every page of this website (except this homepage) provides an "Edit" link at the bottom, which you can use to submit any type of content changes, whether it's a typo fix or a new paragraph. We value and appreciate every type of contribution, so thanks in advance!</p>
              </div>
          </section>
          <section className={styles.section}>
              <div className={classnames(styles.textContainer, styles.ossContainer)}>
                <h2>OSS Journey</h2>
                <p>If you're new to FINOS, please start here to <a href="/docs/journey/learn">learn</a> about us. Afterwards, you can continue your Open Source journey through <a href="/docs/journey/cosume">consumtion</a>, <a href="/docs/journey/engage">engagement</a>, <a href="/docs/journey/participate">participation</a> and <a href="/docs/journey/lead">leadership</a>.</p>
              </div>
          </section>
          <section className={styles.section}>
              <div className={classnames(styles.textContainer, styles.getInTouchContainer)}>
                <h2>Get In Touch</h2>
                <p>Join the FINOS Project, SIG and wider community conversation in the FINOS Community Slack. If you are an employee of a FINOS Member, corporate firewall restrictions allowing, you should be able to <a href='https://finos-lf.slack.com/signup'>self-subscribe</a>. If you are not a FINOS Member or have any trouble joining, please email to help@finos.org with your desired email address and we'll set you up.</p>
                <p>The FINOS Community wide channel on Slack is reachable directly at https://finos-lf.slack.com/messages/finos-community/. We warmly encourage existing community contributors to invite their peers to join the collaboration and the open source fun &#128516;.</p>
              </div>
          </section>
          {/* <section>
            <div className="container">
              <h2>Legal & Governance</h2>
              <div className="row">
                <ul>
                  <li>[FINOS Governance](governance/)</li>
                  <li>[FINOS Code of Conduct](governance/Code-of-Conduct.md)</li>
                  <li>[FINOS Members](https://finos.org/members)</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Projects</h2>
              <div className="row">
                <ul>
                  <li>[FINOS Project Landscape](https://landscape.finos.org)</li>
                  <li>[FINOS and Projects Branding assets (logos, etc.)](https://github.com/finos/branding)</li>
                  <li>[New Open Source Software Project](https://github.com/finos/community/issues/new?assignees=aitana16%2C+maoo&labels=contribution&template=Software-Project-Contribution.md&title=Software+Project+Contribution+and+Onboarding)</li>
                  <li>[New Open Standard Project](https://github.com/finos/community/issues/new?assignees=aitana16%2C+maoo&labels=contribution&template=Standards-Project-Contribution.md&title=Standard+Project+Contribution+and+Onboarding)</li>
                  <li>[New Special Interest Group](https://github.com/finos/community/issues/new?assignees=aitana16%2C+maoo&labels=contribution&template=Special-Interest-Group-Contribution.md&title=Special+Interest+Group+Contribution+and+Onboarding)</li>
                  <li>[Recognize one of our outstanding Contributors](https://github.com/finos/community/issues/new?assignees=mcleo-d&labels=community-recognition&template=Community-Recognition.md&title=FINOS+Community+Recognition)</li>
                </ul>                
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Resources</h2>
              <div className="row">
                <ul>
                  <li>[FINOS Website](https://finos.org)</li>
                  <li>[Email Archives (requires Google login)](http://groups.google.com/a/finos.org/)</li>
              </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Join the FINOS Community list</h2>
              <div className="row">
                <p>Everyone is welcome to subscribe to the FINOS General Community List at community@finos.org by emailing community+subscribe@finos.org.</p>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>Join the FINOS Slack</h2>
              <div className="row">
                <p>Join the FINOS Project, SIG and wider community conversation in the FINOS Community Slack. If you are an employee of a [FINOS Member](https://finos.org/members), corporate firewall restrictions allowing, you should be able to self-subscribe at https://finos-lf.slack.com/signup. If you are not a FINOS Member or have any trouble joining, please email to help@finos.org with your desired email address and we'll set you up.</p>
                <p>The FINOS Community wide channel on Slack is reachable directly at https://finos-lf.slack.com/messages/finos-community/. We warmly encourage existing community contributors to invite their peers to join the collaboration and the open source fun :)</p>
                </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h2>License</h2>
              <div className="row">
                <p>Copyright 2020 Fintech Open Source Foundation<br/>
                Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).<br/>
                SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)</p>
              </div>
            </div>
          </section> */}
      </main>
    </Layout>
  );
}

export default Home;