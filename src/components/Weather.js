import React from "react";
import PropTypes from "prop-types";

const Weather = props => (
  <div className="weather-info">
    <ul className="weather-list">
      {props.city &&
        props.country && (
          <li className="weather-item">
            <span>Location:</span> {props.city}, {props.country}
          </li>
        )}
      {props.temp !== 0 && (
        <li className="weather-item">
          <span>Temperature:</span> {props.temp}&deg; C
        </li>
      )}
      {props.wind !== 0 && (
        <li className="weather-item">
          <span>Wind speed:</span> {props.wind} m/s
        </li>
      )}
      {props.desc && (
        <li className="weather-item">
          <span>Description:</span> {props.desc}
        </li>
      )}
    </ul>
    {props.error && <span className="error">{props.error}</span>}
  </div>
);

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.number,
  wind: PropTypes.number,
  desc: PropTypes.string
};

export default Weather;
