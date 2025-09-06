import type { ButtonHTMLAttributes } from 'react'
import * as Styled from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variante?: 'primario' | 'secundario'
}

const Button = ({ children, variante = 'primario', ...props }: ButtonProps) => {
    return (
        <Styled.Button $variant={variante} {...props}>
            {children}
        </Styled.Button>
    )
}

export default Button
