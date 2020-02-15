import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBSEFkkPNjnkf7rtSbmK9RajaYtCTvr120",
        authDomain: "budget2-a5959.firebaseapp.com",
        databaseURL: "https://budget2-a5959.firebaseio.com",
        projectId: "budget2-a5959",
        storageBucket: "budget2-a5959.appspot.com",
        messagingSenderId: "680570443714",
        appId: "1:680570443714:web:6d55dad8419b2a6b69a85b",
        measurementId: "G-VH098XP4XC"
      };
      firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
    
      const snapShot = await userRef.get();
     
      if(!snapShot.exists){
                 const { displayName, email } = userAuth;
                 const createdAt = new Date();
             
             try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
            }catch(error){
                   console.log(error);
          }
         }
          return userRef;
    }
         
    

//     export const addCollecionsandDocuments = async (collectionKey, objectToAdd) => {
//         const collectionRef = firestore.collection(collectionKey);
         
//         const batch = firestore.batch();
//         objectToAdd.forEach(obj => {
//             const newDocRef = collectionRef.doc();
           
//              batch.set(newDocRef, obj);
//         })
//          return await batch.commit();
//     };

//    export const convertCollectionsSnapshotToMap = (collections) => {
//         const transformedCollection = collections.docs.map(doc => {
//             const { discriptions, amounts } = doc.data();

//             return{
//                 routeName: encodeURI(discriptions.toLowerCase()),
//                 id: doc.id,
//                 discriptions,
//                 amounts
//             }
//         });
//     return transformedCollection.reduce((accumulator, collection) => {
//            accumulator[collection.discriptions.toLowerCase()] = collection;
//            return accumulator;
//        }, {})
//      }

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;