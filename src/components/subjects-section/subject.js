import React from "react";
import "../../assets/css/subject.css";
import ControlledCarousel from "./carousal";
import {connect} from 'react-redux'
import {Col
} from "react-bootstrap";



class Subject extends React.Component {


  render() {
    return (
      <Col sm={12} md={6} lg={3} xl={3}>
        <div className="subject-main" id={this.props.id}>
          <div className="subject-wrapper">
            <img src={this.props.src} alt="subject" style={{ maxWidth: "100%" }} />
            <p id="overlay-title">{this.props.title}</p>
          </div>
          
        <div className="overlay" style={{ backgroundColor: "white" }}>
          <p id="overlay-title">{this.props.title}</p>
          {/* {console.log(this.props.specialId)} */}
            <ControlledCarousel key={this.props.key} name={this.props.title} subId={this.props.specialId}/>
          
        </div>
      </div>
      </Col>
    );
  }
}

export default Subject;
