import {Component} from "react";

class Counter extends Component {
    state = {
        count: this.props.initialCounter
    }


    changeCount = (operation) => {
        switch (operation) {
            case '+':
                this.setState({count: this.state.count + 1});
                break;
            case '-':
                this.setState({count: this.state.count - 1});
                break;
            default:
        }
    }

    render() {
        return (
            <div>
                <div>Current Count: {this.state.count}</div>
                <button onClick={() => this.changeCount('+')}>Increment</button>
                <button onClick={() => this.changeCount('-')}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
