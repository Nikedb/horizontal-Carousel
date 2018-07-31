import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12" id="slider">
                      <div id="myCarousel" class="carousel slide image-slider">
                          <div class="row">
                              <div class="col-md-1 col-2 left-arrow">
                                  <a class="carousel-control left" href="#myCarousel" data-slide="prev">
                                      <img src="images/left-slider.png" alt="left slider" /> </a>
                              </div>
                              <div class="col-md-4 col-8">
                                  <div class="carousel-inner">
                                      <div class="active item carousel-item" data-slide-number="0">
                                          <img src="images/Principal.png" class="img-fluid" />
                                              <p>Principal</p>
                                      </div>
                                      <div class="item carousel-item" data-slide-number="1">
                                          <img src="images/Parent.png" class="img-fluid" />
                                              <p>Parent</p>
                                      </div>

                                      <div class="item carousel-item" data-slide-number="7">
                                          <img src="images/Teacher.png" class="img-fluid" />
                                              <p>Teacher</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-1 right-arrow col-2">
                                  <a class="carousel-control right" href="#myCarousel" data-slide="next">
                                      <img src="images/right-slider.png" alt="right slider" /></a>
                              </div>

                              <div class="col-md-6 side-images">
                                  <ul class="carousel-indicators list-inline">
                                      <li class="list-inline-item active">
                                          <a id="carousel-selector-0" class="selected" data-slide-to="0"
                                             data-target="#myCarousel">
                                              <img src="images/Parent.png" class="img-fluid" />
                                                  <p>Principal</p>
                                          </a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel">
                                              <img src="images/Student.png" class="img-fluid" />
                                                  <p>Parent</p>
                                          </a>
                                      </li>
                                      <li class="list-inline-item">
                                          <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel">
                                              <img src="images/Student.png" class="img-fluid" />
                                                  <p>Teacher</p>
                                          </a>
                                      </li>

                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
