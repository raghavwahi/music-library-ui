import React, { useState } from "react";
import useHttp from "../../hooks/use-http";

const StarRating = ({ data, initialRating, onUpdateRating }) => {
  console.log(data);
  const [rating, setRating] = useState(initialRating);
  const { sendRequest: sendDataRequest } = useHttp();

  const handleStarClick = () => {
    setRating(onUpdateRating);
    sendDataRequest(
      {
        url: `${process.env.REACT_APP_API_URL}/songs/${data.id}`,
        method: "PUT",
        body: { ...data, rating: onUpdateRating },
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
    style={{ cursor: "pointer", color: filled ? "gold" : "gray" }}
    onClick={onClick}
  >
    ★
  </span>
);

export default StarRating;
