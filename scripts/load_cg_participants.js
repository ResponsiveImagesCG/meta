//This script dynamically loads the participants of the CG and shows them in the spec. 
(function requestParticipants(){
  var xhr = new XMLHttpRequest(),
  	  output = document.querySelector("#participants"), 
      participantsURL = output.querySelector("a").getAttribute("href"),
	  tempElem = document.createElement("temp"), 
	  participants;
  if(!participantsURL){
	return;  
  }
  xhr.open("GET", participantsURL,true);
  xhr.onreadystatechange= processParticipants; 
  xhr.send(null); 
  
  function processParticipants(){
	 if (xhr.readyState==4) {
		//participants are in a table on the other website
		tempElem.innerHTML = xhr.responseText;
		participants = tempElem.querySelectorAll("td > h3");
		if(participants.length > 0){
 	  		showParticipants(participants)
		}
 	}
  } 
  
  function showParticipants(){
	var names  = [],
		prefix = "Participants of the Responsive Images Community Group are: ";
	if(participants.length){
		for(var i = 0; i < participants.length; i++){
			names.push(participants.item(i).textContent);
		}
		output.innerHTML = prefix + names.join(", ") + "."; 
	}
  }
 }()); 
 