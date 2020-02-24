import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ApexChart from './gaugeChart';

const options = {
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center'

}

const textOption = {
  textAlign: 'center'
}

const scoreContainer = {
  paddingTop: '5%',
  paddingBottom: '5%'
}
class LocationScore extends React.Component {

    render() {
      let housing;
      let living_cost;
      let travel_connectivity;
      let commute;
      let safety;
      let env_quality;
      let tolerance;
      let outdoors;

      for (let cur of this.props.selected_city_scores){
        switch (cur.name){
          case("Housing"):
            housing = setInfo(cur);
            break;
          case("Cost of Living"):
            living_cost = setInfo(cur);
            break;
          case("Travel Connectivity"):
            travel_connectivity = setInfo(cur);
            break;
          case("Commute"):
            commute = setInfo(cur);
            break;
          case("Safety"):
            safety = setInfo(cur);
            break;
          case("Environmental Quality"):
            env_quality = setInfo(cur);
            break;
          case("Tolerance"):
            tolerance = setInfo(cur);
            break;
          case("Outdoors"):
            outdoors = setInfo(cur);
            break;
          default:
            
        }
      }

     return (    
      <div>
        {housing}
        {travel_connectivity}
        {living_cost}
        {commute}
        {safety}
        {tolerance}
        {outdoors}
        {safety}
        {env_quality}
      </div>
      );
    }
  }

  function setInfo(item){
    return (
    <div style={scoreContainer}>
      <p style={textOption}>
        {item.name==="Connectivity"||item.name==="Commute" ? 
        (item.name==="Connectivity" ? (<span>Public Transportation Access</span>):(<span>Traffic</span>))
        :(item.name)} 
      </p>

      <div style={options}> 
      <ApexChart score={item.score_out_of_10 * 10} />
      </div>
     
{/*       
      <p>  
        {Math.round(item.score_out_of_10 * 10)/10}
      </p> */}
    </div>
      
      )

  }

export default LocationScore;
