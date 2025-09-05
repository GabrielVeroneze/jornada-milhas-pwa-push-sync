import type { Notification } from '@/types/Notification'
import * as Styled from './styled'

interface ToastDisplayProps {
    notification: Notification
}

const ToastDisplay = ({ notification }: ToastDisplayProps) => {
    return (
        <Styled.Container>
            <Styled.Title>{notification.title}</Styled.Title>
            <Styled.Body>{notification.body}</Styled.Body>
        </Styled.Container>
    )
}

export default ToastDisplay
