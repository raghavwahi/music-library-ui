import React, { useState } from "react";
import useHttp from "../../hooks/use-http";

const StarRating = ({ data }) => {
  const [rating, setRating] = useState(data.rating);
  const { sendRequest: sendDataRequest } = useHttp();

  const handleStarClick = (star) => {
    setRating(star);
    sendDataRequest(
      {
        url: `${process.env.REACT_APP_API_URL}/songs/${data.id}`,
        method: "PUT",
        body: { ...data, rating: star },
        headers: { "Content-Type": "application/json" },
      },
      () => {}
    );
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span
    style={{
      cursor: "pointer",
      color: filled ? "gold" : "gray",
      fontSize: "24px",
    }}
    onClick={onClick}
  >
    ★
  </span>
);

export default StarRating;
