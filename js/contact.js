/*
 * AKSail quote-request form
 *
 * The API Gateway endpoint below invokes the AKSailContact Lambda.
 */
const API_URL = "https://atvucin0ec.execute-api.us-west-2.amazonaws.com/contact";

const form = document.getElementById("quoteForm");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("formStatus");

// Preselect the trip type when the contact page is opened from a charter-specific link.
const tripType = document.getElementById("tripType");
const requestedTrip = new URLSearchParams(window.location.search).get("trip");
const validTripTypes = ["Day Sailing", "Multi-Day Trips", "Custom Adventures"];
if (tripType && validTripTypes.includes(requestedTrip)) {
  tripType.value = requestedTrip;
}

function showStatus(message) {
  status.textContent = message;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showStatus("");

  if (API_URL === "YOUR-API-GATEWAY-URL") {
    showStatus("The contact form is not configured yet. Please check the API address.");
    return;
  }

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    let result = {};
    try {
      result = await response.json();
    } catch (_) {
      // The API may return an empty or non-JSON body on an error.
    }

    if (!response.ok || result.ok !== true) {
      throw new Error(result.error || "The request could not be sent.");
    }

    form.reset();
    showStatus("Thank you. Your request has been sent. We will get back to you soon.");
  } catch (error) {
    console.error("Quote request error:", error);
    showStatus("We could not send your request. Please try again or contact us directly.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Request";
  }
});
