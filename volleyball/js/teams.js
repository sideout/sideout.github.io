var thisPlayerList = [];

var players_xulu = [
	// { number: 1, name:"Kammas Manos", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 2, name:"Moysis Ezer", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" },
    // { number: 3, name:"Haasz Matt", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" },
    // { number: 4, name:"Rendon Aldo", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Libero" },
    // { number: 5, name:"Morales Javier", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Libero" },
    // { number: 6, name:"Kogkas Alexandros", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Opposite" },
    // { number: 7, name:"Lipscombe Gerrard", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 8, name:"Dragotis John", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" },
    // { number: 9, name:"Petrou Lambros", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Setter" },
    // { number: 10, name:"Zardo Eduardo", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Setter" },
    // { number: 11, name:"Antonaci Luigi", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Libero" },
    // { number: 12, name:"Piubelli Manuel", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 13, name:"Baisch Bruno", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 14, name:"Tang-Taye Pierre", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 15, name:"Theocharopoulos John", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Setter" },
    // { number: 16, name:"Gibin Federico", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" },
    // { number: 17, name:"Andronis Antonis", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 18, name:"Vondas Chris", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" }
	
];

var players_polonia = [
	// { number: 1, name:"Julia", country: "Italy", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 18, name:"Vondas Chris", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" }
];

var players_women1 = [
	// { number: 1, name:"Julia", country: "Italy", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 18, name:"Vondas Chris", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" }
];

var players_women2 = [
	// { number: 1, name:"Julia", country: "Italy", dob:"14/06/1989", height:"1.88", position:"Outside" },
    // { number: 18, name:"Vondas Chris", country: "Greece", dob:"14/06/1989", height:"1.88", position:"Middle" }
];

function renderButtons() {

    let viewParam = "";

    var fullpath = window.location;
    //var url = window.location.href;
    let urlString1 = fullpath + "";
    let paramString = urlString1.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
        if (pair[0] == "view") {
            viewParam = pair[1];
        }
        // console.log("Key is:" + pair[0]);
        // console.log("Value is:" + pair[1]);
    }

    console.log("View is:" + viewParam);

    if (viewParam == "info" || viewParam == "") {

        document.getElementById('infoRosterButtonsDiv').innerHTML = '<a href="?view=info" style="width:280px;margin-top:10px;" class="btn gradient-bg">Info</a> \
        <a href="?view=roster" style="width:280px;margin-top:10px;" class="btn red-border">Roster</a>';

        document.getElementById('rosterDiv').style.display = 'none';
        document.getElementById('infoDiv').style.display = 'inline';
    } else {
        document.getElementById('infoRosterButtonsDiv').innerHTML = '<a href="?view=info" style="width:280px;margin-top:10px;" class="btn red-border">Info</a> \
    <a href="?view=roster" style="width:280px;margin-top:10px;" class="btn gradient-bg">Roster</a>';
    document.getElementById('infoDiv').style.display = 'none';
    document.getElementById('rosterDiv').style.display = 'inline';
    }

    console.log("fullpath:" + urlString1);
    if (urlString1.includes("xulu")) {
        console.log("xulu");
        thisPlayerList = players_xulu;
    }

    if (urlString1.includes("polonia")) {
        console.log("polonia");
        thisPlayerList = players_polonia;
    }

    if (urlString1.includes("women-1")) {
        console.log("women-1");
        thisPlayerList = players_women1;
    }

    if (urlString1.includes("women-2")) {
        console.log("women-2");
        thisPlayerList = players_women2;
    }
}

function getRowHtml(player) {
    var eventRowHtml = "";
    eventRowHtml += "<tr>";
    eventRowHtml += "<td>" + player.number +  "</td>";
    eventRowHtml += "<td>" + player.name +  "</td>";
    eventRowHtml += "<td>" + player.country +  "</td>";
    eventRowHtml += "<td>" + player.dob +  "</td>";
    eventRowHtml += "<td>" + player.height +  "</td>";
    eventRowHtml += "<td>" + player.position +  "</td>";
    eventRowHtml += "</tr>";

    return eventRowHtml;
}

function renderMonthTable() {
    var tableEventContent = "";

    for (i = 0; i < thisPlayerList.length; i++) {
        tableEventContent += getRowHtml(thisPlayerList[i]);
    }

    var textSize = "font-size: 16px;";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("mobile_view:ON");
        var textSize = "font-size: 10px;font-weight: bold;";
      }

    var tableContent = "";
    if (tableEventContent) {
        tableContent = "<h2 class=\"entry-title\" style=\"font-weight:bold;\">Player List</h2>\
		<div>\
            <table style=\""+textSize+"\">\
                <tr>\
			        <th style=\"font-weight: bold\">N.</th>\
			        <th style=\"font-weight: bold\">Name</th>\
			        <th style=\"font-weight: bold\">Country</th>\
			        <th style=\"font-weight: bold\">DOB</th>\
                    <th style=\"font-weight: bold\">Height</th>\
                    <th style=\"font-weight: bold\">Pos.</th>\
		        </tr>\
			" + tableEventContent + "</table>\
			</div>\
		</div>";
        document.getElementById('player-table').innerHTML = tableContent;

    } else {
        var soon = "<p> Roster is coming soon..</p><br>"
        document.getElementById('player-table').innerHTML = soon;
    }
    
    
}


renderButtons();
renderMonthTable();