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

const printDataFromServer = async (data) => {
    const serverData = await fakeFetch(data);
    console.log(serverData);
}

printDataFromServer("Joy")