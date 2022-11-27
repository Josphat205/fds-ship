import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { people } from "../../data/data";
import CardComponent from "./CardComponent";
import SideNav from "./SideNav";
const Home = () => {
  return (
    <div className="home-container">
      <div className="sub-content">
        <SideNav/>
      </div>
      <div className="main-content">
        <div className="card-container">
          {people?.map((person) => (
            <CardComponent key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
