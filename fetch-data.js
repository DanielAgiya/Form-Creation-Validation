// Step 1: Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 2: Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 3: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 4: Create and populate a list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 5: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 6: Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
