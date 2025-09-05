import { useState } from 'react'
import { toast } from 'react-toastify'
import type { Notification } from '@/types/Notification'
import ToastDisplay from '@/components/ToastDisplay'

export const useFirebaseNotification = () => {
    const [notification, setNotification] = useState<Notification>({
        title: '',
        body: '',
    })

    const notify = () => toast(<ToastDisplay notification={notification} />)

    return {}
}
