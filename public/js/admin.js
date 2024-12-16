// Fetch the claims data from the backend API
fetch('/api/claims')
    .then(response => response.json())  // Convert the response to JSON
    .then(data => {
        // Find the <tbody> element in the table to insert the rows
        const tableBody = document.querySelector('#claims-table tbody');
        
        // Loop through the data (claims) and create rows for the table
        tableBody.innerHTML = data.map(claim => `
            <tr>
                <td>${claim.name}</td>
                <td>${claim.nic}</td>
                <td>${claim.telephone}</td>
                <td>${claim.email}</td>
                <td>${claim.age}</td>
                <td>${claim.package}</td>
                <td>${claim.non_communicable_diseases}</td>
                <td>${claim.additional_info}</td>
                <!-- Add a delete button in each row -->
                <td><button onclick="deleteClaim('${claim._id}')">Delete</button></td>
            </tr>
        `).join(''); // Join the array of rows into a single string
    });

// Function to handle the deletion of a claim
function deleteClaim(id) {
    // Send a DELETE request to the backend API to remove the claim
    fetch(`/api/claims/${id}`, { method: 'DELETE' })
        .then(() => location.reload());  // Reload the page to update the table
}
