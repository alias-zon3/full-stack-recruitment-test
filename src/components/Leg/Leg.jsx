import React from "react";

import STYLES from "./Leg.scss";

import chevron_r from '../../resources/chevron_r.png'

class Leg extends React.Component {
  getClassName = (className) => STYLES[className] || "UNKNOWN";

  getAirlineUrl = (airlineId) => `https://logos.skyscnr.com/images/airlines/favicon/${airlineId}.png`;

  constructor(props) {
    super(props);
    this.duration = props.duration;
    this.airlineId = props.airline_id;
    this.departure = props.departure;
    this.arrival = props.arrival;
    this.departureAirport = props.departure_airport;
    this.arrivalAirport = props.arrival_airport;
    this.stops = props.stops;
  }

  render() {
    var getStopsElement = () => {
      if(!this.stops || this.stops == 0) {
        //Return our Direct element
        return (<span className={this.getClassName("stops__direct")}>Direct</span>)
      }
      else if(this.stops === 1) {
        //Return our 1 Stop element
        return (<span className={this.getClassName("stops__some")}>{this.stops} Stop </span>)
      } 
      else {
        //Return our n Stops element
        return (<span className={this.getClassName("stops__some")}>{this.stops} Stops </span>)
      }
    };

    return (
      <div className={this.getClassName("Leg")}>
        <div className={this.getClassName("Leg__logo")}>
          <img src={this.getAirlineUrl(this.airlineId)} />      
        </div>
        <div className={this.getClassName("Leg__depart")}>
          <span>{this.departure}</span>
          <span className={this.getClassName("greytext")}>{this.departureAirport}</span>
        </div>
        <div className={this.getClassName("Leg__arrow")}>
          <img src={chevron_r} />
        </div>
        <div className={this.getClassName("Leg__arrive")}>
          <span>{this.arrival}</span>
          <span className={this.getClassName("greytext")}>{this.arrivalAirport}</span>
        </div>
        <div className={this.getClassName("Leg__duration")}>
          <span className={this.getClassName("greytext")}>{this.duration}</span>
          {getStopsElement()}
        </div>
      </div>
    );
  }
}

export default Leg;
