import React from "react";

class ArrayBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("ArrayBar rendering")
        return (
            <div className="arrayBar" style={{height: `${this.props.value}px`}}>
                {/* {this.props.value} */}
            </div>
        )
    }
}

export default ArrayBar;