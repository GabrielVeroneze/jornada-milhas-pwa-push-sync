import { useEffect } from 'react'

export const useNotification = () => {
    const requestNotificationPermission = async () => {
        const permission = await Notification.requestPermission()

        if (permission !== 'granted') {
            alert('Permissão de notificação negada')
        }
    }

    useEffect(() => {
        requestNotificationPermission()
    }, [])

    return {}
}
