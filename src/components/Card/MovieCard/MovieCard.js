import React, { useState } from "react";
import {
  Image,
  Card,
  CardImage,
  CardContent,
  CardInfo,
  DetailsButton,
} from "./MovieCardStyles";

function MovieCard({ movie }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <Card
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={onHover ? { transform: "translateY(0)" } : {}}
    >
      <CardImage>
        {/* <Image src={movie.image_url} alt={movie.title} /> */}
      </CardImage>
      <CardContent style={onHover ? { opacity: "1" } : {}}>
        <h3>{movie?.title || "Title"}</h3>
        <DetailsButton>Details</DetailsButton>
        <CardInfo>
          <span>{movie?.type}</span>
          <span>{movie?.score}</span>
        </CardInfo>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
