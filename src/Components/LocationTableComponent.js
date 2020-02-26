import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LocationOverview from "./SubComponents/LocationOverview"
import LocationScore from "./SubComponents/LocationScore"

const table_style = {
  
}

const city_ratings_container = {
  paddingTop: '4vh'
}

class LocationTable extends React.Component {

 
    render() {
      if (!this.props.selected_city_details || !this.props.selected_city_scores) return null; 
      return (
        <div className="Table" style={table_style}>
           <h3>{this.props.selected_city_full_name}</h3>
           <LocationOverview selected_city={this.props.selected_city} selected_city_details={this.props.selected_city_details}/>
           <div style={city_ratings_container}>
           <h3>City Ratings</h3>
           </div>
           
           <LocationScore selected_city_scores={this.props.selected_city_scores} />
        </div>
      );
    }
  }

export default LocationTable;
