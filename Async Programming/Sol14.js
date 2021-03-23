function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`error from server: ${msg}`);
            }
            resolve(`from server: ${msg}`);
        }, 3000);
    });
}

const syncCallsToServer = (msg1, msg2) => {
    return fakeFetch(msg1)
        .then(data => fakeFetch(data + msg2))
}
syncCallsToServer("hello", "Joy")
    .then(data => console.log(data))
