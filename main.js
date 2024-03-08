// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuotel = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuotel.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuotel.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuotel.innerHTML = "Fear the bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuotel.innerHTML = "Or even see his shoes.";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "boss wolf") {
    charNameEl.innerHTML = "Boss wolf";
    charQuotel.innerHTML = "Chew on that, tubby!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuotel.innerHTML = "Wings of Justice- KA-KAW";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuotel.innerHTML =
      "And then you will be stopped --... by the unstoppable weapon!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuotel.innerHTML = "Hahahaha, Kai is COMING!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    charNameEl.innerHTML = "Mr Ping";
    charQuotel.innerHTML = " ... Noodles.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuotel.innerHTML = "Remember the path.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "No, you shall see, old goat..";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuotel.innerHTML = "Inner peace..";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuotel.innerHTML = "Now?... The most important time is now.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charNameEl.innerHTML = "Storming ox ";
    charQuotel.innerHTML = "It's time to surrender, panda. Kung-Fu is dead!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai lung";
    charQuotel.innerHTML = "The scroll has given him power! NOOO!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuotel.innerHTML = "Oh. Oh my gosh! I'm a snake!";
    document.getElementById("char-img").src = "img/viper.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuotel.innerHTML = "---------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
