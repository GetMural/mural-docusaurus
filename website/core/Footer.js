/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const MailChimpForm = require("./MailChimpForm");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <span className="heading">Docs</span>
            <a href={this.docUrl("how-it-works.html")}>How it Works</a>
            <a href={this.docUrl("getting-started.html")}>Getting Started</a>
            <a href={this.docUrl("metadata.html")}>Mural Items</a>
          </div>
          <div>
            <span className="heading">Community</span>
            {/* <a href={`${this.props.config.baseUrl}users`}>User Showcase</a> */}
            <a
              href={this.props.config.redditUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Reddit
            </a>
            <a
              href={`https://twitter.com/${this.props.config.twitterUsername}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              href={this.props.config.fbPage}
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
          </div>
          <div>
            <span className="heading">Contact Us</span>
            <address>
              <strong>Mural Software s.r.o.</strong>
              <br />
              Bubenečská 496/53
              <br />
              160 00 Prague 6<br />
              Czech Republic
              <br />
              <a href="tel:+420724073364">+420 724 073 364</a>
              <a href="mailto://info@getmural.io">info@getmural.io</a>
            </address>
          </div>
          <MailChimpForm />
          <div>
            <span className="heading">More</span>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookies Policy</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
