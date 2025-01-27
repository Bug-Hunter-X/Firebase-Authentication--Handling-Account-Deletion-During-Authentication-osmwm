# Firebase Authentication: Handling Account Deletion During Authentication

This repository demonstrates a bug and its solution related to Firebase Authentication.  The bug occurs when a user's account is deleted or disabled during the authentication process, leading to unexpected errors.  The solution provides a robust approach to handle this scenario and prevent application crashes.

## Bug Description
The Firebase Authentication SDK may not consistently handle situations where a user's account is deleted or disabled midway through authentication. This often results in generic error messages, making debugging difficult.

## Solution
The solution implements additional error handling to explicitly check for account deletion or disabling.  It uses a more robust approach to monitor user status and provide more informative feedback to the user in case of account issues.

## Setup
1.  Clone the repository
2.  Install Firebase:
```bash
npm install firebase
```
3.  Configure your Firebase project and credentials.  Update the `firebaseConfig` object in the code with your project details.
4. Run the respective files.