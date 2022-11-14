function makeProject({
    _id,
    roughIdeaConcept = "",
    title = "",
    estimatedWorkTime = 0,
    github = false,
    deployed = false,
    working = false,
    trelloBoard = "",
    finishPercentage = 0,
    finished = false,
    finishPoints = 0,
    finishedAt,
    url = [] || "",
    addedAt = Date.now(),
    finishedAt
}) {
    return {
        _id,
        picture,
        roughIdeaConcept,
        title,
        estimatedWorkTime,
        github,
        deployed,
        working,
        trelloBoard,
        finishPercentage,
        finished,
        finishPoints,
        finishedAt,
        url,
        addedAt,
        finishedAt
    }
}

module.exports = {
    makeProject
}