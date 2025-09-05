import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { onMessageListener } from '@/firebase'
import type { MessagePayload } from 'firebase/messaging'
import type { Notification } from '@/types/Notification'
import ToastDisplay from '@/components/ToastDisplay'

export const useFirebaseNotification = () => {
    const [notification, setNotification] = useState<Notification>({
        title: '',
        body: '',
    })

    useEffect(() => {
        const notify = () =>
            toast(<ToastDisplay notification={notification} />, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
            })

        if (notification.title) {
            notify()
        }
    }, [notification])

    useEffect(() => {
        const handleMessage = (payload: MessagePayload) => {
            setNotification({
                title: payload.notification?.title,
                body: payload.notification?.body,
            })
        }

        onMessageListener()
            .then(handleMessage)
            .catch(error => console.log(error))
    }, [])

    return {}
}
