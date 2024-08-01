var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore(){
	var given_name = $("name").value;

	if(given_name === ""){
		$("name_error").innerHTML = "Name cannot be empty";
		return;
	}else {
		$("name_error").innerHTML = "";

	}

	var given_score = $("score").value;

	if(given_score === ""){
		$("score_error").innerHTML = "Score cannot be empty";
		return;
	}else {
		$("score_error").innerHTML = " ";
	}
	
    // if(given_name != "" || given_score != ""){
		scores[scores.length] = parseFloat(given_score);
		names[names.length] = given_name;


	// }
	
}

function displayScores(){
	var html_str = "<h2>Scores</h2>";
	var table_head = "<tr><th>Name</th><th>Score</th></tr>";

	html_str += table_head;
	var table_content = " ";

	for(var i = 0 ; i < scores.length; i++){
		table_content += "<tr>";
		table_content += "<td>" + names[i] + "</td>";
		table_content += "<td>" + scores[i] + "</td>";
		table_content += "</tr>";
	}
      html_str += table_content;

	$("scores_table").innerHTML = html_str;
}

function displayResults(){
	var html_str="<h2> Results </h2>"
	var avg_score=0;
	var total_score=0;
	var highest_score = 0;
	var score = scores[0];
	for (let i = 0; i < scores.length; i++) {
	  total_score=total_score+scores[i];
	  
	  if(scores[i] > score){
         highest_score = scores[i];
		 var highest_scored_person = names[i];
	  }
	}
	avg_score=parseFloat(total_score/scores.length);
	html_str += "<p> Average score: ";

	$("results").innerHTML=html_str+ " " + avg_score + "</p></p> High score = " + highest_scored_person + " with a score of "+ highest_score+"</p>";
  }

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


