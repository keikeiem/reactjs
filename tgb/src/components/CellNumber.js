import React from 'react';

class CellNumber extends React.Component {
    constructor(props) {
        super(props);
    }

    ClickButton() {
        console.log(this);
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(this.props.value);
        }
    }

    render() {
        return (
            <div className="cellNumber" onClick={this.ClickButton.bind(this)}>
                <span>
                    {this.props.value}
                </span>
            </div>    
        );
    }
}

export default CellNumber;