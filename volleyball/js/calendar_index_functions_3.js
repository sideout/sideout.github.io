//index page
function indexRenderNextEvents(eventList, beach, htmlElementId, eventsCounter) {

    if (eventsCounter == 3) {
        return 3;
    }
    logger(LOG_LEVEL_DEGUB, "renderNextEvents");

    var eventCalendarIndex;
    var eventDiv = document.getElementById(htmlElementId);

    if (eventsCounter == 0) {
        eventDiv.innerHTML = INDEX_NEXT_EVENTS_HEADER.replace("BEACH", beach);
    }

    for (eventCalendarIndex = 0; eventCalendarIndex < eventList.length; eventCalendarIndex++) {

        var eventType = eventList[eventCalendarIndex].type;

        if ((eventType == TYPE_PLAY
            || eventType == TYPE_TOURNAMENT
            || eventType == TYPE_JUNIORS)
            && eventsCounter < 3) {

            var eventName = eventList[eventCalendarIndex].name;
            var eventDate = eventList[eventCalendarIndex].date;
            var eventUrl = eventList[eventCalendarIndex].url;
            var eventStatus = eventList[eventCalendarIndex].status;
            var today = new Date();

            var thisDate = new Date(eventDate);

            if (thisDate.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0)) {

                var dayOfWeekInt = eventDate.getDay();
                var dayInt = eventDate.getDate();
                var monthInt = eventDate.getMonth();
                var year = eventDate.getFullYear();

                var elementEventTitle = '';
                var hasEventUniqueUrl = eventUrl !== "";
                if (hasEventUniqueUrl) {
                    elementEventTitle = '<a style="font-size: 15px;font-weight: 500; color:red;" href=' + eventUrl + '>' + eventName + '</a>';
                } else {
                    elementEventTitle = '<a style="font-size: 15px;font-weight: 500;">' + eventName + '</a>';
                }


                if (eventStatus === "cancelled") {
                    elementEventTitle = '<del style="font-size: 15px;font-weight: 500;">' + eventName + '</del>';
                }

                var elementEventDate = gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year;
                var htmlEvent = INDEX_EVENT_DIV.replace('$EVENT_TITLE$', elementEventTitle);
                console.log(htmlEvent);
                htmlEvent = htmlEvent.replace("$DATE$", elementEventDate);

                var eventLog = "Event: " + eventName + " Month: " + months[monthInt] + " DIV: " + htmlEvent;
                logger(LOG_LEVEL_DEGUB, eventLog);

                eventsCounter++;
                eventDiv.innerHTML += htmlEvent;
            }

        }
    }

    return eventsCounter;
}

function moreEventsComingSoon(beach, elementId, eventsCounter) {

    var eventDiv = document.getElementById(elementId);

    if (eventsCounter == 0) {
        eventDiv.innerHTML = '\
			<div>\
				<h3>' + beach + '</h3>\
				<p>More events are coming soon </p>\
			</div>';
    }
}

function moreEventsInCalendar(elementId, eventsCounter, url) {
    if (eventsCounter > 0) {
        var eventDiv = document.getElementById(elementId);
        var htmlEvent = INDEX_MORE_EVENTS_DIV.replace('$URL$', url);
        eventDiv.innerHTML += htmlEvent;
    }
}

//run
var page = pageIndentifier();

if (page == 'index.html' || page == '') {
    console.log("rendering");

    //
    var UPCOMING_EVENT_LEYTON = 'upcomingEventLeyton';
    var LEYTON_BEACH = "Leyton Beach";

    var counterLeyton = indexRenderNextEvents(march_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, 0);
    counterLeyton = indexRenderNextEvents(april_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(may_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(june_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(july_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(august_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(september_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(october_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(november_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);
    counterLeyton = indexRenderNextEvents(december_events_leyton, LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);

    moreEventsInCalendar(UPCOMING_EVENT_LEYTON, counterLeyton, 'calendar-leyton.html');
    moreEventsComingSoon(LEYTON_BEACH, UPCOMING_EVENT_LEYTON, counterLeyton);

    var UPCOMING_EVENT_WORTHING = 'upcomingEventWorthing';
    var WORTHING_BEACH = "Worthing Beach";

    var counterWorthing = indexRenderNextEvents(january_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, 0);
    counterWorthing = indexRenderNextEvents(february_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(march_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(april_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(may_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(june_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(july_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(august_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(september_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(october_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(november_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
    counterWorthing = indexRenderNextEvents(december_events_worthing, WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);

    moreEventsInCalendar(UPCOMING_EVENT_WORTHING, counterWorthing, 'calendar-worthing.html');
    moreEventsComingSoon(WORTHING_BEACH, UPCOMING_EVENT_WORTHING, counterWorthing);
}