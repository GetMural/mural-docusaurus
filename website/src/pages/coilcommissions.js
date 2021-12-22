import React, { useState } from "react";
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
    img: "img/coil/melanie.png",
  },

  {
    title: "Thames: Stream of Consciousness",
    artist: "Olga Suchanova",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/suchanova/thames/index.html",
    bio: "A bio here",
    img: "img/coil/olga.png",
  },
  {
    title: "Transforming Discarded Objects",
    artist: "Colin Frank",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/frank/transforming-discarded-objects/index.html",
    bio: "A bio here",
    img: "img/coil/colin.png",
  },
  {
    title: "Breathe",
    artist: "Louise O'Boyle",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/o-boyle/breathe/index.html",
    bio: "A bio here",
    img: "img/coil/louise.png",
  },
  {
    title: "Phosphenes",
    artist: "Ronan Devlin",
    story:
      "https://s3.eu-central-1.amazonaws.com/stories.getmural.io/artists/devlin/phosphenes/index.html",
    bio: "A bio here",
    img: "img/coil/ronan.png",
  },
];

const Artist = ({ title, artist, story, bio, img }) => {
  return (
    <div className="col col--4">
      <div className="card">
        <div className="card__content">
          <h3>{title}</h3>
          <h4>{artist}</h4>
          <img src={useBaseUrl(img)}></img>
          <p>{bio}</p>
          <Link to={story}>View the story</Link>
        </div>
      </div>
    </div>
  );
};

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

const VimeoAutoplayWithCustomThumbs = ({ onSlideChange }) => {
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
      onClickThumb={(index, item) => onSlideChange(commissions[index])}
    >
      <VimeoSlide
        volume={0}
        muted={true}
        key="melanie"
        url="https://vimeo.com/651937446"
        thumbnail={useBaseUrl("img/coil/melanie_200.jpg")}
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="olga"
        url="https://vimeo.com/652499841"
        thumbnail={useBaseUrl("img/coil/olga_200.jpg")}
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="colin"
        url="https://vimeo.com/651603357"
        thumbnail={useBaseUrl("img/coil/colin_200.jpg")}
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="louise"
        url="https://vimeo.com/658647662"
        thumbnail={useBaseUrl("img/coil/louise_200.jpg")}
      />
      <VimeoSlide
        volume={1}
        muted={false}
        key="ronan"
        url="https://vimeo.com/652599810"
        thumbnail={useBaseUrl("img/coil/ronan_200.jpg")}
      />
    </Carousel>
  );
};

function CoilCommissions() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [artist, setArtist] = useState(commissions[0]);

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <section
          className="margin-vert--md padding--none container coilgallery"
          style={{ maxWidth: "800px" }}
        >
          <h1>Coil Commission Stories</h1>
          <p>
            From its inception Mural has been developed in close collaboration
            with a growing cohort of talented artists from across the world.
            These collaborations have been a way for us to innovate, experiment
            and learn whilst working with visually rich subject matter and
            diverse narratives. It is through this ongoing belief in the
            importance of working with artists that we continue to develop Mural
            as a tool that can be used by anyone as a means of creative
            expression and the sharing of complex ideas and stories online. With
            the latest version of Mural we wanted to work with artists whose
            work and ideas would help raise our aspirations and understanding of
            sustainable creative practice. This included the use of
            environmentally friendly materials but it also involved gaining a
            better understanding of the environmental impact of emerging
            technologies. During the development of Mural 2 - with support from
            Grant for the Web - and the commissioned artworks, there has been an
            exponential growth in the use of alternative currencies and ways of
            proving your ownership of artworks through NFT’s (Non Fungible
            Tokens). So, it feels very important to us to have introduced a way
            of financially supporting artistic content online via the use of web
            monetization with Mural 2. Coil is a service that makes use of the
            emerging web monetization protocol to stream micropayments directly
            from web users to content creators. (XXX DOUG ONE SENTENCE ABOUT
            COIL HERE?) A key point to make is that Coil uses XRP, which is a
            crypto coin that uses ‘proof of stake’. This is a system that has
            considerably better environmental implications than the older method
            used by coins such as Ethereum which uses a system called ‘proof of
            work’ and is the main blockchain used when creating NFT’s. We are
            immensely proud to have worked with artists Melanie King, Louise
            O’Boyle, Olga Suchanova, Ronan Devlin and Colin Frank who have made
            a series of works that include the use of Coil. Each commission is
            available for you to view below. You can see most of each artwork
            for free, but you can also support the artist and see additional
            material if you have a Coil wallet. If you would like to set up a
            Coil wallet to see the full pieces go HERE and follow the
            instructions (XXX DOUG ARE THERE ANY SIMPLE ONLINE INSTRUCTIONS FOR
            SETTING UP A COIL WALLET FOR THE VIEWER, I CAN'T FIND ANY!!) Thank
            you to the artists who worked with us and to the development team.
            And, thank you to Mozilla Foundation and Coil who made this version
            of Mural and these commissions possible through their generous
            support.
          </p>
          <VimeoAutoplayWithCustomThumbs onSlideChange={setArtist} />
          <Artist {...artist}></Artist>
        </section>
      </main>
    </Layout>
  );
}

export default CoilCommissions;
