import React from "react";
import Heading from "./Heading";
import Form from "./Form";
import Weather from "./Weather";

const apiKey = "e4c29a2f3c6bc110518c6c8bc5bc538c";

const defaultState = {
  city: "",
  country: "",
  temp: 0,
  wind: 0,
  desc: "",
  error: ""
};

class App extends React.Component {
  state = { ...defaultState };

  getWeather = async (city, country) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    if (data.name) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        wind: data.wind.speed,
        desc: data.weather.map(item => item.description).join(", "),
        error: ""
      });
    } else {
      this.setState({ ...defaultState });
      this.setState({ error: "Enter a valid city/country" });
    }
  };

  render() {
    return (
      <div className="container">
        <Heading />
        <div className="weather">
          <Form getWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            wind={this.state.wind}
            desc={this.state.desc}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
