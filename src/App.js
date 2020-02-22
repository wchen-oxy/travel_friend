import React from 'react';
import logo from './logo.svg';
import './App.css';

import LocationDiscoveryWindow from './Components/LocationDiscoveryWindowComponent.js';
const toggle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center'
}

const main_container_options = {
  display: "flex",
  flexDirection: "row"
}
const window_options = {
  width: "50%",
  display: "flex",
  flexDirection: "column"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSingleClick = this.handleSingleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);

    this.state = {
      is_single_view: true,
      first_window : {
        all_cities: null,
      selected_city: null,
      selected_city_full_name: null,
      selected_city_scores: null,
      selected_city_details: null,
      },
      second_window : {
        all_cities: null,
      selected_city: null,
      selected_city_full_name: null,
      selected_city_scores: null,
      selected_city_details: null,
      }

    }
  }

  handleSingleClick() {
    this.setState({ is_single_view: false });
  }

  handleDoubleClick() {
    this.setState({ is_single_view: true })
  }

  render() {
    let button;
    let main_container;

    if (this.state.is_single_view) {
      button = <ToggleSingleButton onClick={this.handleSingleClick} />;
      main_container = (
      <div style={window_options}>
        <LocationDiscoveryWindow/>
        </div>)

    }
    else {
      button = <ToggleDoubleButton onClick={this.handleDoubleClick} />;
      main_container = (<div style={main_container_options}>
        <div style={window_options}>
        <LocationDiscoveryWindow/>
        </div>
        <div style={window_options}>
        <LocationDiscoveryWindow/>
        </div>
        </div>);
      
    }
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={toggle}>
        {button}
        </div>
        {main_container}
      </div>



    );
  }
}

function ToggleSingleButton(props) {
  return (
    <button onClick={props.onClick}>
      Toggle Double City View
    </button>
  );
}

function ToggleDoubleButton(props) {
  return (
    <button onClick={props.onClick}>
      Toggle Single City View
    </button>
  );
}




export default App;
