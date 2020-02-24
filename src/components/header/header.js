import React from 'react';
import NavBar from './navbar'
import '../../assets/css/header.css'
import DownloadStores from '../StoresLinks/store'
import book from '../../assets/images/book.png'
import {
    Row, Col, Container
} from 'react-bootstrap';


class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <NavBar />
                <Container fluid="true">
                    <Row>
                        <Col sm={7}>
                            <div>
                            <div className="header-text-wrapper">
                                <div className="header-text">
                                    <span>الان يمكنك استخدام تطبيق بسطتهالك من على المتجر</span>
                                </div>
                                <Col sm={4} md={5}>
                                    <DownloadStores />
                                </Col>
                            </div>
                            </div>
                          

                        </Col>

                        <Col sm={5}>
                            <div className="header-book-img-wrapper">
                                <img src={book} alt="book" />
                            </div>
                           
                        </Col>
                    </Row>
                </Container>

            </section>
        );
    }
}
export default Header;