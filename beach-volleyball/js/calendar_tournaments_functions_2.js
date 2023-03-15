//tournament pages display event dates
function renderFutureTournamentDays(eventList, tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	console.log("renderNextEvents");
	var i;
	var eventDiv = '';

	for (i = 0; i < eventList.length; i++) {

		var eventName = eventList[i].name;

		if (eventName == tournamentName || eventName == finalsTournamentName) {

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var eventInfo = eventList[i].info;
			var twoDaysTournament = eventList[i].daysOfTournament;
			var today = new Date();
			var thisDate = new Date(eventDate);

			if (thisDate > today) {

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var shouldTournamentBePrinted = true;

				var printedDate = '';
				if (twoDaysTournament === 1 || typeof twoDaysTournament == 'undefined') {
					printedDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year;
				}

				if (twoDaysTournament === 0) {
					shouldTournamentBePrinted = false;
				}

				if (twoDaysTournament === 2) {
					var day = 60 * 60 * 24 * 1000;
					var thisDatePlusOneDay = new Date(thisDate.getTime() + day);

					var dayOfWeekIntPlusOne = thisDatePlusOneDay.getDay();
					var dayIntPlusOne = thisDatePlusOneDay.getDate();
					var monthIntPlusOne = thisDatePlusOneDay.getMonth();
					var yearPlusOne = thisDatePlusOneDay.getFullYear();
					printedDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " & " + gsDayNames[dayOfWeekIntPlusOne] + " " + dayIntPlusOne + " " + months[monthIntPlusOne] + " " + year;
				}

				if (isPrintInfoEnabled && eventInfo) {

					printedDate += " - " + eventInfo;
				}

				if (shouldTournamentBePrinted) {
					var htmlEvent = '<li>' + printedDate + '</li>';

					eventDiv += htmlEvent;
				}

			}
		}
	}
	return eventDiv;
}

function renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var march = renderFutureTournamentDays(march_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var april = renderFutureTournamentDays(april_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var may = renderFutureTournamentDays(may_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var june = renderFutureTournamentDays(june_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var july = renderFutureTournamentDays(july_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var august = renderFutureTournamentDays(august_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var september = renderFutureTournamentDays(september_events_leyton, tournamentName, finalsTournamentName, isPrintInfoEnabled);

	var leyton = march + april + may + june + july + august + september;
	if (leyton) { //leyton === ""
		return '\
	<li>\
		<span style="font-size:14px;  font-weight:bold;">\
		Leyton Beach\
		</span>\
		<ul style="text-align:left;"> ' + leyton + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var march = renderFutureTournamentDays(march_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var april = renderFutureTournamentDays(april_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var may = renderFutureTournamentDays(may_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var june = renderFutureTournamentDays(june_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var july = renderFutureTournamentDays(july_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var august = renderFutureTournamentDays(august_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var september = renderFutureTournamentDays(september_events_worthing, tournamentName, finalsTournamentName, isPrintInfoEnabled);

	var worthing = march + april + may + june + july + august + september;
	if (worthing) { //worthing === ""
		return '\
		<li>\
			<span style="font-size:14px;font-weight:bold;">Worthing Beach\
			</span>\
			<ul style="text-align:left;"> ' + worthing + '</ul></li>';
	} else {
		return '';
	}
}

function renderFutureTournamentsBothVenues(tournamentName, finalsTournamentName, isPrintInfoEnabled) {
	var leyton = renderFutureTournamentsForLeyton(tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var worthing = renderFutureTournamentsForWorthing(tournamentName, finalsTournamentName, isPrintInfoEnabled);
	var both = leyton + worthing;
	if (both) {
		return '<ul style="font-size:14px; text-align:left;">' +
			both + '</ul>';
	} else {
		return '<ul style="font-size:14px; text-align:left;"><li><p style="font-size:14px;">TBC</p></li></ul>';
	}
}

//run
var page = pageIndentifier();

//tournament dates
if (page == 'summer-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_SUMMER, "NOTHING_FOR_NOW", false);
}

if (page == 'challenger-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_CHALLENGER, "NOTHING_FOR_NOW", false);
}

if (page == 'spring-tourney.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_SPRING, "NOTHING_FOR_NOW", false);
}

if (page == 'all-nations.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_ALL_NATIONS, "NOTHING_FOR_NOW", true);
}

if (page == 'mixed-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_MIXED_SERIES, "NOTHING_FOR_NOW", false);
}

if (page == 'junior-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_JUNIOR_SERIES, "NOTHING_FOR_NOW", false);
}

if (page == 'london-gp-cc.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_GRAND_PRIX, "NOTHING_FOR_NOW", true);
} //tb kept - note new name!


if (page == 'london-open.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues('SideOut London Open', "NOTHING_FOR_NOW", true);
}

if (page == 'mixnmatch.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues("Mix 'n' Match", "NOTHING_FOR_NOW", true);
}
//check if it works and comment
if (page == 'summer-social.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues("SideOut Summer Social", "NOTHING_FOR_NOW", true);
}

if (page == 'london-grand-slam.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_GRAND_SLAM, "NOTHING_FOR_NOW", true);
} //tb removed

if (page == 'starter-series.html') {
	var eventsDiv = document.getElementById('upcomingTournaments');
	eventsDiv.innerHTML = renderFutureTournamentsBothVenues(NAME_STARTER_SERIES, "NOTHING_FOR_NOW", true);
}
