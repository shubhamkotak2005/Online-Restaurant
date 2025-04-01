document.getElementById("reservationForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value;
    const num_people = document.getElementById("num_people").value;

    try {
        const response = await fetch('http://127.0.0.1:4000/submit-reservation', {  // Fixed port & endpoint
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, num_people }),
        });

        const data = await response.json();
        
        if (response.ok) {
            alert(data.message);
            document.getElementById("reservationForm").reset(); // Clear form after successful submission
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while saving the reservation.");
    }
});
