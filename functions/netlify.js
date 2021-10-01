const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
  );

const data = await response.json();