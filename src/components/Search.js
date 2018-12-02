import React, { Component } from "react";
import Select from "react-select";
import AsyncCreatableSelect from "react-select/lib/AsyncCreatable";
import { API_URLS } from "../constants";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const loadOptions = (inputValue, callback) => {
  if (inputValue) {
    setTimeout(() => {
      callback(fetch(API_URLS.filtered_abundance));
    }, 2000);
  }
};

export default class extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    // console.log(API_URLS.filtered_abundance);
  };

  render() {
    const { selectedOption } = this.state;
    // return <div className="select" id="select" ref="select" />;
    return (
      <div>
        <AsyncCreatableSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
