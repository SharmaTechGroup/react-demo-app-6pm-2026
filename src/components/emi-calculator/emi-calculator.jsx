import { useState } from "react"

export function EMICalcualtor(){

    const [loanAmount, setLoanAmount] = useState(25000);
    const [year, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEMI] = useState(0);


    function CalculateEMI(){
         var P = parseInt(loanAmount);
        var R = parseFloat(rate)/12/100;
        var N = parseInt(year) * 12;
        var emi = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)) - 1;
        setEMI(emi);
    }

    function handleAmountChange(e){
        setLoanAmount(e.target.value);
        CalculateEMI();
    }
    function handleYearChange(e){
        setYears(e.target.value);
        CalculateEMI();
    }

    function handleRateChange(e){
        setRate(e.target.value);
        CalculateEMI();
    }

    function handleCalculateClick(){
        var P = parseInt(loanAmount);
        var R = parseFloat(rate)/12/100;
        var N = parseInt(year) * 12;
        var emi = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)) - 1;
        setEMI(emi);
    }

    return(
        <div className="container-fluid" style={{height:'100vh'}}>
            <div className="row mt-4">
                <div className="col-6">
                    <div className="row">
                       <div className="d-flex justify-content-between">
                         <div><label className="form-label fw-bold">Loan Amount</label></div>
                         <div><input type="text" onChange={handleAmountChange} value={loanAmount} className="form-control" /></div>
                       </div>
                       <div>
                        <input type="range" onChange={handleAmountChange} min="25000" value={loanAmount} step="100000" max="1000000" className="form-range" />
                        <div>
                            <span>&#8377; 25,000/-</span>
                            <span className="float-end">&#8377; 10,00,000/-</span>
                        </div>
                       </div>
                    </div>
                     <div className="row my-3">
                       <div className="d-flex justify-content-between">
                          <div><label className="form-label fw-bold">Loan Tenure</label></div>
                          <div><input onChange={handleYearChange} style={{width:'50px'}} value={year} type="text" className="form-control" /></div>
                       </div>
                       
                       <div>
                        <input type="range" onChange={handleYearChange} min="1" max="7" value={year} className="form-range" />
                        <div>
                            <span>1 Year</span>
                            <span className="float-end">7 Years</span>
                        </div>
                       </div>
                    </div>
                     <div className="row my-3">
                       <div className="d-flex justify-content-between">
                          <div><label className="form-label fw-bold">Loan Interest</label></div>
                          <div><input type="text" onChange={handleRateChange} value={rate} style={{width:'70px'}} className="form-control" /></div>
                       </div>
                       <div>
                        <input type="range" onChange={handleRateChange} value={rate} min="10.45" step="0.01" max="18.45" className="form-range" />
                        <div>
                            <span>10.45%</span>
                            <span className="float-end">18.45%</span>
                        </div>
                       </div>
                    </div>
                    <div className="text-center">
                        <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="col-6 ps-4">
                    <h3>Loan Installment Amount</h3>
                    <div className="h1">
                        {emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}
                    </div>
                </div>
            </div>
        </div>
    )
}