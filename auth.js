import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'your-region',
    userPoolId: 'your-user-pool-id',
    userPoolWebClientId: 'your-app-client-id',
  },
});