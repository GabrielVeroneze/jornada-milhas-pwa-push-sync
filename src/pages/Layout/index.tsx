import { Outlet } from 'react-router'
import { requestToken } from '@/firebase'
import Header from '@/components/Header'
import NotificationButton from '@/components/NotificationButton'
import Footer from '@/components/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <NotificationButton action={requestToken} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
