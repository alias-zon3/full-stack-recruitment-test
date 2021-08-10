export class LegModel {
    //Declare our params so that they are always accessible when constructed
    id;
    departure_airport;
    arrival_airport;
    departure_time;
    arrival_time;
    stops;
    airline_name;
    airline_id;
    duration_mins;

    //Generic constructor to map over object props
    constructor(obj) {
        obj && Object.assign(this, obj);
    }

    //Getter method to demonstrate logic on internal properties
    get durationFormatted() {
        var hours = Math.floor(this.duration_mins / 60);
        var remainderMins = this.duration_mins % 60;

        //Return formatted string
        return `${hours}h ${remainderMins}`;
    }
}