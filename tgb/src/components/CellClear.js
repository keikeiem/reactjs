import React from 'react';

class CellClear extends React.Component {
    constructor(props) {
        super(props);
        this.label = 'C';
    }

    ClickButton() {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div className="cellClear" onClick={this.ClickButton.bind(this)}>
                <span>
                    {this.label}
                </span>
            </div>
        );
    }
}

export default CellClear;