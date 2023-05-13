import React from "react";

function Cards({ title, url, thumbnail }) {
  const openVideo = (e) => {
    e.preventDefault();
    window.open(url);
  };
  return (
    <div className="tc dib br3 pa3 ma2  bw2 shadow-5">
      <img src={thumbnail} alt="video" />
      <div>
        <a className="link dim black" href={url} onClick={openVideo}>
          {title}
        </a>
      </div>
    </div>
  );
}

export default Cards;
