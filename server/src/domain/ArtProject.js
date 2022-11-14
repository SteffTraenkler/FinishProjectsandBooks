function makeArtProject({
    _id,
    roughIdeaConcept = "",
    wIP = false,
    title = "",
    fanart = false,
    estimatedWorkTime = 0,
    postedOn = [],
    linksToPlatforms = [],
    finished = false,
    finishPoints = 0,
    finishedAt,
    url = [] || "",
    addedAt = Date.now(),
    lastChange = Date.now()
}) {
    return {
        _id,
        picture,
        roughIdeaConcept,
        wIP,
        title,
        fanart,
        estimatedWorkTime,
        postedOn,
        linksToPlatforms,
        finished,
        finishPoints,
        finishedAt,
        url,
        addedAt,
        lastChange
    }
}

module.exports = {
    makeArtProject
}