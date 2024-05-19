let readlineSync = require("readline-sync");
let kuler = require("kuler");
score = 0;

/** Creating data set */
const database = {
    data : [
        {
            question: `let a = {}, b = {} console.log(a == b) console.log(a === b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question: "Object.assign(targer, source) creates which type of copy?",
            options: {
              a: "Deep Copy",
              b: "Shallow Copy",
              c: "Nested Copy",
              d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question: "Is method chaining possible with forEach?",
            options: {
              a: "Yes",
              b: "No"
            },
            correctAnswer: "b"
        }
    ]
}

/** Creating Leader Board*/
const leaderBoard = {
    data: [
        {
            name: "Contestant_1",
            score: 1
        },
        {
            name: "Contestant_2",
            score: 3
        },
        {
            name: "Contestant_3",
            score: 2
        }
    ]
}


/** Game Play*/

function playGame(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log(kuler("\n\tCorrect Answer", "#059669"));
        score++;
    } else {
        console.log(kuler("\n\tIncorrect Answer", "#b91c1c"));
        console.log(kuler(`\nCorrect Answer is ${correctAnswer}`, "#3f6212"));
    }
}

function showHighScorer(leaderBoard){
    leaderBoard.data.push({ name: userName, score: score });
    let sortedScoreList = leaderBoard.data.sort((a, b) => {    
        return b.score - a.score === 0 ? (a.name.localeCompare(b.name)) : (b.score - a.score);});
    // console.log(sortedScoreList);
    console.log(kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047"));
    for (let i of sortedScoreList) {
        console.log(kuler(`${i.name} -  Score: ${i.score}`, "#57534e"));
        console.log("\n");
    }
}

let userName = readlineSync.question("What's your name? ");

function showQuestionAndOptions(database){
    console.log("\nEnter your choice of answer (a/b/c/d) after each question\n");
    for (let i=0; i < database.data.length; i++){
        console.log(`\nQ${i+1}: ${database.data[i].question}\n`);
        for (let j in database.data[i].options) {
            console.log(`${j} - ${database.data[i].options[j]}`);
        }
        let userAnswer = readlineSync.question("\nEnter your answer - ").toLowerCase();
        playGame(userAnswer, database.data[i].correctAnswer);
    }
}

showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`, "#8b5cf6"));
showHighScorer(leaderBoard);