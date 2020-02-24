import React from "react";
import Subject from "../subjects-section/subject";
import { Container, Row } from "react-bootstrap";
import Logo from '../../assets/images/pinky.png'
import {connect} from 'react-redux'
import {fetchSubjects } from '../Redux/reducer/fetchSubjects'






class subjectSection extends React.Component {
   componentWillMount() {
this.props.dispatch(fetchSubjects());
   }


  render() {
    {console.log(this.props.subjects)}
    return (
      <section id="subjectSection">
        <Container fluid="true">
          <Row>

                {this.props.subjects.map(subject =>          
                <Subject key={subject.id} src={Logo} title={subject.name} specialId ={subject.id}/> 
             )}

          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => (() => {
  // console.log("subjects" , state.subject.subject)
},{ 
  subjects: state.subject.subject,
  loading: state.subject.loading,
})

export default connect(mapStateToProps)(subjectSection);
