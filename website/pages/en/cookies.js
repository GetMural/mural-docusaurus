/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

function Cookies() {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Cookies Policy</h1>
            <small>
              <time datetime="2018-05-30">Last updated 30 May 2018</time>
            </small>
          </header>
          <p>
            Mural Software, s.r.o. ("us", "we", or "our") uses cookies on the
            http://www.getmural.io website (the "Service"). By using the
            Service, you consent to the use of cookies. Our Cookies Policy
            explains what cookies are, how we use cookies, how third- parties we
            may partner with may use cookies on the Service, your choices
            regarding cookies and further information about cookies.
          </p>
          <h2>What are cookies?</h2>
          <p>
            Cookies are small pieces of text sent to your web browser by a
            website you visit. A cookie file is stored in your web browser and
            allows the Service or a third-party to recognize you and make your
            next visit easier and the Service more useful to you. Cookies can be
            "persistent" or "session" cookies. Persistent cookies remain on your
            personal computer or mobile device when you go offline, while
            session cookies are deleted as soon as you close your web browser.
          </p>
          <h2>How Mural Software, s.r.o. uses cookies</h2>
          <p>
            When you use and access the Service, we may place a number of
            cookies files in your web browser. We use cookies for the following
            purposes:
            <ul>
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
            </ul>
            We use both session and persistent cookies on the Service and we use
            different types of cookies to run the Service:
            <ul>
              <li>
                Essential cookies. We may use cookies to remember information
                that changes the way the Service behaves or looks, such as a
                user's language preference on the Service.
              </li>
              <li>
                Analytics cookies. We may use analytics cookies to track
                information how the Service is used so that we can make
                improvements. We may also use analytics cookies to test new
                advertisements, pages, features or new functionality of the
                Service to see how our users react to them.
              </li>
            </ul>
          </p>
          <h2>Third-party cookies</h2>
          <p>
            In addition to our own cookies, we may also use various
            third-parties cookies to report usage statistics of the Service,
            deliver advertisements on and through the Service, and so on.
          </p>
          <h2>What are your choices regarding cookies</h2>
          <p>
            If you'd like to delete cookies or instruct your web browser to
            delete or refuse cookies, please visit the help pages of your web
            browser. Please note, however, that if you delete cookies or refuse
            to accept them, you might not be able to use all of the features we
            offer, you may not be able to store your preferences, and some of
            our pages might not display properly.
            <ul>
              <li>
                For the Chrome web browser, please visit this page from Google:
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                For the Firefox web browser, please visit this page from
                Mozilla:
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-
    stored"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-
                  stored
                </a>
              </li>
              <li>
                For the Safari web browser, please visit this page from Apple:
                <a
                  href="https://support.apple.com/kb/PH21411?locale=en_US"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://support.apple.com/kb/PH21411?locale=en_US
                </a>
              </li>
              <li>
                For any other web browser, please visit your web browser's
                official web pages.
              </li>
            </ul>
          </p>
          <h2>Where can you find more information about cookies?</h2>
          <p>
            You can learn more about cookies and the following third-party
            websites:
            <ul>
              <li>
                AllAboutCookies:{" "}
                <a
                  href="http://www.allaboutcookies.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  http://www.allaboutcookies.org/
                </a>
              </li>

              <li>
                Network Advertising Initiative:{" "}
                <a
                  href="http://www.networkadvertising.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  http://www.networkadvertising.org/
                </a>
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </div>
  );
}

Cookies.title = "Cookies Policy";
Cookies.description = "How we use cookies on this website";

module.exports = Cookies;
