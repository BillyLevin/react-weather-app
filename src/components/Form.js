import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  static propTypes = {
    getWeather: PropTypes.func
  };
  cityRef = React.createRef();
  countryRef = React.createRef();

  getWeatherInput = e => {
    e.preventDefault();
    const city = this.cityRef.current.value;
    const country = this.countryRef.current.value;
    this.props.getWeather(city, country);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="weather-form" onSubmit={this.getWeatherInput}>
        <div className="weather-inputs">
          <input
            type="text"
            name="city"
            ref={this.cityRef}
            placeholder="Enter city..."
            required
          />
          <input
            type="text"
            name="country"
            ref={this.countryRef}
            placeholder="Enter country..."
            required
          />
        </div>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
}

export default Form;
