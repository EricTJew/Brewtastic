import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_IRAIRTkqw',
    userPoolWebClientId: '1vamenslbrhd9oqiae3ifj881g',
  },
});
