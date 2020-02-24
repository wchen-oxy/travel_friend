import React from 'react';


const apiUrl = "https://api.teleport.org/api";
const urbanUrlPart = "/urban_areas/";

class Fetch extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cities: [],
  //   }
  // }

  componentDidMount() {
    fetch(apiUrl + urbanUrlPart)
      .then(res => res.json())
      .then(
        (data) => {
          const transformedData = getCityContent(data);
          this.props.onCityUpdate(transformedData);
          // console.log(transformedData);
        }).catch((error) => {
          console.error('Error:', error);
        });
  }
  render() {
    return null;
  }
}

function getCityContent(raw) {
  for (var key in raw._links) {
    if (key === "ua:item") return raw._links[key];
  }
  return null;

}

export default Fetch;
