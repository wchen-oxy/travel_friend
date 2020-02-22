import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LocationOverview from "./SubComponents/LocationOverview"
import LocationScore from "./SubComponents/LocationScore"

class LocationTable extends React.Component {
 
    render() {
      if (!this.props.selectedCityDetails || !this.props.selectedCityScores) return null;
     
      return (
        <div className="Table" >
           {this.props.selectedCityFullName}
           <LocationOverview selectedCity={this.props.selectedCity} selectedCityDetails={this.props.selectedCityDetails}/>
           <h3>City Ratings</h3>
           <LocationScore selectedCityScores={this.props.selectedCityScores}/>
        </div>
      );
    }
  }

export default LocationTable;
