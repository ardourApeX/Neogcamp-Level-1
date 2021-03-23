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

fakeFetch("Joy", true)
    .then(data => console.log(data))
    .catch(errorMessage => console.log(errorMessage));