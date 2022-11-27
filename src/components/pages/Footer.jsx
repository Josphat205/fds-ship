import React from "react";
const Footer = () => {
  return (
    <div className="my-5">
      <footer
        className="text-center text-white"
        style={{backgroundColor: "#3f51b5", zIndex:'1000'}}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Terms&Conditions
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Help Center
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-2" />

          <section className="text-center mb-5">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f">facebook</i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google">Instagram</i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2022 Copyright:
          <a className="text-white" href="/">
            Mloman-Tech.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
