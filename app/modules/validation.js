const MIN_NUM_OF_PASSWORD_CHARACTERS = 8;

export function inputValidation(repPass, buttonIn) {
    let newPassIn = repPass.value;

    const isCorrectPassword = newPassIn.length >= MIN_NUM_OF_PASSWORD_CHARACTERS

    if (isCorrectPassword) {
        buttonIn.removeAttribute('disabled')
    } else {
        buttonIn.setAttribute('disabled', 'true')
    }
}