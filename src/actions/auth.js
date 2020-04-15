import database, { firebase } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const startSignup = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
};

export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    username
});

export const startSetUsername = (username) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}`).set({ username: username }).then(() => {
            dispatch(setUsername(username));
        });
    };
};