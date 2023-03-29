import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from  'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyATzooOdDQqLixMlSwEv3-iNZ5FCJlB5U4",
    authDomain: "ntphong-porfolio.firebaseapp.com",
    projectId: "ntphong-porfolio",
    storageBucket: "ntphong-porfolio.appspot.com",
    messagingSenderId: "64954641112",
    appId: "1:64954641112:web:8478d67dfb12284addc5ad",
    measurementId: "G-373GDLLYNR"
});

const auth = getAuth(firebaseApp);

//detect auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!');
    }else{
        console.log('no user');
    }
})
