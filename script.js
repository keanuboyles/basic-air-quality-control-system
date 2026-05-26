// Replace <your-server-ip> with your Flask server's local IP address (e.g., 192.168.43.X)
const API_URL = "http://10.182.31.147:5000";

async function updateData() {
  try {
    let res = await fetch(API_URL);
    let data = await res.json();
    
    // Update HTML elements using the new JSON keys from the ESP32/Flask payload
    document.getElementById("temp").innerText = (data.temperature !== null ? data.temperature : "--") + " °C";
    document.getElementById("humidity").innerText = (data.humidity !== null ? data.humidity : "--") + " %";
    document.getElementById("dust").innerText = data.dust_value !== null ? data.dust_value : "--";
    
    // Mapping carbon_level and mq7_d0 to your existing 'co2' DOM element
    document.getElementById("co2").innerText = data.carbon_level + " (D0:" + data.mq7_d0 + ")";
    
    // Optional: Log data to console for easy debugging
    console.log("Data updated:", data);
  } catch (e) {
    console.log("Fetch error:", e);
  }
}

// Fetch data from the Flask API every 2 seconds
setInterval(updateData, 2000);
