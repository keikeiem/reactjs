import React from 'react';

class ResultForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('in componentDidMount');
    }
 
    componentDidUpdate() {
        console.log('in componentDidUpdate');
    }
 
    componentWillUnmount() {
        console.log('in componentWillUnmount');
    }

    render() {
        return (
            <div className="resultContainer">
                <div className="formulaSection">
                    <span title={this.props.formula}>
                        {this.props.formula}
                    </span>
                </div>
                <div className="resultSection">
                    <span>
                        {this.props.result}
                    </span>
                </div>
            </div>
        );
    }
}

export default ResultForm;