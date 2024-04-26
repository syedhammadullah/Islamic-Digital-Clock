function updateTime() {
  const now = new Date();
  const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const amPm = now.getHours() >= 12 ? "PM" : "AM";
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById("time").textContent = timeString;
  document.getElementById(
    "date"
  ).textContent = `${day}, ${date} ${month} ${year}`;

  // Prompt for name and display greeting
  const storedName = localStorage.getItem("username");
  if (!storedName) {
    const name = prompt("Please enter your name:");
    if (name) {
      localStorage.setItem("username", name);
      displayGreeting(name);
    }
  } else {
    displayGreeting(storedName);
  }
}

function displayGreeting(name) {
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = `Assalam o Alaikum, ${name}! Did you do your  Dhikr📿 today?`;
  greetingElement.classList.add("show");
}

updateTime();
setInterval(updateTime, 1000);
