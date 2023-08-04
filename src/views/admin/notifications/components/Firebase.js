import firebase from 'firebase/app';
import 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDwwlwnMU-2UAqBoLNp0H2gPjbOZCiQUD0",
    authDomain: "predictfoot-notification.firebaseapp.com",
    projectId: "predictfoot-notification",
    storageBucket: "predictfoot-notification.appspot.com",
    messagingSenderId: "33399110874",
    appId: "1:33399110874:web:90a51bd61b837c9b7739e3",
    measurementId: "G-C99WEWWT63"
  };
  
  firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Fonction pour enregistrer le token FCM côté serveur
const saveTokenOnServer = (token) => {
  // Code pour envoyer le token FCM au serveur
  console.log('Token FCM:', token);
};

// Obtenir le token FCM et l'enregistrer côté serveur
const getAndSaveToken = async () => {
  try {
    const token = await messaging.getToken();
    if (token) {
      saveTokenOnServer(token);
    } else {
      console.log('No registration token available.');
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error);
  }
};

// Demander la permission pour les notifications
const requestNotificationPermission = async () => {
  try {
    await messaging.requestPermission();
    console.log('Notification permission granted.');
    getAndSaveToken(); // Obtenir et enregistrer le token FCM une fois la permission accordée
  } catch (error) {
    console.log('Unable to get permission for notifications.', error);
  }
};

export { messaging, requestNotificationPermission };