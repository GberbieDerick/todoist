import * as firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig  = firebase.initializeApp({ 
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>'


 });


 export {firebaseConfig as firebase}
I