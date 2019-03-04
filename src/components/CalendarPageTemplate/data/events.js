let API_KEY = 'AIzaSyD9b-PSDuI5HUKG3juEpHWwqhnII7CXJ0k'

let makeGoogleCalendarURL = calID =>
    `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
    + `?singleEvents=true&key=` + API_KEY

export default {
    reactjs: makeGoogleCalendarURL(`swarthmore.edu_t9giaj30rbn7k409ij4tkosvds@group.calendar.google.com`),
}