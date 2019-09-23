import React, { Component } from "react";
import "./App.css";
import Parent from "./Components/Parent";
import ParentLabel from "./Components/ParentLabel";
//import Background from "./dna.png";
import father from "./man.png";
import mother from "./woman.png";

var sectionStyle = {
  width: "100%",
  height: "653px",
  // backgroundImage: `url(${Background})`,
  backgroundColor: "rgb(55,110,111)" //"rgb(72,0,50)" //"rgba(85,60,139, 1)"
};

class App extends Component {
  state = { father: null, mother: null };
  fatherTypeClickedHandler = type => {
    this.setState({ father: type });
  };
  motherTypeClickedHandler = type => {
    this.setState({ mother: type });
  };
  deleteFatherHandler = () => {
    this.setState({ father: null });
  };
  deleteMotherHandler = () => {
    this.setState({ mother: null });
  };
  getPredictions = () => {
    const f = this.state.father;
    const m = this.state.mother;
    let x = 0,
      y = 0;
    let preidctorList = [
      ["A or O", "A, B, AB or O", "A, B or AB", "A or O"],
      ["A, B, AB or O", "B or O", "A, B or AB", "B or O"],
      ["A, B or AB", "A, B or AB", "A, B or AB", "A or B"],
      ["A or O", "B or O", "A or B", "O"]
    ];

    if (f === "B") x = 1;
    else if (f === "AB") x = 2;
    else if (f === "O") x = 3;

    if (m === "B") y = 1;
    else if (m === "AB") y = 2;
    else if (m === "O") y = 3;

    return " " + preidctorList[x][y];
  };

  render() {
    const ready = this.state.father !== null && this.state.mother !== null;

    return (
      <section style={sectionStyle}>
        <div className="container">
          <div className="row" />
          <div
            className="card mt-2"
            style={{ backgroundColor: "rgb(255,139,106)" }}
          >
            <div class="card-body text-center">
              <h2
                style={{
                  fontWeight: "bold",
                  color: "rgb(223,0,84)",
                  fontFamily: "Courier New"
                }}
                class="card-title"
              >
                Baby Blood Type Predictor
              </h2>

              <div
                className="row"
                style={{
                  height: "100px"
                }}
              >
                <div className="col-sm text-center pt-4">
                  <img
                    style={{ height: "100%", width: "12%" }}
                    className="mr-4"
                    alt="father"
                    src={father}
                  />
                  <img
                    style={{ height: "100%", width: "12%" }}
                    alt="mother"
                    src={mother}
                    className="ml-4"
                  />
                </div>
              </div>

              <div
                className="row"
                style={{
                  height: "50px"
                }}
              >
                <div className="col text-center pt-4">
                  <ParentLabel
                    gender="father"
                    type={this.state.father}
                    delete={this.deleteFatherHandler}
                    className="pr-5"
                  />
                  <ParentLabel
                    gender="mother"
                    type={this.state.mother}
                    delete={this.deleteMotherHandler}
                    className="pl-5"
                  />
                </div>
              </div>
              <div
                className="row mt-5"
                style={{
                  height: "150px"
                }}
              >
                <div className="col text-center pt-4">
                  {ready && (
                    <h3
                      style={{
                        color: "rgb(223,0,84)",
                        fontFamily: "Courier New"
                      }}
                      className="font-weight-bold"
                    >
                      Baby blood type is:
                      <span style={{ color: "red" }}>
                        {this.getPredictions()}
                      </span>
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col text-center mt-4 mr-3 ml-3 card"
              style={{ backgroundColor: "rgb(255,139,106)" }}
            >
              <div class="card-body">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "rgb(223,0,84)",
                    fontFamily: "Courier New"
                  }}
                  class="card-title"
                >
                  Father blood type
                </h5>
                <Parent gender="father" click={this.fatherTypeClickedHandler} />
              </div>
            </div>
            <div
              className="col text-center mt-4 ml-3 mr-3 card"
              style={{ backgroundColor: "rgb(255,139,106)" }}
            >
              <div class="card-body">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "rgb(223,0,84)",
                    fontFamily: "Courier New"
                  }}
                  class="card-title"
                >
                  Mother blood type
                </h5>
                <Parent gender="mother" click={this.motherTypeClickedHandler} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
