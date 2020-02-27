import React from 'react';
import LocationSearch from './LocationSearchComponent.js';
import LocationTable from './LocationTableComponent.js';
import './LocationDiscoveryWindowComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationDiscoveryWindow extends React.Component {
  image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/EarthRender.png"
  render() {
    let outerSelectContainer = 'Outer-select-container';
    let innerSelectContainer = 'Inner-select-container';
    let informationContainer = 'Information-container';
    let location_table = null;

    if (this.props.selected_city) {

      location_table = (
        <LocationTable
          selected_city={this.props.selected_city}
          selected_city_full_name={this.props.selected_city_full_name}
          selected_city_scores={this.props.selected_city_scores}
          selected_city_details={this.props.selected_city_details}
        />);
    }
    return (
      <React.Fragment>
        <div className={outerSelectContainer} >
          <div className={innerSelectContainer} >
            <LocationSearch
              index={this.props.index}
              onCitySelect={this.props.handleCitySelection}
              cities={this.props.all_cities}
              selected_city={this.props.selected_city}
            />
          </div>
        </div>
        <div className={informationContainer}>
          {location_table}
        </div>
      </React.Fragment>
    );
  }
}







export default LocationDiscoveryWindow;
