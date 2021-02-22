import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function InsertCurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        insertAmount,
        onChangeAmount
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
                <div className="input-group mb-3">
                    <input type="number" min="0" className="form-control" value={insertAmount} onChange={onChangeAmount} placeholder="Amout" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    );

}
