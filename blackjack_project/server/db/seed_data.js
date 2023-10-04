use blackjack_users;
db.dropDatabase();

db.users.insertMany(
    
    [{
        "name" : "Danny",
        "Result" : "Win"
    },
    {
        "name" : "Danny",
        "Result" : "Lose"
    },
    {
        "name" : "Danny",
        "Result" : "Draw"
    },
    {
        "name" : "Alan",
        "Result" : "Win"
    },
    {
        "name" : "Dave",
        "Result" : "Win"
    },
    {
        "name" : "Danny",
        "Result" : "Win"
    },
    {
        "name" : "Dave",
        "Result" : "Draw"
    }, 
    {
        "name" : "Alan",
        "Result" : "Win"
    },
    {
        "name" : "Alan",
        "Result" : "Lose"
    }   
])