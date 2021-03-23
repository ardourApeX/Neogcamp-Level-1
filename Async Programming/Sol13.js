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

const doFakeFetch = (msg) => {
    return fakeFetch(msg)
        .then(data => data.length)
}

doFakeFetch("Joy")