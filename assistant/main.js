document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("text");
  inputField.addEventListener("keydown", (e) => {
    let input = inputField.value;
    if (e.keyCode == 13 && input != "" && input != "null") {
      inputField.value = "";
      if(String( input ).match( /[()\\*+-/><=]/ )) {
        input = input.trim();
        var eqVar = input.replace(/[0-9]|[()\\*+-/><=^]/g, '').split('')[0];
        console.log(eqVar);
        if(input.match(/[a-z]/i) && input.match(/=|>|</i)) {
          calculate(input, eqVar);
        } else {
          calculate(input);
        }
      } else {
        output(input);
      }
    }
  });
});

try {
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
} catch(error) {
	document.getElementById('mic').style.display='none';
  document.querySelector('.spacer').style.display='none';
  document.getElementById('text').style.width='93%';
	console.log('Speech to text not supported');
}

recognition.onstart = function() {
	console.log("Listening...");
	document.getElementById('speech-dialog').style.display='block';
};

recognition.onspeechend = function() {
    // when user is done speaking
    console.log("Stopped listening.");
    document.getElementById('speech-dialog').style.display='none';
    recognition.stop();
}

function stopListening() {
	recognition.stop();
}

recognition.onresult = function(event) {
	var transcript = event.results[0][0].transcript;
	var confidence = event.results[0][0].confidence;
	//console.log(transcript, confidence);
	//output(transcript, confidence);
	output(transcript);
};

document.getElementById('mic').addEventListener('click', function(e) {
	e.preventDefault();
	recognition.start();
});

//function output(input, speechConfidence) {
function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/wont/g, "will not")
    .replace(/dont/g, "do not")
    .replace(/youre/g, "you are")
    .replace(/arent/g, "are not")
    .replace(/im/g, "i am")
    .replace(/thats/g, "that is");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } /*else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } */else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else if (text.match(/time/gi)) {
    // If no match, check if message contains `time`
    var d = new Date();
    product = timePhrases[Math.floor(Math.random() * timePhrases.length)] + " " + d.getHours + ":" + d.getMinutes() + ":" + d.getSeconds() + "."
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  sendResults(input, product);
  /*if(speechConfidence) {
  	document.querySelector('.survey').innerHTML+=` These results were returned with ${Math.round(speechConfidence)}% confidence.`;
  }*/
  document.querySelector('.survey').innerHTML+=` <i><a class="survey-link" onclick="openSurvey()" href="#">Were these the results you expected?</a></i>`;
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function calculate(input, eqVar) {
  var exp = algebra.parse(input);
  var ans;
  if(eqVar) {
    ans = exp.solveFor(eqVar);
    ans = ans.toString();
  } else {
    ans = exp;
  }
  sendResults(input, ans, true, eqVar);
}

function sendResults(input, product, isMath, eqVar) {
	document.getElementById('results').innerHTML="";

  if(!isMath) {
		document.getElementById('results').innerHTML=`
			<p class="result">${product}</p>
			<p class="survey">You said <i>${input}.</i></p>
		`;
  } else {
    if(eqVar) {
      document.getElementById('results').innerHTML=`
      <p class="result">${eqVar} = ${product}</p>
      <p class="survey">You asked to calculate <i>${input}. <a class="survey-link" href="#">Solution doesn't look right? Click to see format regulations.</a></i></p>
    `;
    } else {
      document.getElementById('results').innerHTML=`
      <p class="result">${input} is ${product}</p>
      <p class="survey">You asked to calculate <i>${input}. <a class="survey-link" href="#">Solution doesn't look right? Click to see format regulations.</a></i></p>
    `;
    }
  }
}
