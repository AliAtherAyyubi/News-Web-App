import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={progress:0}
  }
  apiKey=process.env.REACT_APP_API_KEY;

  setProgress= (prog)=>{
    this.setState({progress:prog});
  }
  
  render() {

    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946" height={4}
            progress={this.state.progress}/>
          <Navbar />

          {/* <News apiKey={this.apiKey} setProgress={this.setProgress} category={"general"}/> */}
          <Routes>
            <Route
              path="/"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"general"} category={"technology"} />}
            />
            <Route
              path="/general"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"general"} category={"general"} />}
            />
            <Route
              path="/entertainment"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key={"entertainment"} category={"entertainment"} />
              }
            />
            <Route
              path="/health"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"health"} category={"health"} />}
            />
            <Route
              path="/sports"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"sports"} category={"sports"} />}
            />
            <Route
              path="/science"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"science"} category={"science"} />}
            />
            <Route
              path="/technology"
              element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={"technology"} category={"technology"} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
