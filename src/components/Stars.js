import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  // if (!stars) return "";
  // const intStar = parseInt(stars);
  // const decStar = (stars % 1).toFixed(1);

  // const fullStar = new Array(intStar).fill(<BsStarFill />);
  // const halfStar = decStar >= 0.5 ? <BsStarHalf /> : <BsStar />;
  // const newStars = [...fullStar, halfStar]
  //   .concat(new Array(5).fill(<BsStar />))
  //   .splice(0, 5);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
