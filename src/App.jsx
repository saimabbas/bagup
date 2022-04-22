import Discord from "./assets/img/Discord";
import Opensea from "./assets/img/Opensea";
import Twitter from "./assets/img/Twitter";
import BagText from "./assets/img/bag-text.png";
import Hero from "./assets/img/hero.png";
import HeroBg from "./assets/img/hero-bg.png";
import BagFigure1 from "./assets/img/bag-figure-3.png";
import BagFigure2 from "./assets/img/bag-figure-2.png";
import BagFigure3 from "./assets/img/bag-figure-1.png";
import BagFigure4 from "./assets/img/bag-figure-4.png";
import TeamTag1 from "./assets/img/team-tag-1.png";
import TeamTag2 from "./assets/img/team-tag-2.png";
import TeamTag3 from "./assets/img/team-tag-3.png";
import TeamTag4 from "./assets/img/team-tag-4.png";
import TeamTag5 from "./assets/img/team-tag-5.png";
import Bags2 from "./assets/img/2-bags.png";
import BullLeft from "./assets/img/bull-left.png";
import BearRight from "./assets/img/bear-right.png";
import Cup from "./assets/img/cup.png";
import Diamond from "./assets/img/diamond.png";
import Vision from "./assets/img/vision.png";
import Box from "./assets/img/box.png";
import Key from "./assets/img/key.png";
import Gate from "./assets/img/gate.png";
import Boxes2Gray from "./assets/img/2-boxes-gray.png";
import CardC1 from "./assets/img/card-c-1.png";
import CardC2 from "./assets/img/card-c-2.png";
import CardC3 from "./assets/img/card-c-3.png";
import CardC4 from "./assets/img/card-c-4.png";

function App() {
  return (
    <div className="bagup">
      {/* Header */}
      <header>
        <div className="box-sm">
          <div className="header-content">
            <div className="header-left">
              <a href="#">
                <img src={BagText} alt="BagText" />
              </a>
            </div>
            <div className="header-center">
              <a href="#">HOME</a>
              <a href="#">BEYOND</a>
              <a href="#">MINDMAP</a>
              <a href="#">BAGS</a>
              <a href="#">TEAMS</a>
              <a href="#">FAQ</a>
            </div>
            <div className="header-right">
              <a href="#">
                <Opensea color="#1b1e22" />
              </a>
              <a href="#">
                <Discord color="#1b1e22" />
              </a>
              <a href="#">
                <Twitter color="#1b1e22" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="box-lg">
          <div className="hero-content">
            <img className="hero-img" src={Hero} alt="Hero" />
            <img className="hero-bg" src={HeroBg} alt="HeroBg" />
          </div>
        </div>
      </section>

      {/* Beyond Section */}
      <section className="beyond">
        <img
          loading="lazy"
          className="bull-left"
          src={BullLeft}
          alt="BullLeft"
        />
        <img
          loading="lazy"
          className="bear-right"
          src={BearRight}
          alt="BearRight"
        />
        <div className="box-sm">
          <div className="section-heading-box">
            <h2>BEYOND</h2>
            <h6>FOR THE COMMUNITY, BY THE COMMUNITY</h6>
          </div>
          <div className="beyond-content">
            <img
              loading="lazy"
              className="diamond"
              src={Diamond}
              alt="Diamond"
            />
            <img loading="lazy" className="cup" src={Cup} alt="Cup" />
            <p>
              A metaverse brand made up of people from various specializations
              including blockchain and crypto experts, traders. devs . graphic
              designers, artists,marketers, managers, and collectors all uniting
              together to build a strong web3 brand that creates dope projects.
              BagUp gang is a limited collection of 2.222 avatars that gives you
              acces to be part of beyond, you will be able to enter exclusive
              events and festivals, recive airdrops, acces to private giveaways
              and raffles, make votes for beyond decisions and more ...
            </p>
            <h6>beyond is built and owned by the community</h6>
          </div>
        </div>
      </section>

      {/* Bag Section */}
      <div className="bag">
        <div className="box-lg">
          <div className="bag-content">
            <img className="bag-section-logo" src={BagText} alt="BagText" />
            <div className="bag-figures-box">
              <img loading="lazy" src={BagFigure1} alt="BagFigure1" />
              <img loading="lazy" src={BagFigure3} alt="BagFigure3" />
              <img loading="lazy" src={BagFigure2} alt="BagFigure2" />
              <img loading="lazy" src={BagFigure4} alt="BagFigure4" />
            </div>
          </div>
        </div>
      </div>

      {/* Mindmap Section */}
      <div className="mindmap">
        <div className="section-heading-box">
          <h2>MINDMAP</h2>
          <p>
            Some text can also go thee just for the sake of design harmony. Some
            text can also go thee just for the sake of design harmony.
          </p>
        </div>
        <div className="box-sm">
          <div className="mindmap-content">
            <div className="mindmap-grid">
              <main>
                <div className="mindmap-grid-card">
                  <h3>VISION</h3>
                  <img loading="lazy" src={Vision} alt="Vision" />
                </div>
                <div className="mindmap-grid-card">
                  <h3>AIRDROPS & MERCH</h3>
                  <img loading="lazy" src={Box} alt="Box" />
                </div>
                <div className="mindmap-grid-card">
                  <h3>METAVERSE</h3>
                  <img loading="lazy" src={Gate} alt="Gate" />
                </div>
              </main>
              <main>
                <div className="mindmap-grid-card">
                  <h3>COMMUNITY & TEAMING</h3>
                  <img loading="lazy" src={Boxes2Gray} alt="Boxes2Gray" />
                </div>
                <div className="mindmap-grid-card">
                  <h3>YOUR INVESTMENT KEY</h3>
                  <img loading="lazy" src={Key} alt="Key" />
                </div>
              </main>
            </div>
            <div className="mindmap-details-box vision-details-box">
              <h3>VISON</h3>
              <p>
                Its just you! with a <b>BAG UP</b> <br />
                BagUP gang members are taggers of the metaverse, they are in an
                adventure to leave their tags all over the world. Using dope
                bags to cover up, they keep their identities a secret in order
                to not get caught and bagged up! Their adventure together will
                led them to get to know each other.
                <br />
                <br />
                <b>
                  Ready to take this adventure ?
                  <br />
                  get your baggie to have a membership acces to the gang
                </b>
              </p>
              <img loading="lazy" src={Vision} alt="Vision" />
            </div>
            <div className="mindmap-details-box community-details-box">
              <h3>Community & teaming </h3>
              <p>
                - Sometimes your circle decreases in size but increases in
                value. In order to make it easier for the community to connect
                and get to know one another, we have chosen to reduce the number
                of holders, community is always first.
                <br />
                <br />
                - Our first priority is to make you feel comfortable within the
                community. We created the concept of teams where you can hang
                out with people who share the same interests and skills as you
                to relax, create, and have fun together.
                <br />
                <br />- More about the teams system
              </p>
              <div className="team-overview-grid">
                <img loading="lazy" src={TeamTag1} alt="TeamTag1" />
                <img loading="lazy" src={TeamTag2} alt="TeamTag2" />
                <img loading="lazy" src={TeamTag3} alt="TeamTag3" />
                <img loading="lazy" src={TeamTag4} alt="TeamTag4" />
                <img loading="lazy" src={TeamTag5} alt="TeamTag5" />
              </div>
              <img src={Boxes2Gray} alt="Boxes2Gray" />
            </div>
            <div className="mindmap-details-box metaverse-details-box">
              <h3>Metaverse </h3>
              <p>
                In our way to finish the adventure, we will be lost in the
                metaverse trying to find the crib. As the digital world
                develops, we will follow along. We are always open to new ideas
                and updates
              </p>
              <main>
                <h4>
                  Art and Music Festivals <span>PROGRESSING</span>
                </h4>
                <p>
                  Your BAGUP will be your ticket to virtual art and music
                  festivals, artists from our community will have the chances to
                  expose their art and shine{" "}
                </p>
              </main>
              <main>
                <h4>
                  The Crib <span>EXPLORING</span>
                </h4>
                <p>
                  All gang members meet at the crib which is their favorite
                  virtual place in the metaverse.
                </p>
              </main>
              <img loading="lazy" src={Gate} alt="Gate" />
            </div>
            <div className="mindmap-details-box community-details-box">
              <h3>AIRDROPS & MERCH</h3>
              <main>
                <h4>Flash Drops and Giveways</h4>
                <p>
                  the first to interract, the one that wins. Keep an eye on our
                  social media accounts u dont wanna miss. Various giveaways
                  will be announced in our twitter account so stay tuned
                </p>
              </main>
              <main>
                <h4>
                  Airdrops <span>PROGRESSING</span>
                </h4>
                <p>
                  2.222 Bag up holders will recive a unique collectible from the
                  coming collection
                </p>
              </main>
              <main>
                <h4>
                  Merch <span>EXPLORING</span>
                </h4>
                <p>
                  We already have the experience of creating high quality merch,
                  we will be offering our holders a unique merch store soon
                </p>
              </main>
              <img loading="lazy" src={Box} alt="Box" />
            </div>
            <div className="mindmap-details-box community-details-box">
              <h3>Your investment key</h3>
              <p>
                In collaboration with Omerta geeks, we would like to announce
                that BagUP holders who are interested in starting their own NFT
                projects can take advantage of <b>50%</b> discount on all NFT
                services, including art services, website and discord setups and
                security, smart contracts, etc.. <br /> Check out our discord
                for more informations
              </p>
              <img loading="lazy" src={Key} alt="Key" />
            </div>
          </div>
        </div>
      </div>
      <section className="bags-collection">
        <div className="section-heading-box">
          <h2>BAGS</h2>
          <p>
            The items in the collection are carefully hand drawn and generated
            randomly. Each one has its own rarity and uniqueness,
          </p>
        </div>
        <div className="box-sm">
          <div className="bags-c-content">
            <div className="box-c-grid">
              <img src={CardC1} alt="CardC1" />
              <img src={CardC2} alt="CardC2" />
              <img src={CardC3} alt="CardC3" />
              <img src={CardC4} alt="CardC4" />
            </div>
            <p>
              the collection also includes 4 one-of-a-kinds, which are the most
              rare items
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <div className="team">
        <div className="section-heading-box">
          <h2>TEAM</h2>
          <p>
            The beautiful doodles drawn in the background of your BagUP NFT
            represents your team membership. Choose your theme and team
          </p>
        </div>
        <div className="box-sm">
          <div className="team-content">
            <img loading="lazy" className="bags-2" src={Bags2} alt="Bags2" />
            <img loading="lazy" className="cup" src={Bags2} alt="Bags2" />
            <img
              loading="lazy"
              className="diamond"
              src={Diamond}
              alt="Diamond"
            />
            <div className="team-overview-grid">
              <img loading="lazy" src={TeamTag1} alt="TeamTag1" />
              <img loading="lazy" src={TeamTag2} alt="TeamTag2" />
              <img loading="lazy" src={TeamTag3} alt="TeamTag3" />
              <img loading="lazy" src={TeamTag4} alt="TeamTag4" />
              <img loading="lazy" src={TeamTag5} alt="TeamTag5" />
            </div>
            <div className="team-card-grid">
              <div className="team-card">
                <div className="team-card-content">
                  <img loading="lazy" src={TeamTag1} alt="TeamTag1" />
                  <h3>SAGE!</h3>
                  <p>
                    Devs, Discord Masters, Marketers, Web 3 techies and Business
                    owners. This will be your fav place in the metaverse, As
                    part of their main focus, aliens build, create, work and
                    grow together being in the alien team will give you
                    oppurtunities to hangout with those at high levels.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-content">
                  <img loading="lazy" src={TeamTag2} alt="TeamTag1" />
                  <h3>Creative Gang</h3>
                  <p>
                    Artists, graphic designers, music producers, are joining
                    forces to form Arty, a place where they can collectively
                    create and collaborate. There will be many opportunities for
                    artists in the team.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-content">
                  <img loading="lazy" src={TeamTag3} alt="TeamTag1" />
                  <h3>Pump or dump?</h3>
                  <p>
                    The Whales of the Blockchain are a group of crypto traders,
                    miners, and blockchain experts dedicated to sharing tips,
                    signals, market updates and also, to have fun with each
                    other.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-content">
                  <img loading="lazy" src={TeamTag4} alt="TeamTag1" />
                  <h3>Risky?</h3>
                  <p>
                    For those who like to risk, especially casino gamblers and
                    NFT flippers, High Rollers is a team dedicated to discussing
                    chances and opportunities.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-content">
                  <img loading="lazy" src={TeamTag5} alt="TeamTag1" />
                  <h3>Good vibes only</h3>
                  <p>
                    We cater to rule breakers, gamers, and mob, so whether you
                    are one of them or not, this is the perfect place to take a
                    pause from your busy life and unwind with the homies. Enjoy
                    the good vibes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq">
        <div className="section-heading-box">
          <h2>FAQ</h2>
          {/* <p>
            Some text can also go thee just for the sake of design harmony. Some
            text can also go thee just for the sake of design harmony.
          </p> */}
        </div>
        <div className="box-sm">
          <div className="faq-content">
            {/* <img loading="lazy" className="bags-2" src={Bags2} alt="Bags2" /> */}
            <div className="faq-box">
              <h4>What is Bagup gang ?</h4>
              <p>
                a limited quantity collection of 2.222 unique etheruem NFT’s
                carefully handdrawn and programmatically generated, each NFT
                gives a membership access to the gang
              </p>
            </div>
            <div className="faq-box">
              <h4>Utility from holding a bagup NFT</h4>
              <p>
                - As a team, we are striving towards the same goal, and you will
                be a vital part of the team
                <br />
                -This nft will give you memebership acces to a super
                multi-talented community
                <br />
                -2.222 Holders will claim one free NFT from our next project
                <br />
                -BagUP is your ticket to a wide variety of events and
                experiences we will be launching soon
                <br />
                - Acces to private Raffles, giveaways, and airdrops
                <br />- 50% discount to start your own NFT project
              </p>
            </div>
            <div className="faq-box">
              <h4>What is the realise date and mint price ?</h4>
              <p>X</p>
            </div>
            <div className="faq-box">
              <h4></h4>
              <p></p>
            </div>
            <div className="faq-box">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer>
        <div className="box-sm">
          <p>Copyright © 2021 BagUp. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
