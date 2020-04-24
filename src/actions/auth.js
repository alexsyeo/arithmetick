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

export const startSignIn = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
};

export const startSignInAnonymous = () => {
    return () => {
        return firebase.auth().signInAnonymously();
    };
};

export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    username
});

export const startSetUsername = (username) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log('UID: ' + uid);
        return database.ref(`users/${uid}`).set({ username: username }).then(() => {
            dispatch(setUsername(username));
        });
    };
};

export const startFetchUsername = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return (database.ref(`users/${uid}/username`)).once('value', (snapshot) => {
            if (snapshot.exists()) {
                dispatch(setUsername(snapshot.val()));
            } else {
                dispatch(setUsername(''));
            }
        });
    }
}

export const startFetchUsers = () => {
    return () => {
        return database.ref('users').once('value');
    };
};

export const startSendPasswordResetEmail = (email) => {
    return () => firebase.auth().sendPasswordResetEmail(email);
};