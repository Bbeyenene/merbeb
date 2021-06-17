import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";
import "./career.css";

function Career() {
  return (
    <>
      <div className="career-container">
        <div className="career-aside">
          <h1>Left side bar</h1>
        </div>

        <div className="career-main">
          <Card className="career-card-1">
            <Card.Body>
              <Card.Title>
                <h1>Conservation</h1>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h2>Park Reservation</h2>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick
                </p>
              </Card.Text>
              <Card.Link href="/career">visit website</Card.Link>
              <Card.Link href="/career"></Card.Link>
            </Card.Body>
          </Card>
          <Card className="career-card-2">
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
          <Card className="career-card-2">
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
          <Card className="career-card-2">
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
          <Card className="career-card-2">
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
          <Card className="career-card-2">
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
          <Card className="career-card-2">
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
        
        </div>
      </div>
    </>
  );
}

export default Career;
