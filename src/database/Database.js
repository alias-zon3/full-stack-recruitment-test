import { ItineraryModel } from "../models/ItineraryModel";
import { LegModel } from "../models/LegModel";

//Let's create a fake database object, exposing some methods as a PoC
export class Database {
  state = {};

  addItineraries(itineraries) {
      if(!this.state.itineraries) {
          this.state.itineraries = itineraries;
      } else {
          this.state.itineraries.push(itineraries);
      }
  }

  addLegs(legs) {
    if(!this.state.legs) {
        this.state.legs = legs;
    } else {
        this.state.legs.push(legs);
    }
  }

  getAllItineraries() {
    return this.state?.itineraries;
  }

  getAllLegs() {
    return this.state?.legs
  }

  getLegsUsingIds(ids) {
    var matchingLegs = this.state.legs.filter(l => ids[l.id]);

    return matchingLegs
  }
}