export class DateTimeHelper {
    //Static helper method to take a string, cast to date and return locale time string formatted as HH:MM
    static FormatDateTimeStringTo24HrTime(dateTimeString) {
        var date = new Date(dateTimeString)
        return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
}