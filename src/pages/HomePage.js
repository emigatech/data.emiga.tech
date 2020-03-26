import React, { Component } from "react";

import GlobalTable from '../components/Table/GlobalTable.js';
import CountryTable from '../components/Table/CountryTable.js'
import Total from '../components/Table/Total.js'
import Footer from '../components/Footer/Footer.js';
import Logo from '../emiga-logo.png';
import $ from "jquery";

const query = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
      var p=a[i].split('=', 2);
      if (p.length == 1)
          b[p[0]] = "";
      else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

$("#emiga-header").css("display", "block");

class HomePage extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-5">
            {
              query['q'] ?
                (<CountryTable country={query['q']}/>)
                  :
                (
                  <div>
                    <Total/>
                    <GlobalTable/>
                  </div>
                )
            }
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default HomePage;
