import React from "react"
import {
    Row, Col 
} from 'react-bootstrap';
import {  Route, Link } from 'react-router-dom'
import GoogleStore from '../../assets/images/google-store.png'
import IosStore from '../../assets/images/ios-store.png'

class DownloadStores extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12} style={{ padding: "5px" }}>
                        <Link to="#" > 
                         <img src={GoogleStore} alt="google-play-store" id="googleStore-img" />
                        </Link>

                        <Route path="#" exact></Route>


                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}  style={{ padding: "5px" }}>
                        <Link to="#" >
                        <img src={IosStore} alt="ios-store" id="iosStore-img" />
                        </Link>
                        <Route path="#" exact></Route>
                           
                    </Col>
                </Row>

            </div>



        )
    }
}
export default DownloadStores;