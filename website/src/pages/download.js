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
              <h1 className="margin-top--md">
                Download the Mural editor 0.4.0
              </h1>
              <p>
                <a href="https://github.com/GetMural/Mural/blob/master/CHANGELOG.md">
                  Release notes
                </a>
              </p>
              <ul role="list">
                {downloads.map(({ title, link }, idx) => (
                  <li key={idx}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
              <h2 className="margin-top--xl">Download the Mural user manual</h2>
              <p>
                The newest manual is for Mural 0.3.0. It includes information on
                the features available in Mural, as well as recommended apps to
                use with it and tips on getting the most out of the tool.
              </p>
              <p>
                <a href="Mural-manual-v0.3.0.pdf">Mural Manual v0.3.0+</a>
              </p>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Download;
