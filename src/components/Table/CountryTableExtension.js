import React, { Component } from "react";
import uuid from "uuid";
import Helmet from "react-helmet";
import LoadingSkeleton from "../Loading/LoadingSkeleton.js";
import { JsonToTable } from "react-json-to-table";
import Moment from 'react-moment';
import $ from "jquery";


class CountryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount () {

    fetch('https://api.emiga.tech/https://pomber.github.io/covid19/timeseries.json')
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
      if (data[this.props.country]) {
        return(
            <div className="table-responsive border bg-white">
              <table className="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  {data[this.props.country].reverse().map((data,index) => (
                    <tr key={uuid()}>
                      <td><b><Moment format="DD MMMM, YYYY">{data.date}</Moment></b></td>
                      <td>{data.confirmed}</td>
                      <td>{data.deaths}</td>
                      <td>{data.recovered}</td>
                    </tr>
                  ))}
               </tbody>
              </table>
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
export default CountryTable;
