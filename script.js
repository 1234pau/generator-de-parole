const input = document.querySelector('#input')
const button = document.querySelector('#buton')

button.addEventListener('click', function() {
    var charset =
        "0123456789ZXCVBNMLKJHGFDSAQWERTYUIOPzxcvbnmlkjhgfdsaqwertyuiop!@#$%&()_~[]\*/=}{|";
    var passwordLength = 10;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomnum = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomnum, randomnum + 1);

    }
    document.getElementById("input").value = password;
})