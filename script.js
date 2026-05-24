async function updateData() {
  let res = await fetch("http://esp32.local/data"); // replace with ESP32 IP
  let data = await res.json();
  document.getElementById("temp").innerText = data.temp + " °C";
  document.getElementById("humidity").innerText = data.humidity + " %";
  document.getElementById("co2").innerText = data.co2;
}
setInterval(updateData, 5000);

function toggleVent() { fetch("http://esp32.local/vent?state=on"); }
function toggleHumid() { fetch("http://esp32.local/humid?state=on"); }
