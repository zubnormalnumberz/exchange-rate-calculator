import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ResultCurrencyRow(props){

    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        resultAmount
    } = props

    return (
        <div className="row">
            <div className="col-sm">
                <select className="form-select" aria-label="Default select example" value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="col-sm">
                <div className="d-flex flex-row-reverse">{resultAmount}</div>
            </div>
        </div>
    );
    }