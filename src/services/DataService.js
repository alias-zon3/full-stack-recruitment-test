import { Database } from '../database/Database';
import { ItineraryModel } from '../models/ItineraryModel';
import { LegModel } from '../models/LegModel';

export class DataService {
    //Declare private database object to emulate handling an internal connection
    _database;
    
    constructor() {
        this._database = new Database();

        //As we don't have an actual database with data, let's make sure we populate the seed data using the provided json on data service initialisation
        this.populateSeedData();
    }
    
    getPopulatedItinerariesModels() {
        //Get our raw itineraries and mapped legs
        var itineraries = this._database.getAllItineraries();
        var legsModels = this._database.getAllLegs().map(l => new LegModel(l));

        //Let's map them to the itinerary model using the constructor
        var res = itineraries.map(i => new ItineraryModel(i.id, i.legs, i.price, i.agent, i.agent_rating));

        res.forEach(i => {
            i.legs = legsModels.filter(lm => i.legs_ids.indexOf(lm.id) !== -1);
        });

        return res;
    }

    populateSeedData() {
        //Load the associated json file and add the correct objects using the appropriate exposed database methods
        var jsonData = require('../resources/flights.json');

        this._database.addItineraries(jsonData.itineraries);
        this._database.addLegs(jsonData.legs);
    }
}