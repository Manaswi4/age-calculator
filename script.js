function calculateAge() {
    const name = document.getElementById("nameInput").value;
    const birthyear = new Date(document.getElementById("birthYearInput").value);
    const currentYear = new Date().getFullYear();

    if (!name || !birthyear) {
        document.getElementById("result").innerText = "Please enter both your name and birth year.";
        return;
    }

    const age = currentYear - birthyear.getFullYear();

    let message = `Hello ${name}, you are ${age} years old in ${currentYear}✨.`;

    if (age < 18) {
    message += " You're still a cute little baby 👶";
  } else if (age > 30) {
    message += " You're a wise coding elder 🧙‍♀️";
  } else{
    message += " You're in your prime coding years! 💻";
  }

  document.getElementById("result").textContent = message;

}
