import React from "react";

const About = () => {
  return (
    <div className="about">
      <h3>About Us</h3>
      <p>
        eact Router enables "client side routing". In traditional websites, the
        browser requests a document from a web server, downloads and evaluates
        CSS and JavaScript assets, and renders the HTML sent from the server.
        When the user clicks a link, it starts the process all over again for a
        new page. Client side routing allows your app to update the URL from a
        link click without making another request for another document from the
        server. Instead, your app can immediately render some new UI and make
        data requests with fetch to update the page with new information. This
        enables faster user experiences because the browser doesn't need to
        request an entirely new document or re-evaluate CSS and JavaScript
        assets for the next page. It also enables more dynamic user experiences
        with things like animation. Client side routing is enabled by creating a
        Router and linking/submitting to pages with Link and
      </p>
    </div>
  );
};

export default About;
