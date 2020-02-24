import React from 'react';
import Logo from '../../assets/images/NavLogo.png'
import '../../assets/css/footer/footer.css'

import {
    Row, Container , Col
} from 'react-bootstrap';
import DownloadStores from '../StoresLinks/store'
 

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <Container>
                    <Row>
                        <Col sm={1} md={3} lg={4} xl={4}></Col>
                        <Col sm={10} md={6} lg={4} xl={4}>
                            <div className="footer-wrapper">
                                <div id="footer-logo">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div id="footer-text">
                                <span >يمكنك تحميل تطبيق بستطهالك على الهاتف </span>
                                </div>
                                <DownloadStores /> 
                            </div>
                        </Col>
                        <Col sm={1} md={3} lg={4} xl={4}></Col>
                    </Row>
                </Container>
                
            </section>
        );
    }
}

export default Footer;