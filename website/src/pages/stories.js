import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const stories = [
  {
    url: "https://stories.fitzmuseum.cam.ac.uk/boat-race-trophies/",
    title: "The Boat Race Trophies",
    author: "The Fitzwilliam Museum",
    prefix: "theboatrace",
    description:
      "This story weaves a tale about The Boat Race trophies. On display in the Fitzwilliam Museum Tuesday 9 November 2021 to Sunday 27 March 2022.",
  },
  {
    url: "https://stories.fitzmuseum.cam.ac.uk/kangxi-vases-conservation/",
    title: "Kangxi Chinese vases, Recovery from disaster",
    author: "The Fitzwilliam Museum",
    prefix: "fitzwilliamvases",
    description:
      "An incident in the Museum on Wednesday 25 January 2006 involving a member of the public resulted in damage to three huge oriental porcelain vases, which had been on display for many decades.",
  },
  {
    url: "https://udn.com/upf/the_invisibles/",
    title: "The Invisibles",
    author: "Edd Jhong",
    prefix: "theinvisibles",
    description:
      "A journey into Taiwan's agriculture labour shortages and the illegal agricultural migrants who keep the country's system going.",
  },
  {
    url: "https://stories.getmural.io/an-ai-christmas-carol/",
    title: "An AI Christmas Carol",
    author: "Naomi Aro",
    prefix: "cbc",
    description:
      "A Reading of CBC Radio's A Christmas Carol done purely with text to speech British accent voices.",
  },
  {
    url: "https://stories.getmural.io/millroad-halloween-2020/",
    title: "Halloween in Romsey Town | Mill Road 2020",
    author: "Naomi Aro",
    prefix: "halloween",
    description:
      "Wandering around Mill Road and Romsey Town to see the Halloween pumpkins and atmosphere in 2020.",
  },
  {
    url: "https://stories.getmural.io/tuska2019/",
    title: "Tuska",
    author: "Naomi Aro",
    prefix: "tuska",
    description:
      "Promotional material for Tuska Festival 28.6. - 30.06.2019 in Helsinki, Finland. Tuska Festival is the largest annual metal festival in Helsinki. Find more info about the artists, tickets, and venue of this year's Tuska. Learn about the newly imposed 18 year age limit as well as see press photos from previous years of the festival.",
  },
  {
    url: "https://stories.getmural.io/isisarts/thevolunteers/",
    title: "The Volunteers",
    author: "Dominic Smith",
    prefix: "thevolunteers",
    description:
      "The Volunteers is an interview with Dave Bell, Captain, Director and Quatermaster of TVLP (Tynemouth Volunteer Life Brigade). Using videos of the Tynemouth coast and Bell's recollections, the piece serves as both oral history as well as visual poem of the northern British coastline.",
  },
  {
    url: "https://stories.getmural.io/isisarts/micropalypse/",
    title: "Micropalypse",
    author: "andy_gracie",
    prefix: "micropalypse",
    description:
      "A narrative sketch drawing from ongoing work towards a post-apocalyptic exhibition and live cinema project.",
  },
];

function StoryItem({ title, author, prefix, url, description }) {
  return (
    <figure className="margin--none">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          srcSet={`
              /img/stories/${prefix}_320.jpg 320w,
              /img/stories/${prefix}_640.jpg 640w,
              /img/stories/${prefix}_1280.jpg 1280w
            `}
          sizes="(max-width: 650px) 320px, 640px"
          alt={`${title} cover image`}
        />
        <div>
          <cite>{title}</cite>, by {author}
        </div>
      </a>
      <figcaption className="margin-bottom--lg">{description}</figcaption>
    </figure>
  );
}

function Download() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Story Listing"
      description="Visual stories created using the Mural editor"
    >
      <main>
        <div className="container">
          <h1 className="margin-top--md">
            Showcase stories created with Mural
          </h1>
          {stories.map(({ title, author, prefix, url, description }, i) => (
            <div className="story-container" key={i}>
              <StoryItem
                title={title}
                author={author}
                prefix={prefix}
                url={url}
                description={description}
              />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Download;
