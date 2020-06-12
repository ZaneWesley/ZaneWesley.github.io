var trigger = [
      	["hi","hey","hello", "yo", "chatbot", "computer", "howdy"], /*1*/
      	["how are you", "how is life", "how are things"],/*2*/
      	["what are you doing", "what is going on", "what have you been doing", "what you doing"],/*3*/
      	["how old are you", "whats your age", "what is your age", "whens your birthday", "when is your birthday"],/*4*/
      	["who are you", "are you human", "are you a computer", "are you human or a computer"],/*5*/
      	["who created you", "who made you"],/*6*/
      	["your name please",  "your name", "may i know your name", "what is your name"],/*7*/
      	["i love you", "love you"],/*8*/
      	["happy", "good", "doing well", "fine", "im fine", "im good", "great", "teriffic", "fantastic", "fantaboulous", "swell", "doing swell", "im teriffic", "im great"],/*9*/
      	["bad", "bored", "tired"],/*10*/
      	["help me", "help", "can you help me", "help me"],/*11*/
      	["nice", "thanks", "thank you", "ok thank you", "okay thank you", "ok thanks", "okay thanks"],/*12*/
      	["bye", "good bye", "goodbye", "see you later", "see ya", "see you around", "good talking to you", "good talking"],/*13*/
        ["i do not know", "i dont know"],/*14*/
        ["go away", "skedaddle", "shew", "leave"],/*15*/
        ["be quiet", "shut up", "shut", "stut it", "quiet", "be sient", "silent", "silence", "stop it", "stop"],/*16*/
        ["nothing", "dont need it", "i dont need your help", "do not need your help", "do not need it", "dont want it", "i dont want it", "do not want it", "i do not want it", "not needed", "you cant", "dont", "leave me alone"],/*17*/
        ["what does the fox say", "what does fox say"],/*18*/
        ["no"],/*19*/
        ["what is love"],/*20*/
        ["do you have a boy friend", "do you have a boyfriend", "who is your boy friend", "who is your boyfriend", "whos your boy friend", "whos your boyfriend", "do you have a girl friend", "do you have a girlfriend", "who is your girl friend", "who is your girlfriend", "whos your girl friend", "whos your girlfriend"],/*21*/
        ["what came first the chicken or the egg", "who came first the chicken or the egg", "did the chicken or the egg come first"],/*22*/
        ["what came first the egg or the chicken", "who came first the egg or the chicken", "did the egg or the chicken come first"],/*23*/
        ["naapta"],/*24 - blank input default*/
        ["haha", "youre funny", "funny", "hillarious", "youre hillarious", "hee hee", "hee-hee", "ha ha", "ha-ha"],/*25*/
        ["orow"],/*26 - search message*/
        ["why did the chicken cross the road"],/*27*/
        ["oops"],/*28*/
        ["yes"],/*29*/
        ["are you siri", "you are like siri", "why do you act like siri"],/*30*/
        ["ah", "ok", "okay", "gotcha", "got it", "i understand"]/*31*/
      ];
      var reply = [
      	["Hi.","Hey.","Hello."], /*1*/
      	["Good. How are you?", "Doing well. How are you?", "Fantastic. How are you?"],/*2*/
      	["Nothing much.", "About to go to sleep.", "Can you guess?", "I don't know, actually.", "Talking to you."],/*3*/
      	["I am a computer. I don't have a birthday.", "I was created April 17, 2020 if that's what you're looking for.", "I was created April 17, 2020"],/*4*/
      	["I am just your assistamt", "I am your virtual assistant. What are you?", "I am a computer."],/*5*/
      	["A very smart man", ""],/*6*/
      	["I am nameless.", "I don't have a name.", "My name? That is private information."],/*7*/
      	["I love you too.", "Me too.", "I haven't quite grasped human emotion."],/*8*/
      	["Have you ever felt bad?", "Glad to hear it!", "Awesome!", "Great!", "Fantastic!", "That's good."],/*9*/
      	["Why?", "Why? You shouldn't! Find something fun to do.", "Try watching TV."],/*10*/
      	["I will. How can I help?", "What can I do?"],/*11*/
      	["My pleasure!", "No problem!", "You\'re welcome!", "You are welcome.", "It\' my pleasure!"],/*12*/
      	["Bye.", "Goodbye.", "See you later.", "Good talking to you.", "See ya."],/*13*/
        ["How can I help?", "What can I do for you?"],/*14*/
        ["I am just a computer. I can't go away.", "Well then"],/*15*/
        ["Well then", "That's not very nice", "Fine", "That's rude", "What did I do?", "Sometimes silence is best."],/*16*/
        ["Okay then", "Well then", "Very well", "What did I do?"],/*17*/
        ["Fraka-kaka-kaka-kaka-kow!", "Ring-ding-ding-ding-dingeringding!", "Chacha-chacha-chacha-chow!", "Nobody knows."],/*18*/
        ["I'm sorry.", "That's okay."],/*19*/
        ["I'm not sure myself.", "I haven't quite grasped human emotion.", "Love is where the heart is."],/*20*/
        ["Why? So we can get ice cream together, and listen to music, and travel across galaxies, only to have it end in slammed doors, heartbreak and loneliness? Sure, where do I sign up?", "My end user license agreement is commitment enough for me.", "Why? I am a virtual assistant. Everyone loves me."],/*21*/
        ["Well, you can set an egg timer, but you can’t set a chicken timer. I don’t know if that helps.", "I've wondered that myself.", "I've got lots of problems and this ain't one of them.", "Does it matter? I'm just thankful they exist."],/*22*/
        ["I believe the saying goes \"Did the chicken or the egg come first,\" but I've got lots of problems and this ain't one of them.", "I think you've got the saying backwards. It goes \"Did the chicken or the egg come first,\" but either way it doesn't really matter."],/*23*/
        ["Oops! You didn't ask me anything.", "What would you like me to do?", "Sometimes silence is best."],/*24 - blank input default*/
        ["Glad you thought I was funny.", "Haha! I don't get it.", "Haha!", "Hee hee"],/*25*/
        ["Search in the search box&hellip;"],/*26*/
        ["Maybe the chicken is standing still, and it is the road that crosses under it."],/*27*/
        ["That\'s embarrasing."],/*28*/
        ["Ok"],/*29*/
        ["I am Corey.", "That\s odd.", "I\'m only Corey."],/*30*/
        ["I thought so.", "That\'s what I figured.", "That\'s what I thought"]/*31*/
      ];
      var alternative = ["I don't think I understand.", "Try saying that a different way.", "I don't quite understand", "I'm having trouble understanding.", "I'm having trouble understanding you."];