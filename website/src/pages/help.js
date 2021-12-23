import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Help() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const supportLinks = [
    {
      content: (
        <>
          Learn more using the{" "}
          <Link className="" to={useBaseUrl("docs/intro")}>
            documentation on this site
          </Link>
        </>
      ),
      title: "Browse Docs",
    },
    {
      content: (
        <>
          Hop on over to the{" "}
          <a
            href="https://www.reddit.com/r/getmural/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mural subreddit!
          </a>
          <br />
          Fancy Discord?{" "}
          <a
            href="https://discord.gg/KVwhfjHunE"
            target="_blank"
            rel="noreferrer noopener"
          >
            Join our Discord server
          </a>
        </>
      ),
      title: "Join the community",
    },
    {
      content: (
        <>
          If you still have questions that haven't been answered, please email
          us at <a href="mailto://support@getmural.io">support@getmural.io</a>
        </>
      ),
      title: "Contact us",
    },
  ];

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Need help?</h1>
          <p className="hero__subtitle">
            This project is maintained by a dedicated group of people.
          </p>
          <ul role="list">
            <li>
              <Link className="twitter" to="https://twitter.com/dougiegyro">
                @dougiegyro
              </Link>
            </li>
            <li>
              <Link className="twitter" to="https://twitter.com/PeteHaughie">
                @petehaughie
              </Link>
            </li>
            <li>
              <Link className="twitter" to="https://twitter.com/naomiaro">
                @naomiaro
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        {supportLinks && (
          <section className="margin-vert--lg">
            <div className="container">
              <div className="row">
                {supportLinks.map(({ title, content }, idx) => (
                  <div key={idx} className="col col--4">
                    <h2>{title}</h2>
                    <p>{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Help;
