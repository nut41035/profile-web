import React, { Component } from "react";
import { Card } from "material-ui/Card";

class Paper extends Component {
  render() {
    if (this.props.data) {
      var papers = this.props.data.map(function(data) {
        return (
          <Card style={{ width: "90%", marginBottom: "3%" }}>
            <div
              style={{ marginLeft: "3%", marginRight: "3%" }}
              className="download"
            >
              <br />
              <h5>{data.name}</h5>
              <p className="info">
                <em className="date">{data.year}</em>
                <span>&bull;</span> {data.at}
              </p>

              <p>{data.abstract}</p>
              <p>{data.remark}</p>
              <a href={data.link} className="button">
                <i className="fa fa-download" />Download
              </a>
              <br />
            </div>
          </Card>
        );
      });
    }
    return (
      <section id="paper">
        <div
          className="row paper"
          style={{ marginTop: "5%", display: "block" }}
        >
          <div className="three columns header-col">
            <h1 style={{ marginTop: "10px" }}>
              <span>My Papers</span>
            </h1>
          </div>

          <div
            style={{
              width: "100%",
              marginLeft: "5%",
              marginTop: "10%"
            }}
          >
            <ul className="bgrid-quarters s-bgrid-thirds cf">{papers}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Paper;
