/** @format */
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

const apply_link = "https://forms.gle/i3ncV7JumfaodDXK8";
const contact_link = "https://forms.gle/QkcoFtm9A6woxrs28";
const constitution_link = "https://github.com/RR-CS-Club/Club-Constitution";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ronald Reagan High School Computer Science Club</title>
        <meta
          name='description'
          content='The home page for the Ronald Reagan High School Computer Science club. We are a club for creative coding and Computer Science exploration. Join us to gain pratical experience in Computer Science and serve the community while having tons of fun!'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@700;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <section className={styles.topSection}>
          <h1 id={styles.titleMain}> Reagan CS Club </h1>
          <div className={styles.description}>
            The club for{" "}
            <span className={styles.pinkHighlight}>
              &nbsp;creative coding&nbsp;
            </span>
            ,{" "}
            <span className={styles.yellowHighlight}>
              &nbsp;collaboration&nbsp;
            </span>{" "}
            and{" "}
            <span className={styles.greenHighlight}>
              &nbsp;project-led learning&nbsp;
            </span>
            .
          </div>
          <div className={styles.buttonContainer}>
            <div
              onClick={() => window.open(apply_link, "_blank")}
              className={styles.button}>
              <h1 className='ApplyText'>Apply</h1>
            </div>
            <div
              onClick={() => window.open(contact_link, "_blank")}
              className={styles.button}>
              <h1 className='ContactText'>Contact</h1>
            </div>
          </div>
        </section>
        <main className={styles.main}>
          <section className={styles.section}>
            <h1 className={styles.sectionTitle}>Who We Are</h1>
            <p className={styles.bodyText}>
              We are a passionate community of coders, designers and explorers
              who like to learn by doing. The core philosophy of this club is
              building fun, real-world projects to learn coding. Coding is a
              superpower and it shows that you do not need much to change the
              world — just a computer or even a phone and a creative mind.
              <br />
              <br /> Coding has become an essential skill for thousands of
              professions and technological literacy is absolutely necessary in
              today’s world where technology is a key aspect of our everyday
              lives. We aim to bring this necessary technological literacy to
              everyone so that no one is left behind in this revolution.
            </p>
          </section>
          <h1 className={styles.sectionTitle}>What we do</h1>

          <section className={styles.section}>
            <h1 className={styles.sectionSubtitle}>Club Workshop Meetings</h1>
            <section id={styles.cardSection}>
              <div className={styles.card}>
                <h2 className='Initiation'>Initiation</h2>
                <p className='InitiationText'>
                  The Club leader guides everyone through a new topic. Everyone
                  writes some code and understands the basics of the topic.
                </p>
              </div>
              <div className={styles.card}>
                <h2 className='Creation'>Creation</h2>
                <p className='CreationText'>
                  Everyone starts <br />
                  creating, in teams or on <br />
                  their own on a project
                  <br /> of their choice. The club <br />
                  officers guide everyone <br />
                  through projects.
                </p>
              </div>
              <div className={styles.card}>
                <h2>Demos</h2>
                <p className='DemoText'>
                  Anyone who wishes to
                  <br /> can present what they
                  <br /> built and inspire others <br />
                  to build similar fun <br />
                  projects.
                </p>
              </div>
            </section>
            <p className={styles.bodyText} id={styles.centerText}>
              Beginners are highly encouraged to attend these workshops to learn
              programming and new skills.
              <br />
              Check out the current uploaded{" "}
              <span
                className={styles.link}
                onClick={() => window.open("workshops", "_self")}>
                WORKSHOPS
              </span>{" "}
              .
            </p>
          </section>
          <div id={styles.greenDivider}></div>
          <section className={styles.section}>
            <h1 className={styles.sectionSubtitle} id={styles.beyondSubtitle}>
              Beyond Meetings
            </h1>
            <p className={styles.bodyText}>
              Our club goes beyond simple meetings and we host a ton of fun
              events. Some events we are planning for this year include:
              <ul>
                <li>2-day Hackathons</li>
                <li>Hack Nights</li>
                <li>Coding Challenges</li>
                <li>Hour of Code</li>
                <li>TED Talks</li>
                <li>programming Competitions</li>
              </ul>
              For more information on upcoming events, check out the{" "}
              <span
                className={styles.link}
                onClick={() => window.open("events", "_self")}>
                EVENTS
              </span>{" "}
              page.
            </p>
          </section>
          <section className={styles.section}>
            <h1 className={styles.sectionTitle}>Requirements</h1>
            <p className={styles.bodyText}>
              In order to be eligible to join Reagan CS Club, you must be a
              student of Ronald Reagan High School in San Antonio, Texas and be
              in good standing with NEISD policies and government laws. Those
              are the only requirements for joining as a new member.
              <br />
              <br /> In order to maintain or renew membership, there is one
              additional requirement other than the ones mentioned above. You
              must attend 5 events or workshops held or approved by Reagan Hack
              Club every school semester. More information is in the club{" "}
              <span
                className={styles.link}
                onClick={() => window.open(constitution_link, "_blank")}>
                CONSTITUTION
              </span>{" "}
              . If you meet the requirements,{" "}
              <span
                className={styles.link}
                onClick={() => window.open(apply_link, "_blank")}>
                APPLY
              </span>{" "}
              now to be a part of the club! This year, there are no fees for any
              members.
            </p>
          </section>
        </main>
        <div id={styles.checkerDivider} title='Checker board divider'></div>
        <section
          className={styles.footer}
          title='Circles wavelike pattern on top-left and bottom-right'>
          <h1 id={styles.bottomTitle}>Apply today to become a member.</h1>
          <h2 id={styles.bottomSubtitle}>
            It's completely online and takes under 10 minutes.
          </h2>
          <div onClick={() => window.open(apply_link, "_blank")}>
            <div className={styles.button} id={styles.bottomButton}>
              APPLY
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
