import React from "react";
import { Link } from "react-router-dom";

function Report() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            border: "2px solid lightgrey",
            width: "20%",
            height: "100vh",
            backgroundColor: "rgb(242, 241, 241)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>@ User Name</h1>
          <div style={{ display: "column", marginLeft: "1rem" }}>
            <p>
              <Link to="/t-history">History</Link>
            </p>
            <p>
              <Link to="/t-report">Report</Link>
            </p>
            <p>
              <Link to="t-paid">Paid</Link>
            </p>
            <p>
              <Link to="/t-pending">Pending</Link>
            </p>
          </div>
        </div>

        <div
          style={{
            width: "60%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <form
            style={{
              padding: "3rem",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              margin: "2rem",
              backgroundColor: "rgb(26, 64, 79)",
              color: "wheat",
              borderRadius: "3rem",
            }}
            action="/t-report"
          >
            {/* <div className="mb-3"> */}
            <label htmlFor="title" className="form-label">
              Information Title
            </label>
            <br />
            <input
              style={{ width: "80%" }}
              type="email"
              id="title"
              placeholder="Amazon is hiring"
            />
            {/* </div> */}
            <br />
            {/* <div className="mb-3"> */}
            <label htmlFor="adress" className="form-label">
              Adress
            </label>
            <br />
            <input
              style={{ width: "80%" }}
              type="email"
              // className="form-control"
              id="adress"
              placeholder="Street, City, State, Country, Continent"
            />
            {/* </div> */}
            <br />

            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              //   className="form-control"
              placeholder="Include you description here"
              id="description"
              style={{ height: "100px", width: "80%" }}
            ></textarea>
            <br />
            <br />
            <label htmlFor="image">Image:</label>
            <br />
            <input style={{ width: "40%" }} type="file" />
            <br />
            <br />
            <br />
            <input id="image" style={{ width: "80%" }} type="submit" />
          </form>
        </div>

        <div
          style={{
            border: "2px solid lightgrey",
            width: "20%",
            height: "100vh",
            backgroundColor: "rgb(242, 241, 241)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Report;
