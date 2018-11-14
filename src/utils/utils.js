import json from './data.json';

export function searchFlight(to, from, day) {
    if(Array.isArray(json)) {
        return json.filter(flight => {
            if (flight.from === from 
                && flight.to === to
                && flight.days.includes(day)) {
                    return flight;
                }
        });
    } 

    return [];
}

export function findFlights(to, from, startDay, returnDay) {
    let flights = searchFlight(to, from, startDay);
    if(returnDay) {
        flights.concat(searchFlight(from, to, returnDay));
    }

    return flights;
}