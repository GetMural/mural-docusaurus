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
        <h1>Download the Mural editor</h1>
        <ul role="list">
          <li>
            <a href="Mural-0.3.1-mac.zip">Mac OSX v0.3.1</a>
          </li>
          <li>
            <a href="Mural-0.3.1-win32-ia32.zip">Windows v0.3.1 32 bit</a>
          </li>
          <li>
            <a href="Mural-0.3.1-win32-x64.zip">Windows v0.3.1 64 bit</a>
          </li>
          <li>
            <a href="Mural-0.3.1-amd64.deb">Debian v0.3.1 AMD 64</a>
          </li>
          <li>
            <a href="Mural-0.3.1-i386.deb">Debian v0.3.1 Intel x86</a>
          </li>
        </ul>
        <h2>Download the Mural user manual</h2>
        <p>
          The newest manual is for Mural 0.3.0. It includes information on the
          features available in Mural, as well as recommended apps to use with
          it and tips on getting the most out of the tool.
        </p>
        <p>
          <a href="Mural-manual-v0.3.0.pdf">Mural Manual v0.3.0</a>
        </p>
        <hr />
        <h2>Download the Mural 0.4.0 Beta</h2>
        <p>
          Feeling adventurous? Help us improve Mural by trying new features
          ahead of time! These releases could still contain bugs, but please
          help us find them earlier and report any problems by{" "}
          <a href="https://github.com/GetMural/Mural/issues/new">
            creating a new issue on Github
          </a>
          .
          <br />
          <div>
            <a href="https://github.com/GetMural/Mural/blob/master/CHANGELOG.md">
              Release notes
            </a>
          </div>
        </p>
        <ul role="list">
          <li>
            <a href="beta-releases/Mural-darwin-x64-0.4.0-beta.zip">MacOS</a>
          </li>
          <li>
            <a href="beta-releases/Mural-0.4.0-Setup-beta.exe">Windows x64</a>
          </li>
          <li>
            <a href="beta-releases/mural_0.4.0_amd64-beta.deb">Debian AMD 64</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

module.exports = Download;
