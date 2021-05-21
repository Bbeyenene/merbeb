import React from "react";

function Footer() {
  return (
    <footer>
      <div
        style={{
          paddingLeft: "3rem",
          width: "40%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h4>Contact</h4>
          <p>Message</p>

          <p>Email: manager@merbeb.com</p>
          <p>Phone: 7084272105</p>
          {/* <div className="mb-3" style={{ display: "" }}>
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <br />
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <br />
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />

            <br />
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <br />

              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button>Click</button>
          </div>
         */}
        </div>
      </div>

      <div style={{ width: "60%", marginRight: "0" }}>
        <div style={{ width: "70%", float: "right" }}>
          <h4> Follow Us</h4>

          <p>@ Face book</p>
          <p>@ Tweeter</p>
          <p>@ LinkdIn</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
