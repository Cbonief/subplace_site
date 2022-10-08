async function userSignIn(username, password){
    const user = signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return [user, true, null];
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return [null, false, error];
      });
    return user;
  }