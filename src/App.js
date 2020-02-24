import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './Components/FetchComponent.js';


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
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);

    this.state = {
      is_single_view: true,
      all_cities: null,
      //FIRST WINDOW
      first_window_selected_city: null,
      first_window_selected_city_full_name: null,
      first_window_selected_city_scores: null,
      first_window_selected_city_details: null,
      //SECOND WINDOW
      second_window_selected_city: null,
      second_window_selected_city_full_name: null,
      second_window_selected_city_scores: null,
      second_window_selected_city_details: null,

    }
  }

  handleSingleClick() {
    this.setState({ is_single_view: false });
  }

  handleDoubleClick() {
    this.setState({ is_single_view: true })
  }

  handleCitySelection(index, city, city_full_name, scores, details) {
    if (index === 1) {
      this.setState({
        first_window_selected_city: city,
        first_window_selected_city_full_name: city_full_name,
        first_window_selected_city_scores: scores,
        first_window_selected_city_details: details
      });
    }

    else if (index === 2) {
      this.setState({
        second_window_selected_city: city,
        second_window_selected_city_full_name: city_full_name,
        second_window_selected_city_scores: scores,
        second_window_selected_city_details: details
      })
    }
  }

  handleCityUpdate(cities) {
    this.setState({ all_cities: cities });
  }

  render() {
    let button;
    let main_container;

    if (this.state.is_single_view) {
      button = <ToggleSingleButton onClick={this.handleSingleClick} />;
      main_container = (
        <div style={window_options}>
          <LocationDiscoveryWindow
            index={1}
            all_cities={this.state.all_cities}
            selected_city={this.state.first_window_selected_city}
            selected_city_full_name={this.state.first_window_selected_city_full_name}
            selected_city_scores={this.state.first_window_selected_city_scores}
            selected_city_details={this.state.first_window_selected_city_details}
            handleCitySelection={this.handleCitySelection}
          />
        </div>)

    }
    else {
      button = <ToggleDoubleButton onClick={this.handleDoubleClick} />;
      main_container = (<div style={main_container_options}>
        <div style={window_options}>
          <LocationDiscoveryWindow
            index={1}
            all_cities={this.state.all_cities}
            selected_city={this.state.first_window_selected_city}
            selected_city_full_name={this.state.first_window_selected_city_full_name}
            selected_city_scores={this.state.first_window_selected_city_scores}
            selected_city_details={this.state.first_window_selected_city_details}
            handleCitySelection={this.handleCitySelection}
          />
        </div>
        <div style={window_options}>
          <LocationDiscoveryWindow
            index={2}
            all_cities={this.state.all_cities}
            selected_city={this.state.second_window_selected_city}
            selected_city_full_name={this.state.second_window_selected_city_full_name}
            selected_city_scores={this.state.second_window_selected_city_scores}
            selected_city_details={this.state.second_window_selected_city_details}
            handleCitySelection={this.handleCitySelection}
          />
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
        <Fetch onCityUpdate={this.handleCityUpdate} />
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
