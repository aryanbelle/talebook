import { auth, provider, signInWithPopup, signOut } from './firebase';

export const handleSignIn = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            alert('Welcome ' + result.user.displayName);
        })
        .catch((error) => {
            console.log('Error during sign-in: ', error);
        });
};

export const handleSignOut = () => {
    return signOut(auth)
        .then(() => null)
        .catch((error) => {
            console.error('Error during sign-out: ', error);
            throw error;
        });
};
