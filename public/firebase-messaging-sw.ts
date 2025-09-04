import { initializeApp } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'

const firebaseConfig = {
    apiKey: 'AIzaSyDdXBlA94GA2RamfpFM3dq_ms3I_fnVeTI',
    authDomain: 'jornada-milhas-f8767.firebaseapp.com',
    projectId: 'jornada-milhas-f8767',
    storageBucket: 'jornada-milhas-f8767.firebasestorage.app',
    messagingSenderId: '770233263649',
    appId: '1:770233263649:web:6c2c5574d0fad61d952560',
}

initializeApp(firebaseConfig)

const messaging = getMessaging()

onBackgroundMessage(messaging, (payload) => {
    console.log('Notificação em segundo plano', payload)

    const notificationTitle = payload.notification?.title || 'Nova notificação'
    const notificationOptions = {
        body: payload.notification?.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
