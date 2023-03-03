//STATUS
var STATUS_CANCELLED = "cancelled";

//INFO
var INFO_MEN_N_WOMEN = "M&W";
var INFO_MEN = "Men";
var INFO_WOMEN = "Women";
var INFO_MIXED = "Mixed";
var CANCELLED = "CANCELLED"

//TOURNAMENT NAMEs
var NAME_AYCP = "AYCP";
var NAME_JUNIOR_AYCP = "Junior AYCP";
var NAME_JUNIOR_GAME_TIME = "Junior GameTime"
var NAME_WEDNESDAY_NIGHT_SOCIAL = "Wednesday Night Social: Side-it-Out"
var NAME_SIDE_IT_OUT = "Side-it-Out";
var NAME_HIRE_WORTHING = "Available for booking";
var NAME_HIRE_LEYTON = "Available for court hire";
var NAME_OPEN_PLAY = "Open Play";
var NAME_FLEXI_TRAINING = "Available for Flexi Training";
var NAME_FLEXI_PLAY = "Available for Flexi Play";
var NAME_BEGINNERS_TRAINING = "Beginners’ Training"
var NAME_STARTER_SERIES= "Starter Series";
var NAME_SPRING = "SideOut Spring Tourney";
var NAME_SUMMER = "SideOut Summer Series";
var NAME_MIXED_SERIES = "SideOut Mixed Series ";
var NAME_WORTHING_MIXED_2S = "Coast Cafe Wednesday League";
var NAME_ALL_NATIONS = "All Nations Beach Volleyball";
var NAME_CEV = "CEV Continental Cup Tournament";
var NAME_CHALLENGER = "SideOut Challenger Series";
var NAME_GRAND_PRIX = "SideOut London Grand Prix";
var NAME_WILSON = "UKBT Wilson Championships";
var NAME_WILSON_QUALIFIERS = "UKBT Wilson Qualifiers";
var NAME_LONDON_FINALS = "SideOut London Finals";
var NAME_END_OF_SEASON_PARTY = "End of Season Party!";
var NAME_INDOOR_ON_THE_BEACH = "Indoor on the Beach";
var NAME_JUNIOR_SERIES = "SideOut Junior Series";
var NAME_JUNIOR_TRAINING = "Junior Training";
var NAME_ADULT_TRAINING = "Adult Training";
var NAME_MIX_N_MATCH = "Mix & Match";
var NAME_GRAND_SLAM = "London Grand Slam";
var NAME_FAMILY_OPEN_PLAY = "Family Open Session"
var NAME_TENTH_BIRTHDAY = "10th Birthday Tournament"
var NAME_FREE_AYCP = "Free AYCP"

//TOURNAMENT TYPES
var TYPE_TOURNAMENT = "Tournament";
var TYPE_PLAY = "Play";
var TYPE_TRAINING = "Training";
var TYPE_JUNIORS = "Juniors";

//EVENT LINKS
var URL_WEDNESDAY_NIGHT_SOCAIL = "play/wednesday-night-social.html"; //tb removed
var URL_SIDE_IT_OUT = "play/side-it-out.html";
var URL_AYCP = "play/all-you-can-play.html";
var URL_JUNIOR_AYCP = "juniors/junior-all-you-can-play.html";
var URL_JUNIOR_GAME_TIME = "juniors/junior-game-time.html"; //tb removed
var URL_JUNIOR_OPEN_PLAY = "juniors/junior-game-time.html";
var URL_MINI_SERIES = "play/side-it-out-mini-series.html";
var URL_OPEN_PLAY = "play/open-play.html";
var URL_FAMILY_OPEN_SESSIONS = "juniors/family-open-sessions.html"
var URL_FLEXI_PLAY = "play/flexi-play.html";
var URL_INDOOR_ON_THE_BEACH = "indoor-on-the-beach.html";

var URL_MIX_N_MATCH = "tournaments/mixnmatch.html";
var URL_KING_QUEEN = "tournaments/king-queen-court.html";
var URL_WILSON = "tournaments/ukbt-wilson-championships.html";
var URL_WILSON_FINALS = "tournaments/ukbt-wilson-championships-finals.html";
var URL_WILSON_QUALIFIERS = "tournaments/ukbt-wilson-qualifiers.html";
var URL_SPRING = "tournaments/spring-tourney.html";
var URL_SUMMER = "tournaments/summer-series.html";
var URL_MIXED_SERIES = "tournaments/sideout-mixed-series.html";
var URL_ALL_NATIONS = "tournaments/all-nations.html";
var URL_CHALLENGER = "tournaments/challenger-series.html";
var URL_GRAND_PRIX = "tournaments/grand-prix.html"; //tb removed
var URL_GRAND_PRIX = "tournaments/london-open.html";
var URL_POLONIA = "tournaments/poloniasOneMoreBeachTournie.html";
var URL_UNDER_18 = "tournaments/junior-series.html"

var URL_CEV = "cev-continental-cup.html";
var URL_LONDON_FINALS = "london-finals.html";

var URL_TRAINING_LEYTON = "training-leyton.html";
var URL_TRAINING_LEYTON_BEGINNERS = "training-leyton.html#beginners";
var URL_TRAINING_WORTHING = "training-worthing.html#dropin";
var URL_FLEXI_TRAINING = "training-leyton.html#flexitrainingpackages"
var URL_JUNIOR_LEYTON = "juniors-leyton.html"
var URL_JUNIOR_WORTHING = "juniors/worthing-beach.html#juniors"
var URL_HIRE_LEYTON = "book-a-court-leyton.html";
var URL_HIRE_WORTHING = "book-a-court-worthing.html";
var URL_TENTH_BIRTHDAY = "10-years-anniversary.html#birthdaytournament"
var URL_TEN_YEAR_AYCP = "/10-years-anniversary.html#AYCP"

//INFO
// var INFO_OPEN_PLAY = "18:00-22:00, £10 per person (£5 for Club members, FREE with Social, Open Group or Private Group add-on), No need to register"
var INFO_OPEN_PLAY = "18:30-22:00";
var INFO_AYCP = "10:00-17:00";
var INFO_AYCP_WINTER = "10:00-16:00";
var INFO_SIDE_IT_OUT = "18:30-20:30";

//TOURNAMENT COLORS
var COLOR_AYCP = "#1d29e4";
var COLOR_OPEN_PLAY = "#0300b5";
var COLOR_SIDE_IT_OUT = "#043101";
var COLOR_SPRING = "#229432";
var COLOR_SUMMER = "#2b94b7";
var COLOR_ALL_NATIONS = "#c1821c";
var COLOR_CEV = "#1cc177";
var COLOR_CHALLENGER = "#c11ca2";
var COLOR_GRAND_PRIX = "#000000";
var COLOR_WILSON = "#000000";
var COLOR_HIRE = "#e45a2a";
var COLOR_LONDON_FINALS = "#ea450e";
var COLOR_DEFAULT = "#3a1d13";
var COLOR_ONE = "#e4dad7";
var COLOR_TWO = "#eaeaea";
var COLOR_SIDEOUT_RED = "#ed2329";

var gsDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var DAY_NAMES_TABLE = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MONTHS_NAME_TABLE = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getAdultTraining(date) {
	return { date: new Date(date), name: NAME_ADULT_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING_LEYTON };
}

function getJuniorTrainin(date) {
	return { date: new Date(date), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "", url: URL_JUNIOR_LEYTON };
}

function getWorthingJuniorTrainin(date) {
	return { date: new Date(date), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "12:00-13:00 Boys & Girls aged 5-12", url: URL_JUNIOR_WORTHING };
}

function getWorthingJuniorTraInfo(date, thisInfo) {
	return { date: new Date(date), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: thisInfo, url: URL_JUNIOR_WORTHING };
}

function getWorthAdTraini(date) {
	return { date: new Date(date), name: "Adult Training Groups", type: TYPE_TRAINING, info: "", url: "training-worthing.html#privategroup" };
}

function getWorthTrainPla(date) {
	return { date: new Date(date), name: "Adult Training (Play)", type: TYPE_TRAINING, info: "", url: "training-worthing.html#privategroup" };
}

function getWorthingDropInTraining(date) {
	return { date: new Date(date), name: "Adult Drop-in Training", type: TYPE_TRAINING, info: "", url: URL_TRAINING_WORTHING };
}

function getOpenPlayxxxxx(date) {
	return { date: new Date(date), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: URL_OPEN_PLAY };
}

function getAllYouCanPlay(date) {
	return { date: new Date(date), name: NAME_AYCP, type: TYPE_PLAY, info: INFO_AYCP, url: URL_AYCP };
}

function getJuniorAYCPxxx(date) {
	return { date: new Date(date), name: NAME_JUNIOR_AYCP, type: TYPE_JUNIORS, info: "10:00-12:00", url: URL_JUNIOR_AYCP };
}

function getJuniorGameTim(date) {
	return { date: new Date(date), name: NAME_JUNIOR_GAME_TIME, type: TYPE_JUNIORS, info: "17:00-18:30", url: URL_JUNIOR_GAME_TIME };
}

function getWedNighSocial(date) {
	return { date: new Date(date), name: NAME_WEDNESDAY_NIGHT_SOCIAL, type: TYPE_PLAY, info: "18:30-20:30", url: URL_WEDNESDAY_NIGHT_SOCAIL };
}

function getBegginersGaTi(date) {
	return { date: new Date(date), name: "Beginners' GameTime", type: TYPE_PLAY, info: "18:45-20:30", url: "play/beginners-game-time.html" };
}

function getMiniSeriesxxx(date) {
	return { date: new Date(date), name: "Side-it-Out Mini-Series", type: TYPE_PLAY, info: "", url: URL_MINI_SERIES };
}

function getJuniorSeriesx(date) {
	return { date: new Date(date), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "approx. 9:00am-1:00pm", url: "juniors/junior-series.html" };
}

function getWorthingMixed(date) {
	return { date: new Date(date), name: NAME_WORTHING_MIXED_2S, type: TYPE_PLAY, info: "Mixed 2s 18:00-22:00", url: "play/wednesday-league.html" };
}

function getWorthingWedne(date, thisName, thisInfo) {
	return { date: new Date(date), name: thisName, type: TYPE_PLAY, info: thisInfo + " 18:00-22:00", url: "play/wednesday-league.html" };
}

function getWorthingAllYouCanPlay(date) {
	return { date: new Date(date), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }; //"09:00-13:00 & 13:00-17:00"
}

function getWorthingAYCPlWithInfo(date, thisInfo) {
	return { date: new Date(date), name: NAME_AYCP, type: TYPE_PLAY, info: thisInfo, url: URL_AYCP };
}

function getHireLeytonCou(date) {
	return { date: new Date(date), name: NAME_HIRE_LEYTON, type: TYPE_PLAY, info: "", url: URL_HIRE_LEYTON };
}

function getHireWorthingC(date) {
	return { date: new Date(date), name: NAME_HIRE_WORTHING, type: TYPE_PLAY, info: "", url: URL_HIRE_WORTHING };
}

function getSideItOutxxxx(date) {
	return { date: new Date(date), name: NAME_SIDE_IT_OUT, type: TYPE_PLAY, info: INFO_SIDE_IT_OUT, url: URL_SIDE_IT_OUT };
}

function getFamilyOpenSes(date) {
	return { date: new Date(date), name: NAME_FAMILY_OPEN_PLAY, type: TYPE_PLAY, type1: TYPE_JUNIORS, info: "16:30-18:30", url: URL_FAMILY_OPEN_SESSIONS };
}

function getBeginnersTrai(date) {
	return { date: new Date(date), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "18:45-20:30", url: URL_TRAINING_LEYTON_BEGINNERS };
}

function getWothingBegiTr(date, withInfo) {
	return { date: new Date(date), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: withInfo, url: "training-worthing.html#beginners" };
}

// function getBeginnersTrai(date) {
// 	return { date: new Date(date), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "18:45-20:30", url: URL_TRAINING_LEYTON_BEGINNERS };
// }

function getFlexiTraining(date) {
	return { date: new Date(date), name: NAME_FLEXI_TRAINING, type: TYPE_TRAINING, info: "18:30-22:00", url: URL_FLEXI_TRAINING };
}

function getFlexiTrReduce(date) {
	return { date: new Date(date), name: NAME_FLEXI_TRAINING, type: TYPE_TRAINING, info: "20:15-22:00", url: URL_FLEXI_TRAINING };
}

function getFlexiPlayxxxx(date) {
	return { date: new Date(date), name: NAME_FLEXI_PLAY, type: TYPE_PLAY, info: "18:30-22:00", url: URL_FLEXI_PLAY };
}


var march_events_leyton = [
	{ date: new Date("03/26/2022"), name: "Season Opener - Free AYCP", type: TYPE_PLAY, info: "10:00-17:00, free for Club Members only", url: "" },
	getJuniorAYCPxxx("03/27/2022"),
	getAllYouCanPlay("03/27/2022"),
	//{ date: new Date("03/28/2022"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN, url: URL_SPRING },
	{ date: new Date("03/28/2022"), name: "Free Open Play Juniors", type: TYPE_JUNIORS, info: "17:00-19:00", url: "" },
	{ date: new Date("03/28/2022"), name: "Free Open play Beginners", type: TYPE_PLAY, info: "18:30-20:30", url: "" },
	{ date: new Date("03/29/2022"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: "Like Fridays, but not free for training members", url: URL_OPEN_PLAY },
	getJuniorGameTim("03/30/2022"),
	getWedNighSocial("03/30/2022"),
	getBegginersGaTi("03/30/2022"),
	getOpenPlayxxxxx("03/31/2022")
];

var april_events_leyton = [
	getFamilyOpenSes("04/01/2022"),
	getOpenPlayxxxxx("04/01/2022"),
	getMiniSeriesxxx("04/02/2022"),
	getJuniorAYCPxxx("04/03/2022"),
	getAllYouCanPlay("04/03/2022"),
	getJuniorTrainin("04/04/2022"),
	getBeginnersTrai("04/04/2022"),
	getOpenPlayxxxxx("04/05/2022"),
	getJuniorGameTim("04/06/2022"),
	getWedNighSocial("04/06/2022"),
	getBegginersGaTi("04/06/2022"),
	getOpenPlayxxxxx("04/07/2022"),
	getFamilyOpenSes("04/08/2022"),
	getOpenPlayxxxxx("04/08/2022"),
	{ date: new Date("04/09/2022"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SPRING },
	getAllYouCanPlay("04/10/2022"),
	getJuniorTrainin("04/11/2022"),
	getBeginnersTrai("04/11/2022"),
	{ date: new Date("04/12/2022"), name: "Training group trials", type: TYPE_TRAINING, info: "For Open Group training", url: URL_TRAINING_LEYTON },
	getOpenPlayxxxxx("04/12/2022"),
	getJuniorGameTim("04/13/2022"),
	getWedNighSocial("04/13/2022"),
	getBegginersGaTi("04/13/2022"),
	{ date: new Date("04/14/2022"), name: "Training group trials", type: TYPE_TRAINING, info: "For Open Group training", url: URL_TRAINING_LEYTON },
	getOpenPlayxxxxx("04/14/2022"),
	getJuniorAYCPxxx("04/15/2022"),
	getAllYouCanPlay("04/15/2022"),
	{ date: new Date("04/15/2022"), name: "Social tournament for parents/beginners", type: TYPE_PLAY, info: "", url: "" },
	getMiniSeriesxxx("04/16/2022"),
	getJuniorAYCPxxx("04/17/2022"),
	getAllYouCanPlay("04/17/2022"),
	{ date: new Date("04/18/2022"), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "10:00 - 11:30", url: URL_JUNIOR_LEYTON },
	{ date: new Date("04/18/2022"), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "11:00-12:30", url: URL_TRAINING_LEYTON_BEGINNERS },
	{ date: new Date("04/18/2022"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: "Cancelled", url: URL_MIXED_SERIES, status: "cancelled" },
	{ date: new Date("04/18/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "12:00-17:00", url: URL_AYCP },
	getAdultTraining("04/19/2022"),
	getJuniorGameTim("04/20/2022"),
	// getWedNighSocial("04/20/2022"),
	getFlexiPlayxxxx("04/20/2022"),
	getFlexiTraining("04/20/2022"),
	getBegginersGaTi("04/20/2022"),
	getAdultTraining("04/21/2022"),
	getFamilyOpenSes("04/22/2022"),
	getOpenPlayxxxxx("04/22/2022"),
	getAllYouCanPlay("04/23/2022"),
	getJuniorAYCPxxx("04/23/2022"),
	getJuniorAYCPxxx("04/24/2022"),
	getAllYouCanPlay("04/24/2022"),
	getJuniorTrainin("04/25/2022"),
	getBeginnersTrai("04/25/2022"),
	getAdultTraining("04/26/2022"),
	getJuniorGameTim("04/27/2022"),
	// getWedNighSocial("04/27/2022"),
	getFlexiPlayxxxx("04/27/2022"),
	getFlexiTraining("04/27/2022"),
	getBegginersGaTi("04/27/2022"),
	getAdultTraining("04/28/2022"),
	getFamilyOpenSes("04/29/2022"),
	getOpenPlayxxxxx("04/29/2022"),
	{ date: new Date("04/30/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2}
];

var may_events_leyton = [
	{ date: new Date("05/01/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},
	{ date: new Date("05/01/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	{ date: new Date("05/02/2022"), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "10:00-11:30", url: URL_JUNIOR_LEYTON },
	{ date: new Date("05/02/2022"), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "11:30-13:15", url: URL_TRAINING_LEYTON_BEGINNERS },
	{ date: new Date("05/02/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "12:00-17:00", url: URL_AYCP },
	getAdultTraining("05/03/2022"),
	getJuniorGameTim("05/04/2022"),
	// { date: new Date("05/04/2022"), name: "Wednesday Night Social: Advanced Tourney", type: TYPE_PLAY, info: "", url: URL_WEDNESDAY_NIGHT_SOCAIL },
	getFlexiPlayxxxx("05/04/2022"),
	getFlexiTraining("05/04/2022"),
	getBegginersGaTi("05/04/2022"),
	getAdultTraining("05/05/2022"),
	getFamilyOpenSes("05/06/2022"),
	getOpenPlayxxxxx("05/06/2022"),
	//{ date: new Date("05/07/2022"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1* (9:00-14:00)", url: URL_MIXED_SERIES },
	{ date: new Date("05/07/2022"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "CANCELLED", url: "juniors/junior-series.html", status: "cancelled"},
	getJuniorAYCPxxx("05/07/2022"),
	getAllYouCanPlay("05/07/2022"),

	getJuniorAYCPxxx("05/08/2022"),
	getAllYouCanPlay("05/08/2022"),
	getJuniorTrainin("05/09/2022"),
	getBeginnersTrai("05/09/2022"),
	getAdultTraining("05/10/2022"),
	getJuniorGameTim("05/11/2022"),
	// { date: new Date("05/11/2022"), name: "Wednesday Night Social: Intermediate Tourney", type: TYPE_PLAY, info: "", url: URL_WEDNESDAY_NIGHT_SOCAIL },
	getFlexiPlayxxxx("05/11/2022"),
	getFlexiTraining("05/11/2022"),
	getBegginersGaTi("05/11/2022"),
	getAdultTraining("05/12/2022"),
	getFamilyOpenSes("05/13/2022"),
	getOpenPlayxxxxx("05/13/2022"),
	{ date: new Date("05/14/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("05/15/2022"), name: NAME_STARTER_SERIES, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 1*", url: "tournaments/starter-series.html" },
	getAllYouCanPlay("05/15/2022"),
	getJuniorTrainin("05/16/2022"),
	getBeginnersTrai("05/16/2022"),
	getAdultTraining("05/17/2022"),
	getOpenPlayxxxxx("05/18/2022"),
	getBegginersGaTi("05/18/2022"),
	getJuniorGameTim("05/18/2022"),
	getAdultTraining("05/19/2022"),
	getFamilyOpenSes("05/20/2022"),
	getOpenPlayxxxxx("05/20/2022"),
	{ date: new Date("05/21/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2},
	{ date: new Date("05/22/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},
	{ date: new Date("05/22/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getJuniorTrainin("05/23/2022"),
	getBeginnersTrai("05/23/2022"),
	getAdultTraining("05/24/2022"),
	getOpenPlayxxxxx("05/25/2022"),
	getBegginersGaTi("05/25/2022"),
	getJuniorGameTim("05/25/2022"),
	getAdultTraining("05/26/2022"),
	getFamilyOpenSes("05/27/2022"),
	getOpenPlayxxxxx("05/27/2022"),
	getJuniorAYCPxxx("05/28/2022"),
	getAllYouCanPlay("05/28/2022"),
	getJuniorAYCPxxx("05/29/2022"),
	getAllYouCanPlay("05/29/2022"),
	getJuniorTrainin("05/30/2022"),
	getBeginnersTrai("05/30/2022"),
	getAdultTraining("05/31/2022")
];

var june_events_leyton = [
	getOpenPlayxxxxx("06/01/2022"),
	//getBegginersGaTi("06/01/2022"),
	getJuniorGameTim("06/01/2022"),
	// { date: new Date("06/01/2022"), name: "Wednesday Night Social", type: TYPE_PLAY, info: "", url: URL_WEDNESDAY_NIGHT_SOCAIL },
	getJuniorAYCPxxx("06/02/2022"),
	getAllYouCanPlay("06/02/2022"),
	getJuniorAYCPxxx("06/03/2022"),
	getAllYouCanPlay("06/03/2022"),
	{ date: new Date("06/04/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("06/05/2022"), name: NAME_STARTER_SERIES, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 1*", url: "tournaments/starter-series.html" },
	getAllYouCanPlay("06/05/2022"),
	
	getJuniorTrainin("06/06/2022"),
	getBeginnersTrai("06/06/2022"),
	getAdultTraining("06/07/2022"),
	getOpenPlayxxxxx("06/08/2022"),
	//getBegginersGaTi("06/08/2022"),
	getJuniorGameTim("06/08/2022"),
	// { date: new Date("06/08/2022"), name: "Wednesday Night Social", type: TYPE_PLAY, info: "", url: URL_WEDNESDAY_NIGHT_SOCAIL },
	
	

	getAdultTraining("06/09/2022"),
	getFamilyOpenSes("06/10/2022"),
	getOpenPlayxxxxx("06/10/2022"),

	{ date: new Date("06/11/2022"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1* (9:00-14:00)", url: URL_MIXED_SERIES },
	{ date: new Date("06/11/2022"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "approx. 13:00-17:00", url: "juniors/junior-series.html" },
	getJuniorAYCPxxx("06/12/2022"),
	getAllYouCanPlay("06/12/2022"),

	getJuniorTrainin("06/13/2022"),
	getBeginnersTrai("06/13/2022"),
	getAdultTraining("06/14/2022"),
	getOpenPlayxxxxx("06/15/2022"),
	//getBegginersGaTi("06/15/2022"),
	getJuniorGameTim("06/15/2022"),
	getAdultTraining("06/16/2022"),
	getFamilyOpenSes("06/17/2022"),
	getOpenPlayxxxxx("06/17/2022"),

	{ date: new Date("06/18/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2},
	{ date: new Date("06/19/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},
	{ date: new Date("06/19/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	


	getJuniorTrainin("06/20/2022"),
	getBeginnersTrai("06/20/2022"),
	getAdultTraining("06/21/2022"),
	getOpenPlayxxxxx("06/22/2022"),
	//getBegginersGaTi("06/22/2022"),
	getJuniorGameTim("06/22/2022"),
	getAdultTraining("06/23/2022"),
	getFamilyOpenSes("06/24/2022"),
	getOpenPlayxxxxx("06/24/2022"),

	getJuniorAYCPxxx("06/25/2022"),
	getAllYouCanPlay("06/25/2022"),
	getJuniorAYCPxxx("06/26/2022"),
	getAllYouCanPlay("06/26/2022"),


	getJuniorTrainin("06/27/2022"),
	getBeginnersTrai("06/27/2022"),
	getAdultTraining("06/28/2022"),
	getOpenPlayxxxxx("06/29/2022"),
	//getBegginersGaTi("06/29/2022"),
	getJuniorGameTim("06/29/2022"),
	getAdultTraining("06/30/2022")
];

var july_events_leyton = [
	getFamilyOpenSes("07/01/2022"),
	getOpenPlayxxxxx("07/01/2022"),
	{ date: new Date("07/02/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("07/03/2022"), name: NAME_STARTER_SERIES, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 1*", url: "tournaments/starter-series.html" },
	getJuniorAYCPxxx("07/03/2022"),
	getAllYouCanPlay("07/03/2022"),
	

	getJuniorTrainin("07/04/2022"),
	getBeginnersTrai("07/04/2022"),
	getAdultTraining("07/05/2022"),
	getOpenPlayxxxxx("07/06/2022"),
	//getBegginersGaTi("07/06/2022"),
	getJuniorGameTim("07/06/2022"),
	getAdultTraining("07/07/2022"),
	getFamilyOpenSes("07/08/2022"),
	getOpenPlayxxxxx("07/08/2022"),

	{ date: new Date("07/09/2022"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2vs2", url: URL_ALL_NATIONS, daysOfTournament: 2},
	{ date: new Date("07/10/2022"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2vs2", url: URL_ALL_NATIONS, daysOfTournament: 0},
	{ date: new Date("07/10/2022"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 2vs2", url: URL_ALL_NATIONS },
	
	getJuniorTrainin("07/11/2022"),
	getBeginnersTrai("07/11/2022"),
	getAdultTraining("07/12/2022"),
	getOpenPlayxxxxx("07/13/2022"),
	//getBegginersGaTi("07/13/2022"),
	getJuniorGameTim("07/13/2022"),
	getAdultTraining("07/14/2022"),
	getFamilyOpenSes("07/15/2022"),
	getOpenPlayxxxxx("07/15/2022"),

	{ date: new Date("07/16/2022"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1* (9:00-14:00)", url: URL_MIXED_SERIES },
	{ date: new Date("07/16/2022"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "CANCELLED", url: "juniors/junior-series.html", status: "cancelled" },
	getJuniorAYCPxxx("07/17/2022"),
	getAllYouCanPlay("07/17/2022"),

	getJuniorTrainin("07/18/2022"),
	getBeginnersTrai("07/18/2022"),
	getAdultTraining("07/19/2022"),
	// getOpenPlayxxxxx("07/20/2022"),
	// getBegginersGaTi("07/20/2022"),
	// getJuniorGameTim("07/20/2022"),
	getAdultTraining("07/21/2022"),
	getFamilyOpenSes("07/22/2022"),
	getOpenPlayxxxxx("07/22/2022"),

	getJuniorAYCPxxx("07/23/2022"),
	getAllYouCanPlay("07/23/2022"),
	getJuniorAYCPxxx("07/24/2022"),
	getAllYouCanPlay("07/24/2022"),

	getJuniorTrainin("07/25/2022"),
	getBeginnersTrai("07/25/2022"),
	getAdultTraining("07/26/2022"),
	getOpenPlayxxxxx("07/27/2022"),
	//getBegginersGaTi("07/27/2022"),
	getJuniorGameTim("07/27/2022"),
	getAdultTraining("07/28/2022"),
	getFamilyOpenSes("07/29/2022"),
	getOpenPlayxxxxx("07/29/2022"),

	{ date: new Date("07/30/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2},
	{ date: new Date("07/31/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},
	{ date: new Date("07/31/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },

];

var august_events_leyton = [
	
	getJuniorTrainin("08/01/2022"),
	getBeginnersTrai("08/01/2022"),
	getAdultTraining("08/02/2022"),
	getOpenPlayxxxxx("08/03/2022"),
	//getBegginersGaTi("08/03/2022"),
	getJuniorGameTim("08/03/2022"),
	getAdultTraining("08/04/2022"),
	getFamilyOpenSes("08/05/2022"),
	getOpenPlayxxxxx("08/05/2022"),
	
	{ date: new Date("08/06/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("08/07/2022"), name: NAME_STARTER_SERIES, type: TYPE_TOURNAMENT, info: CANCELLED, url: "tournaments/starter-series.html", status: "cancelled" },
	getAllYouCanPlay("08/07/2022"),

	getJuniorTrainin("08/08/2022"),
	getBeginnersTrai("08/08/2022"),
	getFlexiTraining("08/09/2022"),
	getFlexiPlayxxxx("08/09/2022"),
	getOpenPlayxxxxx("08/10/2022"),
	//getBegginersGaTi("08/10/2022"),
	getJuniorGameTim("08/10/2022"),
	getFlexiTraining("08/11/2022"),
	getFlexiPlayxxxx("08/11/2022"),
	getFamilyOpenSes("08/12/2022"),
	getOpenPlayxxxxx("08/12/2022"),

	{ date: new Date("08/13/2022"), name: NAME_MIXED_SERIES, type: TYPE_TOURNAMENT, info: INFO_MIXED + " 1* (9:00-14:00)", url: URL_MIXED_SERIES },
	{ date: new Date("08/13/2022"), name: NAME_JUNIOR_AYCP, type: TYPE_JUNIORS, info: "9:00-14:00", url: URL_JUNIOR_AYCP },
	{ date: new Date("08/13/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "9:00-14:00", url: URL_AYCP },

	getJuniorAYCPxxx("08/14/2022"),
	getAllYouCanPlay("08/14/2022"),

	getJuniorTrainin("08/15/2022"),
	getBeginnersTrai("08/15/2022"),
	getFlexiTraining("08/16/2022"),
	getFlexiPlayxxxx("08/16/2022"),
	getOpenPlayxxxxx("08/17/2022"),
	//getBegginersGaTi("08/17/2022"),
	getJuniorGameTim("08/17/2022"),
	getFlexiTraining("08/18/2022"),
	getFlexiPlayxxxx("08/18/2022"),
	getFamilyOpenSes("08/19/2022"),
	getOpenPlayxxxxx("08/19/2022"),

	getJuniorAYCPxxx("08/20/2022"),
	getAllYouCanPlay("08/20/2022"),
	getJuniorAYCPxxx("08/21/2022"),
	getAllYouCanPlay("08/21/2022"),

	getJuniorTrainin("08/22/2022"),
	getBeginnersTrai("08/22/2022"),
	getFlexiTraining("08/23/2022"),
	getFlexiPlayxxxx("08/23/2022"),
	getOpenPlayxxxxx("08/24/2022"),
	//getBegginersGaTi("08/24/2022"),
	//getJuniorGameTim("08/24/2022"),
	{ date: new Date("08/24/2022"), name: NAME_JUNIOR_GAME_TIME, type: TYPE_JUNIORS, info: "18:00-19:30", url: URL_JUNIOR_GAME_TIME },
	getFlexiTraining("08/25/2022"),
	getFlexiPlayxxxx("08/25/2022"),
	// getFamilyOpenSes("08/26/2022"),
	// getOpenPlayxxxxx("08/26/2022"),
	{ date: new Date("08/26/2022"), name: "London Grand Slam Qualification Tournament", type: TYPE_TOURNAMENT, info: "", url: "tournaments/london-grand-slam.html"},
	
	//{ date: new Date("08/27/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2},
	//{ date: new Date("08/28/2022"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},
	{ date: new Date("08/27/2022"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html", daysOfTournament: 2 }, //Sat
	{ date: new Date("08/28/2022"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html", daysOfTournament: 0 }, //Sun
	{ date: new Date("08/28/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	
	//{ date: new Date("08/28/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },

	
	// { date: new Date("08/29/2022"), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "10:00-12:00", url: URL_JUNIOR_LEYTON },
	// { date: new Date("08/29/2022"), name: NAME_BEGINNERS_TRAINING, type: TYPE_TRAINING, info: "11:15-13:00", url: URL_TRAINING_LEYTON_BEGINNERS },
	// getFamilyOpenSes("08/29/2022"),
	{ date: new Date("08/29/2022"), name: NAME_FAMILY_OPEN_PLAY, type: TYPE_PLAY, type1: TYPE_JUNIORS, info: "10:00-12:00", url: URL_FAMILY_OPEN_SESSIONS },
	{ date: new Date("08/29/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "10:00-17:00", url: URL_AYCP },


	getFlexiTraining("08/30/2022"),
	getFlexiPlayxxxx("08/30/2022"),
	getOpenPlayxxxxx("08/31/2022"),
	//getBegginersGaTi("08/31/2022"),
	getJuniorGameTim("08/31/2022")

	// { date: new Date("08/27/2022"), name: NAME_FAMILY_OPEN_PLAY, type: TYPE_PLAY, type1: TYPE_JUNIORS, info: "CANCELLED", url: URL_FAMILY_OPEN_SESSIONS, status: "cancelled" },
	// { date: new Date("08/27/2022"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: "CANCELLED", url: URL_OPEN_PLAY, status: "cancelled" },
	
	// { date: new Date("08/28/2022"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" }, //Sat
	// { date: new Date("08/29/2022"), name: NAME_GRAND_SLAM, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 5*", url: "tournaments/london-grand-slam.html" }, //Sun
	// { date: new Date("08/29/2022"), name: NAME_TENTH_BIRTHDAY, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_TENTH_BIRTHDAY }, //Sun
	// { date: new Date("08/30/2022"), name: NAME_FREE_AYCP, type: TYPE_PLAY, info: "11:30-18:00", url: URL_TEN_YEAR_AYCP }, // Mon

];

var september_events_leyton = [
	
	getFlexiTraining("09/01/2022"),
	getFlexiPlayxxxx("09/01/2022"),
	getFamilyOpenSes("09/02/2022"),
	getOpenPlayxxxxx("09/02/2022"),
	
	{ date: new Date("09/03/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	{ date: new Date("09/04/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	{ date: new Date("09/04/2022"), name: NAME_STARTER_SERIES, type: TYPE_TOURNAMENT, info: "CANCELLED", url: "tournaments/starter-series.html", status: "cancelled" },
	
	
	// getJuniorTrainin("09/05/2022"),
	{ date: new Date("09/05/2022"), name: NAME_JUNIOR_TRAINING, type: TYPE_JUNIORS, info: "17:00-18:30", url: URL_JUNIOR_LEYTON },
	getBeginnersTrai("09/05/2022"),
	// getFlexiTraining("09/06/2022"),
	// getFlexiPlayxxxx("09/06/2022"),
	// getOpenPlayxxxxx("09/07/2022"),
	//getBegginersGaTi("09/07/2022"),
	// getJuniorGameTim("09/07/2022"),
	// getFlexiTraining("09/08/2022"),
	// getFlexiPlayxxxx("09/08/2022"),
	getFamilyOpenSes("09/09/2022"),
	getOpenPlayxxxxx("09/09/2022"),

	//10
	getJuniorAYCPxxx("09/10/2022"),
	getAllYouCanPlay("09/10/2022"),
	getJuniorAYCPxxx("09/11/2022"),
	getAllYouCanPlay("09/11/2022"),

	// getJuniorTrainin("09/12/2022"),
	// getBeginnersTrai("09/12/2022"),
	// getFlexiTraining("09/13/2022"),
	// getFlexiPlayxxxx("09/13/2022"),
	// getOpenPlayxxxxx("09/14/2022"),
	//getBegginersGaTi("09/14/2022"),
	// getJuniorGameTim("09/14/2022"),
	// getFlexiTraining("09/15/2022"),
	// getFlexiPlayxxxx("09/15/2022"),
	getFamilyOpenSes("09/16/2022"),
	getOpenPlayxxxxx("09/16/2022"),

	{ date: new Date("09/17/2022"), name: "One more beach tourney", type: TYPE_TOURNAMENT, info: "", url: "tournaments/one-more-beach-tourney.html" }, 
	getAllYouCanPlay("09/17/2022"),
	getJuniorAYCPxxx("09/18/2022"),
	getAllYouCanPlay("09/18/2022"),

	// getJuniorTrainin("09/19/2022"),
	// getBeginnersTrai("09/19/2022"),
	// getFlexiTraining("09/20/2022"),
	// getFlexiPlayxxxx("09/20/2022"),
	// getOpenPlayxxxxx("09/21/2022"),
	//getBegginersGaTi("09/21/2022"),
	// getJuniorGameTim("09/21/2022"),
	// getFlexiTraining("09/22/2022"),
	// getFlexiPlayxxxx("09/22/2022"),
	getFamilyOpenSes("09/23/2022"),
	getOpenPlayxxxxx("09/23/2022"),

	{ date: new Date("09/24/2022"), name: "End of season party", type: "", info: "", url: "" },
	// getJuniorTrainin("09/26/2022"),
	// getBeginnersTrai("09/26/2022")
	//{ date: new Date("09/12/2022"), name: "London Youth Games Beach volleyball tournament", type: TYPE_JUNIORS, info: "<a href=\"https://www.londonyouthgames.org/event/feel-good-too-beach-volleyball-f-m/\">Click to find out more</a>", url: "" },
];

var october_events_leyton = [
	getAllYouCanPlay("10/8/2022"),
	getAllYouCanPlay("10/16/2022")
];

var november_events_leyton = [
	{ date: new Date("11/13/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "10:30-17:00", url: URL_AYCP }
];

var december_events_leyton = [];

//WOTHRING
var january_events_worthing = [];

var february_events_worthing = [];

var march_events_worthing = [
	{ date: new Date("03/20/2022"), name: "Volunteer Day - free play", type: TYPE_PLAY, info: "", url: "" },
	getHireWorthingC("03/26/2022"),
	{ date: new Date("03/26/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12", url: "juniors/worthing-beach.html#kids" },
	{ date: new Date("03/27/2022"), name: "Season Opener - Free AYCP", type: TYPE_PLAY, info: "10:00-17:00, free for Club Members only", url: "" },
	getHireWorthingC("03/28/2022"),
	getHireWorthingC("03/29/2022"),
	getHireWorthingC("03/30/2022"),
	getHireWorthingC("03/31/2022")
];

var april_events_worthing = [
	getHireWorthingC("04/01/2022"),
	getHireWorthingC("04/02/2022"),
	{ date: new Date("04/02/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12", url: "juniors/worthing-beach.html#kids" },
	getWorthingAllYouCanPlay("04/03/2022"),
	getHireWorthingC("04/04/2022"),
	getHireWorthingC("04/05/2022"),
	getWorthingMixed("04/06/2022"),
	getHireWorthingC("04/07/2022"),
	getHireWorthingC("04/08/2022"),
	{ date: new Date("04/09/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	{ date: new Date("04/09/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("04/10/2022"),
	getHireWorthingC("04/11/2022"),
	{ date: new Date("04/12/2022"), name: "Training group trials", type: TYPE_PLAY, info: "18:15-20:00", url: "" },
	getWorthingMixed("04/13/2022"),
	{ date: new Date("04/14/2022"), name: "Training group trials", type: TYPE_PLAY, info: "18:15-20:00", url: "" },
	getHireWorthingC("04/15/2022"),
	getHireWorthingC("04/16/2022"),
	{ date: new Date("04/16/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12", url: "juniors/worthing-beach.html#kids" },
	getWorthingAllYouCanPlay("04/17/2022"),

	getWorthingAllYouCanPlay("04/18/2022"),
	getWorthingJuniorTraInfo("04/18/2022","18:15-20:00"),
	getWothingBegiTr("04/18/2022","20:00-21:45"),

	getWorthAdTraini("04/19/2022"),
	getWorthingMixed("04/20/2022"),
	getWorthingDropInTraining("04/21/2022"),
	
	getHireWorthingC("04/22/2022"),

	getHireWorthingC("04/23/2022"),
	{ date: new Date("04/23/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },

	getWorthingAllYouCanPlay("04/24/2022"),

	getWorthingJuniorTraInfo("04/25/2022","18:15-20:00"),
	getWothingBegiTr("04/25/2022","20:00-21:45"),
	getWorthAdTraini("04/26/2022"),
	getWorthingMixed("04/27/2022"),
	getWorthingDropInTraining("04/28/2022"),

	getHireWorthingC("04/29/2022"),

	getHireWorthingC("04/30/2022"),
	{ date: new Date("04/30/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" }
];

var may_events_worthing = [
	getWorthingAllYouCanPlay("05/01/2022"),

	getWorthingAllYouCanPlay("05/02/2022"),
	getWorthingJuniorTraInfo("05/02/2022","18:15-20:00"),
	getWothingBegiTr("05/02/2022","20:00-21:45"),

	getWorthAdTraini("05/03/2022"),
	getWorthingWedne("05/04/2022", "Coast Cafe Wednesday League", "Men's 2s", ""),
	getWorthingDropInTraining("05/05/2022"),
	
	getHireWorthingC("05/06/2022"),

	//{ date: new Date("05/07/2022"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 2},
	//{ date: new Date("05/08/2022"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 4*", url: URL_GRAND_PRIX, daysOfTournament: 0},

	{ date: new Date("05/07/2022"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 3*", url: URL_SUMMER },
	getWorthingAllYouCanPlay("05/08/2022"),

	getWorthingJuniorTraInfo("05/09/2022","18:15-20:00"),
	getWothingBegiTr("05/09/2022","20:00-21:45"),

	getWorthAdTraini("05/10/2022"),
	getWorthingWedne("05/11/2022", "Coast Cafe Wednesday League", "Men's 2s"),
	getWorthingDropInTraining("05/12/2022"),
	
	getHireWorthingC("05/13/2022"),

	{ date: new Date("05/14/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	{ date: new Date("05/14/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("05/15/2022"),

	getWorthingJuniorTraInfo("05/16/2022","18:15-20:00"),
	getWothingBegiTr("05/16/2022","20:00-21:45"),

	getWorthAdTraini("05/17/2022"),
	getHireWorthingC("05/17/2022"),
	getWorthingWedne("05/18/2022", "Coast Cafe Wednesday League", "Men's 2s"),
	getWorthingDropInTraining("05/19/2022"),
	getHireWorthingC("05/19/2022"),
	
	getHireWorthingC("05/20/2022"),

	getHireWorthingC("05/21/2022"),
	{ date: new Date("05/21/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("05/22/2022"),

	getWorthingJuniorTraInfo("05/23/2022","18:15-20:00"),
	getWothingBegiTr("05/23/2022","20:00-21:45"),

	getWorthAdTraini("05/24/2022"),
	getHireWorthingC("05/24/2022"),
	getWorthingWedne("05/25/2022", "Coast Cafe Wednesday League", "Men's 2s"),
	getWorthingDropInTraining("05/26/2022"),
	getHireWorthingC("05/26/2022"),
	
	getHireWorthingC("05/27/2022"),

	{ date: new Date("05/28/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	getWorthingAllYouCanPlay("05/29/2022"),

	getWorthingJuniorTraInfo("05/30/2022","18:15-20:00"),
	getWothingBegiTr("05/30/2022","20:00-21:45"),
	getWorthAdTraini("05/31/2022"),
	getHireWorthingC("05/31/2022")
	// { date: new Date("05/08/2022"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_WOMEN + " 4* (1day)", url: URL_GRAND_PRIX },
	// { date: new Date("05/09/2022"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: INFO_MEN + " 4* (1day)", url: URL_GRAND_PRIX },
	// { date: new Date("05/30/2022"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "U14 & U18 boys and girls", url: URL_UNDER_18 }
];

var june_events_worthing = [
	getWorthingWedne("06/01/2022", "Coast Cafe Wednesday League", "Women's 2s"),
	getWorthingDropInTraining("06/02/2022"),
	getHireWorthingC("06/02/2022"),
	getWorthingAllYouCanPlay("06/03/2022"),
	getHireWorthingC("06/04/2022"),
	{ date: new Date("05/04/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("06/05/2022"),

	getWorthingJuniorTraInfo("06/06/2022","18:15-20:00"),
	getWothingBegiTr("06/06/2022","20:00-21:45"),

	getWorthAdTraini("06/07/2022"),
	getHireWorthingC("06/07/2022"),

	getWorthingWedne("06/08/2022", "Coast Cafe Wednesday League", "Women's 2s"),
	getWorthingDropInTraining("06/09/2022"),
	getHireWorthingC("06/09/2022"),
	getHireWorthingC("06/10/2022"),

	{ date: new Date("06/11/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	{ date: new Date("06/11/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("06/12/2022"),

	getWorthingJuniorTraInfo("06/13/2022","18:15-20:00"),
	getWothingBegiTr("06/13/2022","20:00-21:45"),

	getWorthAdTraini("06/14/2022"),
	getHireWorthingC("06/14/2022"),

	getWorthingWedne("06/15/2022", "Coast Cafe Wednesday League", "Women's 2s"),
	getWorthingDropInTraining("06/16/2022"),
	getHireWorthingC("06/16/2022"),
	getHireWorthingC("06/17/2022"),

	getHireWorthingC("06/18/2022"),
	getWorthingAllYouCanPlay("06/19/2022"),

	getWorthingJuniorTraInfo("06/20/2022","18:00-20:00"),
	getWothingBegiTr("06/20/2022","20:00-22:00"),

	getWorthAdTraini("06/21/2022"),
	getHireWorthingC("06/21/2022"),

	getWorthingWedne("06/22/2022", "Coast Cafe Wednesday League", "Women's 2s"),
	getWorthingDropInTraining("06/23/2022"),
	getHireWorthingC("06/23/2022"),
	getHireWorthingC("06/24/2022"),

	{ date: new Date("06/25/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	{ date: new Date("06/25/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("06/26/2022"),


	getWorthingJuniorTraInfo("06/27/2022","18:15-20:00"),
	getWothingBegiTr("06/27/2022","20:00-21:45"),


	getWorthAdTraini("06/28/2022"),
	getHireWorthingC("06/28/2022"),
	getHireWorthingC("06/29/2022"),
	
	getWorthingDropInTraining("06/30/2022"),
	getHireWorthingC("06/30/2022")
];

var july_events_worthing = [
	getHireWorthingC("07/01/2022"),
	getHireWorthingC("07/02/2022"),
	{ date: new Date("07/02/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("07/03/2022"),

	getWorthingJuniorTraInfo("07/04/2022","18:15-20:00"),
	getWothingBegiTr("07/04/2022","20:00-21:45"),

	getWorthAdTraini("07/05/2022"),
	getHireWorthingC("07/05/2022"),
	getWorthingWedne("07/06/2022", "Coast Cafe Wednesday League", "Junior 2s"),
	
	getWorthingDropInTraining("07/07/2022"),
	getHireWorthingC("07/07/2022"),
	getHireWorthingC("07/08/2022"),

	getHireWorthingC("07/09/2022"),
	{ date: new Date("07/09/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("07/10/2022"),

	getWorthingJuniorTraInfo("07/11/2022","18:15-20:00"),
	getWothingBegiTr("07/11/2022","20:00-21:45"),
	getWorthAdTraini("07/12/2022"),
	getHireWorthingC("07/12/2022"),
	getWorthingWedne("07/13/2022", "Coast Cafe Wednesday League", "Junior 2s"),
	getWorthingDropInTraining("07/14/2022"),
	getHireWorthingC("07/14/2022"),
	getHireWorthingC("07/15/2022"),

	{ date: new Date("07/16/2022"), name: "Mixed Series (non-UKBT)", type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIXED_SERIES },
	{ date: new Date("07/16/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("06/17/2022"),

	getWorthingJuniorTraInfo("07/18/2022","18:15-20:00"),
	getWothingBegiTr("07/18/2022","20:00-21:45"),
	getWorthAdTraini("07/19/2022"),
	getHireWorthingC("07/19/2022"),
	getWorthingWedne("07/20/2022", "Coast Cafe Wednesday League", "Junior 2s"),
	getWorthingDropInTraining("07/21/2022"),
	getHireWorthingC("07/21/2022"),
	getHireWorthingC("07/22/2022"),

	{ date: new Date("07/23/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	{ date: new Date("07/23/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("07/24/2022"),

	getWorthingJuniorTraInfo("07/25/2022","18:15-20:00"),
	getWothingBegiTr("07/25/2022","20:00-21:45"),
	getWorthAdTraini("07/26/2022"),
	getHireWorthingC("07/26/2022"),
	getWorthingWedne("07/27/2022", "Coast Cafe Wednesday League", "Junior 2s"),
	//getWorthingDropInTraining("07/28/2022"),
	{ date: new Date("07/28/2022"), name: "Adult Drop-in Training", type: TYPE_TRAINING, info: "Cancelled", url: URL_TRAINING_WORTHING, status: STATUS_CANCELLED },
	getHireWorthingC("07/28/2022"),
	getHireWorthingC("07/29/2022"),

	getJuniorSeriesx("07/30/2022"),
	{ date: new Date("07/30/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("07/31/2022")
];

var august_events_worthing = [
	getWorthingJuniorTraInfo("08/01/2022","18:15-20:00"),
	getWothingBegiTr("08/01/2022","20:00-21:45"),
	getWorthTrainPla("08/02/2022"),
	getHireWorthingC("08/02/2022"),
	//getWorthingWedne("08/03/2022", "Coast Cafe Wednesday League", "Worthing Mixed 4s League"),
	getOpenPlayxxxxx("08/03/2022"),
	//getWorthingDropInTraining("08/04/2022"),
	{ date: new Date("08/04/2022"), name: "Adult Drop-in Training", type: TYPE_TRAINING, info: "Cancelled", url: URL_TRAINING_WORTHING, status: STATUS_CANCELLED },
	getHireWorthingC("08/04/2022"),
	getHireWorthingC("08/05/2022"),
	getHireWorthingC("08/06/2022"),
	{ date: new Date("08/06/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("08/07/2022"),

	getWorthingJuniorTraInfo("08/08/2022","18:15-20:00"),
	getWothingBegiTr("08/08/2022","20:00-21:45"),
	getWorthTrainPla("08/09/2022"),
	getHireWorthingC("08/09/2022"),
	getOpenPlayxxxxx("08/10/2022"),
	getWorthingDropInTraining("08/11/2022"),
	getHireWorthingC("08/11/2022"),
	getHireWorthingC("08/12/2022"),

	{ date: new Date("08/13/2022"), name: "Mixed Series (non-UKBT)", type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIXED_SERIES },
	{ date: new Date("08/14/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("08/14/2022"),

	getWorthingJuniorTraInfo("08/15/2022","18:15-20:00"),
	getWothingBegiTr("08/15/2022","20:00-21:45"),
	getWorthTrainPla("08/16/2022"),
	getHireWorthingC("08/16/2022"),
	getOpenPlayxxxxx("08/17/2022"),
	getWorthingDropInTraining("08/18/2022"),
	getHireWorthingC("08/18/2022"),
	getHireWorthingC("08/19/2022"),

	{ date: new Date("08/20/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	{ date: new Date("08/20/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("08/21/2022"),

	getWorthingJuniorTraInfo("08/22/2022","18:15-20:00"),
	getWothingBegiTr("08/22/2022","20:00-21:45"),
	getWorthTrainPla("08/23/2022"),
	getHireWorthingC("08/23/2022"),
	getOpenPlayxxxxx("08/24/2022"),
	getWorthingDropInTraining("08/25/2022"),
	getHireWorthingC("08/25/2022"),
	getHireWorthingC("08/26/2022"),

	{ date: new Date("08/27/2022"), name: NAME_JUNIOR_SERIES, type: TYPE_JUNIORS, info: "", url: "juniors/junior-series.html" },
	{ date: new Date("08/27/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("08/28/2022"),

	getWorthingAllYouCanPlay("08/29/2022"),
	getWorthingJuniorTraInfo("08/29/2022","18:15-20:00"),
	getWothingBegiTr("08/29/2022","20:00-21:45"),

	getWorthTrainPla("08/30/2022"),
	getHireWorthingC("08/30/2022"),

	getHireWorthingC("08/31/2022")
	
];

var september_events_worthing = [
	// getWorthingDropInTraining("09/01/2022"),
	getHireWorthingC("09/01/2022"),
	getHireWorthingC("09/02/2022"),

	getHireWorthingC("09/03/2022"),
	// { date: new Date("09/03/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("09/04/2022"),

	getWorthingJuniorTraInfo("09/05/2022","18:15-20:00"),
	// getWothingBegiTr("09/05/2022","20:00-21:45"),
	getWorthTrainPla("09/06/2022"),
	getHireWorthingC("09/06/2022"),
	getHireWorthingC("09/07/2022"),
	// getWorthingDropInTraining("09/08/2022"),
	getHireWorthingC("09/08/2022"),
	getHireWorthingC("09/09/2022"),

	{ date: new Date("09/10/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	// { date: new Date("09/10/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("09/11/2022"),

	getWorthingJuniorTraInfo("09/12/2022","18:15-20:00"),
	// getWothingBegiTr("09/12/2022","20:00-21:45"),
	getWorthTrainPla("09/13/2022"),
	getHireWorthingC("09/13/2022"),
	getHireWorthingC("09/14/2022"),
	// getWorthingDropInTraining("09/15/2022"),
	getHireWorthingC("09/15/2022"),
	getHireWorthingC("09/16/2022"),

	{ date: new Date("09/17/2022"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: INFO_MEN_N_WOMEN + " 2*", url: URL_CHALLENGER },
	// { date: new Date("09/17/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },
	getWorthingAllYouCanPlay("09/18/2022"),

	getWorthingJuniorTraInfo("09/19/2022","18:00-20:00"),
	// getWothingBegiTr("09/19/2022","20:00-22:00"),
	getWorthTrainPla("09/20/2022"),
	getHireWorthingC("09/20/2022"),
	// getWorthingWedne("09/21/2022", "Coast Cafe Wednesday League", "Worthing Juniors 4s League"),
	getHireWorthingC("09/21/2022"),
	getHireWorthingC("09/22/2022"),
	getHireWorthingC("09/23/2022"),

	getHireWorthingC("09/24/2022"),
	// { date: new Date("09/24/2022"), name: "Kids' Session", type: TYPE_JUNIORS, info: "Ages: 5-12 Time: 9:00-10:00", url: "juniors/worthing-beach.html" },

	{ date: new Date("09/25/2022"), name: "AYCP End of Season BBQ", type: TYPE_PLAY, info: "", url: URL_AYCP },

	getHireWorthingC("09/26/2022"),
	// getWothingBegiTr("09/26/2022","20:00-22:00"),
	getHireWorthingC("09/27/2022"),
	getHireWorthingC("09/28/2022"),
	// getWorthingWedne("09/28/2022", "Coast Cafe Wednesday League", "Worthing Juniors 4s League"),

	getHireWorthingC("09/29/2022"),
	getHireWorthingC("09/30/2022")
];

var october_events_worthing = [
	getHireWorthingC("10/01/2022"),
	getWorthingAllYouCanPlay("10/02/2022"),
	getHireWorthingC("10/03/2022"),
	getHireWorthingC("10/04/2022"),
	getHireWorthingC("10/05/2022"),
	getHireWorthingC("10/06/2022"),
	getHireWorthingC("10/07/2022"),
	getHireWorthingC("10/08/2022"),
	getWorthingAllYouCanPlay("10/09/2022"),
	getHireWorthingC("10/10/2022"),
	getHireWorthingC("10/11/2022"),
	getHireWorthingC("10/12/2022"),
	getHireWorthingC("10/13/2022"),
	getHireWorthingC("10/14/2022"),
	getHireWorthingC("10/15/2022"),
	getWorthingAllYouCanPlay("10/16/2022"),
	getHireWorthingC("10/17/2022"),
	getHireWorthingC("10/18/2022"),
	getHireWorthingC("10/19/2022"),
	getHireWorthingC("10/20/2022"),
	getHireWorthingC("10/21/2022"),
	{ date: new Date("10/22/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	{ date: new Date("10/23/2022"), name: NAME_AYCP, type: TYPE_PLAY, info: "CANCELLED", url: URL_AYCP, status: "cancelled" },
	getHireWorthingC("10/24/2022"),
	getHireWorthingC("10/25/2022"),
	getHireWorthingC("10/26/2022"),
	getHireWorthingC("10/27/2022"),
	getHireWorthingC("10/28/2022"),
	getHireWorthingC("10/29/2022"),
	getWorthingAllYouCanPlay("10/30/2022"),
	getHireWorthingC("10/31/2022")
];

var november_events_worthing = [
	getHireWorthingC("11/01/2022"),
	getHireWorthingC("11/02/2022"),
	getHireWorthingC("11/03/2022"),
	getHireWorthingC("11/04/2022"),
	getHireWorthingC("11/05/2022"),
	getWorthingAllYouCanPlay("11/06/2022"),
	getHireWorthingC("11/07/2022"),
	getHireWorthingC("11/08/2022"),
	getHireWorthingC("11/09/2022"),
	getHireWorthingC("11/10/2022"),
	getHireWorthingC("11/11/2022"),
	getHireWorthingC("11/12/2022"),
	getWorthingAllYouCanPlay("11/13/2022"),
	getHireWorthingC("11/14/2022"),
	getHireWorthingC("11/15/2022"),
	getHireWorthingC("11/16/2022"),
	getHireWorthingC("11/17/2022"),
	getHireWorthingC("11/18/2022"),
	{ date: new Date("11/19/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	getWorthingAllYouCanPlay("11/20/2022"),
	getHireWorthingC("11/21/2022"),
	getHireWorthingC("11/22/2022"),
	getHireWorthingC("11/23/2022"),
	getHireWorthingC("11/24/2022"),
	getHireWorthingC("11/25/2022"),
	getHireWorthingC("11/26/2022"),
	getWorthingAllYouCanPlay("11/27/2022"),
	getHireWorthingC("11/28/2022"),
	getHireWorthingC("11/29/2022"),
	getHireWorthingC("11/30/2022")
];

var december_events_worthing = [
	getHireWorthingC("12/01/2022"),
	getHireWorthingC("12/02/2022"),
	getHireWorthingC("12/03/2022"),
	getWorthingAllYouCanPlay("12/04/2022"),
	getHireWorthingC("12/05/2022"),
	getHireWorthingC("12/06/2022"),
	getHireWorthingC("12/07/2022"),
	getHireWorthingC("12/08/2022"),
	getHireWorthingC("12/09/2022"),
	getHireWorthingC("12/10/2022"),
	getWorthingAllYouCanPlay("12/11/2022"),
	getHireWorthingC("12/12/2022"),
	getHireWorthingC("12/13/2022"),
	getHireWorthingC("12/14/2022"),
	getHireWorthingC("12/15/2022"),
	getHireWorthingC("12/16/2022"),
	//{ date: new Date("12/17/2022"), name: NAME_MIX_N_MATCH, type: TYPE_TOURNAMENT, info: INFO_MIXED, url: URL_MIX_N_MATCH },
	getHireWorthingC("12/17/2022"),
	{ date: new Date("12/18/2022"), name: "Christmas Tournament: Mix Side-it-Out", type: TYPE_TOURNAMENT, info: INFO_MIXED, url: "https://registration.sideout.co.uk/user/events/654" },
	getHireWorthingC("12/19/2022"),
	getHireWorthingC("12/20/2022"),
	getHireWorthingC("12/21/2022"),
	getHireWorthingC("12/22/2022"),
	getHireWorthingC("12/23/2022"),
	getHireWorthingC("12/24/2022"),
	getHireWorthingC("12/25/2022"),
	getHireWorthingC("12/26/2022"),
	getHireWorthingC("12/27/2022"),
	getHireWorthingC("12/28/2022"),
	getHireWorthingC("12/29/2022"),
	getHireWorthingC("12/30/2022")
];

var INDEX_NEXT_EVENTS_HEADER = '<div><h3 style="font-size: 1.25rem;">BEACH</h3></div>';

var INDEX_EVENT_DIV = '\
<div class="event-wrap d-flex flex-wrap justify-content-between" style="margin-top: 10px;">\
	<div class="event-content-wrap">\
		<header class="entry-header d-flex flex-wrap align-items-center">\
			<h3 class="entry-title w-100 m-0" style="font-size: 1.25rem;">$EVENT_TITLE$</h3>\
			<div class="posted-date">\
				<p>$DATE$</p>\
			</div>\
		</header>\
	</div>\
</div>';

var INDEX_MORE_EVENTS_DIV = '\
<div class="event-wrap d-flex flex-wrap justify-content-between" style="margin-top: 10px;">\
	<div class="event-content-wrap">\
		<header class="entry-header d-flex flex-wrap align-items-center">\
			<div>\
			<a style="color:red;" href=$URL$>More events...</a>\
			</div>\
		</header>\
	</div>\
</div>';

function getEventColor(eventName) {
	var color;

	switch (eventName) {
		case NAME_AYCP:
			color = COLOR_AYCP;
			break;
		case NAME_JUNIOR_AYCP:
			color = COLOR_AYCP;
			break;
		case NAME_FREE_AYCP:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_GRAND_SLAM:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_GRAND_SLAM:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_TENTH_BIRTHDAY:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_MIX_N_MATCH:
			color = COLOR_SIDEOUT_RED;
			break; 
		case NAME_WORTHING_MIXED_2S:
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_SPRING:
			color = COLOR_SPRING;
			break;
		case NAME_SUMMER:
			color = COLOR_SUMMER;
			break;
		case NAME_ALL_NATIONS:
			color = COLOR_ALL_NATIONS;
			break;
		case NAME_CHALLENGER:
			color = COLOR_CHALLENGER;
			break;
		case NAME_GRAND_PRIX:
			color = COLOR_GRAND_PRIX;
			break;
		case NAME_LONDON_FINALS:
			color = COLOR_LONDON_FINALS;
			break;
		case NAME_CEV:
			color = COLOR_CEV;
			break;
		case "Christmas Tournament: Mix Side-it-Out":
			color = COLOR_SIDEOUT_RED;
			break;
		case NAME_SIDE_IT_OUT:
			color = COLOR_SIDE_IT_OUT;
			break;
		case NAME_OPEN_PLAY:
			color = COLOR_OPEN_PLAY;
			break;

		default:
			color = COLOR_DEFAULT;
	}

	return color;
}