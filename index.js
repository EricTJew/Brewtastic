import { Amplify, Auth } from 'aws-amplify';

// Configure Amplify
Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_IRAIRTkqw',
    userPoolWebClientId: '1vamenslbrhd9oqiae3ifj881g',
    identityPoolId: 'us-east-1:43d940e6-c5c0-42d5-8b1a-56656546f997'
  }
});

// Basic function to check if a user is signed in
async function checkUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('User is signed in:', user);
  } catch (error) {
    console.log('No user signed in');
  }
}

// Call the function when the page loads
window.onload = checkUser;

// Your other app code can go here
