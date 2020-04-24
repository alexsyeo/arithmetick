import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDUK8ajtiuDvp1inaqjMUMQkCpkigbBMH4',
    authDomain: 'arithmetick-ad942.firebaseapp.com',
    databaseURL:'https://arithmetick-ad942.firebaseio.com',
    projectId: 'arithmetick-ad942',
    storageBucket: 'arithmetick-ad942.appspot.com',
    messagingSenderId: '1018796504871',
    appId: '1:1018796504871:web:34b55a576b5dae52fbdb02',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };