import React, { useState } from "react";

const Card = ({ title }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <p>
        Status: <strong>{liked ? "Liked" : "Not liked"}</strong>
      </p>

      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Card;