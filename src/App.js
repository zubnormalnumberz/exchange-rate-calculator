import image from './currency-rates.svg';
import React, {useEffect, useState} from 'react'
import InsertCurrencyRow from './components/insertCurrencyRow';
import ResultCurrencyRow from './components/resultCurrencyRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from "react-alert";
import './App.css';

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {

    const alert = useAlert()

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [amount, setAmount] = useState(1)
    const [exChangeRate, setExchangeRate] = useState()

    let resultAmount
    resultAmount = amount*exChangeRate

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data =>{
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
        })
        
    }, [])

    useEffect(()=> {
        if(fromCurrency != null && toCurrency != null){
            fetch(`${BASE_URL}?base=${fromCurrency}&symbol=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    function handleAmountChange(e){
        e.target.value >= 0 ? setAmount(e.target.value) : alert.error('Negative numbers are not allowed') 
    }

    function handleSwap(e){
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    return (
        <div className="App">
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <header className="App-header">
                <div className="container-fluid">
                    <img src={image} width="125" alt="Logo" />
                    <h2>Exchange Rate Calculator</h2>
                    <p>Choose the currency and the amounts to get the exchange rate</p>
                    <br/>
                    <div className="container">
                        <InsertCurrencyRow
                        currencyOptions = {currencyOptions}
                        selectedCurrency = {fromCurrency}
                        onChangeCurrency = {e => setFromCurrency(e.target.value)}
                        insertAmount = {amount}
                        onChangeAmount = {handleAmountChange}
                        />
                        <div className="row">
                            <div className="col-sm">
                                <div class="d-grid gap-2">
                                    <button onClick={handleSwap} class="btn btn-primary" type="button">Swap</button>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="d-flex flex-row-reverse">1 {fromCurrency} = {exChangeRate} {toCurrency}</div>
                            </div>
                        </div>
                        <br/>
                        <ResultCurrencyRow
                        currencyOptions = {currencyOptions}
                        selectedCurrency = {toCurrency}
                        onChangeCurrency = {e => setToCurrency(e.target.value)}
                        resultAmount = {resultAmount}
                        />
                    </div>
                </div>      
        </header>
        </div>
    );
}

export default App;
