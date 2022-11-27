import React from "react";
import "./ShowPost.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
const ShowPost = () => {
  return (
    <div className="mx-auto Main-container">
      <div className="post-details">
        <Card className="card-bg-container">
        <div className="post-title px-2">
       <div className="photo-name">
        <img style={{width:'30px', height:'30px', borderRadius:'50%'}} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="photo" />
        <h6 className="mx-2">June</h6>
       </div>
       <div className="post-icon">
       <BsThreeDots/>
       </div>
      </div>
          <div className="img-container">
            <Card.Img
              className="img-card"
              variant="top"
              src="https://res.cloudinary.com/defpepdn3/image/upload/v1669386129/test/l2_cwgppz.jpg"
            />
          </div>
          <Card.Body>
            <div className="description-card">
              <Card.Title>Juliet Kawera</Card.Title>
              <Card.Text>Kiambu</Card.Text>
            </div>
            <div className="icon-card">
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
            <div className="small-footer">
              <small className="text-muted">Posted 3 mins ago</small>
              <div className="more-div">
                <Link to="/">Go back</Link>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
      <div className="comment-body">
      <div className="flex-dir px-3">
        <h6><b>Comments:</b></h6>
        <div className="comments-count">
        <div className="comment-counter bg-dark text-center"><p style={{fontSize:'10px',color:'white'}} className="">20</p></div>
        <BsFillArrowUpCircleFill/>
        </div>
      </div>
            <div className="anyClass mt-0">
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Allan</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">George</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Victor</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martin</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
              <div className="card mb-1">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-1">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">John</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p
                        style={{ cursor: "pointer" }}
                        className="small text-primary  text-muted mb-0"
                      >
                        like
                      </p>
                      <i
                        className="far fa-thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      ></i>
                      <p className="small text-muted mb-0">3</p>
                    </div>
                  </div>
                  <p>Type your note, and hit enter to add it</p>
                </div>
              </div>
            </div>
            <div className="form-outline mb-1 comment-form">
              <input
                type="text"
                id="addANote"
                class="form-control"
                placeholder="Type comment..."
              />
              <button className=" btn btn-primary mx-2 " for="addANote">
                +
              </button>
            </div>
      </div>
    </div>
  );
};

export default ShowPost;
