import React from "react";
// import Subject from "../subjects-section/subject";
// import { Container, Row } from "react-bootstrap";
// import Logo from '../../assets/images/pinky.png'
import {API_ENDPOINT} from '../../appConfig'
import Axios from "axios";
import { Carousel } from "react-bootstrap";
import { Route, Link } from "react-router-dom";





class CarousalItem extends React.Component {
    constructor(){
        super();
        this.state = {       
        }
    }

   

  render() {
      return (
          <div>
              {
                  this.props.chapters !== "null" && this.props.chapters.map(chapter =>
                      <Carousel.Item>
                      <div style={{ backgroundColor: "darkBlue" }}>
                          <ul className="card-list">
                              <li className="card-list-items">
                                  {console.log('Level Dataaaaaaaaaaaaaaaaaaaaaa:', chapter.name)}
                                  <Link to="#">{chapter.name}</Link>
                                  <Route path="#" exact />
                              </li>
                          </ul>
                      </div>
                  </Carousel.Item>)
              }      
          </div>
        
        
    );
  }
}

export default CarousalItem;
