 // script.js
function sendWish() {
    var name = document.getElementById("userName").value.trim().toLowerCase();  // Get input name and make it case insensitive
    var messageElement = document.getElementById("message");

    if (name === "") {
        messageElement.textContent = "Please enter your name! 🙏";
    } else if (name === "sakshi" || name === "anuja") {
        messageElement.textContent = "Happy New Year, Didi! 🎉 This New Year, I wish your dreams come true and all your efforts finally give you the results you deserve. from your younger brother Arnav!(SUMMONER),  🎊";
    } else if (name === "yatharth" || name === "Sahil" || name === "Ansh ") {
        messageElement.textContent = "Happy New Year, Bhaiya! 🎉 ,Here's to a new year filled with fresh starts, new adventures, and memories to treasure forever. Wishing you a happy, prosperous 2025! once Again Happy new year bhaiya from Arnav ( SUMMONER) ! 🎊";
    } else if (name === "anvesha" || name === "Shreyansh") {
        messageElement.textContent = "Happy New Year, Dear friend! 🎉 , Here's to another year of endless love, joy, and adventures with you. Happy New Year, Wishing you a wonderful year ahead, from Arnav! 🎊";
    }else if (name === "kanishka") {
        messageElement.textContent = "To my little sister, Kanishka, may the New Year bless you with endless smiles, laughter, and wonderful memories. 💖🎉 Wishing you a fantastic year ahead!, Happy new year ahead , from your brother Arnav(SUMMONER)";
    }
     else {
        messageElement.textContent = "Happy New Year, " + name.charAt(0).toUpperCase() + name.slice(1) + "! 🎉 Wishing you a fantastic year ahead, from Arnav! 🎊";
    }
}
