import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



class LocationSearch extends React.Component {
    constructor(props) {
        super(props);
        this.customFilter = this.customFilter.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleSelect(value) {
        this.props.onCitySelect(value);
        //
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
            //put the search bar here
            // <div className=" mt-4 col-md-8 ">
            <div className="">
                <span>
                    <Select
                        onChange={this.handleSelect}
                        filterOption={this.customFilter} getOptionLabel={option => `${option.name}`} getOptionValue={option => `${option.href}`} options={this.props.cities} />
                    {/* <Select  options = { options }/> */}
                </span>
            </div>


        );
    }
}

export default LocationSearch;
