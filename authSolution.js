The solution involves adding error handling to specifically catch the `auth/user-disabled` and `auth/user-token-expired` errors (these often indicate account deletion/disabling).  We can then provide a more informative message to the user rather than relying on Firebase's default error handling.

```javascript
// authSolution.js
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig"; // Your Firebase config

const auth = getAuth();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in as:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/user-disabled' || errorCode === 'auth/user-token-expired') {
      console.error("Account disabled or deleted!");
      // Provide a clear message to the user, e.g., redirect to a login page with an explanatory message.
      alert("Your account has been disabled or deleted. Please contact support.");
    } else {
      console.error("Authentication error:", errorMessage);
    }
  });

// Add this for better handling of authentication changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a current user
    console.log("User signed in:", user);
  } else {
    // User is signed out
    console.log("User signed out");
  }
});
```