import React from "react";
import { Component } from "react";
import axios from 'axios';
import CountryCard from "./CountryCard";
import Input from "./Input";


class CountriesList extends Component {
    state = {
        data: [],
        searchInput: '',
        isLoading: true,
    }

    componentDidMount() {
        axios
            .get('https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population,region')
            .then((res) => {
                this.setState({data: res.data, isLoading: false});
                console.log(this.state.data);
            });
        }

    searchHandler(event) {
        this.setState({
            searchInput: event.target.value
        });
    };

    render() {
            // Filtering data using input
            const countriesFilter = this.state.data.filter((c) => {
                return c.name
                    .toLowerCase()
                    .startsWith(this.state.searchInput.toLocaleLowerCase());
                })
            // saving in const all countries to show
            const countriesListing = countriesFilter.map((c) => (
                <CountryCard {...c} />
            ));
            return (
                <>
                <div id="search">
                <Input onChange={this.searchHandler.bind(this)}/>
                </div>
                <div className='countries'>
                    {countriesListing}
                </div>
                </>
            )
    }
}

export default CountriesList;
