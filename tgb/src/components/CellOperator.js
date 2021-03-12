import React from 'react';

class CellOperator extends React.Component {
    constructor(props) {
        super(props);
    }

    ClickButton() {
        if (this.props.onClick && typeof this.props.onClick === 'function')
        {
            this.props.onClick(this.props.value);
        }
    }

    render() {
        let method = '';
        switch (this.props.value) {
            case '+': method = 'add'; break;
            case '-': method = 'subtract'; break;
            case '*': method = 'multiply'; break;
            case '/': method = 'divide'; break;
            default: break;
        }
        if (!method) {
            return (
                <div>&nbsp;</div>
            )
        }
        return (
        <div className="cellOperator" onClick={this.ClickButton.bind(this)}>
            <span>
                {this.props.value}
            </span>
        </div>
        );
    }
}

export default CellOperator;