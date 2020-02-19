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
        const urls = [
            city.href + "scores/",
            city.href + "details/"
        ]
        Promise.all(urls.map(url =>
            fetch(url)
                .then(raw => raw.json())
                .then(data => getFeed(data))     
        ))
            .then(data => {
               
                this.props.onCitySelect(city, data[0], data[1]);
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
        return (
            <Select
                onChange={this.handleSelect}
                filterOption={this.customFilter}
                getOptionLabel={option => `${option.name}`}
                getOptionValue={option => `${option.href}`}
                options={this.props.cities} />
        );
    }
}

function getFeed(raw) {
    for (var key in raw) {
        if (key === "categories") {
            return raw[key];
        }
    }
    return null;
}

export default LocationSearch;
