import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from '@/styles/global'
import AppRoutes from '@/routes'
import StyledToastContainer from '@/components/StyledToastContainer'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle />
        <AppRoutes />
        <StyledToastContainer />
    </StrictMode>
)
