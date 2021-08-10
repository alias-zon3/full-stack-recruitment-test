import React from "react";

import STYLES from "./Itinerary.scss";
import Leg from "../Leg";
import { DateTimeHelper } from "../../helpers/DateTimeHelper";


class Itinerary extends React.Component {
  legs;

  getClassName = (className) => STYLES[className] || "UNKNOWN";

  constructor(props) {
    super(props);
    this.legs = props.legs;
    this.price = props.price;
    this.agent = props.agent;
    this.agentRating = props.agent_rating;
  }

  render() {
    //Map our legs to a leg component for row display
    var legComponents = this.legs.map((l) => {
      return (
        <Leg
          key={l.id}
          id={l.id}
          departure_airport={l.departure_airport}
          arrival_airport={l.arrival_airport}
          departure={DateTimeHelper.FormatDateTimeStringTo24HrTime(
            l.departure_time
          )}
          arrival={DateTimeHelper.FormatDateTimeStringTo24HrTime(
            l.arrival_time
          )}
          stops={l.stops}
          airline_name={l.airline_name}
          airline_id={l.airline_id}
          duration={l.durationFormatted}
        />
      );
    });

    var handleSelection = (event) => {
      //Stop event bubbling up
      event.preventDefault();

      //Do a generic alert to let the user know the agent and rating - does nothing else!
      alert(`You have selected a flight with ${this.agent} who is rated ${this.agentRating}/10!`);
    };

    return (
      <div className={this.getClassName("Itinerary")}>
        { legComponents }
        <div className={this.getClassName("Itinerary__confirmation")}>
          <div className={this.getClassName("Itinerary__confirmation__cost")}>
            <span className={this.getClassName("Itinerary__confirmation__cost__price")}>{this.price}</span>
            <span className={this.getClassName("Itinerary__confirmation__cost__airline")}>{this.agent}</span>
          </div>
          <div className={this.getClassName("Itinerary__confirmation__confirm")}>
            <a href="#" title="Select" onClick={handleSelection}>Select</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Itinerary;