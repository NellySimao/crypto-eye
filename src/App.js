import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');



class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      cryptos: []
    };
  }



  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,KNC&tsyms=USD,EUR')
      .then(results => {
        const cryptos = results.data.RAW;
        const cryptoEur = results.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }


  render() {
    return (
      <div className="App" onClick={myFunction}>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="crypto">{key}</span>
            <span id="dollar"><NumberFormat value={this.state.cryptos[key].USD.PRICE} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'} />
</span>
            <span id="euro"><NumberFormat value={this.state.cryptos[key].EUR.PRICE} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'€'} />
</span>
          </div>
        ))}
      </div>
    );
  }
}

  
export default App;

function myFunction() {
  var x = document.getElementById("euro");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}