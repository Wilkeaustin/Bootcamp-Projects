import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Burgers() {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                    <Col>
                    <Card>
                        <Card.Img style={{  height: '18rem', minHeight:  '18rem' }} variant="top" src="https://d1ralsognjng37.cloudfront.net/2ac98abe-9e02-4bec-afcf-e7cd6228f09b.jpeg" />
                        <Card.Body>
                        <Card.Title>Feltner Brothers: "The Feltner"</Card.Title>
                        <Card.Text>
                            The feltner comes from the north-west corner of Arkansas in the city of Fayetteville from a little place called Feltner Brothers.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img style={{  height: '18rem', minHeight:  '18rem' }} variant="top" src="https://fiveguys.co.uk/app/uploads/2020/12/fiveguys-burgers-1024x683.jpg" />
                        <Card.Body >
                        <Card.Title>Five Guys: "Classic Cheeseburger"</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img style={{  height: '18rem', minHeight:  '18rem', minWidth: '12rem' }} variant="top" src="https://eatatthegarage.com/wp-content/uploads/2021/12/GAR-MushroomSwiss-Oct2021-scaled-e1640634380412.jpg" />
                        <Card.Body>
                        <Card.Title>Smitty's Garage: "Mushroom Swiss"</Card.Title>
                        <Card.Text>
                            Smitty's Garage is a burger spot in the MidWest. I'd have to say my favorite so far has been the mushroom swiss.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </div>
    );
}

export default Burgers;