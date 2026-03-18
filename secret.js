function validate() {
        const passwordInput = document.querySelector('input[name="password"]');
        const password = passwordInput.value;

        const validPassword = "Deadpool";

        if (password == validPassword) {

            console.log("Credentials are correct! Attempting redirect.");
            window.location.href = 'nmbr.html';
            return false;
        } else {
            alert("Hint : From The MCU/ indice: mn le monde ta3 Marvel");
            alert("if you're sure about your answer just capitalize the first letter /ida rak sur marakch ghalet mala aktb l7erf lwl majiscule");
            return false;
        }
}
