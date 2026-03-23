var attendeeId = "T001";
var name = "Alice Smith";
var event = "JavaScript Conference";
var ticketType = "VIP";
var ticketPrice = 150.00;

// logAttendanceName
function logAttendanceName(attendeeId) {
    console.log("Name: " + attendeeId);

}

// logTicketPrice
function logTicketPrice(attendeeId, ticketPrice) {
    console.log("ticketPrice: " + attendeeId + ", " + ticketPrice);
}

// updateTicketType
function updateTicketType(attendeeId, newTicketType) {
    console.log("updateTicketType: " + attendeeId + ", " + newTicketType);
}

// updateTicketPrice
function updateTicketPrice(attendeeId, newTicketPrice) {
    console.log("updateTicketPrice: " + attendeeId + ", " + newTicketPrice);
}