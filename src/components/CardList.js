import React from "react";
import Cards from "./Cards";

function CardList(props) {
  return (
    <div>
      <h3>Hey! Let's workout!</h3>
      {props.workouts.map((video) => {
        return (
          <Cards
            key={video.id}
            title={video.title}
            url={video.url}
            thumbnail={video.thumbnail}
          />
        );
      })}
    </div>
  );
}

export default CardList;
