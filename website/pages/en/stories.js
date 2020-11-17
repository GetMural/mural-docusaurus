const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const stories = [
  {
    url: "https://stories.getmural.io/in-flanders-fields-by-john-mccrae/",
    title: "In Flanders Fields",
    author: "John McCrae, assembled by Naomi Aro",
    prefix: "flanders",
    description:
      "The infamous poem In Flanders Fields has been assembled to be set to visuals and read by scroll point. Subtitles are included using audio text tracks.",
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
    url: "https://udn.com/upf/vision/Zoo_of_the_Future/",
    title: "Zoo of the Future",
    author: "Guo Xiuzhen",
    prefix: "futurezoo",
    description: "The zoo is a window to observe a city's mentality and mind.",
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
    url: "https://stories.getmural.io/mikkeller-christmas-calendar-2019/",
    title: "The Great Mikkeller X-Mas Calendar (2019)",
    author: "Naomi Aro",
    prefix: "mikkeller",
    description:
      "Mikkel and Søren had 3 hours to test the Mikkeller Christmas Calendar. That's 24 beers each + surprises.",
  },
  {
    url: "https://stories.getmural.io/taipei-lennon-wall/",
    title: "Taipei's Lennon Wall",
    author: "Douglas Arellanes",
    prefix: "taipei",
    description:
      "A silent but colorful form of protest has spread from Hong Kong to Taipei and beyond, but has its roots on a quiet square in Prague.",
  },
  {
    url: "https://stories.getmural.io/aau/prague-pikador-final/",
    title: "Eating the Pikador in Prague",
    author: "Romana Osborne",
    prefix: "pikador",
    description:
      'Visual storyteller Romana Osborne looks at the phenomenon of the "párek v rohlíku", the street food ubiquitous in the Czech Republic.',
  },
  {
    url: "https://stories.getmural.io/mark_baker/prague-architecture-vimeo/",
    title: "Architecture 1: A Primer for Reading Prague",
    author: "Mark Baker",
    prefix: "praguearch",
    description:
      "Travel writer Mark Baker provides an introduction to Prague's numerous architectural styles with videos and images to illustrate the different eras.",
  },
  {
    url: "https://stories.getmural.io/elegantni-cesko-tv/",
    title: "Elegantní Česko",
    author: "Douglas Arellanes",
    prefix: "elegantni",
    description:
      "Promotional material for Elegantní Česko, a Czech startup TV channel who is successfully crowdfunding the creation of the channel.",
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
    url: "https://stories.getmural.io/isisarts/forage",
    title: "Forage",
    author: "Henna Askainen",
    prefix: "forage",
    description:
      "The idea for Forage came from Askainen's own experience of arriving in the North East of England from Finland and the rootedness she first began to feel when she had access to the countryside. Forage is a participatory commission with refugees and asylum seekers now living in Newcastle and Gateshead. It is a series of walks and conversations in landscapes that are both strange and familiar. It provides the opportunity to discover and recover what it means to belong to a place when displaced from home and to experience the most ‘English’ of our landscapes at National Trust sites across Northumberland and Tyne and Wear. Using foraged plants, stories old and new are interwoven into new experiences for participants, and form the basis of a series public artworks and interventions.",
  },
  {
    url: "https://stories.getmural.io/dni/lapse/",
    title: "Lapse",
    author: "Matt Pickering",
    prefix: "lapse",
    description:
      "Told through the eyes of Martha, Lapse explores the ways our relationship with the world changes throughout the progress of Alzheimer’s disease. Unfolding within her garden, Martha experiences a mosaic of personal memories from different moments in her life, collapsed into a continuous stream that blurs past and present; reality and artifice.",
  },
  {
    url: "https://stories.getmural.io/dni/blossomingincencebearingtrees/",
    title: "Blossoming Incence Bearing Trees, Or Unearthing His Roots",
    author: "Lulu MacDonald",
    prefix: "blossoming",
    description:
      "Lulu MacDonald's work Blossoming Incence-Bearing Trees, Unearthing His Roots, is a 9-part site-specific exploration of how images are composed and understood. Taking the understandable symbol of a bouquet of flowers she reinterprets through metaphor, context and composition how we live within our still-lives within our own vases, live and consume, with the ever new recompositioning and transitioning between life and death, moving and stillness.",
  },
  {
    url: "https://stories.getmural.io/isisarts/european_ferries/",
    title: "European Ferries",
    author: "Willie Robb",
    prefix: "european_ferries",
    description:
      "European Ferries is a series of photographs which focuses on horizons and the UK's divisive cultural attitude towards them. Robb wanted to respond to the recent decision Britain has made to come out of the European Union. Physically the images depict historical links connecting the UK to its current continent but that is subject to change. Metaphorically the photographs consider horizons and our cultural attitude towards them.",
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
    url: "https://stories.getmural.io/seurasaari-midsummer-bonfires/",
    title: "Seurasaari Midsummer Bonfires",
    author: "Naomi Aro",
    prefix: "ss_bonfires",
    description:
      "Exploring Midsummer activites on Seurasaari in Helsinki. National costumes, dancing, artisans, and bonfires!",
  },
  {
    url: "https://stories.getmural.io/pilat/caravaggio/",
    title: "PROJECT CARAVAGGIO",
    author: "Bozena Pilat & Wojtek Kowalczyk",
    prefix: "caravaggio",
    description:
      "Photographer Bozena Pilat and artist Wojtek Kowalczyk have worked on a project inspired by the master of tenebrism, Michelangelo Merisi da Caravaggio. A modern artist, whose domain is paper, pen and ink, plays the characters from paintings of one of the most recognizable and dramatic Baroque painters.",
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
    <figure>
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
      <figcaption>{description}</figcaption>
    </figure>
  );
}

function Stories() {
  return (
    <div className="docMainWrapper wrapper" style={{ maxWidth: "640px" }}>
      <Container className="mainContainer documentContainer postContainer storiesContainer">
        <h1>Stories created by Mural</h1>
        {stories.map(({ title, author, prefix, url, description }, i) => (
          <Container padding={["bottom"]} key={i}>
            <StoryItem
              title={title}
              author={author}
              prefix={prefix}
              url={url}
              description={description}
            />
          </Container>
        ))}
      </Container>
    </div>
  );
}

Stories.title = "Story Listing";
Stories.description = "Visual stories created using the Mural editor";

module.exports = Stories;
