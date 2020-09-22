/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

function Privacy() {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Mural Privacy Policy</h1>
            <small>
              <time dateTime="2018-05-31">Last updated 31 May 2018</time>
            </small>
          </header>
          <p>
            Your privacy is an important factor that Mural Software s.r.o.
            considers in the development of each of our products and services.
            We are committed to being transparent and open. This Mural Privacy
            Policy explains generally how we receive information about you, and
            what we do with that information once we have it.
          </p>
          <h2>What do we mean by "personal information?"</h2>
          <p>
            For us, "personal information" means information which identifies
            you, like your name or email address. Any information that falls
            outside of this is "non-personal information." If we store your
            personal information with information that is non-personal, we will
            consider the combination as personal information. If we remove all
            personal information from a set of data then the remaining is
            non-personal information.
          </p>
          <h2>How do we learn information about you?</h2>
          <p>
            We learn information about you when:
            <ul>
              <li>
                You give it to us directly (e.g., when you choose to send us an
                email inquiring about our services);
              </li>
              <li>
                Someone else tells us information about you (e.g., when you make
                a donation to Mural via Paypal or Patreon, or when you sign up
                for our mailing list, which is powered by MailChimp).
              </li>
            </ul>
          </p>
          <h2>What do we do with your information once we have it?</h2>
          <p>
            When you give us information, we will use it in the ways for which
            you've given us permission. Generally, we use your information to
            help us provide and improve our products and services for you.
          </p>
          <h2>When do we share your information with others?</h2>
          <p>
            <ul>
              <li>
                When we have asked and received your permission to share it.
              </li>
              <li>
                For processing or providing products and services to you, but
                only if those entities receiving your information are
                contractually obligated to handle the data in ways that are
                approved by Mural.
              </li>
              <li>
                When the law requires it. We follow the law whenever we receive
                requests about you from a government or related to a lawsuit.
                We'll notify you when we're asked to hand over your personal
                information in this way unless we're legally prohibited from
                doing so. When we receive requests like this, we'll only release
                your personal information if we have a good faith belief that
                the law requires us to do so. Nothing in this policy is intended
                to limit any legal defenses or objections that you may have to a
                third party's request to disclose your information.
              </li>
              <li>
                When we believe it is necessary to prevent harm to you or
                someone else. We will only share your information in this way if
                we have a good faith belief that it is reasonably necessary to
                protect the rights, property or safety of you, our other users,
                Mural or the public.
              </li>
              <li>
                If our organizational structure or status changes (if we undergo
                a restructuring, are acquired, or go bankrupt) we may pass your
                information to a successor or affiliate.
              </li>
            </ul>
          </p>
          <h2>How do we store and protect your personal information?</h2>
          <p>
            We are committed to protecting your personal information once we
            have it. We implement physical, business and technical security
            measures. Despite our efforts, if we learn of a security breach,
            we'll notify you so that you can take appropriate protective steps.
            We also don't want your personal information for any longer than we
            need it, so we only keep it long enough to do what we collected it
            for. Once we don't need it, we take steps to destroy it unless we
            are required by law to keep it longer.
          </p>
          <h2>What else should you know?</h2>
          <p>
            Mural Software, s.r.o. is an international organization and our
            computers are in several different places around the world. We also
            use service providers whose computers may also be in various
            countries. This means that your information might end up on one of
            those computers in another country, and that country may have a
            different level of data protection regulation than yours. By giving
            us information, you consent to this kind of transfer of your
            information. No matter what country your information is in, we
            comply with applicable law and will also abide by the commitments we
            make in this privacy policy. If you are under 13, we don't want your
            personal information, and you must not provide it to us. If you are
            a parent and believe that your child who is under 13 has provided us
            with personal information, please contact us by mail at
            info@getmural.io to have your child's information removed.
          </p>
          <h2>
            What if we change this privacy policy or any of our privacy notices?
          </h2>
          <p>
            We may need to change this policy and our notices. The updates will
            be posted online. If the changes are substantive, we will announce
            the update through Mural’s social channels and mailing list for such
            announcements. Your continued use of the product or service after
            the effective date of such changes constitutes your acceptance of
            such changes. To make your review more convenient, we will post an
            effective date at the top of the page. This privacy policy has been
            adapted from the{" "}
            <a
              href="https://www.mozilla.org/en-US/privacy/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Mozilla Privacy Policy
            </a>
            . It is available under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
              target="_blank"
              rel="noreferrer noopener"
            >
              Creative Commons license
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

Privacy.title = "Privacy Policy";

module.exports = Privacy;
