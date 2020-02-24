import React from "react";
import Logo from '../../assets/images/NavLogo.png'
import MenuIcon from '../../assets/images/MenuIcon.png'
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container
} from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <section id="NavBar">
        <Container fluid="true">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src= {Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto-custom">
                <Nav.Link href="#home" ><span id="navBar-mainPage">الرئيسية</span></Nav.Link>
              <Nav.Link href="#link">بنك المعلومات</Nav.Link>
              <Nav.Link href="#link1">البث المباشر</Nav.Link>
              <Nav.Link href="#link2">الامتحانات العامة</Nav.Link>
            </Nav>
            <Form inline>
              <Button id="subscrib-NavBar-btn">الاشتراك</Button>
              <Button id="signIn-NavBar-btn">التسجيل</Button>
              <Button id="menu-navBar-btn"><img src={MenuIcon} alt="menu-icon"></img></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </Container>
        
      </section>
    );
  }
}
export default NavBar;
