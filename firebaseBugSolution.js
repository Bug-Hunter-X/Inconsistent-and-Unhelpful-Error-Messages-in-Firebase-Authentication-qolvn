//Improved error handling for Firebase Authentication

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Successful sign-in
    const user = userCredential.user;
    console.log("Signed in as:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    //More specific error handling
    if (errorCode === 'auth/invalid-email') {
      alert('Invalid email address.');
    } else if (errorCode === 'auth/wrong-password') {
      alert('Incorrect password.');
    } else if (errorCode === 'auth/network-request-failed') {
      alert('Network error. Please check your internet connection.');
    } else {
      alert('An unexpected error occurred. Please try again later.');
    }
  });

//Additional checks before Firebase request
const isValidEmail = (email) => {
  //Add email validation logic here
};

const isValidPassword = (password) => {
  //Add password validation logic here
};

if (!isValidEmail(email) || !isValidPassword(password)) {
    // Display error message to the user and prevent sending the request to Firebase
}
