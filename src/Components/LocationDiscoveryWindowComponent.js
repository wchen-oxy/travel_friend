import React from 'react';
import LocationSearch from './LocationSearchComponent.js';
import LocationTable from './LocationTableComponent.js';
import Fetch from './FetchComponent.js';

import 'bootstrap/dist/css/bootstrap.min.css';

let outer_select_container = {
  
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center',
  paddingTop: "5%"
}

let inner_select_container = {
  width: "60%"
}



let table_container = {
  padding: "5%"
}

class LocationDiscoveryWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.state = {
      all_cities: null,
      selected_city: null,
      selected_city_full_name: null,
      selected_city_scores: null,
      selected_city_details: null,

    }
  }

  handleCitySelection(city, city_full_name, scores, details) {
    this.setState({
      selected_city: city,
      selected_city_full_name: city_full_name,
      selected_city_scores: scores,
      selected_city_details: details
    })
  }

  handleCityUpdate(cities) {
    this.setState({ all_cities: cities });
  }

  render() {

    console.log("render");
    // console.log(this.state.selected_city_scores);
    // console.log(this.state.selected_city_details);

    return (


      <React.Fragment>
        <div style={outer_select_container}>
          <div style={inner_select_container}>
          <LocationSearch
            onCitySelect={this.handleCitySelection}
            cities={this.state.all_cities}
          />
          </div>
        </div>
        <div style={table_container}>
          <LocationTable
            selectedCity={this.state.selected_city}
            selectedCityFullName={this.state.selected_city_full_name}
            selectedCityScores={this.state.selected_city_scores}
            selectedCityDetails={this.state.selected_city_details}
          />
        </div>
        <Fetch onCityUpdate={this.handleCityUpdate} />

      </React.Fragment>
    );
  }
}







export default LocationDiscoveryWindow;
