import React from 'react';
import logo from './logo.svg';
import DetailComponent from './Components/DetailComponent.js'
import Return from './return.png';
import './App.css';
import Fetch from './Components/FetchComponent.js';
import ToggleSwitch from './Components/SubComponents/ToggleSwitch.js'
import WelcomeComponent from './Components/WelcomeComponent.js'


import LocationDiscoveryWindow from './Components/LocationDiscoveryWindowComponent.js';

const app_container = {
  backgroundColor: '#EDFFD9',
  minHeight: "100vh"

}

const header = {
  paddingLeft: '5vh',
  paddingTop: '2.5vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
  
}

const toggle_outer_container = {
  alignSelf: 'flex-end',
  paddingRight: '5vh',
 
}

const toggle_inner_container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const return_image = {
  width: '40px'
}

const logo_button = {
  border: 'none',
  alignSelf: 'flex-start'
}

const main_container_options = {
  display: "flex",
  flexDirection: "row",
  
}
const single_window_options = {
  paddingLeft: '15vh',
  paddingRight: '15vh',
  display: "flex",
  flexDirection: "column",
 
 
}

const left_window_options = {
  width: '50%',
  paddingLeft: '10vh',
  paddingRight: '1vh',
  display: "flex",
  flexDirection: "column",
 
}
const right_window_options = {
  width: '50%',
  paddingLeft: '1vh',
  paddingRight: '10vh',
  display: "flex",
  flexDirection: "column",
 
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.homeState = this.homeState.bind(this);
    this.resultState = this.resultState.bind(this);
    this.detailState = this.detailState.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);

    this.state = {
      step: 1,
      checked: false,
      all_cities: null,
      //FIRST WINDOW
      first_window_selected_city: null,
      first_window_selected_city_full_name: null,
      first_window_selected_city_scores: null,
      first_window_selected_city_details: null,
      first_window_selected_city_image_url: null,
      //SECOND WINDOW
      second_window_selected_city: null,
      second_window_selected_city_full_name: null,
      second_window_selected_city_scores: null,
      second_window_selected_city_details: null,
      second_window_selected_city_image_url: null

    }
  }
  detailState(){
    this.setState({step: 2})
  }
  resultState(){
    this.setState({step: 3})
  }
  homeState(){
    this.setState({step: 1})
  }



  handleToggleCheck(checked){
    this.setState({ checked: checked });
  }

  handleCitySelection(index, city, city_full_name, scores, details, image_url) {
    if (index === 1) {
      this.setState({
        first_window_selected_city: city,
        first_window_selected_city_full_name: city_full_name,
        first_window_selected_city_scores: scores,
        first_window_selected_city_details: details,
        first_window_selected_city_image_url: image_url
      });
    }

    else if (index === 2) {
      this.setState({
        second_window_selected_city: city,
        second_window_selected_city_full_name: city_full_name,
        second_window_selected_city_scores: scores,
        second_window_selected_city_details: details,
        second_window_selected_city_image_url: image_url
      })
    }
  }

  handleCityUpdate(cities) {
    this.setState({ all_cities: cities });
  }

  render() {
    console.log(this.state.step);

    switch (this.state.step){
      case(1):
        return(
        <WelcomeComponent handleResultClick={this.resultState} handleDetailClick={this.detailState}/>
        );
      case(2):
          return(
            <DetailComponent handleHomeClick={this.homeState}/>
          );

      case(3):
      let button;
      let main_container;
      let windowStyle;
      console.log(this.state.checked);
      if (!this.state.checked) {
        // button = <ToggleSingleButton onClick={this.handleSingleClick} />;
        windowStyle = {};
        main_container = (
          <div style={single_window_options}>
            <LocationDiscoveryWindow
              index={1}
              all_cities={this.state.all_cities}
              selected_city={this.state.first_window_selected_city}
              selected_city_full_name={this.state.first_window_selected_city_full_name}
              selected_city_scores={this.state.first_window_selected_city_scores}
              selected_city_details={this.state.first_window_selected_city_details}
              selected_city_image_url={this.state.first_window_selected_city_image_url}
              handleCitySelection={this.handleCitySelection}
            />
          </div>)
  
      }
      else {
        // button = <ToggleDoubleButton onClick={this.handleDoubleClick} />;
        windowStyle = {
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
        };
  
        main_container = (
        <div style={main_container_options}>
          <div style={left_window_options}>
            <LocationDiscoveryWindow
              index={1}
              all_cities={this.state.all_cities}
              selected_city={this.state.first_window_selected_city}
              selected_city_full_name={this.state.first_window_selected_city_full_name}
              selected_city_scores={this.state.first_window_selected_city_scores}
              selected_city_details={this.state.first_window_selected_city_details}
              selected_city_image_url={this.state.first_window_selected_city_image_url}
              handleCitySelection={this.handleCitySelection}
            />
          </div>
          <div style={right_window_options}>
            <LocationDiscoveryWindow
              index={2}
              all_cities={this.state.all_cities}
              selected_city={this.state.second_window_selected_city}
              selected_city_full_name={this.state.second_window_selected_city_full_name}
              selected_city_scores={this.state.second_window_selected_city_scores}
              selected_city_details={this.state.second_window_selected_city_details}
              selected_city_image_url={this.state.second_window_selected_city_image_url}
              handleCitySelection={this.handleCitySelection}
            />
          </div>
        </div>);
  
      }
      return (
      
        <div className="App" style={app_container}>
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
  
        <header style={header}>
        {/* (param) => this.toggle(param) */}
          
        <button style={logo_button} onClick={this.homeState}><img src={Return} style={return_image} alt='Return Button' /></button>
        
        <div style={toggle_outer_container}>
          {/* <div style={toggle_inner_container}> */}
            
            {/* {button} */}
            <ToggleSwitch checked={this.state.checked} onChecked={this.handleToggleCheck}/>
            
            {/* </div> */}
          </div>
          
        </header>
          
          <div style={windowStyle}>
            {main_container}
          </div>
          
          <Fetch onCityUpdate={this.handleCityUpdate} />
        </div>
      );
      default:
        

     
    }
  
   
  }
}

export default App;
