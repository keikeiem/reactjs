import './Calculator.css';
import React from 'react';
// added custom Classes
import ResultForm from "./ResultForm";
import CellOperator from "./CellOperator";
import CellNumber from "./CellNumber";
import CellClear from "./CellClear";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
    }

    ClickOperator() {
        console.log('click operator: ', arguments);
    }

    ClickNumber(value) {
        console.log('click number: ', arguments);
        this.formula += value;
        
    }

    ClickPoint() {
        console.log('click point: ', arguments);
    }

    ClickEqual() {
        console.log('click equal', arguments);
    }

    ClickClear() {
        console.log('click clear: ', arguments);
    }

    render() {
        return(
            <div className="calcContainer">
                <ResultForm formula={this.formula} result={this.result} />
                <CellOperator onClick={this.ClickOperator.bind(this)} value="+"/>
                <CellOperator onClick={this.ClickOperator.bind(this)} value="-"/>
                <CellOperator onClick={this.ClickOperator.bind(this)} value="*"/>
                <CellOperator onClick={this.ClickOperator.bind(this)} value="/"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="9"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="8"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="7"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="6"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="5"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="4"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="3"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="2"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="1"/>
                <CellNumber onClick={this.ClickNumber.bind(this)} value="0"/>
                <CellNumber onClick={this.ClickPoint.bind(this)} value="."/>
                <CellNumber onClick={this.ClickEqual.bind(this)} value="="/>
                <CellClear onClick={this.ClickClear.bind(this)}/>
            </div>
        );
    }
}

export default Calculator;