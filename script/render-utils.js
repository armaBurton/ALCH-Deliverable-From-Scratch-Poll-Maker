export function renderPast(poll){
    const pollDiv = document.createElement(`div`);
    pollDiv.id = `pollDiv`;
    const pastQ = document.createElement(`h3`);
    pastQ.id = `pastQ`;
    pastQ.textContent = poll.query;

    const divAnswers = renderOption(poll.answerA, poll.answerB, poll.voteCountA, poll.voteCountB);

    pollDiv.prepend(pastQ, divAnswers);

    return pollDiv;
}

function renderOption(aa, ab, va, vb){

    const answerContainer = document.createElement(`div`);
    answerContainer.id = `answerContainer`;
    
    const divA = document.createElement(`div`);
    divA.id = `divA`;
    const divB = document.createElement(`div`);
    divB.id = `divB`;
    const AA = document.createElement(`p`);
    AA.id = `AA`;
    const VA = document.createElement(`p`);
    VA.id = `VA`;
    const AB = document.createElement(`p`);
    AB.id = `AB`;
    const VB = document.createElement(`p`);
    VB.id = `VB`;

    AA.textContent = aa;
    VA.textContent = va;
    AB.textContent = ab;
    VB.textContent = vb;    
    
    divA.append(AA, VA);
    divB.append(AB, VB);

    answerContainer.append(divA, divB);
 
    return (answerContainer);

}