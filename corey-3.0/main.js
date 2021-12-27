var userData = {};
document.addEventListener("DOMContentLoaded", () => {
  var personalData = localStorage.getItem('corey-3.0-data');
  if(personalData) {
    userData = JSON.parse(personalData);
    initKeypress();
    initClick();
    sendResults('', `${greeting[Math.floor(Math.random() * greeting.length)]}, ${userData.name}! How can I help?`, false);
  } else {
    initPersonalize();
  }
});

document.getElementById('help-btn').addEventListener('click', function(e) {
  sendResults('',
    `It looks like you need help!
    <br>
    Here\'s a list of things I can do:
    <ul>
      <li>I can keep you company</li>
      <li>I can have a conversation</li>
      <li>I can tell jokes</li>
      <li>I can do math</li>
      <li>I can solve equations</li>
      <li>I can flip a coin</li>
      <li>I can be encouraging</li>
    </ul>
    `, false);
})

function initPersonalize() {
  sendResults('', 'Hello! I\'d like to get to know you!', false);
  sendResults('', 'What\'s your name?', false);
  // Step 1: Name
  document.getElementById("input").addEventListener('keydown', setupName);
  document.getElementById("send-icon").addEventListener('click', setupName);
}

function setupName(e) {
  var input = document.getElementById("input");
  if((e.keyCode == 13 || e.type == 'click') && input.value != "" && input.value != null) {
    displayUserInput(input.value);
    var trimInput = input.value.toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/[\d]/gi, "")
      .replace(/,/g, '')
      .trim()
      .replace('im', '')
      .replace('my name is', '')
      .replace('its');
    userData.name = trimInput;
    input.value = "";
    input.removeEventListener('keydown', setupName);
    document.getElementById("send-icon").removeEventListener('click', setupName);
    // Step 2: Birthday
    sendResults('', `I\'m Corey. Nice to meet you, ${userData.name}.`, false);
    sendResults('', `When is your Birthday?`, false);
    input.addEventListener('keydown', setupBirthday);
    document.getElementById("send-icon").addEventListener('click', setupBirthday);
  }
}

function setupBirthday(e) {
  var input = document.getElementById("input");
  if((e.keyCode == 13 || e.type == 'click') && input.value != "" && input.value != null) {
    displayUserInput(input.value);
    var trimInput = input.value.toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/[\d]/gi, "")
      //.replace(/,/g, '')
      .trim()
      .replace('its on', '')
      .replace('my birthday is', '')
      .replace('its', '')
      .replace('my birthday is on', '');
    userData.birthday = trimInput;
    input.value = "";
    input.removeEventListener('keydown', setupBirthday);
    document.getElementById("send-icon").removeEventListener('click', setupBirthday);
    // Step 3: Color
    sendResults('', `Awesome! Thanks so much, ${userData.name}.`, false);
    sendResults('', `One last question. What is your favorite color?`, false);
    input.addEventListener('keydown', setupColor);
    document.getElementById("send-icon").addEventListener('click', setupColor);
  }
}

function setupColor(e) {
  var input = document.getElementById("input");
  if((e.keyCode == 13 || e.type == 'click') && input.value != "" && input.value != null) {
    displayUserInput(input.value);
    var trimInput = input.value.toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/[\d]/gi, "")
      //.replace(/,/g, '')
      .trim()
      .replace('my favorite color is', '')
      .replace('its', '')
      .replace('they are', '')
      .replace('my favorite colors are', '')
      .replace('i love', '');
    userData.color = trimInput;
    input.value = "";
    input.removeEventListener('keydown', setupColor);
    document.getElementById("send-icon").removeEventListener('click', setupColor);
    // Step 4: Initiate regular functioning
    sendResults('', `Great! It looks like I\'m starting to get to know you a little bit.`, false);
    sendResults('', `We\'re all set up! If you would like to know what I can do, just ask, \"What can you do?\"`, false);
    initKeypress();
    initClick();
    saveData();
  }
}

function initKeypress() {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    let input = inputField.value;
    if (e.keyCode == 13 && input != "" && input != null) {
      inputField.value = "";
      displayUserInput(input);
      if(String( input ).replace(/,/g, '').replace('//', '').replace(/\./g, '').match( /[()\\*+-/><=]/ )) {
        input = input.trim();
        var eqVar = input.replace(/[0-9]|[()\\*+-/><=^]/g, '').split('')[0];
        console.log(eqVar);
        if(input.replace(/,/g, '').match(/[a-z]/i) && input.replace(/,/g, '').match(/=|>|</i)) {
          calculate(input, eqVar);
        } else {
          calculate(input);
        }
      } else {
        output(input);
      }
    }
  });
  focusInput();
  scrollToBottom();
}

function initClick() {
  document.getElementById("send-icon").addEventListener('click', function(e) {
    const inputField = document.getElementById("input");
    let input = inputField.value;
      if (input != "" && input != null) {
        inputField.value = "";
        displayUserInput(input);
        if(String( input ).replace(/,/g, '').match( /[()\\*+-/><=]/ )) {
          input = input.trim();
          var eqVar = input.replace(/[0-9]|[()\\*+-/><=^]/g, '').split('')[0];
          console.log(eqVar);
          if(input.replace(/,/g, '').match(/[a-z]/i) && input.match(/=|>|</i)) {
            calculate(input, eqVar);
          } else {
            calculate(input);
          }
        } else {
          output(input);
        }
      }
    focusInput();
    scrollToBottom();
  });
}

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // Remove comma
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").replace(/,/g, '');
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/whos/g, "who is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/wont/g, "will not")
    .replace(/dont/g, "do not")
    .replace(/youre/g, "you are")
    .replace(/arent/g, "are not")
    .replace(/howre/g, "how are")
    .replace(/im/g, "i am")
    .replace(/thats/g, "that is")
    .replace(/luv/g, 'love')
    .replace(/corey/g, '')
    .replace(/wanna/g, 'want to')
    .replace(/gonna/g, 'going to')
    .replace(/whatcha/g, 'what are you')
    .replace(/i said/g, '')
    .replace(/dude/g, '')
    .replace(/bro/g, '')
    .replace(/bud/g, '')
    .replace(/buddy/g, '')
    .replace(/idk/g, 'i do not know')
    .replace(/ lol/g, '')
    .replace(/lol /g, '')
    .trim();

  if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else if (text.replace('time', 'date').match(/(date)/gi)) {
    // If no match, check if message contains `time`
    var dNow = new Date();
    product = timePhrases[Math.floor(Math.random() * timePhrases.length)] + " " + dNow.getHours + ":" + dNow.getMinutes() + ":" + dNow.getSeconds() + ".";
  } else if(text.match(/(weather|temp)/gi)) {
    product = 'I don\t have access to that information. For now, go to <a href="https://weather.com/weather/today">weather.com</a>.';
    //https://www.weather.com/wx/today/?lat=35.64&lon=-88.84&locale=en_US&temp=f
  } else if (text.match(/(thank)/gi)) {
    product = gratitude[Math.floor(Math.random() * gratitude.length)];
  } else if (text.match(/(my name)/gi)) {
    product = nameIntro[Math.floor(Math.random() * nameIntro.length)] + ' ' + userData.name; 
  } else if (text.match(/(ass|arse|asshole|arsehole|bastard|bitch|cock|damn|dick|cunt|pussy|fuck|piss|shit|shite|up yours)/gi)) {
    product = profanityReaction[Math.floor(Math.random() * profanityReaction.length)];
  } else if (text.match(/(my birthday)/gi)) {
    product = 'Your birthday is on ' + userData.birthday; 
  } else if (text.replace('open', '').trim().match(/(https|http|www)/gi)) {
    //product = accomplished[Math.floor(Math.random() * accomplished.length)];
    product = "Sorry, I can\'t open links yet."
  } else if (compare(prompts, replies, text)) {
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  /*else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } */

  // Update DOM
  sendResults(input, product);

  //document.querySelector('.survey').innerHTML+=` <i><a class="survey-link" onclick="openSurvey()" href="#">Were these the results you expected?</a></i>`;
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
  input = input.toLowerCase().replace(/what is/g, "").replace(/calculate/g, "").replace(/,/g, "").replace(/corey/g, "").trim();
  var exp;
  try {
    exp = algebra.parse(input);
  } catch(error) {
    error = error.toString().replace('EvalError: ', 'Cannot ').replace('TypeError: ', '').replace('Invalid Argument ', '').replace('(x)', '').replace(/:/g, '');
    sendResults(input, error, false, false);
    return;
  }
  var ans;
  if(eqVar) {
    ans = exp.solveFor(eqVar);
    ans = ans.toString();
  } else {
    ans = exp;
  }
  sendResults(input, ans, true, eqVar);
}

function displayUserInput(input) {
  //Remove extra spaces
  let text = input.toString()
  .replace(/ass/g, 'a**')
  .replace(/arse/g, 'a*se')
  .replace(/asshole/g, 'a**hole')
  .replace(/arsehole/g, 'a**ehole')
  .replace(/bastard/g, 'ba***rd')
  .replace(/bitch/g, 'bi*ch')
  .replace(/cock/g, 'c*ck')
  .replace(/damn/g, 'd*mn')
  .replace(/dick/g, 'd*ck')
  .replace(/cunt/g, 'c*nt')
  .replace(/pussy/g, 'pu*sy')
  .replace(/fuck/g, 'f*ck')
  .replace(/piss/g, 'p*ss')
  .replace(/shit/g, 'sh*t')
  .replace(/shite/g, 'sh*te')
  .replace(/up yours/g, 'up yours')
  .trim();
  var container = document.getElementById('message-wrapper');
  var message = document.createElement('div');
  message.classList.add('message-user');
  container.appendChild(message);
  message.innerHTML=`
          <div class="contents">
            <span class="message">${text}</span>
            <div class="spacing"></div>
          </div>
    `;
  scrollToBottom();
}

function sendResults(input, product, isMath, eqVar) {

  // input - what the user put in
  // product - what the bot outputted
  // isMath - bool for is input was expression
  // eqVar - variable used if input was equation

  var container = document.getElementById('message-wrapper');
  var message = document.createElement('div');
  message.classList.add('message-bot');

  if(!isMath) {
    message.innerHTML=`
          <div class="contents">
            <span class="message">${product}</span>
            <div class="spacing"></div>
          </div>
    `;
  } else {
    if(eqVar) {
      message.innerHTML=`
          <div class="contents">
            <span class="message">${eqVar} = ${product}</span>
            <div class="spacing"></div>
          </div>
      `;
    } else {
      message.innerHTML=`
          <div class="contents">
            <span class="message">${input} = ${product}</span>
            <div class="spacing"></div>
          </div>
      `;
    }
  }

  setTimeout(function() {
    container.appendChild(message);
    scrollToBottom();
    focusInput();
  }, 1000);
}

function focusInput() {
  document.getElementById("input").focus();
}

function scrollToBottom() {
  document.getElementById("message-wrapper").scroll({
    top: document.getElementById("message-wrapper").scrollHeight,
    behavior: 'smooth'
  });
}

function saveData() {
  var personalData = JSON.stringify(userData);
  localStorage.setItem('corey-3.0-data', personalData);
}
