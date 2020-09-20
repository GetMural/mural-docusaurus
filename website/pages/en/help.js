/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        "intro.html"
      )})`,
      title: "Browse Docs",
    },
    {
      content: `Hop on over to the <a href="https://www.reddit.com/r/getmural/" target="_blank"
      rel="noreferrer noopener">Mural subreddit!</a>`,
      title: "Join the community",
    },
    {
      content: `If you still have questions that haven't been answered, please email us at <a href="mailto://support@getmural.io">support@getmural.io</a>`,
      title: "Contact us",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <div>
            <a href="https://twitter.com/dougiegyro">@dougiegyro</a>
            <br />
            <a href="https://twitter.com/PeteHaughie">@petehaughie</a>
            <br />
            <a href="https://twitter.com/naomiaro">@naomiaro</a>
            <br />
            <br />
          </div>
          <GridBlock contents={supportLinks} layout="threeColumn" />
          <Container padding={["bottom", "top"]}>
            You can also hire us to work with you. Mural Software, s.r.o. is a
            Czech company that serves as the maintainer of the Mural code base,
            and offers paid services based on the free software. These services
            include hosting, consulting, custom software development and
            training.
          </Container>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
