import React from 'react';
import LocationSearch from './LocationSearchComponent.js';
import LocationTable from './LocationTableComponent.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const inner_select_container = {
  width: "60%"
}

const table_container = {
  padding: "5%"
}

class LocationDiscoveryWindow extends React.Component {

      image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/EarthRender.png"
    

  
  render() {
    let outer_select_container = {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
      paddingTop: "5%",
      paddingBottom: '5%',
      backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/commons/f/f5/EarthRender.png"})`,
      backgroundSize: "cover",
      filter: `grayscale(${"60%"})`
    }
    if (this.props.selected_city_image_url) outer_select_container.backgroundImage = `url(${this.props.selected_city_image_url})`;      
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
        <div style={outer_select_container}>
          <div style={inner_select_container}>
            <LocationSearch
              index={this.props.index}
              onCitySelect={this.props.handleCitySelection}
              cities={this.props.all_cities}
              selected_city={this.props.selected_city}
            />
          </div>
        </div>
        <div style={table_container}>
          {location_table}
        </div>


      </React.Fragment>
    );
  }
}







export default LocationDiscoveryWindow;
