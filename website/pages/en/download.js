/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

function Download(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container id="try" className="wrapper post" padding={["bottom", "top"]}>
        <h1>Download the Mural editor 0.4.0</h1>
        <p>
          <a href="https://github.com/GetMural/Mural/blob/master/CHANGELOG.md">
            Release notes
          </a>
        </p>
        <ul role="list">
          <li>
            <a href="beta-releases/Mural-darwin-x64-0.4.0-beta3.zip">MacOS</a>
          </li>
          <li>
            <a href="beta-releases/Mural-0.4.0-Setup-beta3.exe">Windows x64</a>
          </li>
          <li>
            <a href="beta-releases/mural_0.4.0_amd64-beta3.deb">
              Debian AMD 64
            </a>
          </li>
        </ul>
        <h2>Download the Mural user manual</h2>
        <p>
          The newest manual is for Mural 0.3.0. It includes information on the
          features available in Mural, as well as recommended apps to use with
          it and tips on getting the most out of the tool.
        </p>
        <p>
          <a href="Mural-manual-v0.3.0.pdf">Mural Manual v0.3.0+</a>
        </p>
      </Container>
    </div>
  );
}

module.exports = Download;
