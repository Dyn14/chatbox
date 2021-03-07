import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlqu1-1-cnZUvyM1xqUOZAP_6yAFThw9k",
    authDomain: "chatbox-dn.firebaseapp.com",
    databaseURL: "https://chatbox-dn-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base