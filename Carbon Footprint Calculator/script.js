function calculateFootprint() {
    // Get input values
    var electricity = parseFloat(document.getElementById("electricity").value);
    var gas = parseFloat(document.getElementById("gas").value);
    var waste = parseFloat(document.getElementById("waste").value);
    var household = parseFloat(document.getElementById("household").value);
    var water = parseFloat(document.getElementById("water").value);

    // Simple calculation (you can customize this based on your specific formula)
    var totalFootprint = electricity * 0.4 + gas * 0.2 + waste * 0.1 + household * 0.1 + water * 0.2;

    // Display the result
    document.getElementById("result").innerHTML = "<p>Your estimated carbon footprint is: " + totalFootprint.toFixed(2) + " CO2e</p>";
}
