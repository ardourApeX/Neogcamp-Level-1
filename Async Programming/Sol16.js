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

const printDataFromServer = async (msg1, msg2) => {
    const data1 = await fakeFetch(msg1);
    const data2 = await fakeFetch(data1 + msg2)
    console.log(data2);
}

printDataFromServer("Hello", "Joy")