const ESP32_IP = "http://192.168.43.120"; // replace with your ESP32 IP

async function updateData() {
  try {
    let res = await fetch(ESP32_IP);
    let data = await res.json();
    document.getElementById("temp").innerText = data.temp + " °C";
    document.getElementById("humidity").innerText = data.humidity + " %";
    document.getElementById("dust").innerText = data.mq7_raw;
    document.getElementById("co2").innerText = data.mq7_status + " (D0:" + data.mq7_d0 + ")";
  } catch (e) {
    console.log("Fetch error:", e);
  }
}
setInterval(updateData, 2000); // update every 2s
