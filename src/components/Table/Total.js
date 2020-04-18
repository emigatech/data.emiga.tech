import React, { Component } from "react";
import LoadingSkeleton from "../Loading/LoadingSkeleton.js";


class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount () {

    fetch('https://api.emiga.tech/https://corona.lmao.ninja/v2/all')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error)
    {
      return(
        false
      );
    }

    else if (!isLoaded) {
      return (
        <LoadingSkeleton/>
      );
    }

    else {
      if (data) {
        return(
          <div className="pt-2 pb-2">
            <h1>
              <b>Worldwide statistics <sup><abbr title="Table of Worldwide statistics">#</abbr></sup></b>
            </h1>
            <div className="container">
              <div className="row pt-2 pb-2">
                <div className="col-sm-12 col-md-4 bg-white shadow-sm border">
                  <h4 className="pt-2">Cases</h4>
                  <div><b>{data.cases}</b></div>
                </div>
                <div className="col-sm-12 col-md-4 bg-white shadow-sm border">
                  <h4 className="pt-2">Deaths</h4>
                  <div><b>{data.deaths}</b></div>
                </div>
                <div className="col-sm-12 col-md-4 bg-white shadow-sm border">
                  <h4 className="pt-2">Recovered</h4>
                  <div><b>{data.recovered}</b></div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      else {
        return (
          false
        );
      }
    }
  }
}
export default Total;
