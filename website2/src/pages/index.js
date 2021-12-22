import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const features = [
  {
    title: <>What is Mural?</>,
    imageUrl: "img/undraw_Multimedia_Files.svg",
    imageAlt:
      "Man curating his multimedia collection in order to tell his story",
    description: (
      <>
        Mural is a native application (Windows, macOS, Linux) which takes your
        already curated collection of multimedia and allows you to create rich
        content for the web without any technical knowledge of html, css, or
        javascript.
      </>
    ),
  },
  {
    title: <>What does it do?</>,
    imageUrl: "img/undraw_Mural_Items.svg",
    imageAlt: "Woman organising her story as a sequence of Mural items",
    description: (
      <>
        The Mural editor's main job is to assemble your content as a sequence of
        scrollytelling items. Each item has been themed in a way to accentuate
        your images, videos, and text to better tell your visual story.
      </>
    ),
  },
  {
    title: <>How do I use it?</>,
    imageUrl: "img/undraw_Devices.svg",
    imageAlt: "Woman with her content tailored for phone, tablet, and desktop",
    description: (
      <>
        You must download and run the Mural software. Export your story for no
        hassle hosting on any webserver. Mural will export your visual story as
        a folder of html, css, js, and static multimedia.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div class="row">
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl("docs/how-it-works")}
            >
              Download
            </Link>
            <Link
              className="button button--secondary button--lg margin-left--lg"
              to={useBaseUrl("docs/how-it-works")}
            >
              How Mural Works
            </Link>
            <Link
              className="button button--secondary button--lg margin-left--lg"
              to={useBaseUrl("docs/getting-started")}
            >
              Getting Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section>
            <div className="container">
              <div className="row">
                {features.map(
                  ({ imageUrl, imageAlt, title, description }, idx) => (
                    <div key={idx} className="col col--4">
                      {imageUrl && (
                        <div className="margin-vert--xl text--center">
                          <img
                            src={useBaseUrl(imageUrl)}
                            alt={imageAlt}
                            className="unsplash-img"
                          />
                        </div>
                      )}
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
