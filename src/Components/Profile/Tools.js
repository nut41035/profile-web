import React, { Component } from 'react';

class Tools extends Component {
  render() {

    if (this.props.data) {
      var message = this.props.data.message
      var tools = this.props.data.tools.map(function (tools) {
        var projectImage = 'images/tools/' + tools.image;
        return <div key={tools.title} className="columns feature-item">
          <img className="skill" alt={tools.title} src={projectImage} />
          <h5>{tools.title}</h5>
          <p>{tools.detail}</p>
        </div>
      })
    }
    return (

      <section id="tools">
        <div className="row tools">

          <div className="three columns header-col">
            <h1><span>Preferred Tools</span></h1>
          </div>

          <div>
            <div className="nine columns main-col"><p className="lead center">{message}</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {tools}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
