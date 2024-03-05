class Password {
    constructor() {
        console.log("Welcome to Password Generator");
        this.pass = "";
    }

    generatePassword(len) {
        let chars = "abcdefghijklmnpqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";

        if (len < 3) {
            console.log("Your password should be at least 3 characters long");
        } else {
            let i = 0;
            let generatedPassword = "";

            while (i < len) {
                generatedPassword += chars[Math.floor(Math.random() * chars.length)];
                generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
                generatedPassword += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }

            // Trim the generated password to the desired length
            this.pass = generatedPassword.substr(0, len);
            return this.pass;
        }
    }
}

let P = new Password();
console.log(P.generatePassword(7));
