import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LocationScore.css';
import GaugeChart from './GaugeChart.js';

class LocationScore extends React.Component {

    render() {
      let scoresContainer = 'Scores-container';

      let housing;
      let living_cost;
      let travel_connectivity;
      let commute;
      let safety;
      let env_quality;
      let tolerance;
      let outdoors;
      let leisure_culture;

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
          case("Leisure & Culture"):
            leisure_culture = setInfo(cur);
            break;
          default:
        }
      }

     return (    
      <div className={scoresContainer}>
        {leisure_culture}
        {living_cost}
        {outdoors}
        {housing}
        {travel_connectivity}
        {safety}
        {commute}
        {tolerance}
        {env_quality}
      </div>
      );
    }
  }

  function setInfo(item){
    let singleScoreContainer = 'Single-score-container';
    let score = 'Score';
    let scoreTitle = 'Score-title';
    return (
    <div className={singleScoreContainer} >
      <h4 className={scoreTitle}>
        {item.name==="Connectivity"||item.name==="Commute" ? 
        (item.name==="Connectivity" ? (<span>Public Transportation Access</span>):(<span>Traffic</span>))
        :(item.name)} 
      </h4>

      <div className={score}> 
      <GaugeChart score={item.score_out_of_10 * 10} />
      </div>
     
{/*       
      <p>  
        {Math.round(item.score_out_of_10 * 10)/10}
      </p> */}
    </div>
      
      )

  }

export default LocationScore;
