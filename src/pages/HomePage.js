import React, { Component } from "react";

import GlobalTable from '../components/Table/GlobalTable.js';
import CountryTable from '../components/Table/CountryTable.js'
import Logo from '../emiga-logo.png';

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

class HomePage extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="container pt-5 text-center">
            <a href="/" title="Go to main">
              <img src={Logo} className="img-fluid" height={64} width={64} alt="emiga.tech logo"/>
            </a>
          </div>
          <div className="col-md-12 pt-5 pb-2">
            {
              query['q'] ?
                (<CountryTable country={query['q']}/>)
                  :
                (<GlobalTable/>)
            }
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
