// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet  = "";
    let password = "";

    // TODO: Create a variable for the character set based on selected options
    if (options.includeuppercase) characterSet += uppercase;
    if (options.includelowercase) characterSet += lowercase;
    if (options.includenumbers) characterSet += numbers;
    if (options.includespecialChars) characterSet += specialChars;

    if (characterSet === "") {
        characterSet = lowercase;
    }

    // TODO: Generate the password based on the selected criteria
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
const Options = () => {
    return {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked
    };
};

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = document.getElementById("length").value;
    const options = getOptions();
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById("copyBtn").addEventListener("click", () => {
    const passwordText = document.getElementById("passwordOutput").innerText;

    if (!passwordText) {
        alert("No password to copy");
        return;
    }
    navigator.clipboard.writeText(passwordText)
})
