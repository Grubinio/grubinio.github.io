const options = ["Stein 🪨", "Schere ✂️", "Papier 🧻"]
let playerSelection = document.getElementById("wurf").value;

document.getElementById("myBtton").addEventListener("click", startPlay);

function startPlay() {
    document.getElementById("output").style.background = "#E1DFD0";
    let oponentSelection = options[Math.floor(Math.random() * 3)];
    playerSelection = document.getElementById("wurf").value;
 document.getElementById("output").innerHTML = "Output: <rb>" + spiel(playerSelection, oponentSelection);
}

function spiel(playerSelection, oponentSelection){
    if (playerSelection === oponentSelection){
        return "<br>Ihr habt beide " + playerSelection + " gewählt <br>Noch mal!";
    }
    else{
        return "<br>Deine Auswahl: " + playerSelection + "<br>Dein Gegner: " + oponentSelection +  "<br>" + spielEntscheidung(playerSelection, oponentSelection);
    }
}

function spielEntscheidung(playerSelection, oponentSelection){
  
    if (playerSelection === options[0]){
        if (oponentSelection === options[1]){
            document.getElementById("output").style.background = "#D2F9F0";
            return "Du gewinnst!"
        }
        if (oponentSelection === options[2]){
            document.getElementById("output").style.background = "#F9D2DB";
            return "Du verlierst!"
        }
    }
    if (playerSelection === options[1]){
        if (oponentSelection === options[2]){
            document.getElementById("output").style.background = "#D2F9F0";
            return "Du gewinnst!"
        }
        if (oponentSelection === options[0]){
            document.getElementById("output").style.background = "#F9D2DB";
            return "Du verlierst!"
        }
    }
    if (playerSelection === options[2]){
        if (oponentSelection === options[0]){
            document.getElementById("output").style.background = "#D2F9F0";
            return "Du gewinnst!"
        }
        if (oponentSelection === options[1]){
            document.getElementById("output").style.background = "#F9D2DB";
            return "Du verlierst!"
        }
    }
}

