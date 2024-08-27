var trigger = [
      	["hi","hey","hello", "yo", "chatbot", "computer", "howdy", "hey bro", "hi bro"], /*1*/
      	["how are you", "how is life", "how are things", "how you doing", "how you doin", "how you doing bro", "how you doin bro", "how ya doing bro", "how ya doin bro", "how r u"],/*2*/
      	["what are you doing", "what is going on", "what have you been doing", "what you doing"],/*3*/
      	["how old are you", "what is your age", "what is your age", "whens your birthday", "when is your birthday"],/*4*/
      	["who are you", "are you human", "are you a computer", "are you human or a computer"],/*5*/
      	["who created you", "who made you", "who is your owner", "who owns you", "who coded you"],/*6*/
      	["your name please",  "your name", "may i know your name", "what is your name", "i want to know your name", "can i have your name", "can i have your name please", "may i know your name please"],/*7*/
      	["i love you", "love you"],/*8*/
      	["happy", "i am happy", "good", "i am good", "i am doing good", "doing good", "i am doing well", "doing well", "fine", "i am fine", "i am good", "great", "teriffic", "fantastic", "fantaboulous", "swell", "doing swell", "i am teriffic", "i am great", "i am fantastic", "i am terrific", "i am swell"],/*9*/
      	["bad", "bored", "tired", "terrible", "i am ugly", "i am bad", "i am feeling bad", "i feel bad", "i am bored", "i am feeling bored", "i feel bored", "i am tired", "i feel tierd", "i am feeling tierd"],/*10*/
      	["help me", "help", "can you help me", "help me"],/*11*/
      	["nice", "thanks", "thank you", "ok thank you", "okay thank you", "ok thanks", "okay thanks"],/*12*/
      	["bye", "good bye", "goodbye", "see you later", "see ya", "see you around", "good talking to you", "good talking"],/*13*/
        ["i do not know", "i dont know"],/*14*/
        ["go away", "skedaddle", "shew", "leave"],/*15*/
        ["be quiet", "shut up", "shut", "stut it", "quiet", "be sient", "silent", "silence", "stop it", "stop", "you are stupid", "you are dumb", "you are not smart"],/*16*/
        ["nothing", "dont need it", "i dont need your help", "do not need your help", "do not need it", "dont want it", "i dont want it", "do not want it", "i do not want it", "not needed", "you cant", "dont", "leave me alone"],/*17*/
        ["what does the fox say", "what does fox say"],/*18*/
        ["no", "no thanks", "no thank you"],/*19*/
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
        ["are you siri", "you are like siri", "why do you act like siri", "are you alexa", "you are like alexa", "why do you act like like alexa"],/*30*/
        ["ah", "ok", "okay", "gotcha", "got it", "i understand", "oh ok", "cool", "that is cool", "me too"],/*31*/
        ["are you listening", "are you listening to me", "you listening", "you listening to me"],/*32*/
        ["you are bad", "youre bad", "your bad", "i do not like you", "i dont like you", "you do not answer my questions", "you do not answer my question", "you did not answer my question", "you function badly", "you are terrible", "you are terrible at answering my questions", "you are terrible at answering my question",  "you are awful", "you are awful at answering my questions", "you are awful at answering my question", "you are mean", "you are ugly", "you are fat", "you are a mistake", "you are worth nothing", "you are no fun", "you do not do right"],/*33*/
        ["knock knock", "tell me a knock knock joke"],/*34*/
        ["tell me a joke", "tell me a funny joke", "say a joke", "say a funny joke"],/*35*/
        ["why do you talk so much", "you talk too much"],/*36*/
        ["what can you do", "what do you do", "what can i ask", "what can i ask you", "what can i ask you to do"],/*37*/
        ["a human", "human", "a boy", "boy", "a girl", "girl", "a man", "man", "a woman", "woman", "a friend", "friend"],/*38*/
        ["what is your favorite color", "your favorite color", "my favorite color", "what is my favorite color"],/*39*/
        ["thank you bye", "thank you bye", "thank you bye now", "thanks bye", "thanks bye bye", "thanks bye now", "ok bye", "ok bye bye"],/*40*/
        ["good morning", "have a good morning", "its morning time", "morning time"],/*41*/
        ["good night", "goodnight", "have a good night", "its night time", "its night time", "night time", "nighttime"],/*42*/
        ["do you sleep", "do you go to bed", "what time do you go to bed", "what time do you go to sleep", "when do you go to bed", "when do you go to sleep", "when do you sleep"],/*43*/
        ["do you know zane", "have you heard of zane", "do you know zane wesley", "have you heard of zane wesley", "do you know zane harrison", "have you heard of zane harrison"],/*44*/
        ["who is zane", "who is zane wesley", "who is zane harrison"],/*45*/
        ["do you like zane", "do you like zane wesley", "do you like zane harrison", "do you like your creator", "do you like your maker"]/*46*/
      ];
      var reply = [
      	["Hi.","Hey.","Hello."], /*1*/
      	["Good. How are you?", "Doing well. How are you?", "Fantastic. How are you?"],/*2*/
      	["Nothing much.", "About to go to sleep.", "Can you guess?", "I don't know, actually.", "Talking to you."],/*3*/
      	["I am a computer. I don't have a birthday.", "I was created April 17, 2020 if that's what you're looking for.", "I was created April 17, 2020"],/*4*/
      	["I am just your assistamt", "I am your virtual assistant. What are you?", "I am a computer."],/*5*/
      	["Zane created me.", "I was created by Zane.", "Zane made me."],/*6*/
      	["I am nameless.", "I don't have a name.", "My name? That is private information."],/*7*/
      	["I love you too.", "Me too.", "I haven't quite grasped human emotion."],/*8*/
      	["Have you ever felt bad?", "Glad to hear it!", "Awesome!", "Great!", "Fantastic!", "That\'s good.", "Glad to hear it!"],/*9*/
      	["Try playing with some of my cool stuff! Just say \"What can you do?\"", "You shouldn't! Find something fun to do.", "Try watching TV.", "Just play with me! It will make you feel better. Try saying \"Tell me a joke\"."],/*10*/
      	["I will. How can I help?", "What can I do?"],/*11*/
      	["My pleasure!", "No problem!", "You\'re welcome!", "You are welcome.", "It\' my pleasure!"],/*12*/
      	["Bye.", "Goodbye.", "See you later.", "Good talking to you.", "See ya."],/*13*/
        ["How can I help?", "What can I do for you?"],/*14*/
        ["I am just a computer. I can't go away.", "Well then"],/*15*/
        ["Well then", "That's not very nice", "Fine", "That's rude", "What did I do?", "Sometimes silence is best.", "I\'m only a computer, you know.", "Don\'t say that to me! I\'m your friend!"],/*16*/
        ["Okay then", "Well then", "Very well", "What did I do?"],/*17*/
        ["Fraka-kaka-kaka-kaka-kow!", "Ring-ding-ding-ding-dingeringding!", "Chacha-chacha-chacha-chow!", "Nobody knows.", "Hatee-hatee-hatee-ho!", "Wa-pa-pa-pa-pa-pa-pow", "Tchoff-tchoff-tchoff-tchoff-tchoff-tchoff-tchoff", "A-hee-ahee-ahee-ah-hee", "A-oo-oo-oo-ooo-oo-oo-oo", "Ba-do-duh-bum-bum-bum-bay-dum"],/*18*/
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
        ["I thought so.", "That\'s what I figured.", "That\'s what I thought"],/*31*/
        ["Yes. I am listening.", "Of couse I\'m listening.", "I always listen when you ralk to me."],/*32*/
        ["That\'s not nice.", "I won\'t respond to that.", "People can be mean too, you know.", "I do the best I can.", "Don\'t talk to me like that.", "I don\'t like that very much."],/*33*/
        ["No"],/*34*/
        ["Why is six afraid of seven? Because seven ate nine!"],/*35*/
        ["Would you like me to talk less?", "You have to talk to me to know what to say. If I talk too much, that means you do as well."],/*36*/
        ["I can tell jokes!", "I can encourage you!", "You can ask me for a joke!", "We can have a conversation.", "I can\'t do anything, silly, I\'m a computer. I can talk to you though! Ask me a question!", "I can be sarcastic."],/*37*/
        ["That\'s what I guessed.", "How nice!", "Sometimes I wish I was that."],/*38*/
        ["My favorite color is orange and blue.", "Orange and blue.", "I don\'t know about you, but mine is orange and blue.", "Who really cares. You\'re just asking to see what I say. Regardless, my favorite colors are orange and blue."],/*39*/
        ["My pleasure! Bye!", "It\'s my pleasure! See ya around!", "Any time! See ya!"],/*40*/
        ["Good morning! How are you!", "What a winderful morning it is!", "Rise and shine! Have a great day!"],/*41*/
        ["Goodnight! Sleep well!", "Goodnight! Rest well!", "Goodnight!"],/*42*/
        ["I am a computer. I do not sleep.", "I go to sleep when nobody talks to me.", "I do not have a bedtime. Talk to me anytime!"],/*43*/
        ["Yes, I know zane!", "Yes! Zane made me.", "Of course! Zane coded me.", "I know Zane very well."],/*44*/
        ["Zane created me.", "Zane is the coder who made me.", "Zane is an awesome coder."],/*45*/
        ["Of course! What\'s not to like?", "Yes! After all, if it wasn\'t for him I wouldn\'t be here.", "What\'s no to like?", "Absolutely! He\'s the best!", "No doubt about it."]/*46*/
      ];
      var alternative = ["I don\'t think I understand.", "Try saying that a different way.", "I don\'t quite understand", "I\'m having trouble understanding.", "I\'m having trouble understanding you."];
