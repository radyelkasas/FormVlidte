import React from "react";
import { Container } from "reactstrap";

const Card = () => {
  return (
    <div className="Card">
      <Container>
        <div className="d-flex flex-column">
          <div className="circle">
            <span className="first"></span>
            <span className="last"></span>
          </div>
          <h1>9591 6489 6389 101E</h1>
          <div className="details">
            <p>Felicia leire</p>
            <span>09/00</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
