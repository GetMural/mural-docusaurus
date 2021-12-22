const React = require("react");
const ReactPlayer = require("react-player").default;
const { Carousel } = require("react-responsive-carousel");

console.log(ReactPlayer);
console.log(Carousel);

// const ReactPlayer = require("react-player/lib/ReactPlayer");
// const Carousel = require("react-responsive-carousel/lib/js/components/Carousel");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

// const commissions = [
//   {
//     url: "https://stories.fitzmuseum.cam.ac.uk/boat-race-trophies/",
//     title: "The Boat Race Trophies",
//     author: "The Fitzwilliam Museum",
//     prefix: "theboatrace",
//     description:
//       "This story weaves a tale about The Boat Race trophies. On display in the Fitzwilliam Museum Tuesday 9 November 2021 to Sunday 27 March 2022.",
//   },
//   {
//     url: "https://stories.fitzmuseum.cam.ac.uk/kangxi-vases-conservation/",
//     title: "Kangxi Chinese vases, Recovery from disaster",
//     author: "The Fitzwilliam Museum",
//     prefix: "fitzwilliamvases",
//     description:
//       "An incident in the Museum on Wednesday 25 January 2006 involving a member of the public resulted in damage to three huge oriental porcelain vases, which had been on display for many decades.",
//   },
//   {
//     url: "https://udn.com/upf/the_invisibles/",
//     title: "The Invisibles",
//     author: "Edd Jhong",
//     prefix: "theinvisibles",
//     description:
//       "A journey into Taiwan's agriculture labour shortages and the illegal agricultural migrants who keep the country's system going.",
//   },
//   {
//     url: "https://stories.getmural.io/an-ai-christmas-carol/",
//     title: "An AI Christmas Carol",
//     author: "Naomi Aro",
//     prefix: "cbc",
//     description:
//       "A Reading of CBC Radio's A Christmas Carol done purely with text to speech British accent voices.",
//   },
//   {
//     url: "https://stories.getmural.io/millroad-halloween-2020/",
//     title: "Halloween in Romsey Town | Mill Road 2020",
//     author: "Naomi Aro",
//     prefix: "halloween",
//     description:
//       "Wandering around Mill Road and Romsey Town to see the Halloween pumpkins and atmosphere in 2020.",
//   },
// ];

const VimeoSlide = ({ url, isSelected }) => {
  console.log(url);
  return (
    <ReactPlayer
      width="100%"
      url={url}
      playing={isSelected}
      onError={console.log}
    />
  );
};

const VimeoAutoplayWithCustomThumbs = () => {
  const customRenderItem = (item, props) => {
    console.log(props);
    console.log(item);
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
  return (
    <div className="docMainWrapper wrapper" style={{ maxWidth: "800px" }}>
      <Container className="mainContainer documentContainer postContainer storiesContainer">
        <h1>Showcase stories created with Mural</h1>
        <VimeoAutoplayWithCustomThumbs />
      </Container>
    </div>
  );
}

CoilCommissions.title = "Artist Commissions";
CoilCommissions.description =
  "Art commissions for Mural paid for by Grant for the Web";

module.exports = CoilCommissions;
