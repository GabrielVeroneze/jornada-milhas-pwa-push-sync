import { useState } from 'react'
import * as Styled from './styled'

interface NotificationButtonProps {
    action: () => void
}

const NotificationButton = ({ action }: NotificationButtonProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <Styled.ButtonWrapper>
            <Styled.Button
                onClick={action}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                $expanded={expanded}
            >
                {expanded ? (
                    <Styled.Message $expanded={expanded}>
                        Receber Notificação
                    </Styled.Message>
                ) : (
                    <Styled.Interrogation>?</Styled.Interrogation>
                )}
            </Styled.Button>
        </Styled.ButtonWrapper>
    )
}

export default NotificationButton
