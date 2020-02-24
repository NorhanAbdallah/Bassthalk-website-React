import React from 'react';
import '../../assets/css/footer/subfooter.css'
import {
    Row, Container , Col
} from 'react-bootstrap';
import {  Route, Link } from 'react-router-dom'
class SubFooter extends React.Component {
render () {
    return (
        <section id="sub-footer">
            <Container fluid="true">
                <Row>
                <Col sm={12} md={6} lg={6}>
                    <Row>
                    <Col xs={8} sm={7} md={8} lg={5} xl={4} id="sub-footer-designed-by"><span>تم تصميم وتطوير الموقع بواسطه</span></Col>
                    <Col xs={4} sm={3} md={4} lg={4} xl={4} id="sub-footer-comp-link">
                        <a href="https://reacttraining.com/react-router/web/example/basic">New Concept </a>
                        {/* <Link to="https://reacttraining.com/react-router/web/example/basic"> New Concept </Link> */}
                        {/* <Route path="https://reacttraining.com/react-router/web/example/basic" exact ></Route> */}
                    </Col>
                    </Row>
                
                </Col>
                {/* <Col sm={0} md={0} lg={2}></Col> */}
                <Col  sm={12} md={6} lg={6} id="footer-rights">
                    <span >جميع الحقوق محفوظة  -بسطتهالك 2019</span>
                </Col>
                </Row>
            </Container>
        </section>
    );
}
}

export default SubFooter;