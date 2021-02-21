import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function InsertCurrencyRow(props) {

    const {
        currencyOptions
    } = props

    return ( 
        <div className="row">
            <div className="col-sm">
                <select className="form-select" aria-label="Default select example">
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="col-sm">
                <div className="input-group mb-3">
                    <input type="number" min="0" className="form-control" placeholder="Amout" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    );

}
