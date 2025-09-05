import { Outlet } from 'react-router'
import { requestToken } from '@/firebase'
import { useFirebaseNotification } from '@/hooks/useFirebaseNotification'
import Header from '@/components/Header'
import NotificationButton from '@/components/NotificationButton'
import Footer from '@/components/Footer'

const Layout = () => {
    const {} = useFirebaseNotification()

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
