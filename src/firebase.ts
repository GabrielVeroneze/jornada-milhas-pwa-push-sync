// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDdXBlA94GA2RamfpFM3dq_ms3I_fnVeTI',
    authDomain: 'jornada-milhas-f8767.firebaseapp.com',
    projectId: 'jornada-milhas-f8767',
    storageBucket: 'jornada-milhas-f8767.firebasestorage.app',
    messagingSenderId: '770233263649',
    appId: '1:770233263649:web:6c2c5574d0fad61d952560',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const messaging = getMessaging()

export const requestToken = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: 'BInD5QnjCDKGnCA24QF1ZdmkRkqgV_UEoS6KeHSRQL5_v1CcRj6kgIG8hny0-bbmvgoQvLMOHPtxLSgfcyvMhxc',
        })

        if (currentToken) {
            console.log(currentToken)
        } else {
            console.log('Nenhum token recebido')
        }
    } catch (error) {
        console.log(error)
    }
}

export const onMessageListener = () =>
    new Promise(resolve => {
        onMessage(messaging, (payload) => {
            console.log('Notificação em primeiro plano', payload)

            const notificationTitle = payload.notification?.title
            const notificationOptions = {
                body: payload.notification?.body,
            }

            new Notification(notificationTitle, notificationOptions)

            resolve(payload)
        })
    })
