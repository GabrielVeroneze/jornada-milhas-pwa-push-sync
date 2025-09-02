import { Outlet } from 'react-router'
import { useNotification } from '@/hooks/useNotification'
import Header from '@/components/Header'
import NotificationButton from '@/components/NotificationButton'
import Footer from '@/components/Footer'

const Layout = () => {
    const {} = useNotification()

    return (
        <>
            <Header />
            <NotificationButton />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
