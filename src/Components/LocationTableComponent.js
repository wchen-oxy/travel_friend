import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationTable extends React.Component {
  

    render() {
      console.log(this.props);
      
      if (!this.props.selectedCityDetails || !this.props.selectedCityScores) return null;
      return (
        
        <div className="title">
           {this.props.selectedCity.name}
        </div>
           
      );
    }
  }

export default LocationTable;
