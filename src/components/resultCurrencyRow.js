import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ResultCurrencyRow(props){

    const{
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
                <div className="d-flex flex-row-reverse">dafgk</div>
            </div>
        </div>
    );
    }