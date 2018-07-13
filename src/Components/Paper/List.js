import React, { Component } from "react";
import { Card } from "antd";

class Tools extends Component {
  render() {
    if (this.props.data) {
      var papers = this.props.data.map(function(data) {
        var Image = "images/loader.gif";
        return (
          <Card>
            <img className="skill" alt={data.name} src={Image} />
            <h5>{data.name}</h5>
            <p>{data.year}</p>
            <p>{data.description}</p>
            <p>{data.abstract}</p>
            <p>{data.at}</p>
          </Card>
        );
      });
    }
    return (
      <section id="tools">
        <div className="row tools">
          <div className="three columns header-col">
            <h1>
              <span>Preferred Tools</span>
            </h1>
          </div>

          <div>
            {/* <div className="nine columns main-col">
              <p className="lead center">{message}</p>
            </div> */}
            <ul className="bgrid-quarters s-bgrid-thirds cf">{papers}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
