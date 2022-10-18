import React from "react";

function OtherLinks() {
  return (
    <>
      <div className="settings-div">
        <h2 id="settings-header">Other links</h2>
        <a
          className="settings-links"
          href="https://caitlinbuenlucas.com/"
          target="_blank"
        >
          My portfolio
        </a>
        <a
          className="settings-links"
          href="https://github.com/cpualei"
          target="_blank"
        >
          Github profile
        </a>
        <a
          className="settings-links"
          href="https://splitzy-app.herokuapp.com/"
          target="_blank"
        >
          splitzy
        </a>
        <a
          className="settings-links"
          href="https://cabindogs.herokuapp.com/"
          target="_blank"
        >
          CabinDogs
        </a>
        <a
          className="settings-links"
          href="https://medium.com/"
          target="_blank"
        >
          Medium
        </a>
      </div>
    </>
  );
}

export default OtherLinks;
