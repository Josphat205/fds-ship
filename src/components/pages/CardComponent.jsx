import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
const CardComponent = ({ person }) => {
  return (
    <Card className="card-bg-container mb-4">
      <div className="post-title px-2">
       <div className="photo-name">
        <img style={{width:'30px', height:'30px', borderRadius:'50%'}} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="photo" />
        <h6 className="mx-2">June</h6>
       </div>
       <div className="post-icon">
       <BsThreeDots/>
       </div>
      </div>
      <div id="image-over" className="img-container">
        <Card.Img className="card-img" variant="top" src={person.img} />
      </div>
      <Card.Body>
        <div className="description-card">
          <Card.Title>{person.name}</Card.Title>
          <Card.Text>{person.location}</Card.Text>
        </div>
        <div className="icon-card">
          <Button style={{borderRadius:'20px'}} className="btn-sm" variant="outline-primary">
           Follow <BsFacebook/>
          </Button>{" "}
          <Button style={{borderRadius:'20px'}} className="btn-sm" variant="outline-secondary">
            Follow <FaInstagramSquare/>
          </Button>{" "}
          <Button style={{borderRadius:'20px'}} className="btn-sm" variant="outline-success">
            Follow <FaTiktok/>
          </Button>{" "}
        </div>
      </Card.Body>
      <Card.Footer className="Post-footer">
        <div className="small-footer">
        <small className="text-muted">Posted 3 mins ago</small>
        <div className="more-div">
          <Link to={"/show-post/" + person.id}>More...</Link>
        </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
