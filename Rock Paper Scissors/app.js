let UserScore = 0;
let CompScore = 0;

const Choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const US = document.querySelector("#User-Score");
const CS = document.querySelector("#Computer-Score");

const ComputerGame = (computerchoice) =>{
    const options = ["Rock","Paper","Scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const DrawGame = () => {
    console.log("The Game is Draw..!");
}

const WinningGame = () => {
    console.log("Winner...!");
}
const PlayGame = (userchoice) =>{
    console.log("User Choice = ", userchoice);
    const CompChoice = ComputerGame();
    console.log("Computer Choice = ",CompChoice)

    if(CompChoice === userchoice)
    {
        console.log(DrawGame());
        msg.innerText="Draw..! Play Again.";
        msg.style.backgroundColor = "yellow";
    }
    else
    {
        let UserWin = true;
        if(userchoice === "Rock")
        {
            UserWin = CompChoice === "Paper" ? false : true;
        }
        else if(userchoice === "Paper")
        {
            UserWin = CompChoice === "Scissor" ? false : true;
        }
        else
        {
            UserWin = CompChoice === "Rock" ? false : true;
        }
        ShowWinner(UserWin, userchoice, CompChoice);
    }
}

const ShowWinner = (UserWin, userchoice, CompChoice) => {
    if (UserWin)
    {
        UserScore++;
        US.innerText = UserScore;
        console.log("You Win");
        msg.innerText = `You Win...! Your ${userchoice} beats Computer's ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        CompScore++;
        CS.innerText = CompScore;
        console.log("You Lose");
        msg.innerText = `You Lose...! Your ${CompChoice} beats Computer's ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
};

Choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        let userchoice = choice.getAttribute("id");
        console.log("Choice was Clicked" ,userchoice);
    PlayGame(userchoice);
    })
});