// Define the URL of the API endpoint
const apiUrl = 'https://reqres.in/api/users';

// Make a GET request to fetch user data
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(users => {
    // Do something with the user data
    console.log(users);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
