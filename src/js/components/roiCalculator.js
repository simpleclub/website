const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-rangeslider@1/rangeslider.js";
script.defer = true;

document.body.appendChild(script);

function calculateROI() {
    // Get number of azubis from the paragraph text and convert it to an integer
    var azubisNumberElement = document.querySelector('#azubis-number');
    var numberOfPeople = azubisNumberElement ? parseInt(azubisNumberElement.textContent.trim(), 10) : 0;

    // Ensure numberOfPeople is a valid number
    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
        numberOfPeople = 0; // Default to 0 if it's not a valid number
    }

    // Calculate the price per person based on the given ranges
    var pricePerPerson = 0;
    if (numberOfPeople >= 1 && numberOfPeople <= 9) {
        pricePerPerson = 20528;
    } else if (numberOfPeople >= 10 && numberOfPeople <= 49) {
        pricePerPerson = 19776;
    } else if (numberOfPeople >= 50 && numberOfPeople <= 499) {
        pricePerPerson = 22132;
    } else if (numberOfPeople >= 500) {
        pricePerPerson = 26431; 
    }

    // Calculate the saving per azubi
    var savingsPerAzubi = 0;
    if (numberOfPeople >= 1 && numberOfPeople <= 9) {
        savingsPerAzubi = 1668;
    } else if (numberOfPeople >= 10 && numberOfPeople <= 49) {
        savingsPerAzubi = 1509;
    } else if (numberOfPeople >= 50 && numberOfPeople <= 499) {
        savingsPerAzubi = 2024;
    } else if (numberOfPeople >= 500) {
        savingsPerAzubi = 1736; 
    }

    // Calculate the total savings
    var totalSavings = numberOfPeople * savingsPerAzubi;

    // Format the total savings with a space as a thousands separator and add € symbol
    var formattedSavings = totalSavings.toLocaleString('de-DE') + " €";

    // Display the formatted total savings
    document.getElementById("total-savings").innerText = formattedSavings;
}

// Initial calculation
calculateROI();

// Observe changes in the paragraph's text content
const azubisNumber = document.getElementById("azubis-number");

if (azubisNumber) {
    const observer = new MutationObserver(() => {
        calculateROI();
    });

    observer.observe(azubisNumber, { childList: true, subtree: true });
}


// prevent form submition when enter key is pressed
const form = document.querySelector(".calculator_slider_value_form"); // Select your form

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission when Enter is pressed
  }
});

