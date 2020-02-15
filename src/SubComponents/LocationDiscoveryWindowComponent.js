import React from 'react';
import LocationSearch from './LocationSearchComponent.js';
import LocationTable from './LocationTableComponent.js';
import Fetch from './FetchComponent.js';

import 'bootstrap/dist/css/bootstrap.min.css';




class LocationDiscoveryWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleResultUpdate = this.handleResultUpdate.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.state = {
      all_cities: null,
      selected_city: null,
      selected_city_details: null
      
    }
  }

  handleCitySelection(city) {
   
    console.log("City changed");
    //code used to get the details
    fetch(city.href + "scores/")
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          selected_city: city,
          selected_city_details: getDetails(data)        
        });
      }
    )
  }
  //method to get all cities
  handleCityUpdate(cities) {

    this.setState({ all_cities: cities });
  }

  //method to send the data associated with the city
  handleResultUpdate(city) {
    this.setState({ selected_city: city });
  }

  // handleCityDetailUpdate(new_details) {
  //   this.setState({details: new_details});
  // }

  render() {

    console.log(this.state.selected_city);
    return (
      <div>
        {/* <LocationComparisonToggle /> */}
        <LocationSearch onCitySelect={this.handleCitySelection} cities={this.state.all_cities} />
        <LocationTable selectedCity={this.state.selected_city} selectedCityDetails={this.state.selected_city_details} />
        <Fetch onCityUpdate={this.handleCityUpdate} />
      </div>
    );
  }
}



function getDetails(raw) {
  for (var key in raw) {
    if (key === "categories") {
      return raw[key];}
  }
  return null;
}



export default LocationDiscoveryWindow;
