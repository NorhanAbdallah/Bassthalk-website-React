import React from 'react';
import './App.css';
import Header from './components/header/header';
import SubjectSection from './components/subjects-section/subjectSection'
import Footer from './components/footer/footer'
import SubFooter from './components/footer/subfooter'
import { Provider } from 'react-redux'
import store from '../src/components/Redux/Store/index'
import {
  BrowserRouter 
} from "react-router-dom";




function App() {
  return (
    <Provider store = {store}>
       <BrowserRouter >
           <div className="App">
              <Header />
              <SubjectSection />
              <Footer />
              <SubFooter />
            </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
