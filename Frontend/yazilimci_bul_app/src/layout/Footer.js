import React, { Component } from 'react'
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';

export default class Footer extends Component {

    render() {
        return (
            <div>
                <br />
                <Card border="secondary" className="text-center">
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={4}>
                                    <p>Sayfalar</p>
                                    <hr />
                                    <a href="">Nedir</a> <br />
                                    <a href="">Biz Kimiz</a> <br />
                                    <a href="">İletişim</a> <br />
                                </Col>
                                <Col xs={4}>
                                    <p>Keşfet</p>
                                    <hr />
                                    <a href="">İsme Göre</a> <br />
                                    <a href="">Teknolojiye Göre</a> <br />
                                    <a href="">Şehre Göre</a> <br />
                                </Col>
                                <Col xs={4}>
                                    <p>İletişim</p>
                                    <hr />
                                    Mail: bilgi@yazilimcibul.com<br />
                                    Github: github.com/berkekurnaz/yazilimcibul<br />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Card.Footer className="text-muted">Yazılımcı Bul Açık Kaynaklı Bir Projedir</Card.Footer>
                </Card>
            </div>
        )
    }
}