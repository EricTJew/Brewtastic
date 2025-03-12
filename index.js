import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_IRAIRTkqw',
    userPoolWebClientId: '1vamenslbrhd9oqiae3ifj881g',
    identityPoolId: 'us-east-1:43d940e6-c5c0-42d5-8b1a-56656546f997'
  }
});

// Your app initialization code here
