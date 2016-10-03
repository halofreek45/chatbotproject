/*var answerKey = {
    "I want to work at chipotle": question1Answer(),
    "How old are you?": question2Answer()
}*/
var userName = "User";
var questionArray = ["What is your ultimate goal in life?", "How old are you?"]
var answering = false;
var currentQuestionAsked;
var months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}
var days = {
        1: "1st",
        2: "2nd",
        3: "3rd",
        4: "4th",
        5: "5th",
        6: "6th",
        7: "7th",
        8: "8th",
        9: "9th",
        10: "10th",
        11: "11th",
        12: "12th",
        13: "13th",
        14: "14th",
        15: "15th",
        16: "16th",
        17: "17th",
        18: "18th",
        19: "19th",
        20: "20th",
        21: "21st",
        22: "22nd",
        23: "23rd",
        24: "24th",
        25: "25th",
        26: "26th",
        27: "27th",
        28: "28th",
        29: "29th",
        30: "30th",
        31: "31st",
    }
    //To edit the chat box text you use $("#chat-box").text;
    //To get the value of the Input you do $("#input").val9
var date = new Date();
var middleDate = days[date.getDate()];
var middleMonth = months[date.getMonth() + 1];
var finalDate = "Today is the " + middleDate + " of " + middleMonth + " in the year " + date.getFullYear();
var hours = date.getHours();
if (hours > 12) {
    hours -= 12;
}
var time = hours + ":" + date.getMinutes(); //+ ":" + date.getSeconds();
var response = {
    "hello": ["Hi", "Hello", "How Are you"],
    "what is the date today?": [finalDate],
    "what time is it?": [time],
    "how are you on this fine day?": ["Good"],
    "whaz up!?": ["Nothing much. How about you?"],
    "not much. thanks for asking": ["No problem, that is what I am here for!"],
    "what is your name?": ["My name is Jaquelin"]
}
var fallBacks = ["Ne pare rau dar eu nu vorbesc engleza", "No Hablo Espanol", "Sajnálom, de én nem beszélek angolul", "Sorry but I couldnt undestand that", "You are insane....", "What???"];

function randomNumber(x, y) {
    var i = Math.floor(Math.random() * (y - x + 1) + x);
    //console.log(i);
    return i;
}

function askQuestion() {
    currentQuestionAsked = randomNumber(0, 1); //This is determining which question I am asking and the 2 numbers depend on the number of questions in my questionArray I can use this to get my current Question by calling questionArray[currentQuestionAsked];
    answering = true;
    document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: " + questionArray[currentQuestionAsked] + "</div>" + "</br>";
}

function getName() {
    userName = prompt("Please Enter your User Name");
    console.log(userName)
}

function playVoice() {
    var userInput = document.getElementById("input").value.toLowerCase();
    var currentQuestion;
    if (answering) {
        if (currentQuestionAsked == 0) {
            currentQuestion = questionArray[currentQuestionAsked];
        } else if (currentQuestionAsked == 1) {
            //currentQuestion = questionArray[currentQuestionAsked];
            var age = userInput.replace(/\D/g, '');
            if (age > 0 && age < 17) {
                document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: Oh cool." + "</div>" + "</br>";
            } else if (age > 17 && age < 30) {
                document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: Noice you are between 17 and 30!" + "</div>" + "</br>";
            } else if (age > 30 && age < 45) {
                document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: Wow you are past 30. Gratz ^^" + "</div>" + "</br>";
            } else {
                document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: You are too old to be talking to me!" + "</div>" + "</br>";
            }
            answering = false;
        }
    } else {
        document.getElementById("chat-area").innerHTML += "<div class='user'>" + userName + ": " + document.getElementById("input").value + "</div>" + "</br>";
        console.log(userName);
        if (response[userInput] === null || response[userInput] === undefined) {
            var fallBackUsed = fallBacks[randomNumber(0, 4)];
            document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: " + fallBackUsed + "</div>" + "</br>";
            //responsiveVoice.speak(fallBackUsed);
        } else {
            var randomResponse = response[userInput];
            var responseUsed = randomResponse[randomNumber(0, randomResponse.length - 1)];
            document.getElementById("chat-area").innerHTML += "<div class='bot'>" + "Jaquelin: " + responseUsed + "</div>" + "</br>";
            //responsiveVoice.speak(responseUsed);
        }
    }
}
/*
function question1Answer() {
    console.log()
        //return "I want to be a OMPALOMPA";
}

function question2Answer() {
    //var answer = questionArray[currentQuestionAsked]
    console.log("answer");
    //return "I am eleventeen";
}*/
