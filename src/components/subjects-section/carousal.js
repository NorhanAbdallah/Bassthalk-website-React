import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { API_ENDPOINT } from "../../appConfig";
import Axios from "axios";
import CarousalItem from "./carousalItem";
import {connect, useSelector , useDispatch} from 'react-redux'
import {fetchChapters} from '../Redux/reducer/fetchChapters'

let ControlledCarousel = props => {
  /* Redux with Hooks */
  const chapters = useSelector(state => state.chapters.chapters);
  const dispatch = useDispatch(); 

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  // const [chapters, setChapters] = useState([]);
  let [filterdData, setFilterdData] = useState([]);
  let [splicedDataArr, setSplicedDataArr] = useState([]);

  // slider 
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

//fetch data
  useEffect(() => {
    dispatch(fetchChapters());
    chapters !== null && filterChapters(chapters);
  });
  
  //filter data
  const filterChapters = filterdd => {
    filterdData = filterdd.filter(chap => {
      return chap.subject.name === props.name;
    });
    filterdData !== [] && setFilterdData(filterdData);
    splicedData(filterdData, 3);
  };

  // splice data
  const splicedData = (Arr, chunkSize) => {
    let R = [];
    for (let i = 0; i < Arr.length; i += chunkSize)
      R.push(Arr.slice(i, i + chunkSize));
    setSplicedDataArr(R);
    return R;
  };


  //slider inner links
  const slidesList = filterdDataa => {
    return filterdDataa.map(item => (
      <li className="card-list-items">
        <Link to={"#" + item.id}>{item.name}</Link>
        <Route path="#" exact />
      </li>
    ));
  };


 // slider
  const slides = () => {
    return splicedDataArr.map(item => (
      <Carousel.Item>
        <div style={{ backgroundColor: "darkBlue" }}>
          <ul className="card-list">
            {slidesList(item)}
          </ul>
        </div>
      </Carousel.Item>
    ));
  };


  return (
    <BrowserRouter>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        {filterdData !== [] && slides()}
      </Carousel>
    </BrowserRouter>
  );
};

export default ControlledCarousel;
