import React from 'react';

function About() {
  return (
    <div id="bio-container">
      <div id="bio-background-wrapper">
        <section className="bio-background" />
      </div>
      <section className="bio-card">
        <p>
          I am a self-starting, full-stack developer hailing from Boulder, CO. I grew up in Boulder
          and have since returned after many years in Denver, Chicago, and Seattle wherein I
          completed graduate school at Northwestern University and worked as a Speech-Language
          Pathologist specializing in neurorehabilitation.
        </p>
        <p>
          I have studied and worked in several fields, but my favorite work has always been during
          my Digital Design and Media certification from the{' '}
          <a href="https://www.colorado.edu/atlas/" alt="CU Boulder Atlas Institute">
            CU Boulder ATLAS Institute
          </a>
          : Creative Technology & Design (CTD) program. I greatly enjoyed my time learning about
          design principles, computer science, and web development in this program and am very
          excited to have returned to this realm again now.
        </p>

        <p>
          I adore rainy days, adventures, film and film music, studying interesting things, creating
          interesting things, reading, video games, and more. I am almost never bored. You can often
          find me enjoying these things by myself or with my family and friends. My mind is
          frequently at war with its love of both indoor and outdoor activities, introversion and
          extroversion, etc. This can also be explained by my favorite color, Indigo, which you can
          never really tell is Blue or Purple.
        </p>
        <p>
          If you would like to say hello or peek at my resume, send me a message at{' '}
          <a href="mailto:chelseaavery.js@gmail.com" alt="my e-mail">
            chelseaavery.js@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
