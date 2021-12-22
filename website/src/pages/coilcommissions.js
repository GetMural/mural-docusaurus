import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const VimeoSlide = ({ url, isSelected }) => {
  return <ReactPlayer width="100%" url={url} playing={isSelected} />;
};

const VimeoAutoplayWithCustomThumbs = () => {
  const customRenderItem = (item, props) => {
    return <item.type {...item.props} {...props} />;
  };

  const customRenderThumb = (children) =>
    children.map((item) => {
      return <img src={item.props.thumbnail} />;
    });

  return (
    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
      <VimeoSlide
        key="melanie"
        url="https://vimeo.com/651937446"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        key="olga"
        url="https://vimeo.com/652499841"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        key="colin"
        url="https://vimeo.com/651603357"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
        key="louise"
        url="https://vimeo.com/658647662"
        thumbnail="https://i.vimeocdn.com/video/1316862895-72cadea71e415b8ac88b6f994be7ab99f2cd1d3ae1119c0858a30780b76a0160-d_472x266"
      />
      <VimeoSlide
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
        <h1>Showcase stories created with Mural</h1>
        <VimeoAutoplayWithCustomThumbs />
      </main>
    </Layout>
  );
}

export default CoilCommissions;
