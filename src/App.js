import React, { useEffect, useState, useRef } from 'react';
import { Block } from './Block';
import './index.scss';
import axios from 'axios';



function App() {

  const ratesRef = useRef({})
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);


  useEffect(() => {
    loadData();
  }, [])


  const loadData = async () => {

    try {
      const res = await axios.get("https://cdn.cur.su/api/latest.json");
      ratesRef.current = res.data.rates;
      OnChangeToPrice(toPrice)
    }
    catch (err) {
      console.log(err)
    }
  }

  const OnChangeFromPrice = (value) => {
    //console.log(value)
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setFromPrice(value);
    setToPrice(result.toFixed(3));
  }

  const OnChangeToPrice = (value) => {
    //console.log(value)
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  useEffect(() => {
    
    OnChangeFromPrice(fromPrice);
  }, [fromCurrency])

  useEffect(() => {
    
    OnChangeToPrice(toPrice);
  }, [toCurrency])

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={(cur) => setFromCurrency(cur)} onChangeValue={(value) => OnChangeFromPrice(value)}/>
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={(cur) => setToCurrency(cur)} onChangeValue={(value) => OnChangeToPrice(value)}/>
    </div>
  );
}

export default App;
