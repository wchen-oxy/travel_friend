import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationTable extends React.Component {

    render() {
      
      if (!this.props.selectedCityDetails) return null;
      return (
        
        <div class="title">
           {this.props.selectedCity.name}
        </div>
           
      );
    }
  }

export default LocationTable;
