// Replace <your-server-ip> with your Flask server's local IP address (e.g., 192.168.43.X)
// IMPORTANT: Use the /latest endpoint to fetch data
const API_URL = "http://10.182.31.147:5000/latest"; 
// Or if deployed online: "https://myflaskapp.onrender.com/latest"

async function updateData() {
  try {
    let res = await fetch(API_URL);
    let data = await res.json();
    
    // Update HTML elements using the JSON keys from Flask payload
    document.getElementById("temp").innerText = 
      (data.temperature !== null ? data.temperature : "--") + " °C";
    document.getElementById("humidity").innerText = 
      (data.humidity !== null ? data.humidity : "--") + " %";
    document.getElementById("dust").innerText = 
      (data.dust_value !== null ? data.dust_value : "--");
    
    // Mapping carbon_level and mq7_d0 to your existing 'co2' DOM element
    document.getElementById("co2").innerText = 
      (data.carbon_level ? data.carbon_level : "--") + " (D0:" + (data.mq7_d0 ? data.mq7_d0 : "--") + ")";
    
    // Optional: Log data to console for debugging
    console.log("Data updated:", data);
  } catch (e) {
    console.log("Fetch error:", e);
  }
}

// Fetch data from the Flask API every 2 seconds
setInterval(updateData, 2000);
