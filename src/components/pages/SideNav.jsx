import React from "react";
import { latest } from "../../data/latest";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CarouselItem.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CarouselData from "./CarouselItem";
const SideNav = () => {
  console.log(latest)
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {latest.map(data=>{
       return (
        <SwiperSlide key={data.id} className="">
        <Card className="swiper">
          <Card.Img className="card-img1" variant="top" src={data.img} />
          <Card.Body>
            <div className="description-card">
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.location}</Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Posted 3 mins ago</small>
          </Card.Footer>
        </Card>
        </SwiperSlide>
       )
      })}
    </Swiper>
  );
};

export default SideNav;
