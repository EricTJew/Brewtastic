const { Amplify, Auth, Hub } = window.aws_amplify;

// Configure Amplify
Amplify.configure({
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_IRAIRTkqw',
        userPoolWebClientId: '1vamenslbrhd9oqiae3ifj881g',
        identityPoolId: 'us-east-1:43d940e6-c5c0-42d5-8b1a-56656546f997',
        mandatorySignIn: false,  // Optional but recommended for public browsing areas
        oauth: {
            domain: 'your-cognito-domain.auth.us-east-1.amazoncognito.com',
            scope: ['email', 'profile', 'openid'],
            redirectSignIn: 'https://yourdomain.com/',
            redirectSignOut: 'https://yourdomain.com/',
            responseType: 'code'
        }
    }
});

// Sign-In Functionality
async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('Sign-in successful:', user);
        alert('Welcome, ' + username + '!');
        document.getElementById('signInButton').style.display = 'none';
        document.getElementById('signOutButton').style.display = 'inline-block';
    } catch (error) {
        console.error('Error signing in:', error);
        alert('Failed to sign in. Please try again.');
    }
}

// Sign-Out Functionality
async function signOut() {
    try {
        await Auth.signOut();
        console.log('Sign-out successful');
        alert('You have signed out.');
        document.getElementById('signInButton').style.display = 'inline-block';
        document.getElementById('signOutButton').style.display = 'none';
    } catch (error) {
        console.error('Error signing out:', error);
        alert('Failed to sign out. Please try again.');
    }
}

// Check if a user is already signed in
async function checkAuthState() {
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log('User is signed in:', user);
        document.getElementById('signInButton').style.display = 'none';
        document.getElementById('signOutButton').style.display = 'inline-block';
    } catch (error) {
        console.log('No user signed in.');
    }
}

// Auth Listener for real-time state updates
Hub.listen('auth', (data) => {
    const { payload } = data;
    if (payload.event === 'signIn') {
        console.log('User signed in');
        checkAuthState();
    } else if (payload.event === 'signOut') {
        console.log('User signed out');
        checkAuthState();
    }
});

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signInButton').addEventListener('click', () => {
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");
        signIn(username, password);
    });

    document.getElementById('signOutButton').addEventListener('click', signOut);

    // Check auth state when the page loads
    checkAuthState();
});
