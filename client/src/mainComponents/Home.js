import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <div className="hero">
        <h1> Subscribe Now </h1>
        <h2
          style={{
            width: "50%",
            margin: "0 auto",
            fontSize: "26px",
            color: "gold",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip
        </h2>
      </div>

      <main className="main">
        <section>
          <div className="div-2">
            <img src="./images/monoco.jpg" width="100%" height="100%" alt="" />
          </div>
          <div className="div-1">
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
              consectetur adip Lorem ipsum dolor sit amet, consectetur adip
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <br />
            <br />
            <Link to="/home"> visit</Link>
          </div>
        </section>

        <section>
          <div className="div-1">
            <h3>Social Network </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
              consectetur adip Lorem ipsum dolor sit amet, consectetur adip
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <br />
            <br />
            <Link to="/chat"> Visit</Link>
          </div>
          <div className="div-2">
            <img
              src="./images/adiHayamat.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="div-2">
            <img src="./images/midmar.jpg" width="100%" height="100%" alt="" />
          </div>
          <div className="div-1">
            <h3>Software Services</h3>
            <p>Web Design Services</p>
            <p>Custom Built Services</p>
            <p>SEO Services</p>
            <p> Database Design</p>
            <br />
            <br />
            <Link to="/software"> Visit</Link>
          </div>
        </section>

        <section>
          <div className="div-1">
            <h3>Truck Drivers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum
              dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
              consectetur adip Lorem ipsum dolor sit amet, consectetur adip
              Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
              amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <br />
            <br />
            <Link to="/truck"> visit</Link>
          </div>
          <div className="div-2">
            <img
              src="./images/mizrae-berashin.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="div-2">
            <img src="./images/monoco.jpg" width="100%" height="100%" alt="" />
          </div>
          <div className="div-1">
            <h3>Career and Advertisements</h3>
            <div
              style={{
                borderRadius: "24px",
                width: "96%",
                margin: "0 auto",
                padding: "1rem",
                backgroundColor: "gold",
                fontSize: "22px",
              }}
            >
              <p>
                <quote style={{ fontStyle: "italic" }}>
                  "Information is the oxygen of the modern age. It seeps through
                  the walls topped by barbed wire, it wafts across the
                  electrified borders"
                </quote>
                <h5 style={{ margin: "9px 0 -10px 0" }}>Ronald Reagan</h5>
                <p style={{ fontSize: "16px" }}>
                  40th President of the United States
                </p>
              </p>
            </div>
            <p style={{ textAlign: "left", padding: "1rem", fontSize: "22px" }}>
              Our website is providing a free service for posting any
              information you want to share to our comunity. Moreover, any body
              can visit and get information in &nbsp;
              <Link to="/career">Career and Advertisements</Link> . Informations
              that we can share includes but not limited to career, rental,
              education, products.
            </p>
            <br />
            <Link to="/career"> Visit</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
