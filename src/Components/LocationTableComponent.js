import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LocationOverview from "./SubComponents/LocationOverview";
import LocationScore from "./SubComponents/LocationScore";
import './LocationTableComponent.css';

class LocationTable extends React.Component {

 
    render() {
      let informationContainer = 'Information-container';
      let overviewContainer = 'Overview-container';
      let cityRatingsTitle = 'City-ratings-container';

      if (!this.props.selected_city_details || !this.props.selected_city_scores) return null; 
      return (
        <div className={informationContainer}>
          <div className={overviewContainer}> 
           <h3>{this.props.selected_city_full_name}</h3>
           <LocationOverview selected_city={this.props.selected_city} selected_city_details={this.props.selected_city_details}/>
           </div>
           <div className={cityRatingsTitle}>
           <h3>City Ratings</h3>
           </div>
           <LocationScore selected_city_scores={this.props.selected_city_scores} />
        </div>
      );
    }
  }

export default LocationTable;
