const rpsOps = ["rock", "paper", "scissors"]
const rpsls = ["rock", "paper", "schissors", "lizard", "spock"]

export default {
    rpsOps: rpsOps, 
    rpslsOps: rpslsOps,

    rpsDef: function() {
        return (
            {player: rand(rpsOps)}
        )
    },

    rpsFunction: function (playerMove) {
        const oppMove = rand(rpsOps)

        return (
            {
                player: playerMove,
                opp: oppMove,
                res: isWinner(playerMove, oppMove)
            } 
        );
    },

    rpslsDef: function () {
        return ({player: rand(rpslsOps)})
    },

    rpslsFunction: function (playerChoice) {
        const oppsChoice = rand(rpslsOption)
    
    return (
        {
            player: playerMove, 
            opp: oppMove, 
            res: gameLogic(playerMove, oppMove)
        }
    )
    }
}

function rand(a) {
    return a[(Math.random() * a.length) | 0]
}

function isWinner(player, opponent) {
    if (player === "rock") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "win"; 
        if (opponent === "lizzard") return "win"; 
        if (opponent === "spock") return "lose"; 
    }
    if (player === "paper") {
        if (opponent === "rock") return "win"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizzard") return "lose"; 
        if (opponent === "spock") return "win"; 
    }
    if (player === "scissors") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "win"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizzard") return "win"; 
        if (opponent === "spock") return "lose"; 
    }

    if (player === "lizzard") {
        if (opponent === "rock") return "lose"; 
        if (opponent === "paper") return "win"; 
        if (opponent === "scissors") return "lose"; 
        if (opponent === "lizzard") return "lose"; 
        if (opponent === "spock") return "win"; 
    }

    if (player === "spock") {
        if (opponent === "rock") return "win"; 
        if (opponent === "paper") return "lose"; 
        if (opponent === "scissors") return "win"; 
        if (opponent === "lizzard") return "lose"; 
        if (opponent === "spock") return "lose"; 
    }
    return "lose"; 
}