import React from "react";

import STYLES from "./Flights.scss";
import { DataService } from "../../services/DataService";
import Itinerary from "../Itinerary";

//Create our main component, which will have the service with data to pass down to inner components
class Flights extends React.Component {
  getClassName = (className) => STYLES[className] || "UNKNOWN";

  constructor() {
    //Within our constructor, let's create our dataservice and populate our models for passing down
    super();
    let dataService = new DataService();

    this.itineraryModels = dataService.getPopulatedItinerariesModels();
  }

  render() {
    //Let's map our models to an itinerary component passing in required properties
    var itineraryComponents = this.itineraryModels.map((i) => {return (<Itinerary key={i.id} id={i.id} legs={i.legs} price={i.price} agent={i.agent} agent_rating={i.agent_rating} />)})

    return (
      <div className="Flights">
        { itineraryComponents }
      </div>
    );
  }
}

export default Flights;