import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ReactPlayer from "react-player/vimeo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const commissions = [
  {
    title: "Submerged Landscapes",
    artist: "Melanie King",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/king/submerged-landscapes/index.html",
    bio: "A bio here",
  },

  {
    title: "Thames: Stream of Consciousness",
    artist: "Olga Suchanova",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/suchanova/thames/index.html",
    bio: "A bio here",
  },
  {
    title: "Transforming Discarded Objects",
    artist: "Colin Frank",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/frank/transforming-discarded-objects/index.html",
    bio: "A bio here",
  },
  {
    title: "Breathe",
    artist: "Louise O'Boyle",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/o-boyle/breathe/index.html",
    bio: "A bio here",
  },
  {
    title: "Phosphenes",
    artist: "Ronan Devlin",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/devlin/phosphenes/index.html",
    bio: "A bio here",
  },
];

const VimeoSlide = ({ url, isSelected, volume, muted }) => {
  return (
    <ReactPlayer
      width="100%"
      url={url}
      playing={isSelected}
      volume={volume}
      muted={muted}
      loop={true}
    />
  );
};

const VimeoAutoplayWithCustomThumbs = () => {
  const customRenderItem = (item, props) => {
    return <item.type {...item.props} {...props} />;
  };

  const customRenderThumb = (children) =>
    children.map((item, id) => {
      return <img src={item.props.thumbnail} key={id} />;
    });

  return (
    <Carousel
      renderItem={customRenderItem}
      renderThumbs={customRenderThumb}
      thumbWidth={200}
      infiniteLoop={true}
      onChange={(index) => console.log(index)}
    >
      <VimeoSlide
        volume={0}
        muted={true}
        key="melanie"
        url="https://vimeo.com/651937446"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="olga"
        url="https://vimeo.com/652499841"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="colin"
        url="https://vimeo.com/651603357"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="louise"
        url="https://vimeo.com/658647662"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="ronan"
        url="https://vimeo.com/652599810"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
    </Carousel>
  );
};

function CoilCommissions() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <section className="margin-vert--md padding--none container coilgallery">
          <h1>Showcase stories created with Mural</h1>
          <VimeoAutoplayWithCustomThumbs />
        </section>
      </main>
    </Layout>
  );
}

export default CoilCommissions;
