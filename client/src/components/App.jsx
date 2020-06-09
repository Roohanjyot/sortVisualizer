import React from "react";
import ArrayBar from "./ArrayBar.jsx";
import {bubbleSort} from "./sortingFunctions.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialArr : [10]
        }
    }

    componentDidMount() {
        console.log("comp did mount")
        this.newArray()
    }
    
    newArray() {
        this.setState({
            initialArr : this.unsortedArr(10, 650)
        })

    }

    unsortedArr(min, max) {
        let outputArr = [max];

        while (outputArr.length < 325) {
            outputArr.push(min + Math.floor(Math.random() * (max - min)))
        }

        return outputArr;
    }

    bubbleSortFunc(){
        // const sortedArray = this.state.initialArr.slice().sort((a,b) => a - b);
        const sortByFunc = bubbleSort(this.state.initialArr.slice())

        // console.log('sorted => ', sortedArray, ". myfunc => ", sortByFunc, '. equal? ', sortByFunc == sortedArray)
        this.setState({
            initialArr : sortByFunc
        })
    }

    render() {
        console.log("App rendering", this.state)
        return (
            <div className="sortVisualizer">
                {this.state.initialArr.map((value, index) => {
                    return <ArrayBar value={value} key={index} />
                })}
                <button onClick={this.newArray.bind(this)}>New Array</button>
                <button onClick={this.bubbleSortFunc.bind(this)}>Bubble Sort</button>
            </div>
        )
    }
}

export default App;