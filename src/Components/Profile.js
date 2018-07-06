import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './Profile.css';
import Header from './Profile/Header';
import Footer from './Footer';
import About from './Profile/About';
import Resume from './Profile/Resume';
// import Contact from './Profile/Contact';
// import Testimonials from './Profile/Testimonials';
import Tools from './Profile/Tools';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Tools data={this.state.resumeData.tools} />
        {/*<Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
