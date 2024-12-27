import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWIthEmailAndPassword = async  (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result;
}


export const doSignOut = () => {
    return auth.signOut();
}

// to do


// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser,{
//         url: `${window.location.origin}/home`
        
//     });
// }