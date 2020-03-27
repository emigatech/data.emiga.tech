import React, { Component } from "react";

import GlobalTable from '../components/Table/GlobalTable.js';
import CountryTable from '../components/Table/CountryTable.js'
import Total from '../components/Table/Total.js'
import Footer from '../components/Footer/Footer.js';
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

const script = document.createElement("script");
script.src = "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=true";
script.async = true;
document.body.appendChild(script);

class HomePage extends Component {

  render() {
    return(
      <div className="container pt-5 pb-5">
        <div className="text-center">
          <a href="/" title="Go to main">
            <img src={Logo} className="img-fluid" height="64" width="64" alt="emiga.tech logo"/>
          </a>
          <h1 className="pt-1 pb-1">COVID-19 CORONAVIRUS PANDEMIC</h1>
          <div className="pt-1 pb-1">
            <div id="ytWidget"></div>
          </div>
        </div>
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
