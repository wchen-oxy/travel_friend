import React from 'react';
import LocationSearch from './LocationSearchComponent.js';
import LocationTable from './LocationTableComponent.js';
import Fetch from './FetchComponent.js';

import 'bootstrap/dist/css/bootstrap.min.css';

let main_container = {
  maxWidth: "450px"
}


class LocationDiscoveryWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleCityUpdate = this.handleCityUpdate.bind(this);
    this.handleResultUpdate = this.handleResultUpdate.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
    this.handleAllCityInfo = this.handleAllCityInfo.bind(this);
    this.state = {
      all_cities: null,
      selected_city: null,
      selected_city_scores: null,
      selected_city_details: null
    }


  }

  handleAllCityInfo(raw){
    let scores;
    let details;
    console.log(typeof(raw));
    for (var info of raw){
      if (info.length === 17)
      scores = info;
      if (info.length === 22)
      details = info;
    }
    console.log(scores);
    this.setState = {
      selected_city_scores: scores,
      selected_city_details: details
    }
    console.log(this);
  }



  
  handleCitySelection(city, scores, details) {

    console.log("pre");
    //approach 1 that works for sure:
    // this.setState({selected_city:city})
    // Promise.all([
    //   // urls.map(address => fetch(address)).then(raw => raw.json)
    //   fetch(city.href + "scores/").then(raw => raw.json()).then(data => getFeed(data)).then(scores => this.setState({selected_city_scores:scores})),
    //   fetch(city.href + "details/").then(raw => raw.json()).then(data => getFeed(data)).then(details => this.setState({selected_city_details:details})),
      
    // ])
    //approach 2
    this.setState({
      selected_city: city,
      selected_city_scores: scores,
      selected_city_details: details
    })

    console.log("post");
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
    
    console.log("rendered again");
    console.log(this.state.selected_city);
    console.log(this.state.selected_city_scores);
    console.log(this.state.selected_city_details);


    return (
      <div style={main_container}>
        <LocationSearch onCitySelect={this.handleCitySelection} cities={this.state.all_cities} />
        <LocationTable selectedCity={this.state.selected_city}  selectedCityScores={this.state.selected_city_scores} selectedCityDetails={this.state.selected_city_details} />
        <Fetch onCityUpdate={this.handleCityUpdate} />
      </div>
    );
  }
}




function getDetails(raw) {

}


export default LocationDiscoveryWindow;
