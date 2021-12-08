// import functions and grab DOM elements
import { renderPast } from "./render-utils.js";
//grab incremental buttons
const upAButton = document.querySelector(`#up-a`);
const downAButton = document.querySelector(`#down-a`);
const upBButton = document.querySelector(`#up-b`);
const downBButton = document.querySelector(`#down-b`);

const formQuery = document.querySelector(`#query`);
const formAnswerA = document.querySelector(`#r-a`);
const formAnswerB = document.querySelector(`#r-b`);

//grab form
const form = document.querySelector(`form`);

//grab close poll button
const closePollButton = document.querySelector(`#close-poll`);

//grab current poll elements
const currentQuery = document.querySelector(`#current-query`);
const currentResponseA = document.querySelector(`#cq-a`);
const currentResponseB = document.querySelector(`#cq-b`);
const countA = document.querySelector(`#count-a`);
const countB = document.querySelector(`#count-b`);

//grab past polls section
const pastPolls = document.querySelector(`.past-polls`);

// let state
let query = '';
let voteCountA = 0,
    voteCountB = 0,
    answerA = '',
    answerB = '';

//past polls array
const pastPollsArr = [];

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

upAButton.addEventListener(`click`, () => {
    voteCountA++;
    countA.textContent = voteCountA;
});

downAButton.addEventListener(`click`, () => {
    voteCountA--;
    countA.textContent = voteCountA;
});

upBButton.addEventListener(`click`, () => {
    voteCountB++;
    countB.textContent = voteCountB;
});

downBButton.addEventListener(`click`, () => {
    voteCountB--;
    countB.textContent = voteCountB;
});


//form eventListener
form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const data = new FormData(form);

    query = data.get(`query`);
    answerA = data.get(`response-a`);
    answerB = data.get(`response-b`);

    displayCurrentPoll();
    // resetPoll();

    // data.set(`response-a`, '');
    resetForm();
});

closePollButton.addEventListener(`click`, () => {
    const pastPoll = storePoll();
    pastPollsArr.push(pastPoll);


    resetPoll();
    displayCurrentPoll();

    displayPastPoll();
});

function displayCurrentPoll(){
    currentQuery.textContent = query;
    currentResponseA.textContent = answerA;
    currentResponseB.textContent = answerB;
    countA.textContent = voteCountA;
    countB.textContent = voteCountB;
}

function storePoll(){
    return {
        query,
        answerA,
        answerB,
        voteCountA,
        voteCountB
    };
}

function resetPoll(){
    query = 'No current poll';
    voteCountA = 0;
    voteCountB = 0;
    answerA = '';
    answerB = '';
}

function displayPastPoll(){
    pastPolls.textContent = '';

    for (let poll of pastPollsArr){
        const holder = renderPast(poll);
        pastPolls.append(holder);
    }
}

function resetForm(){
    document.querySelector(`form`).reset();

}