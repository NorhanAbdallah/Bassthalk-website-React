// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import { API_ENDPOINT } from '../../appConfig'
// import Axios from "axios";
// import logo from '../../assets/images/book.png'

// class Example extends React.Component {

//     // fetching data 
//     constructor() {
//         super();
//         this.state = {
//             Chapters: []
//         }
//     }



//     fetch_level() {
//         let url = `${API_ENDPOINT}/chapters`
//         Axios.get(url, {
//             headers: {
//                 Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlzcyI6IkFwcCIsImlhdCI6MTU3ODk5ODA2MTU0OSwiZXhwIjoxNTc4OTk4NjY2MzQ5fQ.dn75h_-8EpOPUzAVmigR3rTAIxb0EFP9IV6w7YDpU_k"
//             }
//         }).then(response => {

//             this.setState({ Chapters: response.data.data })
//         }).catch(error => console.log("chaptersError:", error))

//     }

//     componentWillMount() {
//         this.fetch_level();
//     }


//     // render slick slider 
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };

//         return (

//             <div>

//                 {Chapters.map(item => {
//                     Slider {...settings}>
//  <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//                 })
//                  }
//       </div>
//         );
//     }
// }
// export default Example;