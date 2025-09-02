import { useEffect } from 'react'

export const useNotification = () => {
    useEffect(() => {
        requestNotificationPermission()
    }, [])

    const requestNotificationPermission = async () => {
        const permission = await Notification.requestPermission()

        if (permission !== 'granted') {
            alert('Permissão de notificação negada')
        }
    }

    const sendNotification = (title: string, options?: NotificationOptions) => {
        if (Notification.permission === 'granted') {
            new Notification(title, options)
        } else {
            alert('Permissão para notificações não concedida')
        }
    }

    const sendTestNotification = () => {
        const options = {
            body: 'Notificação de teste',
            icon: '/icon-192x192.png',
        }

        sendNotification('Titulo legal', options)
    }

    return {
        sendTestNotification,
    }
}
