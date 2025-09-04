importScripts('https://www.gstatic.com/firebasejs/12.2.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/12.2.0/firebase-messaging-compat.js')

firebase.initializeApp({
    apiKey: 'AIzaSyDdXBlA94GA2RamfpFM3dq_ms3I_fnVeTI',
    authDomain: 'jornada-milhas-f8767.firebaseapp.com',
    projectId: 'jornada-milhas-f8767',
    storageBucket: 'jornada-milhas-f8767.firebasestorage.app',
    messagingSenderId: '770233263649',
    appId: '1:770233263649:web:6c2c5574d0fad61d952560',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
    console.log('Notificação em segundo plano', payload)

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
