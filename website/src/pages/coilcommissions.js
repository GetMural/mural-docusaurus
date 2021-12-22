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
    story: "https://stories.getmural.io/artists/king/submerged-landscapes/",
    bio: (
      <>
        Melanie is interested in the relationship between the environment,
        photography and materiality. The purpose of her work is to demonstrate
        the intimate connection between celestial objects (sun, moon, stars),
        photographic material and the natural world. Melanie is currently
        researching a number of sustainable photographic processes, to minimise
        the environmental impact of her artistic practice, informed by the
        Sustainable Darkroom movement.{" "}
      </>
    ),
    img: "img/coil/melanie_640.jpg",
    website: "https://www.melaniek.co.uk",
  },

  {
    title: "Thames: Stream of Consciousness",
    artist: "Olga Suchanova",
    story: "https://stories.getmural.io/artists/suchanova/thames/",
    bio: (
      <>
        I am a Slovakian emerging visual artist living and working in London.
        Through my journeys I am inspired by the nature, properties of matter
        and energy; and quantum mysticism, which are translated into the light,
        colour, pattern and form with the use of experimental photography,
        printmaking and painting. In my work I am questioning the concept of
        space, time, illusion and reality.
      </>
    ),
    img: "img/coil/olga_640.jpg",
    website: "https://www.instagram.com/olgasuchanova01",
  },
  {
    title: "Transforming Discarded Objects",
    artist: "Colin Frank",
    story:
      "https://stories.getmural.io/artists/frank/transforming-discarded-objects/",
    bio: (
      <>
        Colin Frank's work questions how we can discover rich possibilities in
        everyday found objects and encourages people to reconsider single-use
        items. By repurposing discarded items they aim to problematize consumer
        habits and suggest alternative co-productive ways of living with the
        environment.
      </>
    ),
    img: "img/coil/colin_640.jpg",
    website: "http://www.colinfranksounding.com/",
  },
  {
    title: "Breathe",
    artist: "Louise O'Boyle",
    story: "https://stories.getmural.io/artists/o-boyle/breathe/",
    bio: (
      <>
        Louise O’Boyle is an Artist, Educator and Researcher. Their arts
        practice focuses on the relationship between arts, health and wellbeing.
        Current work includes challenging attitudes towards mental ill health,
        the promotion of emotional wellbeing and our connections to our
        environment through socially engaged research and an eclectic practice
        of digital art, video, performance and sculpture.
      </>
    ),
    img: "img/coil/louise_640.jpg",
    website: "https://www.louiseoboyle.com/",
  },
  {
    title: "Phosphenes",
    artist: "Ronan Devlin",
    story: "https://stories.getmural.io/artists/devlin/phosphenes/",
    bio: (
      <>
        Ronan Devlin is an artist & designer, who relocated to the North East UK
        in 2018. Working across print, screen & installation, they produce
        self-motivated and commissioned work about emotion, perception &
        technology.
      </>
    ),
    img: "img/coil/ronan_640.jpg",
    website: "https://ronandevlin.com/",
  },
];

const Artist = ({ title, artist, story, bio, img, website }) => {
  return (
    <div className="card">
      <div className="card__content padding--md">
        <h3>{title}</h3>
        <h4>{artist}</h4>
        <img src={useBaseUrl(img)}></img>
        <p>{bio}</p>
        <p>
          <Link to={website}>{website}</Link>
        </p>
        <p>
          <Link to={story}>View the story</Link>
        </p>
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
      controls={true}
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
      onChange={(index) => onSlideChange(commissions[index])}
    >
      <VimeoSlide
        volume={0}
        muted={true}
        key="melanie"
        url="https://vimeo.com/651937446"
        thumbnail={useBaseUrl("img/coil/melanie_200.jpg")}
      />
      <VimeoSlide
        volume={0}
        muted={true}
        key="olga"
        url="https://vimeo.com/652499841"
        thumbnail={useBaseUrl("img/coil/olga_200.jpg")}
      />
      <VimeoSlide
        volume={0}
        muted={true}
        key="colin"
        url="https://vimeo.com/651603357"
        thumbnail={useBaseUrl("img/coil/colin_200.jpg")}
      />
      <VimeoSlide
        volume={0}
        muted={true}
        key="louise"
        url="https://vimeo.com/658647662"
        thumbnail={useBaseUrl("img/coil/louise_200.jpg")}
      />
      <VimeoSlide
        volume={0}
        muted={true}
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
    <Layout
      title="Mural Artist Commissions"
      description="We are immensely proud to have worked with artists Melanie King, Louise O'Boyle, Olga Suchanova, Ronan Devlin, and Colin Frank."
    >
      <main>
        <section className="container margin-vert--md">
          <h1>Mural Artist Commissions</h1>
          <p>
            The latest version of Mural has been made possible as part of a
            project called “Web monetization and the arts,” which has been
            generously supported by Grant for the Web.{" "}
          </p>
          <p>
            With the latest version of Mural, we also wanted to work with
            artists whose work and ideas would help raise our aspirations and
            understanding of sustainable creative practice. This included the
            use of environmentally friendly materials but it also involved
            gaining a better understanding of the environmental impact of
            emerging technologies.{" "}
          </p>
          <p>
            We are immensely proud to have worked with artists Melanie King,
            Louise O’Boyle, Olga Suchanova, Ronan Devlin and Colin Frank. They
            have made a series of fascinating and moving works that also include
            the use of web monetization.
          </p>
        </section>
        <section className="margin-vert--md padding--none container">
          <div className="row">
            <div className="col col--7" style={{ margin: "auto 0" }}>
              <VimeoAutoplayWithCustomThumbs onSlideChange={setArtist} />
            </div>
            <div className="col col--5">
              <Artist {...artist}></Artist>
            </div>
          </div>
        </section>
        <section className="container margin-vert--md">
          <h2>About the Mural artist commissions</h2>
          <p>
            From its inception Mural has been developed in close collaboration
            with a growing cohort of talented artists from across the world.
            These collaborations have been a way for us to innovate, experiment
            and learn while working with visually rich subject matter and
            diverse narratives.
          </p>
          <p>
            We believe that by working with artists, we can continue to develop
            Mural as a tool that can be used by anyone as a means of creative
            expression and the sharing of complex ideas and stories online.{" "}
          </p>
          <p>
            Each commission is available for you to view below. You can see most
            of each artwork for free, but you can also support the artist and
            see additional material if you have a Coil wallet. If you would like
            to set up a Coil wallet to see the full pieces, go here and follow
            the instructions.
          </p>
          <p>
            Our heartfelt thanks go to the artists and development team who
            worked together on this project. And a huge thank you goes to Grant
            for the Web, who made this version of Mural and these commissions
            possible through their generous support.
          </p>
          <p>Mural 2 will be formally released on Monday, Jan. 3, 2022.</p>
        </section>
        <section className="container margin-vert--md">
          <h2>Web monetization and the arts</h2>
          <p>
            During the development of Mural 2 - with support from Grant for the
            Web - there has been an exponential growth in the use of alternative
            currencies. At the same time, there has been great interest in
            proving your ownership of digital artworks through NFTs (Non
            Fungible Tokens).
          </p>
          <p>
            For all these reasons, it feels very important to us to have
            introduced a way of financially supporting artistic content online.
            This was done as part of a project called “Web monetization in the
            arts,” which was generously funded by Grant for the Web.{" "}
          </p>
          <p>
            An important part of the project involved building in support for
            web monetization in Mural 2, which we then used when working with a
            group of artists on specially-commissioned artworks.
          </p>
          <p>
            Web monetization streams micropayments directly from web users to
            content creators. You can find out more about web{" "}
            <Link to="http://www.webmonetization.org">monetization</Link> and
            the <Link to="http://interledger.org">Interledger</Link> protocol
            that underpins it.{" "}
          </p>
          <p>
            Two things have to happen in order for the web monetization to work.
            On the user side, people sign up for a service that supports web
            monetization - currently that’s Coil. Coil users pay $5 USD per
            month into their Coil wallet - which is stored securely in a plugin
            on their browser - which is paid directly to the creators in the
            form of a cryptocurrency called XRP.
          </p>
          <p>
            On the creator side, artists set up an account which supports the
            Interledger protocol - think of it like a bank account number. Then,
            when a Coil user visits a web monetization-enabled page, the
            payments are automatically streamed to the creator. The rate is
            approximately USD $0.34 per hour - enough to make it affordable for
            users.
          </p>
          <p>
            A key point for our involvement with Coil is their use of a
            cryptocurrency called XRP. As opposed to currencies like Bitcoin and
            Ethereum, Coil uses XRP, which uses a system called ‘proof of stake’
            for preparing its blockchain. This is a system that has considerably
            better environmental implications than Ethereum - the main
            blockchain used when creating NFTs - because it uses far less
            computing resources.
          </p>
          <p>
            We’re grateful to Grant for the Web and its community for their
            support during the “Web monetization and the arts” project.
          </p>
        </section>
      </main>
    </Layout>
  );
}

export default CoilCommissions;
