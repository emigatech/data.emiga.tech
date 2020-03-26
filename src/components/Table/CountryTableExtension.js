import React, { Component } from "react";
import uuid from "uuid";
import LoadingSkeleton from "../Loading/LoadingSkeleton.js";
import Moment from 'react-moment';


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

      var country = this.props.country;

      /**
        Fixing data implementations
      */
      switch (country) {
        case 'USA':
          var country = 'US';
          break;
         case 'Iran, Islamic Republic of':
          var country = 'Iran';
          break;
        case 'Macedonia, the former Yugoslav Republic of':
          var country = 'North Macedonia';
          break;
        case 'Moldova, Republic of':
          var country = 'Moldova';
          break;
        case 'Venezuela, Bolivarian Republic of':
          var country = 'Venezuela';
          break;
        case 'Tanzania, United Republic of':
          var country = 'Tanzania';
          break;
        default:
          var country = this.props.country;
      }

      if (data[country]) {
        return(
          <div className="pt-2 pb-2">
            <h1>Updates for {this.props.country}</h1>
            <div className="table-responsive border bg-white shadow-sm">
              <table className="table">
                <thead>
                  <tr>
                    <th>Time <sup><abbr title="The current date for case">#</abbr></sup></th>
                    <th>Cases <sup><abbr title="Daily number of cases">#</abbr></sup></th>
                    <th>Deaths <sup><abbr title="Daily number of deaths">#</abbr></sup></th>
                    <th>Recovered <sup><abbr title="Daily number of recovered">#</abbr></sup></th>
                  </tr>
                </thead>
                <tbody>
                  {data[country].reverse().map((data,index) => (
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
