import React, { Component } from "react";

import ReactGA from "react-ga";
import $ from "jquery";
// import './Profile.css';
import Header from "./Paper/Header";
import List from "./Paper/List";
import Footer from "./Footer";
// import Resume from './Profile/Resume';
// import Contact from './Profile/Contact';
// import Testimonials from './Profile/Testimonials';
// import Portfolio from './Profile/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      paperData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  getPaperData() {
    $.ajax({
      url: "/paperData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ paperData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    this.getPaperData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.paperData.main} />
        <List data={this.state.paperData.papers} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
