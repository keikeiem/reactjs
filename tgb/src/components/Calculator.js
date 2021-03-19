import './Calculator.css';
import React from 'react';
// added custom Classes
import ResultForm from "./ResultForm";
import CellOperator from "./CellOperator";
import CellNumber from "./CellNumber";
import CellClear from "./CellClear";

function isInsertOperator(array) {
    // 0 - 입력안함
    // 1 - 입력함
    // 2 - 연산자가 연속으로 나오면 변경함
    // 최초에 숫자 없이 나온 연산자는 무시한다.
    if (!array.length)
        return (false);

    if (array[(array.length - 1)].type === 'point'
    || array[(array.length - 1)].type === 'operator')
    {
        array.splice((array.length - 1), 1);
        return (true);
    }

    return (true);
    // 숫자 뒤에는 연산자를 사용한다.
    // . 뒤에 연산자가 나올 경우 .을 제거한다?
    // 연산자가 연속해서 나타나면 마지막 연산자를 변경한다.
}

function isInsertNumber(array) {
    // 숫자가 들어갈 수 없는 경우는 없는거 같은데...
    if (!this.clearData)
    {
        return (array[(array.length - 1)].type === 'operator');
    }

    return (true);
}

function isInsertPoint(array) {
    if (!this.clearData) 
    {
        return (array[(array.length - 1)].type === 'operator');
    }

    if (array[(array.length - 1)].type === 'point')
        return (false);
    // 연산자와 연산자 사이에는 소수점이 한 개 이상 있으면 안됨.
    // 연속해서 두 개의 소수점이 나타나면 무시하기
    // 연산자 뒤에 소수점이 나올 경우 0을 채워넣기
    if (array[(array.length - 1)].type === 'operator')
    {
        array.push('0');
        return (true);
    }
    
    for (let i = findLastOperatorIndex(array); i < array.length; i++)
    {
        if (array[i].type === 'point')
            return (false);
    }
    return (true);
}

function findLastOperatorIndex(array) {
    for (let i = (array.length - 1); i >= 0; i--)
    {
        if (array[i].type === 'operator')
            return (i);
    }
    return (0);
}

function isInsertEqual(array) {
    if (array[(array.length - 1)].type !== 'number')
    {
        array.splice((array.length - 1), 1);
        return (true);
    }
    return (true);
}

function Plus(a, b) {
    return (a + b);
}
function Subtract(a, b) {
    return (a - b);
}
function Multiply(a, b) {
    return (a * b);
}
function Divide(a, b) {
    return (a / b);
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);   
    }

    formula = '';
    valueStack = [];
    result = '';
    clearData = true;

    UpdateFormula() {
        // this.valueStack으로부터 this.formula를 만드는 함수
        this.formula = '';
        for (let i = 0; i < this.valueStack.length; i++)
        {
            if (i > 0)
                this.formula += ' ';
            this.formula += this.valueStack[i].value;
        }
    }

    ClickOperator(value) {
        console.log('click operator: ', arguments);
        if (isInsertOperator.call(this, this.valueStack))
        {
            this.valueStack.push({value: value, type: 'operator'});
            this.UpdateFormula();
            this.setState(this);
        }
    }

    ClickNumber(value) {
        console.log('click number: ', arguments);
        if (isInsertNumber.call(this, this.valueStack))
        {
            this.valueStack.push({value: value, type: 'number'});
            this.UpdateFormula();
            this.setState(this);
        }
    }

    ClickPoint(value) {
        console.log('click point: ', arguments);
        if (isInsertPoint.call(this, this.valueStack))
        {
            this.valueStack.push({value: value, type: 'point'});
            this.UpdateFormula();
            this.setState(this);
        }
    }

    ClickEqual() {
        if (isInsertEqual(this.valueStack))
        {
            this.valueStack.push({value: '=', type: 'equal'});
            this.UpdateFormula();
            this.ComputeResult();
            this.setState(this);
        }
    }

    ClickClear() {
        this.formula = '';
        this.valueStack = [];
        this.result = '';
        this.clearData = true;
        this.setState(this);
    }

    ComputeResult() {
        let i = 0;
        let refinedArray = [];
        let number = '';
        while (this.valueStack[i])
        {
            if (this.valueStack[i].type === 'equal')
            {
                refinedArray.push(Number(number));
                number = '';
                break;
            }

            if (this.valueStack[i].type !== 'operator')
            {
                number += this.valueStack[i].value;
                i++;
                continue;
            }

            if (this.valueStack[i].type === 'operator')
            {
                refinedArray.push(Number(number), this.valueStack[i].value);
                number = '';
                i++;
            }
        }

        i = 0;
        let prevResult = refinedArray[0];
        while (refinedArray[i]) {
            switch (refinedArray[i])
            {
                case '+': prevResult = Plus(prevResult, refinedArray[(i + 1)]); break;
                case '-': prevResult = Subtract(prevResult, refinedArray[(i + 1)]); break;
                case '*': prevResult = Multiply(prevResult, refinedArray[(i + 1)]); break;
                case '/': prevResult = Divide(prevResult, refinedArray[(i + 1)]); break;
            }
            i++;
        }
        this.result = prevResult;
        // 다음에 이어서 연산할 때 써야함.
        this.valueStack = [{value: prevResult, type: number}];
        this.clearData = false;
    }

    render() {
        return(
            <div className="calcContainer">
                <ResultForm formula={this.formula} result={this.result}/>
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