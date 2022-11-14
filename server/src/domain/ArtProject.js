function makeArtProject({
    _id,
    roughIdeaConcept = "",
    title = "",
    fanart = false,
    estimatedWorkTime = 0,
    postedOn = [],
    finished = false,
    finishPoints = 0,
    finishedAt,
    url = [] || "",
    addedAt = Date.now(),
}) {
    return {
        _id,
        picture,
        roughIdeaConcept,
        title,
        fanart,
        estimatedWorkTime,
        postedOn,
        finished,
        finishPoints,
        finishedAt,
        url,
        addedAt,
    }
}

module.exports = {
    makeArtProject
}