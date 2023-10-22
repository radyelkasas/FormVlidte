import React from "react";
import { Row, Col } from "reactstrap";
import CardSide from "./components/CardSide";
import FormSide from "./components/FormSide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardADD from "./components/CardADD";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Row className="flex-md-col">
          <Col lg={4} md={12} className="bg-main">
            <CardSide />
          </Col>
          <Col
            lg={8}
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Routes>
              <Route path="/" element={<FormSide />} />
              <Route path="/cardadd" element={<CardADD />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
};

export default Home;
