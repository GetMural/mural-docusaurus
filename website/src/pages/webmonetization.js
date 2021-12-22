import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Webmonetization() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Mural's Webmonetization Support"
      description={siteConfig.tagline}
    >
      <main>
        <section className="container margin-vert--md">
          <h1>Mural's Webmonetization Support</h1>
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

export default Webmonetization;
