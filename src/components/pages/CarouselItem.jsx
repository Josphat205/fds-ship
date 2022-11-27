import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SwiperSlide } from 'swiper/react';
const CarouselData = ({ data }) => {
  return (
    <SwiperSlide className=" swiper-body">
      <Card className="swiper">
        <Card.Img className="card-img" variant="top" src={data.img} />
        <Card.Body>
          <div className="description-card">
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.location}</Card.Text>
          </div>
          <div className="description-card">
            <Button className="btn-sm" variant="outline-primary">
              facebook
            </Button>{" "}
            <Button className="btn-sm" variant="outline-secondary">
              Instagram
            </Button>{" "}
            <Button className="btn-sm" variant="outline-success">
              Twitter
            </Button>{" "}
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted 3 mins ago</small>
        </Card.Footer>
      </Card>
    </SwiperSlide>
  );
};

export default CarouselData;
