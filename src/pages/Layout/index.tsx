import { Outlet } from 'react-router'
import { useNotification } from '@/hooks/useNotification'
import Header from '@/components/Header'
import NotificationButton from '@/components/NotificationButton'
import Footer from '@/components/Footer'

const Layout = () => {
    const { sendTestNotification } = useNotification()

    return (
        <>
            <Header />
            <NotificationButton action={sendTestNotification} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
