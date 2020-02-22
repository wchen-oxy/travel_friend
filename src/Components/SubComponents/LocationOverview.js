import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const options = {
  paddingBottom: '10%'
}

class LocationOverview extends React.Component {


  render() {
    const weather_type = getInfo(this.props.selectedCityDetails, "CLIMATE", "WEATHER-TYPE", "string_value");
    const population = getInfo(this.props.selectedCityDetails, "CITY-SIZE", "POPULATION-SIZE", "float_value");
    const food = {
      cappucino: getInfo(this.props.selectedCityDetails, "COST-OF-LIVING", "COST-CAPPUCCINO", "currency_dollar_value"),
      beer: getInfo(this.props.selectedCityDetails, "COST-OF-LIVING", "COST-IMPORT-BEER", "currency_dollar_value"),
      meal: getInfo(this.props.selectedCityDetails, "COST-OF-LIVING", "COST-RESTAURANT-MEAL", "currency_dollar_value")
    };
    const currency = getInfo(this.props.selectedCityDetails, "ECONOMY", "CURRENCY-URBAN-AREA", "string_acronym_value");
    const languages = getInfo(this.props.selectedCityDetails, "LANGUAGE", "SPOKEN-LANGUAGES", "string_list_value");

    // console.log(this.props.selectedCityDetails[2].data[4]);




    return (
      <div style={options}>
        {/* climate sentence */}
        
          <span>The city of {this.props.selectedCity.name} </span> {weather_type && <span>has a {weather_type} </span>} 
          {{population} && <span>and roughly {population} million residents who</span>} {{languages} && <span> speaks mostly {languages}.</span>} 
          <span> A cup of coffee here will cost about ${food.cappucino} USD, a beer will
          cost about ${food.beer} USD and a meal will be about ${food.meal} USD.</span>
      </div>
    );
  }
}

// function getFeed(raw) {

//   for (var key in raw) {
//     if (key === "full_name") return raw[key];
//     if (key === "categories") return raw[key];
//   }
//   return null;
// }

function getInfo(feed, category, sub_category, return_type) {
  for (let j = 0; j < feed.length; j++) {
    if (feed[j] && feed[j].id === category) {
      for (let i = feed[j].data.length - 1; i >= 0; i--) {
        if (feed[j].data[i].id === sub_category) {
          console.log(feed[j].data[i].string_value);
          switch (return_type) {
            case ("string_value"):
              return feed[j].data[i].string_value.toLowerCase();
            case ("float_value"):
              return feed[j].data[i].float_value;
            case ("currency_dollar_value"):
              return feed[j].data[i].currency_dollar_value;
            case ("string_acronym_value"):
              return feed[j].data[i].string_value;
            case ("string_list_value"):
              var list = feed[j].data[i].string_value.split(',');
              if (list.length > 1) {
                list[list.length - 1] = " and " + list[list.length - 1];
                return list;
              }
              return feed[j].data[i].string_value;

            default:
              return null;
          }
        }
      }

    };
  }
  return null;
}

export default LocationOverview;
