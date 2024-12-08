document.addEventListener('DOMContentLoaded', function () {
    // Dynamically import header and footer
    loadHeader();
    loadFooter();

    // Form submission handling
    const form = document.getElementById('claims-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('/api/claims', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Claim submitted successfully!");
            form.reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Error submitting the form:', error);
            alert("There was an error submitting your claim. Please try again.");
        });
    });
});

// Function to load the header HTML dynamically
function loadHeader() {
    const headerContainer = document.getElementById('header');
    fetch('/views/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Function to load the footer HTML dynamically
function loadFooter() {
    const footerContainer = document.getElementById('footer');
    fetch('/views/footer.html')
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}
