import './App.css';
import {Component} from "react";
import Counter from "./containers/Counter/Counter";

class App extends Component{
  state = {
    initialCounter: 15
  }

  render() {
    return (
        <div className="App">
          <Counter initialCounter={this.state.initialCounter}/>
        </div>
    );
  }
}

export default App;
