function makeSeries({
    _id,
    title,
    connectedMedia = [], //ObjectIds
    estimatedParts = 0,
    addedAt = Date.now(),
    finished = false,
    finishedAt,
}) {
    if (title) {
        throw new Error("Series needs some title");
    }

    return {
        _id,
        title,
        connectedMedia,
        estimatedParts: estimatedParts || "Unknown",
        addedAt,
        finished,
        finishedAt,
    };
}

module.exports = {
    makeSeries
}