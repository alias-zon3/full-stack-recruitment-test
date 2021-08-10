export class ItineraryModel {
    //Declare our params so that they are always accessible when constructed
    id;
    legs;
    legs_ids;
    price;
    agent;
    agent_rating;

    //Constructor that takes params and maps them over
    constructor(id, legs_ids, price, agent, agent_rating) {
        this.id = id;
        this.legs_ids = legs_ids;
        this.price = price;
        this.agent = agent;
        this.agent_rating = agent_rating;
    }
}