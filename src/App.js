import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');
// let NumeralInput = require('react-numeral-input');




class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      cryptos: []
    };
  }



  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,LTC,ADA,NEO,XLM,XMR,EOS,IOT,DASH,XEM,TRX,ETC,VEN,GJC,USDT,QTUM,BTG,LSK,OMG,ICX,ZEC,DGD,UCASH,BNB,STEEM,BCN,PPT,XVG,STRAT,WAVES,SNT,WTC,RHOC,SC,MKR,DOGE,BTS,AE,DCR,REP,ZRX,KMD,BTM,ETN,VERI,ARDR,ARK,ACT,DRGN,GNT,HSR,SYS,BAT,CNX,ETHOS,PIVX,ZIL,DGB&tsyms=USD,EUR')
      .then(results => {
        const cryptos = results.data.RAW;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="header--title">Crypto Eye</h1>
        </div>

          <div className="crypto-container">
            <div className="table-container">
              <table className="crypto-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Coin</th>
                    <th></th>
                    <th className="text-right">Price</th>
                    {/* <th className="text-right">1 Hour</th>
                    <th className="text-right">1 Day</th>
                    <th className="text-right">1 Week</th> */}
                    <th className="text-right">Market Cap</th>
                    {/* <th className="text-right">24h Volume</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.state.cryptos).map((key) => (
                  <tr className="coin-row">
                    <th></th>
                    <td className="crypto">{key}</td>
                    <th></th>

                    <td className="dollar"><NumberFormat value={this.state.cryptos[key].USD.PRICE} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} /></td>
                    <td className="marketcap"><NumberFormat value={this.state.cryptos[key].USD.MKTCAP} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} /></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    );
  }
}

  
export default App;



// function myFunction(e) {
//   var x = e.target.childNodes[2];
//   var y = e.target.childNodes[1];
//   if (x.style.display === "block") {
//       y.style.display = "none";
//   } else {
//       x.style.display = "block";
//       y.style.display = "none";
//   }
// console.log(e.target.childNodes);
// }
