/**
 * Copyright (c) Facebook, Inc. and its affiliates.
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
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('how-it-works.html')}>How Mural Works</Button>
            <Button href={docUrl('getting-started.html')}>Getting Started</Button>
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

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Download = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlt: '',
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const YourMultimedia = () => (
      <Block background="light">
        {[
          {
            content:
              'Mural is a native application (Windows, macOS, Linux) that takes your already curated collection of multimedia and allows you to create rich content for the web without any technical knowledge of html, css, or javascript.',
            image: `${baseUrl}img/undraw_Multimedia_Files.svg`,
            imageAlt: 'Man curating his multimedia collection in order to tell his story',
            imageAlign: 'right',
            title: 'Curate your multimedia files to tell your story',
          },
        ]}
      </Block>
    );

    const MuralItems = () => (
      <Block background="light">
        {[
          {
            content:
              'The Mural editor\'s main job is to assemble your content as a sequence of Mural Items. Each Mural item has been themed in a way to accentuate your images, videos, and text to better tell your visual story',
            image: `${baseUrl}img/undraw_Mural_Items.svg`,
            imageAlt: 'Woman organising her story as a sequence of Mural items',
            imageAlign: 'left',
            title: 'Use the Mural editor to assemble your visual story',
          },
        ]}
      </Block>
    );

    const Devices = () => (
      <Block background="light">
        {[
          {
            content:
              'Mural will create your visual story as a folder of html, css, js, and static multimedia, which will allow you to easily host your created content on any webserver',
            image: `${baseUrl}img/undraw_Devices.svg`,
            imageAlt: 'Woman with her content tailored for phone, tablet, and desktop',
            imageAlign: 'right',
            title: 'Export your Mural for no hassle hosting on any webserver',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
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
          <YourMultimedia />
          <MuralItems />
          <Devices />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
