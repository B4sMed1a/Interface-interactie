// JavaScript Document
// In dit hele document zet ik in de comments in het kort neer wat de code doet.
// Met sterren geef ik aan hoe goed ik de code begrijp, 1★ betekent bijna niet, 5★ betekent helemaal.
console.log("Itsumi Mario!");












// Lichtknop en donkere overlay
// bron: ik.
// Hoe goed begrijp ik dit stuk code?
// ★★★★


const lightButton = document.getElementById("myButton");
const bodyBackground = document.querySelector("body");
const donker = document.getElementById("nietDonkerSwa");


lightButton.addEventListener("click", function() {
    console.log("check")
    lightButton.classList.toggle("lichtUit");
    donker.classList.toggle("donkerSwa");

});


donker.addEventListener("click", function() {
    console.log("check2")
    donker.classList.toggle("donkerSwa");
    lightButton.classList.toggle("lichtUit");
});

//============================================================

    //ster regenboog overlay

    var sterKnop = document.querySelector("button:nth-of-type(4)");


    sterKnop.addEventListener("click", function() {
        console.log("checkster")
        donker.classList.toggle("ster");
    });









// Image wisselen van de televisie
// Via ChatGPT
// ★★★


var tvAan = document.querySelector("img:first-of-type");
var tvButton = document.querySelector("button:nth-of-type(1)");
var nescontroller = document.querySelector("section:first-of-type")

let isTVOn = false;

tvButton.addEventListener("click", function() {
    isTVOn = !isTVOn; // Toggle the state

    if (isTVOn) {
        console.log("TV is now on");
        tvAan.src = "./images/tvuniton.png";
    } else {
        console.log("TV is now off");
        tvAan.src = "./images/tvunitoff.png";
    }
});    




    
//=====================================================================















// Arrays met titels en tekst die op poster staat
// ★★★★★

var infoHead = document.querySelector("h1");
var infoText = document.querySelector("p");

var kopjes = [
    "Donkey Kong",
    "Mario bros Arcade",
    "Super Mario Bros",
    "Super Mario Bros 2",
    "Super Mario Bros 3",
    "Dr Mario"
];

var tekstjes = [
    "Donkey kong is the original Nintendo arcade, where 'Mario' has to clib a dangerous construction site to save the princess. Mario is really Mario yet, at release of the game the character was named 'jumpman', and the princess was named 'daisy' instead of 'Peach'.",
    "The first game where Mario was actualy Mario. The artstyle resembles the style of the first mario bros game, and Luigi was introduced. The enemies don't match the known enemies yet. Mario and Luigi fight against turtles in this fun little arcade game.",
    "The original Mario Bros. game, released in 1985, is the classic platformer, where the Players control Mario through pipes, defeating enemies, and rescuing Princess Peach from the villainous Bowser. It introduced iconic characters and gameplay elements that defined the franchise.",
    "Even though this sequal is visually pleasing, gameplay-wise it's quite lacking. Where the original sequal, only released in Japan was a difficult platformer, the Mario bros 2 that we know in the west is a lot easier, so the casual and younger players can easily enjoy it.", 
    // Bron van info over mario 2        https://www.ign.com/articles/2007/07/05/super-mario-bros-2-review
    "Super Mario Bros. 3 (1988) introduced groundbreaking features, such as the world map, diverse power-ups (e.g., Super Leaf and Frog Suit), innovative level design, and the ability to play as Mario or Luigi, providing a more expansive and dynamic gaming experience.",
    "'Dr. Mario'(1990) for the NES is a puzzle game featuring Mario as a doctor. Players must match colored pills with viruses to clear the screen. It offers addictive, skill-based gameplay and a memorable soundtrack."
];


// Knoppen naar links en rechts, met functions die de class 'upper' toevoegt aan de image, afhankelijk van bij welke image je bent.
// Bron: collab; Bas, Quinten en ChatGPT
// ★★

var links = document.querySelector("#links");
var rechts = document.querySelector("#rechts");

var elements = [
    document.querySelector("#jumpman"),
    document.querySelector("#marioarcade"),
    document.querySelector("#mario1"),
    document.querySelector("#mario2"),
    document.querySelector("#mario3"),
    document.querySelector("#drmario")
];
var currentIndex = 0;

function removeAll() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('upper');
    }
}

function toggleNextElement() {
    removeAll();
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].classList.add('upper');
    updateInfo();
    // document.querySelector("linktv").src = "./images/tvuniton.png"
}

function togglePreviousElement() {
    removeAll();
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;
    elements[currentIndex].classList.add('upper');
    updateInfo();
}

function updateInfo() {
    infoHead.textContent = kopjes[currentIndex];
    infoText.textContent = tekstjes[currentIndex];
}

rechts.addEventListener('click', toggleNextElement);
links.addEventListener('click', togglePreviousElement);

// Initially, set the 'upper' class on the first element (#jumpman) and update the info accordingly.
elements[currentIndex].classList.add('upper');
updateInfo();

// ==================================================================================================





// Audio van easter eggs
// Bron: https://www.myinstants.com/en/search/?name=mario
// ★★★★

// audio voor muntje

var muntAudio = new Audio("./sounds/coin.mp3");
var muntKnop = document.querySelector("button:nth-of-type(3)");

function muntGeluid() {
    console.log("test geluid");
    muntAudio.play()

}

muntKnop.addEventListener("click", muntGeluid);



// Audio voor ster.

// var sterKnop = document.querySelector("button:nth-of-type(5)");
var sterAudio = new Audio("./sounds/ster.mp3");

function sterGeluid() {
    console.log("test geluid");
    if (sterAudio.paused) {
        sterAudio.play();
    }
    else {
        sterAudio.pause();
    }
}

sterKnop.addEventListener("click", sterGeluid);


