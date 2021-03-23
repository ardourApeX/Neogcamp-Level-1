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

const asyncCall = async (msg) => {
    try {
        const serverResponse = await fakeFetch(msg, true);
        console.log(serverResponse);
    }
    catch (error) {
        alert(error);//Browser thing
    }
}
asyncCall("Joy")


