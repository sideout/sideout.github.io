//calendar pages

var TABLE_HEADER =
    '<table>\
	<thead>\
		<tr class="row100 head">\
			<th class="cell100 column1X">Date</th>\
			<th class="cell100 columnX">Event Name</th>\
			<th class="cell100 columnX">Event Type</th>\
			<th class="cell100 columnX">Info</th>\
		</tr>\
	</thead>\
</table>';

function getTableRow(lineColorColor) {
    return "<tr class=\"row100 body\" style=\"background-color: " + lineColorColor + ";\">";
}

function getRowDateCell(eventDate) {
    var dayOfWeekInt = eventDate.getDay();
    var dayInt = eventDate.getDate();
    var monthInt = eventDate.getMonth();
    var year = eventDate.getFullYear();
    return "<td class=\"cell100 column1X\">" + DAY_NAMES_TABLE[dayOfWeekInt] + " " + dayInt + " " + MONTHS_NAME_TABLE[monthInt] + " " + year + "</td>";
}

function getRowNameCell(eventName, eventUrl, eventStatus) {

    var color = getEventColor(eventName);

    var nameAndUrl = "";
    if (eventUrl !== "") {
        nameAndUrl = "<td class=\"cell100 columnX\"><a style=\"color:" + color + "\" href=" + eventUrl + ">" + eventName + "</a></td>";
    } else {
        nameAndUrl = "<td class=\"cell100 columnX\">" + eventName + "</td>";
    }

    if (eventStatus == "cancelled") {
        nameAndUrl = "<td class=\"cell100 columnX\"><del style=\"color:" + color + "\">" + eventName + "</del></td>";
    }
    return nameAndUrl;
}

function getRowTypeCell(eventType, eventType1) {
    eventTypeContent = '';
    if (eventType1) {
        eventTypeContent = eventType + " & " + eventType1;
    } else {
        eventTypeContent = eventType;
    }

    return "<td class=\"cell100 columnX\">" + eventTypeContent + "</td>";
}

function getRowInfoCell(eventInfo) {
    return "<td class=\"cell100 columnX\">" + eventInfo + "</td></tr>";
}

function isPastEvent(eventDate) {

    var today = new Date();
    var thisDate = new Date(eventDate);

    if (thisDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        return true;
    }
    return false;
}

var lineColorColor = "";
var lineColorDay = "";
function getRowHtml(event, selectedEventTypeFilter) {
    var eventDate = event.date;
    var eventType = event.type;
    var eventType1 = event.type1;

    if (selectedEventTypeFilter != 'display-all'
        && selectedEventTypeFilter != eventType
        && selectedEventTypeFilter != eventType1) {
        return "";
    }

    if (isPastEvent(eventDate)) {
        return "";
    }

    var dayOfWeekInt = eventDate.getDay();

    if (lineColorDay !== dayOfWeekInt) {
        lineColorDay = dayOfWeekInt;
        if (lineColorColor == COLOR_ONE) {
            lineColorColor = COLOR_TWO;
        } else {
            lineColorColor = COLOR_ONE;
        }
    }

    var eventRowHtml = "";
    eventRowHtml += getTableRow(lineColorColor);
    eventRowHtml += getRowDateCell(eventDate);
    eventRowHtml += getRowNameCell(event.name, event.url, event.status);
    eventRowHtml += getRowTypeCell(eventType, eventType1);
    eventRowHtml += getRowInfoCell(event.info);

    logger(LOG_LEVEL_DEGUB, eventRowHtml);
    return eventRowHtml;
}

function renderMonthTable(beachName, eventList, selectedEventTypeFilter, monthName) {
    var tableEventContent = "";

    for (i = 0; i < eventList.length; i++) {
        tableEventContent += getRowHtml(eventList[i], selectedEventTypeFilter);
    }

    var tableContent = "";
    if (tableEventContent) {
        tableContent = "<h2 class=\"entry-title\" style=\"font-weight:bold;\">" + monthName + " at " + beachName + " Beach</h2>\
		<div class=\"table100 ver2 m-b-20\">\
			<div class=\"table100-head\">" + TABLE_HEADER + "</div>\
			<div class=\"table100-body\">" + "<table><tbody>" + tableEventContent + "</tbody></table>\
			</div>\
		</div>"
    }
    return tableContent;
}

function filterButtons(filter) {

    //btn gradient-bg - btn red-border 

    var buttonAll = "btn red-border";
    var buttonTournament = "btn red-border";
    var buttonPlay = "btn red-border";
    var buttonTraining = "btn red-border";
    var buttonJuniors = "btn red-border";

    switch (filter) {
        case TYPE_TOURNAMENT:
            buttonTournament = "btn gradient-bg";
            break;
        case TYPE_PLAY:
            buttonPlay = "btn gradient-bg";
            break;
        case TYPE_TRAINING:
            buttonTraining = "btn gradient-bg";
            break;
        case TYPE_JUNIORS:
            buttonJuniors = "btn gradient-bg";
            break;
        default:
            buttonAll = "btn gradient-bg";
    }

    document.getElementById('filter-buttons').innerHTML = "\
		<a onclick=\"eventController('display-all')\" href=\"#\" style='width: 160px' class=\" " + buttonAll + " \">All Events</a>\
		<a onclick=\"eventController('Tournament')\" href=\"#\" style='width: 190px' class=\" " + buttonTournament + " \">Tournaments</a>\
		<a onclick=\"eventController('Play')\" href=\"#\" style='width: 190px' class=\" " + buttonPlay + " \">Play</a>\
		<a onclick=\"eventController('Training')\" href=\"#\" style='width: 190px' class=\" " + buttonTraining + " \">Training</a>\
		<a onclick=\"eventController('Juniors')\" href=\"#\" style='width: 190px' class=\" " + buttonJuniors + " \">Juniors</a>";
}

function eventController(selectedEventTypeFilter) {

    filterButtons(selectedEventTypeFilter);
    var url = window.location.href;
    var isleyton = url.includes("calendar-leyton");

    if (isleyton) {
        var tables = "";
        tables += renderMonthTable("Leyton", march_events_leyton, selectedEventTypeFilter, "March");
        tables += renderMonthTable("Leyton", april_events_leyton, selectedEventTypeFilter, "April");
        tables += renderMonthTable("Leyton", may_events_leyton, selectedEventTypeFilter, "May");
        tables += renderMonthTable("Leyton", june_events_leyton, selectedEventTypeFilter, "June");
        tables += renderMonthTable("Leyton", july_events_leyton, selectedEventTypeFilter, "July");
        tables += renderMonthTable("Leyton", august_events_leyton, selectedEventTypeFilter, "August");
        tables += renderMonthTable("Leyton", september_events_leyton, selectedEventTypeFilter, "September");
        tables += renderMonthTable("Leyton", october_events_leyton, selectedEventTypeFilter, "October");
        tables += renderMonthTable("Leyton", november_events_leyton, selectedEventTypeFilter, "November");
        tables += renderMonthTable("Leyton", december_events_leyton, selectedEventTypeFilter, "December");

        if (tables == "") {
            tables = "<p>More events are coming soon </p>"
        }
        document.getElementById('calendar-tables').innerHTML = tables;
    } else {
        var tables = "";
        tables += renderMonthTable("Worthing", january_events_worthing, selectedEventTypeFilter, "January");
        tables += renderMonthTable("Worthing", february_events_worthing, selectedEventTypeFilter, "February");
        tables += renderMonthTable("Worthing", march_events_worthing, selectedEventTypeFilter, "March");
        tables += renderMonthTable("Worthing", april_events_worthing, selectedEventTypeFilter, "April");
        tables += renderMonthTable("Worthing", may_events_worthing, selectedEventTypeFilter, "May");
        tables += renderMonthTable("Worthing", june_events_worthing, selectedEventTypeFilter, "June");
        tables += renderMonthTable("Worthing", july_events_worthing, selectedEventTypeFilter, "July");
        tables += renderMonthTable("Worthing", august_events_worthing, selectedEventTypeFilter, "August");
        tables += renderMonthTable("Worthing", september_events_worthing, selectedEventTypeFilter, "September");
        tables += renderMonthTable("Worthing", october_events_worthing, selectedEventTypeFilter, "October");
        tables += renderMonthTable("Worthing", november_events_worthing, selectedEventTypeFilter, "November");
        tables += renderMonthTable("Worthing", december_events_worthing, selectedEventTypeFilter, "December");

        if (tables == "") {
            tables = "<p>More events are coming soon </p>"
        }
        document.getElementById('calendar-tables').innerHTML = tables;
    }
}

//run
var page = pageIndentifier();

if (page == 'calendar-leyton.html' || page == 'calendar-worthing.html') {
    eventController('display-all');
}