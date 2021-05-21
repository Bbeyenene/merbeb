import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Truck() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            border: "2px solid lightgrey",
            width: "20%",
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
            width: "55%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>
          {/*           
          <Card style={{ width: "38rem" }}>
            <Card.Img
              variant="top"
              src="images/1-6.jpg"
              width="100%"
              height="180px"
            />
            <Card.Body>
              <Card.Title>Conservation Park</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <br />
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <br />
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
              <br />
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Visit Website</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
           */}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>{" "}
          <Card style={{ width: "28rem", height: "28rem" }}>
            <Card.Body>
              <Card.Title>Conservation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Park Reservation
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">visit website</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            border: "2px solid lightgrey",
            width: "24%",
            backgroundColor: "rgb(242, 241, 241)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Right side</h1>
        </div>
      </div>
    </div>
  );
}

export default Truck;
