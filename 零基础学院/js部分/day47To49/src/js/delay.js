function delay(s) {
    return new Promise(function (resolve) {
        setTimeout(resolve, s);
    })
}

export {delay}