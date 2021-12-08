export function renderPast(poll){
    const pollDiv = document.createElement(`div`);
    pollDiv.id = `pollDiv`;
    const pastQ = document.createElement(`h3`);
    pastQ.id = `pastQ`;
    const divA = document.createElement(`div`);
    divA.id = `divA`;
    const AA = document.createElement(`p`);
    AA.id = `AA`;
    const VA = document.createElement(`p`);
    VA.id = `VA`;
    const divB = document.createElement(`div`);
    divB.id = `divB`;
    const BA = document.createElement(`p`);
    BA.id = `BA`;
    const VB = document.createElement(`p`);
    VB.id = `VB`;

    pastQ.textContent = poll.query;
    AA.textContent = poll.answerA;
    VA.textContent = poll.voteCountA;
    BA.textContent = poll.answerB;
    VB.textContent = poll.voteCountB;

    divA.append(AA, VA);
    divB.append(BA, VB);

    pollDiv.prepend(pastQ, divA, divB);

    return pollDiv;
}