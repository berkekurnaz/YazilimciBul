import React, { Component } from 'react'
import {
    Jumbotron,
    Container,
    Form,
    Row,
    Col,
    Button,
    ListGroup,
    Card,
} from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container style={{ textAlign: "center" }}>
                        <h1>Yazılımcı Bul</h1>
                        <p>
                            Yazılımcıları Ve Yazılımcı Arayanları Hızlıca Buluşturan Platform
                    </p>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="Yazılımcı Adı" />
                                </Col>
                                <Col>
                                    <Form.Control as="select">
                                        <option>İstanbul</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Yazılımcı Ara
                                </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col xs={9}>
                            <h3>Keşfet</h3>
                            <hr />
                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Yazılımcıları Keşfet</Card.Title>
                                    <Card.Text>
                                        Sistemde Kayıtlı Olan Yazılımcıları İncele. Sana Uygun Yazılımcılar İle Hemen İletişime Geç.
                                    </Card.Text>
                                    <Button variant="outline-info">Yazılımcı Keşfet</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Teknolojilere Göre Keşfet</Card.Title>
                                    <Card.Text>
                                        İlgilendiğin Teknolojiyle Çalışan Yazılımcıları Hızlıca Keşfet Hemen İletişime Geç.
                                    </Card.Text>
                                    <Button variant="outline-info">Yazılımcı Keşfet</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Şehre Göre Keşfet</Card.Title>
                                    <Card.Text>
                                        Yaşadığın Şehirdeki Yazılımcıları Hızlıca Keşfet Hemen İletişime Geç.
                                    </Card.Text>
                                    <Button variant="outline-info">Yazılımcı Keşfet</Button>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                        <Col>
                            <h3>Popüler Teknolojiler</h3>
                            <hr />
                            <ListGroup as="ul" style={{ textAlign: "center" }}>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                            </ListGroup>
                            <br />
                            <h3>Son Eklenenler</h3>
                            <hr />
                            <ListGroup as="ul" style={{ textAlign: "center" }}>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                                <ListGroup.Item as="li"><a href="#">C#</a></ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

                <Container style={{ textAlign: "center" }}>
                    <br />
                    <Row>
                        <Col xs={6}>
                            <Card border="secondary">
                                <Card.Header>Yazılımcı Bul Nedir ?</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card border="secondary">
                                <Card.Header>Bizim Hikayemiz</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Home;