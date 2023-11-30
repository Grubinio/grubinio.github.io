const options = ["Stein", "Schere", "Papier"]
let oponentSelection = options[Math.floor(Math.random() * 3)];
let playerSelection = document.getElementById("wurf").value;
console.log(playerSelection);

document.getElementById("myBtton").addEventListener("click", myFunction);

function myFunction() {
    playerSelection = document.getElementById("wurf").value;
 document.getElementById("output").innerHTML = spiel(playerSelection, oponentSelection);
  }




function spiel(playerSelection, oponentSelection){
    if (playerSelection === oponentSelection){
        return "Ihr habt beide " + playerSelection + " gewählt. Noch mal!";
    }
    else{
        return "Deine Auswahl: " + playerSelection + ". Dein Gegner: " + oponentSelection +  ". " + spielEntscheidung(playerSelection, oponentSelection);

    }
}

function spielEntscheidung(playerSelection, oponentSelection){
  
    if (playerSelection === "Stein"){
        if (oponentSelection === "Schere"){
            return "Du gewinnst!"
        }
        if (oponentSelection === "Papier"){
            return "Du verlierst!"
        }
    }
    if (playerSelection === "Schere"){
        if (oponentSelection === "Papier"){
            return "Du gewinnst!"
        }
        if (oponentSelection === "Stein"){
            return "Du verlierst!"
        }
    }
    if (playerSelection === "Papier"){
        if (oponentSelection === "Stein"){
            return "Du gewinnst!"
        }
        if (oponentSelection === "Schere"){
            return "Du verlierst!"
        }
    }
}

