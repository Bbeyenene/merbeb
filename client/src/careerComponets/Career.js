import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

function Career() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "2px solid lightgrey",
              width: "25%",
              maxWidth: "250px",
              backgroundColor: "rgb(242, 241, 241)",
              height: "100vh",
              position: "sticky",
              top: "210px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Left side bar</h1>
          </div>

          <div
            style={{
              width: "70%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h1>Conservation</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h2>Park Reservation</h2>
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.Some quick example text to build on the card title
                    and make up the bulk of the card's content.Some quick
                  </p>
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="/career"></Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>Conservation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Park Reservation
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="/career"></Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
                // boxShadow:
                //   "  3px 3px 3px 3px rgba(0, 0, 0, 0.1), -3px -3px 3px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
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
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>Conservation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Park Reservation
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="career"></Card.Link>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>Conservation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Park Reservation
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="career"></Card.Link>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>Conservation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Park Reservation
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="career"></Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontSize: "2rem",
                padding: "3rem",
                border: "none",
                borderBottom: "1px solid grey",
              }}
            >
              <Card.Body>
                <Card.Title>Conservation</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Park Reservation
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="/career">visit website</Card.Link>
                <Card.Link href="career"></Card.Link>
              </Card.Body>
            </Card>
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
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick
                  example text to build on the card title and make up the bulk
                  of the card's content.
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
          </div>

          {/* <div
            style={{
              border: "2px solid lightgrey",
              width: "24%",
              maxWidth: "200px",
              backgroundColor: "rgb(242, 241, 241)",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Right side</h1>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Career;
