import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const downloads = [
  {
    title: <>MacOS</>,
    link: "beta-releases/Mural-darwin-x64-0.4.0-beta3.zip",
  },
  {
    title: <>Windows x64</>,
    link: "beta-releases/Mural-0.4.0-Setup-beta3.exe",
  },
  {
    title: <>Debian AMD 64</>,
    link: "beta-releases/mural_0.4.0_amd64-beta3.deb",
  },
];

function Download() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Download" description={siteConfig.tagline}>
      <main>
        {downloads && (
          <section>
            <div className="container">
              <h1 className="margin-top--md">Download Mural 2</h1>
              <p>
                <a href="https://github.com/GetMural/Mural/releases/latest">
                  Download the latest Mural release on Github
                </a>{" "}
                for Mac, Windows and Linux.
              </p>
              <p>
                This is the newest version which has a new story editor
                interface and webmonetization support.
              </p>
              <h2 className="margin-top--xl">Download Mural 0.4.0</h2>
              <p>This is the older version of our story editor.</p>
              <p>
                <a href="https://github.com/GetMural/Mural/blob/master/CHANGELOG.md">
                  Release Notes
                </a>
              </p>
              <ul role="list">
                {downloads.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Download;
