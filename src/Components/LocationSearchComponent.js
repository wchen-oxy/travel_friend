import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
        this.customFilter = this.customFilter.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(city) {
        console.log(city.href);
        const urls = [
            city.href,
            city.href + "scores/",
            city.href + "details/",
            city.href + "images/"
        ]
        Promise.all(urls.map(url =>
            fetch(url)
                .then(raw => raw.json())
                .then(data => getFeed(data))     
        ))
            .then(data => {             
                this.props.onCitySelect(this.props.index, city, data[0], data[1], data[2], data[3]);
            })
    }
    customFilter(option, searchText) {

        if (
            option.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
            option.data.href.toLowerCase().includes(searchText.toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        if (this.props.selected_city) 
        return (
            <Select
                onChange={this.handleSelect}
                filterOption={this.customFilter}
                getOptionLabel={option => `${option.name}`}
                getOptionValue={option => `${option.href}`}
                options={this.props.cities}
                defaultValue={this.props.selected_city}
                />
        );
        else {
            return (
            <Select
                onChange={this.handleSelect}
                filterOption={this.customFilter}
                getOptionLabel={option => `${option.name}`}
                getOptionValue={option => `${option.href}`}
                options={this.props.cities} 
                />
                );
        }
    }
}

function getFeed(raw) {
  
    for (var key in raw) {
        if (key ===  "full_name") return raw[key];
        if (key === "categories") return raw[key];
        if (key === "photos") return raw[key][0]["image"]["web"];}
    
    return null;
  }

export default LocationSearch;
