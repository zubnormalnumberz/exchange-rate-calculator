import image from './currency-rates.svg';
import React, {useEffect, useState} from 'react'
import InsertCurrencyRow from './components/insertCurrencyRow';
import ResultCurrencyRow from './components/resultCurrencyRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {

    const [currencyOptions, setCurrencyOptions] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data =>
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            )
        
    }, [])

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
                        />
                        <div className="row">
                            <div className="col-sm">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="button">Swap</button>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="d-flex flex-row-reverse">dafgk</div>
                            </div>
                        </div>
                        <br/>
                        <ResultCurrencyRow
                        currencyOptions = {currencyOptions}
                        />
                    </div>
                </div>      
        </header>
        </div>
    );
}

export default App;
